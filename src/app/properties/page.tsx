const properties = [
  {
    name: "Flat 2, Mavis Close",
    address: "Mavis Close, Kingston upon Thames",
    type: "Flat",
    tenant: "A. Khan",
    openIssues: 4,
  },
  {
    name: "12 Kingston Road",
    address: "Kingston Road, London",
    type: "Terraced House",
    tenant: "J. Smith",
    openIssues: 3,
  },
  {
    name: "7 Hill View",
    address: "Hill View, Surrey",
    type: "Semi-detached House",
    tenant: "M. Patel",
    openIssues: 2,
  },
  {
    name: "24 London Road",
    address: "London Road, Croydon",
    type: "Flat",
    tenant: "S. Ahmed",
    openIssues: 1,
  },
];

export default function PropertiesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <header className="flex flex-col gap-6 border-b border-slate-800 pb-8 md:flex-row md:items-center md:justify-between">
          <div>
            <a href="/dashboard" className="text-sm font-medium text-cyan-300">
              ← Back to dashboard
            </a>

            <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Properties
            </h1>

            <p className="mt-3 max-w-2xl text-slate-400">
              Manage rental properties and quickly see where maintenance issues
              are currently active.
            </p>
          </div>

          <a
            href="/properties/new"
            className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Add Property
          </a>
        </header>

        <section className="mt-8 grid gap-5 md:grid-cols-2">
          {properties.map((property) => (
            <div
              key={property.name}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-xl font-semibold">{property.name}</h2>
                  <p className="mt-2 text-sm text-slate-400">
                    {property.address}
                  </p>
                </div>

                <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                  {property.type}
                </span>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Tenant
                  </p>
                  <p className="mt-2 font-medium text-slate-200">
                    {property.tenant}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Open Issues
                  </p>
                  <p className="mt-2 text-2xl font-bold text-white">
                    {property.openIssues}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#"
                  className="rounded-xl border border-slate-700 px-4 py-2 text-center text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
                >
                  View Details
                </a>

                <a
                  href="/issues/new"
                  className="rounded-xl bg-slate-800 px-4 py-2 text-center text-sm font-semibold text-slate-200 transition hover:bg-slate-700"
                >
                  Add Issue
                </a>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}