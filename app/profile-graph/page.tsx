import type { Metadata } from "next"
import { ArrowUpRight, Download, Network } from "lucide-react"
import { ProfileGraph } from "@/components/profile-graph"
import { SiteFooter, SiteHeader } from "@/components/site-chrome"

export const metadata: Metadata = {
  title: "Profile Knowledge Graph | David Puchalla",
  description:
    "Interaktiver Knowledge Graph zu Werdegang, Ausbildung, Qualifikationen, Kompetenzen und Research-Projekten von David Puchalla.",
}

export default function ProfileGraphPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            <p className="text-mono-label text-xs text-signal">// Profile knowledge graph</p>
            <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Lebenslauf als Beziehungsmodell statt Papierstapel.
                </h1>
                <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground">
                  Der Graph verbindet berufliche Stationen, Ausbildung, dokumentierte Qualifikationen, Kompetenzfelder und Research-Outputs. Die Daten bleiben versionierbar im Portfolio-Repository; JDL dient parallel als portables Domänenmodell.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/profile/david-puchalla.jdl"
                  download
                  className="inline-flex items-center gap-2 rounded-sm border border-border bg-background px-4 py-2.5 text-xs font-semibold hover:border-signal/60"
                >
                  <Download className="h-4 w-4" /> JDL herunterladen
                </a>
                <a
                  href="https://start.jhipster.tech/jdl-studio/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm bg-signal px-4 py-2.5 text-xs font-semibold text-white"
                >
                  <Network className="h-4 w-4" /> JDL Studio <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
          <div className="mb-8 rounded-md border border-border bg-card p-5 text-sm leading-6 text-muted-foreground">
            <strong className="text-foreground">Technische Trennung:</strong> JDL Studio modelliert Entitäten und Beziehungen, nicht einzelne CV-Datensätze. Deshalb ist das JDL hier die kanonische Schemaebene; der Website-Graph rendert die tatsächlichen öffentlichen Profildaten. So bleibt das Modell JHipster-kompatibel, ohne den Lebenslauf in künstliche Datenbank-Entitäten zu verbiegen.
          </div>
          <ProfileGraph />
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
