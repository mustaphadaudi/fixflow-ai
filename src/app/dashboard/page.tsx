import AppShell from "@/components/layout/AppShell";

const stats = [
  {
    label: "Open Issues",
    value: "12",
    description: "Issues currently awaiting action",
  },
  {
    label: "Urgent Issues",
    value: "3",
    description: "High-risk or time-sensitive reports",
  },
  {
    label: "Completed",
    value: "28",
    description: "Maintenance issues resolved this month",
  },
  {
    label: "Properties",
    value: "6",
    description: "Properties currently being managed",
  },
];

const recentIssues = [
  {
    title: "Water coming through ceiling",
    property: "Flat 2, Mavis Close",
    status: "New",
    priority: "Urgent",
    category: "Plumbing / Leak",
  },
  {
    title: "Boiler not heating water",
    property: "12 Kingston Road",
    status: "In Progress",
    priority: "High",
    category: "Heating / Boiler",
  },
  {
    title: "Mould forming near bedroom window",
    property: "7 Hill View",
    status: "New",
    priority: "Medium",
    category: "Damp / Mould",
  },
];

const propertyBreakdown = [
  { property: "Flat 2, Mavis Close", issues: 4 },
  { property: "12 Kingston Road", issues: 3 },
  { property: "7 Hill View", issues: 2 },
  { property: "24 London Road", issues: 1 },
];

function getPriorityStyle(priority: string) {
  switch (priority) {
    case "Urgent":
      return "border-red-400/30 bg-red-400/10 text-red-300";
    case "High":
      return "border-orange-400/30 bg-orange-400/10 text-orange-300";
    case "Medium":
      return "border-yellow-400/30 bg-yellow-400/10 text-yellow-300";
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

export default function DashboardPage() {
  return (
    <AppShell>
      <div>
        <header className="flex flex-col gap-6 border-b border-slate-800 pb-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
             Maintenance Dashboard
            </h1>

            <p className="mt-3 max-w-2xl text-slate-400">
              Track property maintenance reports, monitor urgent issues, and
              manage repair progress from one central workspace.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="/properties"
              className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
            >
              View Properties
            </a>

            <a
              href="/issues/new"
              className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Add Maintenance Issue
            </a>
          </div>
        </header>

        <section className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg"
            >
              <p className="text-sm text-slate-400">{stat.label}</p>
              <p className="mt-3 text-4xl font-bold">{stat.value}</p>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                {stat.description}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg lg:col-span-2">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">Recent Issues</h2>
                <p className="mt-1 text-sm text-slate-400">
                  Latest tenant maintenance reports.
                </p>
              </div>

              <a
                href="/issues"
                className="text-sm font-medium text-cyan-300 hover:text-cyan-200"
              >
                View all
              </a>
            </div>

            <div className="mt-6 space-y-4">
              {recentIssues.map((issue) => (
                <div
                  key={issue.title}
                  className="rounded-xl border border-slate-800 bg-slate-950/70 p-5"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="font-semibold">{issue.title}</h3>
                      <p className="mt-1 text-sm text-slate-400">
                        {issue.property}
                      </p>
                      <p className="mt-2 text-sm text-slate-500">
                        {issue.category}
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
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg">
            <h2 className="text-xl font-semibold">Issues per Property</h2>
            <p className="mt-1 text-sm text-slate-400">
              Example breakdown of active maintenance workload.
            </p>

            <div className="mt-6 space-y-4">
              {propertyBreakdown.map((item) => (
                <div key={item.property}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-300">{item.property}</span>
                    <span className="font-semibold text-white">
                      {item.issues}
                    </span>
                  </div>

                  <div className="mt-2 h-2 rounded-full bg-slate-800">
                    <div
                      className="h-2 rounded-full bg-cyan-400"
                      style={{ width: `${item.issues * 20}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
              <p className="text-sm font-medium text-cyan-300">
                AI triage preview
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Future issue forms will allow users to generate AI suggestions
                for category, priority, summaries, tenant replies, and
                contractor briefs.
              </p>
            </div>
          </aside>
        </section>
            </div>
    </AppShell>
  );
}