"use client"

import { motion } from "motion/react"
import { useState, type FormEvent } from "react"
import { ArrowRight, Check, Lock } from "lucide-react"

const FIELDS = [
  { id: "name", label: "Name", type: "text", placeholder: "Max Mustermann", autoComplete: "name" },
  { id: "email", label: "Corporate E-Mail", type: "email", placeholder: "name@unternehmen.com", autoComplete: "email" },
  { id: "company", label: "Company Name", type: "text", placeholder: "Unternehmen GmbH", autoComplete: "organization" },
  { id: "phone", label: "Phone", type: "tel", placeholder: "+49 ...", autoComplete: "tel" },
] as const

export function ContactClose() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="kontakt" className="relative isolate overflow-hidden py-28">
      <div aria-hidden className="absolute inset-0 bg-cyber-grid opacity-40" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 70% at 50% 100%, rgba(27,140,255,0.08), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center">
          <span className="text-mono-label text-xs text-signal">
            // Letzte Instanz
          </span>
          <h2 className="mt-4 text-balance font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Die meisten reagieren auf den Markt. Sie werden ihn diktieren.
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            Wir nehmen eine begrenzte Anzahl an Mandaten an. Fordern Sie Ihre
            Analyse an — diskret, präzise und ohne Verpflichtung.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 rounded-md border border-border bg-card p-7 sm:p-9"
        >
          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-12 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-sm border border-signal/50 bg-surface text-signal signal-glow">
                <Check className="h-6 w-6" />
              </span>
              <h3 className="font-heading text-2xl font-semibold text-foreground">
                Anfrage verschlüsselt übermittelt.
              </h3>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                Ihr Dossier wird vorbereitet. Ein Stratege meldet sich innerhalb
                von 24 Stunden über einen gesicherten Kanal.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {FIELDS.map((f) => (
                <div key={f.id} className={f.id === "name" || f.id === "email" ? "sm:col-span-1" : "sm:col-span-1"}>
                  <label
                    htmlFor={f.id}
                    className="mb-2 block text-mono-label text-[10px] text-muted-foreground"
                  >
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    name={f.id}
                    type={f.type}
                    required
                    autoComplete={f.autoComplete}
                    placeholder={f.placeholder}
                    className="w-full rounded-sm border border-input bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors duration-200 placeholder:text-muted-foreground/50 focus:border-signal focus:bg-surface-2"
                  />
                </div>
              ))}

              <button
                type="submit"
                className="group sm:col-span-2 mt-2 inline-flex items-center justify-center gap-2 rounded-sm bg-signal px-7 py-4 text-sm font-semibold tracking-wide text-signal-foreground transition-all duration-200 hover:signal-glow hover:brightness-110"
              >
                Dominanz sichern
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <p className="sm:col-span-2 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Lock className="h-3 w-3" />
                Ende-zu-Ende verschlüsselt · Keine Datenweitergabe an Dritte
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
