export default function SignupPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6 py-12">
        <section className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/70 p-8 shadow-lg">
          <a href="/" className="text-sm font-medium text-cyan-300">
            ← Back to home
          </a>

          <h1 className="mt-6 text-3xl font-bold tracking-tight">
            Create your FixFlow AI account
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            Start managing properties, maintenance issues, notes, photos, and
            AI-assisted triage suggestions.
          </p>

          <form className="mt-8 space-y-5">
            <div>
              <label className="text-sm font-medium text-slate-300">
                Full name
              </label>
              <input
                placeholder="e.g. Mustapha Daudi"
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-300">
                Business name
              </label>
              <input
                placeholder="e.g. Trending Real Estate"
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-300">
                Email address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-300">
                Password
              </label>
              <input
                type="password"
                placeholder="Create a password"
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
              />
            </div>

            <button
              type="button"
              className="w-full rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Create Account
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-400">
            Already have an account?{" "}
            <a href="/login" className="font-medium text-cyan-300">
              Sign in
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}