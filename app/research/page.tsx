import type { Metadata } from "next"
import { ArrowUpRight, BookOpen, Database, FlaskConical, Network } from "lucide-react"
import { SiteFooter, SiteHeader } from "@/components/site-chrome"

export const metadata: Metadata = {
  title: "webOwie Research Lab",
  description:
    "Research portfolio for artificial intelligence, open-source intelligence, cybersecurity, computational social science, digital risk and information integrity.",
}

const RESEARCH_AREAS = [
  "Artificial Intelligence",
  "Open Source Intelligence",
  "Information Retrieval",
  "Information Systems",
  "Cybersecurity",
  "Computational Social Science",
  "Data Analytics",
  "Social Media Analytics",
  "Knowledge Graphs",
  "Semantic Search",
  "Digital Risk",
  "Information Integrity",
]

const PROJECTS = [
  {
    title: "webOwie Intelligence Platform",
    text: "AI-assisted modular search and intelligence platform integrating OSINT, social-media analytics, public datasets and interactive dashboards for transparent, reproducible digital research.",
    icon: Network,
  },
  {
    title: "Digital Risk Observatory",
    text: "Research infrastructure for investigating misinformation, coordinated information campaigns, cyber threats, digital violence and emerging societal risks using public information.",
    icon: FlaskConical,
  },
  {
    title: "webOwie Research Cloud",
    text: "Open and reproducible environment for computational social science, cybersecurity analytics, semantic search and AI-supported decision systems.",
    icon: Database,
  },
]

const OUTPUTS = [
  "webOwie Search Engine",
  "webOwie Intelligence Platform",
  "webOwie Dashboard",
  "webOwie AI",
  "Open Intelligence Framework",
  "Research Intelligence Dashboard",
  "Docker Intelligence Stack",
]

const REPORTS = [
  ["TR-001", "Open Intelligence Framework"],
  ["TR-002", "AI-assisted Search"],
  ["TR-003", "Digital Risk Observatory"],
  ["TR-004", "Social Media Intelligence"],
  ["TR-005", "Semantic Search Architecture"],
]

export default function ResearchPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ResearchOrganization",
    name: "webOwie Research Lab",
    url: "https://puchalla.pro/research/",
    founder: {
      "@type": "Person",
      name: "David Puchalla",
      sameAs: [
        "https://orcid.org/0009-0002-0223-0929",
        "https://github.com/puchadave",
        "https://www.linkedin.com/in/davidpuchalla/",
      ],
    },
    knowsAbout: RESEARCH_AREAS,
  }

  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <section className="relative overflow-hidden border-b border-border bg-card">
          <div aria-hidden className="absolute inset-0 bg-cyber-grid opacity-25" />
          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <p className="text-mono-label text-xs text-signal">// Independent research organization</p>
            <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-tight sm:text-6xl">webOwie Research Lab</h1>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-muted-foreground">
              Independent research and open-source engineering at the intersection of artificial intelligence, OSINT, cybersecurity, digital resilience, information integrity and computational social science.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="https://orcid.org/0009-0002-0223-0929" target="_blank" rel="me noreferrer" className="inline-flex items-center gap-2 rounded-sm bg-signal px-4 py-2.5 text-sm font-semibold text-white">
                ORCID <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="https://github.com/puchadave" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-sm border border-border bg-surface px-4 py-2.5 text-sm font-semibold hover:border-signal/60">
                GitHub <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_.85fr]">
            <div>
              <p className="text-mono-label text-xs text-signal">// Research profile</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">David Puchalla</h2>
              <p className="mt-5 leading-7 text-muted-foreground">
                Systems architect, independent researcher and founder of webOwie. The work focuses on integrating semantic search, open-source intelligence, social-media analytics, artificial intelligence, data visualization and automation into reproducible, privacy-conscious research infrastructures.
              </p>
              <p className="mt-4 leading-7 text-muted-foreground">
                Outputs are designed for researchers, investigative journalists, cybersecurity professionals, public institutions and organizations that require transparent evidence chains rather than decorative dashboards pretending to be intelligence.
              </p>
            </div>
            <div className="rounded-md border border-border bg-card p-6">
              <h3 className="text-sm font-semibold">Research Areas</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {RESEARCH_AREAS.map((area) => (
                  <span key={area} className="rounded-sm border border-border bg-surface px-2.5 py-1.5 text-xs text-muted-foreground">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-card">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <p className="text-mono-label text-xs text-signal">// Current projects</p>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {PROJECTS.map(({ title, text, icon: Icon }) => (
                <article key={title} className="rounded-md border border-border bg-background p-7">
                  <Icon className="h-6 w-6 text-signal" />
                  <h2 className="mt-6 text-xl font-semibold">{title}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <Network className="h-5 w-5 text-signal" />
              <h2 className="text-2xl font-semibold">Research Outputs</h2>
            </div>
            <div className="mt-6 divide-y divide-border rounded-md border border-border bg-card">
              {OUTPUTS.map((output) => (
                <div key={output} className="flex items-center justify-between gap-4 px-5 py-4 text-sm">
                  <span>{output}</span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">planned / evolving</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-signal" />
              <h2 className="text-2xl font-semibold">Technical Reports</h2>
            </div>
            <div className="mt-6 divide-y divide-border rounded-md border border-border bg-card">
              {REPORTS.map(([id, title]) => (
                <div key={id} className="grid grid-cols-[80px_1fr] gap-4 px-5 py-4 text-sm">
                  <span className="font-mono text-signal">{id}</span>
                  <span>{title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-card">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <p className="text-mono-label text-xs text-signal">// Publication pipeline</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">GitHub → Release → Zenodo DOI → ORCID → OpenAlex</h2>
            <p className="mt-5 max-w-4xl leading-7 text-muted-foreground">
              Software, whitepapers, technical reports and datasets are intended to originate from versioned GitHub sources and flow into persistent scholarly identifiers. One controlled publication path beats manually maintaining six inconsistent profiles, a lesson institutions apparently need rediscovered every decade.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
