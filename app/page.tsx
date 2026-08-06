import { ArrowRight, Boxes, Database, FlaskConical, Network } from "lucide-react"
import { SiteFooter, SiteHeader } from "@/components/site-chrome"

const AREAS = [
  {
    title: "B2B-Produktkatalog",
    text: "Ein strukturierter, durchsuchbarer Katalog für mehr als 500 Produkte mit Kategorien, Artikelnummern, technischen Daten und direkter Anfrage.",
    href: "/products/",
    cta: "Katalog öffnen",
    icon: Boxes,
  },
  {
    title: "webOwie Research",
    text: "Forschungsprojekte, Software, technische Berichte und Datensätze zu AI, OSINT, Cybersecurity, Digital Risk und Information Integrity.",
    href: "/research/",
    cta: "Research ansehen",
    icon: FlaskConical,
  },
  {
    title: "Systemarchitektur",
    text: "Modulare, reproduzierbare und datenschutzbewusste Infrastrukturen für Suche, Analyse, Automatisierung und Entscheidungsunterstützung.",
    href: "https://github.com/puchadave",
    cta: "Repositories prüfen",
    icon: Network,
  },
]

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative isolate overflow-hidden border-b border-border pt-16">
          <div aria-hidden className="absolute inset-0 bg-cyber-grid opacity-35" />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{ background: "radial-gradient(70% 65% at 50% 25%, rgba(27,140,255,.16), transparent 72%)" }}
          />
          <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8 lg:py-36">
            <div className="max-w-4xl">
              <p className="text-mono-label text-xs text-signal">// Catalog · Systems · Research</p>
              <h1 className="mt-6 text-balance font-heading text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                B2B-Produkte und wissenschaftliche Systeme in einer belastbaren Plattform.
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-muted-foreground">
                puchalla.pro verbindet einen datengetriebenen Produktkatalog mit dem Forschungsportfolio des webOwie Research Lab. Eine gemeinsame Quelle, versioniert auf GitHub, statisch publiziert und ohne unnötigen Plattformballast.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="/products/" className="inline-flex items-center gap-2 rounded-sm bg-signal px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90">
                  Produkte durchsuchen <ArrowRight className="h-4 w-4" />
                </a>
                <a href="/research/" className="inline-flex items-center gap-2 rounded-sm border border-border bg-surface px-5 py-3 text-sm font-semibold hover:border-signal/60">
                  Research-Portfolio
                </a>
              </div>
            </div>

            <div className="mt-16 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-3">
              {[
                ["500+", "Produkte vorgesehen"],
                ["1", "strukturierte Datenquelle"],
                ["100%", "statischer GitHub-Export"],
              ].map(([value, label]) => (
                <div key={label} className="bg-card px-6 py-7">
                  <div className="font-mono text-3xl font-semibold text-foreground">{value}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="flex max-w-3xl items-start gap-4">
            <Database className="mt-1 h-6 w-6 text-signal" />
            <div>
              <p className="text-mono-label text-xs text-signal">// One source of truth</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Keine drei halben Webseiten.</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                Produktdaten, Projekte, Publikationen, Software und Profile werden strukturiert gepflegt und automatisiert veröffentlicht. Damit bleibt die Plattform wartbar, statt nach dem üblichen menschlichen Ritual aus Copy-and-Paste, Versionschaos und stiller Verzweiflung zu zerfallen.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {AREAS.map(({ title, text, href, cta, icon: Icon }) => (
              <article key={title} className="rounded-md border border-border bg-card p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-sm border border-border bg-surface text-signal">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                <p className="mt-3 min-h-24 text-sm leading-6 text-muted-foreground">{text}</p>
                <a href={href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-signal">
                  {cta} <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="kontakt" className="border-t border-border bg-card">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
            <div>
              <p className="text-mono-label text-xs text-signal">// B2B inquiry</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">Produktliste, Projekt oder Partnerschaft.</h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                Der Katalog ist für strukturierte Beschaffungsanfragen ausgelegt. Forschungs- und Technologiekooperationen werden separat über das webOwie Research Lab dokumentiert.
              </p>
            </div>
            <a href="https://www.linkedin.com/in/davidpuchalla/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-sm bg-signal px-5 py-3 text-sm font-semibold text-white">
              Kontakt aufnehmen <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
