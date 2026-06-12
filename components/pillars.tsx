"use client"

import { motion } from "motion/react"
import { Radar, BrainCircuit, Network, type LucideIcon } from "lucide-react"

interface Pillar {
  id: string
  icon: LucideIcon
  title: string
  desc: string
  tags: string[]
}

const PILLARS: Pillar[] = [
  {
    id: "DOSSIER-01",
    icon: Radar,
    title: "Automated OSINT / SEO Synergy",
    desc: "Kontinuierliche Aufklärung verschmilzt mit Suchmaschinen-Dominanz. Wir kartieren Schwachstellen des Wettbewerbs und konvertieren sie in messbare Reichweite.",
    tags: ["OSINT", "SERP-Control", "Recon"],
  },
  {
    id: "DOSSIER-02",
    icon: BrainCircuit,
    title: "Behavioral Copywriting & HUMINT Profiling",
    desc: "Psychologische Profile Ihrer Zielentscheider, übersetzt in Sprache, die nicht überzeugt — sondern steuert. Jedes Wort kalibriert auf Konversion.",
    tags: ["HUMINT", "Persuasion", "Targeting"],
  },
  {
    id: "DOSSIER-03",
    icon: Network,
    title: "Custom Architectural Ecosystems",
    desc: "Maßgeschneiderte System-Ökosysteme — vollständig in Ihrer Kontrolle. Skalierbar, verschlüsselt und konstruiert für operative Unabhängigkeit.",
    tags: ["Infra", "Zero-Trust", "Scale"],
  },
]

export function Pillars() {
  return (
    <section id="systeme" className="relative border-b border-border py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-mono-label text-xs text-signal">
            // Der Paradigmenwechsel
          </span>
          <h2 className="mt-4 text-balance font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Drei Säulen. Ein System der totalen Kontrolle.
          </h2>
          <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Keine Agenturleistungen. Eine integrierte Architektur, in der
            Aufklärung, Psychologie und Infrastruktur als eine Waffe operieren.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-sm border border-border bg-card p-7 transition-colors duration-300 hover:border-signal/50"
            >
              {/* Scan line on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-x-0 top-0 h-px animate-scan bg-gradient-to-r from-transparent via-signal to-transparent" />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-border bg-surface text-signal transition-colors duration-300 group-hover:border-signal/50">
                  <p.icon className="h-5 w-5" />
                </div>
                <span className="text-mono-label text-[10px] text-muted-foreground/70">
                  {p.id}
                </span>
              </div>

              <h3 className="mt-6 font-heading text-xl font-semibold leading-snug text-foreground">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </p>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-sm bg-surface px-2.5 py-1 text-mono-label text-[10px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
