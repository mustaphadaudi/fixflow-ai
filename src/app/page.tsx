export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
        <div className="mb-6 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
          AI-assisted property maintenance management
        </div>

        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          FixFlow AI
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          A full-stack maintenance issue tracker for landlords, property
          managers, and small real estate businesses. Manage properties, track
          repair issues, and use AI to triage tenant maintenance reports faster.
        </p>

       <div className="mt-10 flex flex-col gap-4 sm:flex-row">
  <a
    href="/dashboard"
    className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
  >
    View Demo Dashboard
  </a>

  <a
    href="/login"
    className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
  >
    Sign In
  </a>

  <a
    href="/signup"
    className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
  >
    Create Account
  </a>
</div>

        <div className="mt-16 grid w-full gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-left shadow-lg">
            <h2 className="text-lg font-semibold">Track Issues</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Record maintenance problems, statuses, priorities, and property
              details in one organised dashboard.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-left shadow-lg">
            <h2 className="text-lg font-semibold">AI Triage</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Suggest categories, urgency, summaries, next actions, tenant
              replies, and contractor job briefs.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-left shadow-lg">
            <h2 className="text-lg font-semibold">Portfolio Ready</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Built with Next.js, TypeScript, Tailwind CSS, Supabase, and an
              AI-assisted workflow suitable for graduate developer applications.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}