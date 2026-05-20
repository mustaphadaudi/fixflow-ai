import AppShell from "@/components/layout/AppShell";

export default function NewIssuePage() {
  return (
    <AppShell>
      <div>
        <header className="border-b border-slate-800 pb-8">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Add Maintenance Issue
          </h1>

          <p className="mt-3 max-w-2xl text-slate-400">
            Record a tenant maintenance report and optionally use AI to suggest
            triage details before saving.
          </p>
        </header>

        <section className="mt-8 grid gap-6 lg:grid-cols-3">
          <form className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg lg:col-span-2">
            <div className="space-y-5">
              <div>
                <label className="text-sm font-medium text-slate-300">
                  Property
                </label>
                <select className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-cyan-400">
                  <option>Select property</option>
                  <option>Flat 2, Mavis Close</option>
                  <option>12 Kingston Road</option>
                  <option>7 Hill View</option>
                  <option>24 London Road</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-300">
                  Issue title
                </label>
                <input
                  placeholder="e.g. Water coming through ceiling"
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-300">
                  Description
                </label>
                <textarea
                  rows={6}
                  placeholder="Describe what the tenant reported..."
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-300">
                  Upload photos
                </label>
                <div className="mt-2 rounded-xl border border-dashed border-slate-700 bg-slate-950 px-4 py-8 text-center">
                  <p className="text-sm text-slate-400">
                    Photo upload will be connected later with Supabase Storage.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 border-t border-slate-800 pt-5 sm:flex-row">
                <button
                  type="button"
                  className="rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/20"
                >
                  Suggest with AI
                </button>

                <button
                  type="button"
                  className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Save Issue
                </button>
              </div>
            </div>
          </form>

          <aside className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg">
            <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
              <p className="text-sm font-semibold text-cyan-300">
                AI suggestion — review before saving
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                FixFlow AI will help suggest triage details, but the user must
                review and edit the result before saving the issue.
              </p>
            </div>

            <div className="mt-6 space-y-5">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Suggested category
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Plumbing / Leak
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Suggested priority
                </p>
                <span className="mt-2 inline-flex rounded-full border border-red-400/30 bg-red-400/10 px-3 py-1 text-xs font-medium text-red-300">
                  Urgent
                </span>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Summary
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Possible active water leak from above causing water ingress
                  through the ceiling.
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Recommended next action
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Contact the tenant immediately, advise them to avoid the
                  affected area if unsafe, and arrange urgent plumbing
                  inspection.
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Tenant reply draft
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Hi, thanks for reporting this. Please avoid the affected area
                  if it feels unsafe and move belongings away from the leak if
                  you can do so safely. I’ll arrange urgent assistance and
                  update you shortly.
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Contractor brief draft
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Tenant reports water coming through the ceiling and worsening.
                  Possible active leak from above. Please attend urgently to
                  inspect, identify the source, and advise on repair.
                </p>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </AppShell>
  );
}