"use client"

import { motion } from "motion/react"
import { Activity, Crosshair, TrendingUp, Lock } from "lucide-react"

const BARS = [42, 68, 55, 81, 73, 92, 64, 88, 79, 96, 71, 85]

const TARGETS = [
  { name: "Competitor Alpha", score: 87, level: "CRITICAL" },
  { name: "Competitor Bravo", score: 64, level: "ELEVATED" },
  { name: "Competitor Charlie", score: 41, level: "MODERATE" },
]

export function Dashboard() {
  return (
    <section className="relative border-b border-border py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="text-mono-label text-xs text-signal">
              // Analytische Überlegenheit
            </span>
            <h2 className="mt-4 text-balance font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Sehen Sie den Markt, bevor er sich bewegt.
            </h2>
            <p className="mt-5 max-w-lg text-pretty leading-relaxed text-muted-foreground">
              Unser visuelles Analyse-Cockpit verdichtet Millionen von
              Datenpunkten zu einer einzigen Wahrheit: Wo Ihre Konkurrenz
              verwundbar ist und wo Liquidität fließt.
            </p>

            <ul className="mt-8 space-y-4">
              {FEATURES.map((f) => (
                <li key={f.label} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-sm border border-border bg-surface text-signal">
                    <f.icon className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{f.label}</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Mock terminal UI */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-md border border-border bg-card shadow-2xl shadow-black/60"
          >
            {/* Terminal header */}
            <div className="flex items-center justify-between border-b border-border px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-signal" />
                <span className="text-mono-label text-[10px] text-muted-foreground">
                  PUCHALLA // INTEL_COCKPIT
                </span>
              </div>
              <Lock className="h-3.5 w-3.5 text-muted-foreground" />
            </div>

            <div className="grid grid-cols-2 gap-3 p-5">
              {/* Liquidity tracker */}
              <div className="col-span-2 rounded-sm border border-border bg-surface p-4">
                <div className="flex items-center justify-between">
                  <span className="text-mono-label text-[10px] text-muted-foreground">
                    Liquidity Flow
                  </span>
                  <span className="flex items-center gap-1 text-xs font-semibold text-signal">
                    <TrendingUp className="h-3.5 w-3.5" /> +24.8%
                  </span>
                </div>
                <div className="mt-4 flex h-24 items-end gap-1.5">
                  {BARS.map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.04, ease: "easeOut" }}
                      className={`flex-1 rounded-sm ${
                        i === BARS.length - 3 ? "bg-signal" : "bg-accent"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Vulnerability score */}
              <div className="rounded-sm border border-border bg-surface p-4">
                <span className="text-mono-label text-[10px] text-muted-foreground">
                  Vulnerability Index
                </span>
                <p className="mt-3 font-heading text-3xl font-semibold text-foreground">
                  92<span className="text-base text-muted-foreground">/100</span>
                </p>
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-sm bg-accent">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "92%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-signal"
                  />
                </div>
              </div>

              {/* Active recon */}
              <div className="rounded-sm border border-border bg-surface p-4">
                <span className="text-mono-label text-[10px] text-muted-foreground">
                  Active Recon
                </span>
                <p className="mt-3 flex items-center gap-2 font-heading text-3xl font-semibold text-foreground">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-signal" />
                  47
                </p>
                <p className="mt-3 text-[11px] text-muted-foreground">
                  Streams synchronisiert
                </p>
              </div>

              {/* Target list */}
              <div className="col-span-2 rounded-sm border border-border bg-surface p-4">
                <span className="text-mono-label text-[10px] text-muted-foreground">
                  Target Exposure
                </span>
                <div className="mt-3 space-y-2.5">
                  {TARGETS.map((t) => (
                    <div key={t.name} className="flex items-center gap-3">
                      <Crosshair className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                      <span className="w-36 truncate text-xs text-foreground">{t.name}</span>
                      <div className="h-1.5 flex-1 overflow-hidden rounded-sm bg-accent">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${t.score}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, ease: "easeOut" }}
                          className="h-full bg-signal/80"
                        />
                      </div>
                      <span className="w-16 text-right text-mono-label text-[9px] text-muted-foreground">
                        {t.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const FEATURES = [
  {
    icon: Crosshair,
    label: "Target Vulnerability Scoring",
    desc: "Echtzeit-Bewertung jeder Schwachstelle im Wettbewerbsumfeld.",
  },
  {
    icon: Activity,
    label: "Liquidity & Flow Tracking",
    desc: "Verfolgen Sie Kapital- und Aufmerksamkeitsströme bevor sie sichtbar werden.",
  },
]
