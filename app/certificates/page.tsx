import type { Metadata } from "next"
import { ArrowUpRight, Award, Database, ShieldCheck } from "lucide-react"
import { CertificateGrid } from "@/components/certificate-grid"
import { SiteFooter, SiteHeader } from "@/components/site-chrome"
import { certificateCollectionUrl, certificates } from "@/data/certificates"

export const metadata: Metadata = {
  title: "Zertifikate & Qualifikationen | David Puchalla",
  description:
    "Durchsuchbares Zertifikatsportfolio von David Puchalla mit Nachweisen zu OSINT, Data Analytics, Cybersecurity, Systemarchitektur, Marketing, Vertrieb und Recht.",
}

export default function CertificatesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Zertifikate und Qualifikationen von David Puchalla",
    numberOfItems: certificates.length,
    itemListElement: certificates.map((certificate, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "EducationalOccupationalCredential",
        name: certificate.title,
        credentialCategory: certificate.category,
        recognizedBy: {
          "@type": "Organization",
          name: certificate.issuer,
        },
        url: certificate.url,
      },
    })),
  }

  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <section className="relative overflow-hidden border-b border-border bg-card">
          <div aria-hidden className="absolute inset-0 bg-cyber-grid opacity-25" />
          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-mono-label text-xs text-signal">// Verified learning record</p>
                <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-tight sm:text-6xl">
                  Zertifikate, Qualifikationen und überprüfbare Nachweise.
                </h1>
                <p className="mt-6 max-w-4xl text-lg leading-8 text-muted-foreground">
                  Strukturierte Nachweise zu OSINT, Datenanalyse, Cybersecurity, Systemarchitektur, digitalem Marketing, Vertrieb und Recht. Die Metadaten liegen versioniert im GitHub-Repository; die Originaldokumente bleiben in der Dokumentenablage.
                </p>
              </div>

              <a
                href={certificateCollectionUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-signal px-5 py-3 text-sm font-semibold text-white"
              >
                Gesamtsammlung öffnen <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-3">
              {[
                [String(certificates.length), "strukturierte Nachweise", Award],
                ["6", "Fachkategorien", Database],
                ["1", "versionierte Datenquelle", ShieldCheck],
              ].map(([value, label, Icon]) => (
                <div key={String(label)} className="bg-background px-6 py-7">
                  <Icon className="h-5 w-5 text-signal" />
                  <div className="mt-4 font-mono text-3xl font-semibold text-foreground">{String(value)}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{String(label)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <CertificateGrid />
        </section>

        <section className="border-t border-border bg-card">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <p className="text-mono-label text-xs text-signal">// Integrity note</p>
            <h2 className="mt-4 text-2xl font-semibold">Originaldokumente bleiben außerhalb des Build-Artefakts.</h2>
            <p className="mt-4 max-w-4xl leading-7 text-muted-foreground">
              Das Repository veröffentlicht Titel, Anbieter, Kategorien, Credential-IDs und Referenzlinks. Personenbezogene PDF-Dokumente werden nicht ungeprüft in ein öffentliches Quellcode-Repository kopiert. Zugriff und Freigabe der Google-Drive-Nachweise werden separat verwaltet.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
