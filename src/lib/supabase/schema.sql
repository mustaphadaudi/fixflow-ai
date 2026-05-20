create extension if not exists "pgcrypto";

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  business_name text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.properties (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references public.profiles(id) on delete cascade,
  property_name text not null,
  address_line_1 text not null,
  address_line_2 text,
  city text not null,
  postcode text not null,
  property_type text not null,
  tenant_name text,
  tenant_contact text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.maintenance_issues (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references public.profiles(id) on delete cascade,
  property_id uuid not null references public.properties(id) on delete cascade,
  title text not null,
  description text not null,
  category text not null default 'General',
  status text not null default 'New',
  priority text not null default 'Medium',
  ai_summary text,
  recommended_next_action text,
  tenant_response_draft text,
  contractor_brief_draft text,
  safety_note text,
  ai_used boolean not null default false,
  completed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  constraint maintenance_issues_category_check
    check (category in (
      'Plumbing / Leak',
      'Electrical',
      'Heating / Boiler',
      'Damp / Mould',
      'Appliance',
      'Structural',
      'Doors / Windows / Locks',
      'Pest Control',
      'General'
    )),

  constraint maintenance_issues_status_check
    check (status in ('New', 'In Progress', 'Completed')),

  constraint maintenance_issues_priority_check
    check (priority in ('Low', 'Medium', 'High', 'Urgent'))
);

create table if not exists public.issue_notes (
  id uuid primary key default gen_random_uuid(),
  issue_id uuid not null references public.maintenance_issues(id) on delete cascade,
  user_id uuid not null default auth.uid() references public.profiles(id) on delete cascade,
  note text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.issue_photos (
  id uuid primary key default gen_random_uuid(),
  issue_id uuid not null references public.maintenance_issues(id) on delete cascade,
  user_id uuid not null default auth.uid() references public.profiles(id) on delete cascade,
  file_path text not null,
  file_name text not null,
  created_at timestamptz not null default now()
);

drop trigger if exists set_profiles_updated_at on public.profiles;
create trigger set_profiles_updated_at
before update on public.profiles
for each row
execute function public.set_updated_at();

drop trigger if exists set_properties_updated_at on public.properties;
create trigger set_properties_updated_at
before update on public.properties
for each row
execute function public.set_updated_at();

drop trigger if exists set_maintenance_issues_updated_at on public.maintenance_issues;
create trigger set_maintenance_issues_updated_at
before update on public.maintenance_issues
for each row
execute function public.set_updated_at();

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, business_name)
  values (
    new.id,
    new.raw_user_meta_data ->> 'full_name',
    new.raw_user_meta_data ->> 'business_name'
  )
  on conflict (id) do nothing;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row
execute function public.handle_new_user();

alter table public.profiles enable row level security;
alter table public.properties enable row level security;
alter table public.maintenance_issues enable row level security;
alter table public.issue_notes enable row level security;
alter table public.issue_photos enable row level security;

drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own"
on public.profiles
for select
using (auth.uid() = id);

drop policy if exists "profiles_insert_own" on public.profiles;
create policy "profiles_insert_own"
on public.profiles
for insert
with check (auth.uid() = id);

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own"
on public.profiles
for update
using (auth.uid() = id)
with check (auth.uid() = id);

drop policy if exists "properties_manage_own" on public.properties;
create policy "properties_manage_own"
on public.properties
for all
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "maintenance_issues_manage_own" on public.maintenance_issues;
create policy "maintenance_issues_manage_own"
on public.maintenance_issues
for all
using (auth.uid() = user_id)
with check (
  auth.uid() = user_id
  and exists (
    select 1
    from public.properties
    where properties.id = maintenance_issues.property_id
    and properties.user_id = auth.uid()
  )
);

drop policy if exists "issue_notes_manage_own" on public.issue_notes;
create policy "issue_notes_manage_own"
on public.issue_notes
for all
using (auth.uid() = user_id)
with check (
  auth.uid() = user_id
  and exists (
    select 1
    from public.maintenance_issues
    where maintenance_issues.id = issue_notes.issue_id
    and maintenance_issues.user_id = auth.uid()
  )
);

drop policy if exists "issue_photos_manage_own" on public.issue_photos;
create policy "issue_photos_manage_own"
on public.issue_photos
for all
using (auth.uid() = user_id)
with check (
  auth.uid() = user_id
  and exists (
    select 1
    from public.maintenance_issues
    where maintenance_issues.id = issue_photos.issue_id
    and maintenance_issues.user_id = auth.uid()
  )
);

create index if not exists properties_user_id_idx
on public.properties(user_id);

create index if not exists maintenance_issues_user_id_idx
on public.maintenance_issues(user_id);

create index if not exists maintenance_issues_property_id_idx
on public.maintenance_issues(property_id);

create index if not exists maintenance_issues_status_idx
on public.maintenance_issues(status);

create index if not exists maintenance_issues_priority_idx
on public.maintenance_issues(priority);

create index if not exists issue_notes_issue_id_idx
on public.issue_notes(issue_id);

create index if not exists issue_photos_issue_id_idx
on public.issue_photos(issue_id);