import type { Metadata } from "next"
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Boxes,
  Code2,
  Contact,
  FlaskConical,
  Network,
  ShieldCheck,
} from "lucide-react"
import { SiteFooter, SiteHeader } from "@/components/site-chrome"

export const metadata: Metadata = {
  title: "David Puchalla | Systems Architect & Independent Researcher",
  description:
    "Portfolio of David Puchalla: systems architecture, OSINT, cybersecurity, AI, digital strategy, research projects and verified qualifications.",
}

const PROFILE_LINKS = [
  {
    label: "ORCID",
    value: "0009-0002-0223-0929",
    href: "https://orcid.org/0009-0002-0223-0929",
    status: "Verified identifier",
  },
  {
    label: "GitHub",
    value: "@puchadave",
    href: "https://github.com/puchadave",
    status: "Code & projects",
  },
  {
    label: "LinkedIn",
    value: "David Puchalla",
    href: "https://www.linkedin.com/in/davidpuchalla/",
    status: "Professional profile",
  },
  {
    label: "OpenAlex",
    value: "Author discovery",
    href: "https://explore.openalex.org/authors/",
    status: "Linked through ORCID / DOI",
  },
  {
    label: "ResearcherID",
    value: "Web of Science",
    href: "https://www.webofscience.com/wos/author/search",
    status: "Research profile directory",
  },
  {
    label: "Zenodo",
    value: "DOI repository",
    href: "https://zenodo.org/search?q=%22David%20Puchalla%22",
    status: "Software & publications",
  },
]

const AREAS = [
  {
    title: "Systems Architecture",
    text: "Modular, privacy-conscious infrastructures for search, automation, analytics, local AI and evidence-based decision support.",
    href: "https://github.com/puchadave",
    cta: "Repositories ansehen",
    icon: Network,
  },
  {
    title: "webOwie Research",
    text: "Research projects and open-source engineering around AI, OSINT, cybersecurity, digital risk and information integrity.",
    href: "/research/",
    cta: "Research-Portfolio",
    icon: FlaskConical,
  },
  {
    title: "Verified Qualifications",
    text: "A searchable certificate matrix with credential IDs and source documents for technical, analytical and commercial qualifications.",
    href: "/certificates/",
    cta: "Zertifikate prüfen",
    icon: Award,
  },
]

const PROJECTS = [
  {
    title: "webOwie",
    text: "Modular AI-powered search and intelligence platform combining semantic search, OSINT, automation, graphs and analytical dashboards.",
    href: "https://github.com/puchadave/webOwie",
  },
  {
    title: "HERMES DFIR OS",
    text: "Local-first investigation and incident-response workstation architecture for repeatable forensic and intelligence workflows.",
    href: "https://github.com/puchadave/HERMES-DFIR_OS",
  },
  {
    title: "OSINT Tooling",
    text: "A growing repository landscape for social analysis, digital-footprint research, relationship mapping and investigative automation.",
    href: "https://github.com/puchadave?tab=repositories",
  },
]

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "David Puchalla",
    image: "https://avatars.githubusercontent.com/u/134562787?v=4",
    url: "https://puchalla.pro",
    jobTitle: "Systems Architect and Independent Researcher",
    sameAs: [
      "https://orcid.org/0009-0002-0223-0929",
      "https://github.com/puchadave",
      "https://www.linkedin.com/in/davidpuchalla/",
    ],
    knowsAbout: [
      "Systems Architecture",
      "Artificial Intelligence",
      "Open Source Intelligence",
      "Cybersecurity",
      "Digital Strategy",
      "Computational Social Science",
    ],
  }

  return (
    <>
      <SiteHeader />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <section className="relative isolate overflow-hidden border-b border-border pt-16">
          <div aria-hidden className="absolute inset-0 bg-cyber-grid opacity-35" />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{ background: "radial-gradient(70% 65% at 52% 25%, rgba(27,140,255,.18), transparent 72%)" }}
          />

          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[1fr_360px] lg:items-center lg:px-8 lg:py-32">
            <div>
              <p className="text-mono-label text-xs text-signal">// Systems · Intelligence · Research</p>
              <h1 className="mt-6 max-w-5xl text-balance font-heading text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                David Puchalla
              </h1>
              <p className="mt-5 text-xl font-semibold text-foreground sm:text-2xl">
                Systems Architect · Independent Researcher · Founder of webOwie
              </p>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-muted-foreground">
                I design modular technology systems at the intersection of artificial intelligence, open-source intelligence, cybersecurity, automation, digital strategy and evidence-based research.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/certificates/"
                  className="inline-flex items-center gap-2 rounded-sm bg-signal px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Qualifikationen prüfen <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/research/"
                  className="inline-flex items-center gap-2 rounded-sm border border-border bg-surface px-5 py-3 text-sm font-semibold hover:border-signal/60"
                >
                  Research-Portfolio
                </a>
                <a
                  href="https://github.com/puchadave"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm border border-border bg-surface px-5 py-3 text-sm font-semibold hover:border-signal/60"
                >
                  <Code2 className="h-4 w-4" /> GitHub
                </a>
              </div>
            </div>

            <aside className="rounded-md border border-border bg-card/90 p-5 shadow-2xl shadow-black/20 backdrop-blur">
              <div className="relative overflow-hidden rounded-sm border border-border bg-surface">
                <img
                  src="https://avatars.githubusercontent.com/u/134562787?v=4"
                  alt="David Puchalla"
                  className="aspect-square w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-5 pb-5 pt-16 text-white">
                  <div className="text-sm font-semibold">David Puchalla</div>
                  <div className="mt-1 text-xs text-white/70">Iserlohn · Germany</div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <a
                  href="https://www.linkedin.com/in/davidpuchalla/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-border bg-background px-3 py-2.5 text-xs font-semibold hover:border-signal/60"
                >
                  <Contact className="h-4 w-4" /> LinkedIn
                </a>
                <a
                  href="https://orcid.org/0009-0002-0223-0929"
                  target="_blank"
                  rel="me noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-sm border border-border bg-background px-3 py-2.5 text-xs font-semibold hover:border-signal/60"
                >
                  <ShieldCheck className="h-4 w-4" /> ORCID
                </a>
              </div>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-3">
            {[
              { value: "17+", label: "documented credentials" },
              { value: "40+", label: "public repositories" },
              { value: "1", label: "persistent ORCID identity" },
            ].map((item) => (
              <div key={item.label} className="bg-card px-6 py-7">
                <div className="font-mono text-3xl font-semibold text-foreground">{item.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-20 grid gap-6 lg:grid-cols-3">
            {AREAS.map(({ title, text, href, cta, icon: Icon }) => (
              <article key={title} className="rounded-md border border-border bg-card p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-sm border border-border bg-surface text-signal">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="mt-6 text-xl font-semibold">{title}</h2>
                <p className="mt-3 min-h-24 text-sm leading-6 text-muted-foreground">{text}</p>
                <a href={href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-signal">
                  {cta} <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-border bg-card">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <p className="text-mono-label text-xs text-signal">// Research identity graph</p>
            <div className="mt-5 grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Persistent profiles, not decorative badges.</h2>
                <p className="mt-5 leading-7 text-muted-foreground">
                  ORCID, GitHub, LinkedIn, OpenAlex, Web of Science and Zenodo form the public identity layer for projects, releases and future DOI-backed outputs. Where a platform-specific author ID is not yet publicly resolved, the directory link is marked accordingly rather than invented for theatrical completeness.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {PROFILE_LINKS.map((profile) => (
                  <a
                    key={profile.label}
                    href={profile.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-md border border-border bg-background p-5 transition-colors hover:border-signal/60"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-sm font-semibold">{profile.label}</div>
                        <div className="mt-2 font-mono text-xs text-signal">{profile.value}</div>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-signal" />
                    </div>
                    <div className="mt-4 text-xs text-muted-foreground">{profile.status}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="flex items-end justify-between gap-8">
            <div>
              <p className="text-mono-label text-xs text-signal">// Selected systems</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Projects and architecture work</h2>
            </div>
            <a href="/products/" className="hidden items-center gap-2 text-sm font-semibold text-signal sm:inline-flex">
              B2B catalog <Boxes className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <article key={project.title} className="flex min-h-64 flex-col rounded-md border border-border bg-card p-7">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{project.text}</p>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-signal"
                >
                  Projekt öffnen <ArrowUpRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="kontakt" className="border-t border-border bg-card">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
            <div>
              <p className="text-mono-label text-xs text-signal">// Contact</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">Systems, research or strategic collaboration.</h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                Technical architecture, open-source research infrastructure, AI-assisted analytics and digital strategy are documented through versioned sources rather than pitch-deck fog.
              </p>
            </div>
            <a
              href="https://www.linkedin.com/in/davidpuchalla/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-signal px-5 py-3 text-sm font-semibold text-white"
            >
              Kontakt aufnehmen <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
