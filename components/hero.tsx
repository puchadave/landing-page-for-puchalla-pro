"use client"

import { motion } from "motion/react"
import { ArrowRight, ShieldCheck } from "lucide-react"
import { CyberGrid } from "./cyber-grid"

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      <CyberGrid />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-6 py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex w-fit items-center gap-2 rounded-sm border border-border bg-surface/60 px-3 py-1.5 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal" />
          <span className="text-mono-label text-[11px] text-muted-foreground">
            Systems · Strategies · Control
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-4xl text-balance font-heading text-5xl font-semibold leading-[0.98] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
        >
          Architektur für{" "}
          <span className="text-signal">Kontrolle</span>, Skalierung und
          totale Marktdominanz.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground"
        >
          Für B2B-Entscheider, die absolute Präzision verlangen. Wir
          konstruieren maßgeschneiderte, OSINT-gesteuerte Systeme, die Ihren
          Markt nicht bedienen — sondern beherrschen.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#kontakt"
            className="group inline-flex items-center justify-center gap-2 rounded-sm bg-signal px-7 py-4 text-sm font-semibold tracking-wide text-signal-foreground transition-all duration-200 hover:signal-glow hover:brightness-110"
          >
            Analyse anfordern
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <a
            href="#systeme"
            className="group inline-flex items-center justify-center gap-2 rounded-sm border border-border bg-transparent px-7 py-4 text-sm font-semibold tracking-wide text-foreground transition-colors duration-200 hover:border-signal/60 hover:bg-surface/60"
          >
            <ShieldCheck className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-signal" />
            Systemarchitektur einsehen
          </a>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid max-w-2xl grid-cols-3 gap-px overflow-hidden rounded-sm border border-border bg-border"
        >
          {STATS.map((s) => (
            <div key={s.label} className="bg-card px-5 py-6">
              <dt className="text-mono-label text-[10px] text-muted-foreground">
                {s.label}
              </dt>
              <dd className="mt-2 font-heading text-2xl font-semibold text-foreground">
                {s.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}

const STATS = [
  { label: "Datenpunkte / Audit", value: "12.4M" },
  { label: "Präzisionsrate", value: "99.2%" },
  { label: "Markt-Dominanz", value: "Tier-1" },
]
