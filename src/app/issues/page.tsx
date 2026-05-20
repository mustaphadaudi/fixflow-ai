import AppShell from "@/components/layout/AppShell";

const issues = [
  {
    title: "Water coming through ceiling",
    property: "Flat 2, Mavis Close",
    status: "New",
    priority: "Urgent",
    category: "Plumbing / Leak",
    description:
      "Tenant reports water coming through the ceiling and getting worse.",
  },
  {
    title: "Boiler not heating water",
    property: "12 Kingston Road",
    status: "In Progress",
    priority: "High",
    category: "Heating / Boiler",
    description:
      "Tenant says the boiler is working intermittently and hot water is unavailable.",
  },
  {
    title: "Mould forming near bedroom window",
    property: "7 Hill View",
    status: "New",
    priority: "Medium",
    category: "Damp / Mould",
    description:
      "Tenant noticed dark patches around the window and condensation build-up.",
  },
  {
    title: "Oven door not closing properly",
    property: "24 London Road",
    status: "Completed",
    priority: "Low",
    category: "Appliance",
    description:
      "Oven door hinge was loose and required a minor appliance repair.",
  },
];

function getPriorityStyle(priority: string) {
  switch (priority) {
    case "Urgent":
      return "border-red-400/30 bg-red-400/10 text-red-300";
    case "High":
      return "border-orange-400/30 bg-orange-400/10 text-orange-300";
    case "Medium":
      return "border-yellow-400/30 bg-yellow-400/10 text-yellow-300";
    case "Low":
      return "border-green-400/30 bg-green-400/10 text-green-300";
    default:
      return "border-slate-400/30 bg-slate-400/10 text-slate-300";
  }
}

function getStatusStyle(status: string) {
  switch (status) {
    case "New":
      return "border-cyan-400/30 bg-cyan-400/10 text-cyan-300";
    case "In Progress":
      return "border-purple-400/30 bg-purple-400/10 text-purple-300";
    case "Completed":
      return "border-green-400/30 bg-green-400/10 text-green-300";
    default:
      return "border-slate-400/30 bg-slate-400/10 text-slate-300";
  }
}

export default function IssuesPage() {
  return (
    <AppShell>
      <div>
        <header className="flex flex-col gap-6 border-b border-slate-800 pb-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              Maintenance Issues
            </h1>

            <p className="mt-3 max-w-2xl text-slate-400">
              Search, filter, and track maintenance reports across your managed
              properties.
            </p>
          </div>

          <a
            href="/issues/new"
            className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Add Maintenance Issue
          </a>
        </header>

        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg">
          <div className="grid gap-4 md:grid-cols-5">
            <input
              placeholder="Search issues..."
              className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400 md:col-span-2"
            />

            <select className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-cyan-400">
              <option>All Properties</option>
              <option>Flat 2, Mavis Close</option>
              <option>12 Kingston Road</option>
              <option>7 Hill View</option>
            </select>

            <select className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-cyan-400">
              <option>All Statuses</option>
              <option>New</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>

            <select className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-cyan-400">
              <option>All Priorities</option>
              <option>Urgent</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>
        </section>

        <section className="mt-8 space-y-5">
          {issues.map((issue) => (
            <article
              key={issue.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg"
            >
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div>
                  <h2 className="text-xl font-semibold">{issue.title}</h2>

                  <p className="mt-2 text-sm text-slate-400">
                    {issue.property}
                  </p>

                  <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300">
                    {issue.description}
                  </p>

                  <p className="mt-3 text-sm text-slate-500">
                    Category: {issue.category}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-medium ${getStatusStyle(
                      issue.status
                    )}`}
                  >
                    {issue.status}
                  </span>

                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-medium ${getPriorityStyle(
                      issue.priority
                    )}`}
                  >
                    {issue.priority}
                  </span>
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
                  href="#"
                  className="rounded-xl bg-slate-800 px-4 py-2 text-center text-sm font-semibold text-slate-200 transition hover:bg-slate-700"
                >
                  Update Status
                </a>
              </div>
            </article>
          ))}
        </section>
      </div>
    </AppShell>
  );
}