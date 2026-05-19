import Link from "next/link";

type AppShellProps = {
  children: React.ReactNode;
};

const navLinks = [
  {
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    label: "Properties",
    href: "/properties",
  },
  {
    label: "Issues",
    href: "/issues",
  },
  {
    label: "New Issue",
    href: "/issues/new",
  },
];

export default function AppShell({ children }: AppShellProps) {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex max-w-7xl flex-col px-6 py-6 lg:flex-row lg:gap-8">
        <aside className="mb-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-lg lg:sticky lg:top-6 lg:mb-0 lg:h-fit lg:w-64">
          <Link href="/" className="block">
            <p className="text-xl font-bold tracking-tight">FixFlow AI</p>
            <p className="mt-1 text-xs leading-5 text-slate-400">
              Property maintenance workspace
            </p>
          </Link>

          <nav className="mt-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-cyan-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-6 rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
            <p className="text-sm font-semibold text-cyan-300">
              AI triage assistant
            </p>
            <p className="mt-2 text-xs leading-5 text-slate-300">
              AI suggestions will help classify and prioritise maintenance
              reports, but users must review before saving.
            </p>
          </div>
        </aside>

        <section className="flex-1">{children}</section>
      </div>
    </main>
  );
}