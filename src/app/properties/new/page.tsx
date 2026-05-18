export default function NewPropertyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-4xl px-6 py-8">
        <header className="border-b border-slate-800 pb-8">
          <a href="/properties" className="text-sm font-medium text-cyan-300">
            ← Back to properties
          </a>

          <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Add Property
          </h1>

          <p className="mt-3 max-w-2xl text-slate-400">
            Add a managed rental property so maintenance issues can be tracked
            against the correct address.
          </p>
        </header>

        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg">
          <form className="space-y-6">
            <div>
              <label className="text-sm font-medium text-slate-300">
                Property name
              </label>
              <input
                placeholder="e.g. Flat 2, Mavis Close"
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-300">
                Address line 1
              </label>
              <input
                placeholder="e.g. 5 Mavis Close"
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-300">
                Address line 2
              </label>
              <input
                placeholder="Optional"
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-300">
                  City
                </label>
                <input
                  placeholder="e.g. Kingston upon Thames"
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-300">
                  Postcode
                </label>
                <input
                  placeholder="e.g. KT1 1AA"
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-300">
                Property type
              </label>
              <select className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-cyan-400">
                <option>Select property type</option>
                <option>Flat</option>
                <option>Terraced House</option>
                <option>Semi-detached House</option>
                <option>Detached House</option>
                <option>HMO</option>
                <option>Commercial</option>
              </select>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-300">
                  Tenant name
                </label>
                <input
                  placeholder="Optional"
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-300">
                  Tenant contact
                </label>
                <input
                  placeholder="Optional email or phone"
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t border-slate-800 pt-6 sm:flex-row">
              <button
                type="button"
                className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Save Property
              </button>

              <a
                href="/properties"
                className="rounded-xl border border-slate-700 px-5 py-3 text-center text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
              >
                Cancel
              </a>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}