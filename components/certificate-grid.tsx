"use client"

import { useMemo, useState } from "react"
import { ArrowUpRight, Search } from "lucide-react"
import { certificates } from "@/data/certificates"

const categories = ["All", ...Array.from(new Set(certificates.map((item) => item.category)))]

export function CertificateGrid() {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("All")

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase()

    return certificates.filter((item) => {
      const matchesCategory = category === "All" || item.category === category
      const haystack = [item.title, item.issuer, item.category, item.date, item.credentialId]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()

      return matchesCategory && (!normalized || haystack.includes(normalized))
    })
  }, [category, query])

  return (
    <div>
      <div className="grid gap-4 rounded-md border border-border bg-card p-5 md:grid-cols-[1fr_auto] md:items-center">
        <label className="relative block">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Zertifikat, Anbieter oder ID suchen"
            className="w-full rounded-sm border border-border bg-background py-3 pl-10 pr-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-signal"
          />
        </label>

        <div className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`rounded-sm border px-3 py-2 text-xs font-semibold transition-colors ${
                category === item
                  ? "border-signal bg-signal text-white"
                  : "border-border bg-surface text-muted-foreground hover:text-foreground"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
        <span>{filtered.length} Nachweise</span>
        <span>Metadaten versioniert im Repository</span>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((item) => (
          <article key={`${item.title}-${item.url}`} className="flex min-h-72 flex-col rounded-md border border-border bg-card p-6">
            <div className="flex items-start justify-between gap-4">
              <span className="rounded-sm border border-border bg-surface px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-signal">
                {item.category}
              </span>
              <span className="text-right font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {item.source}
              </span>
            </div>

            <h2 className="mt-5 text-xl font-semibold tracking-tight">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.issuer}</p>
            <p className="mt-2 text-xs text-muted-foreground">{item.date}</p>

            {item.credentialId ? (
              <div className="mt-5 rounded-sm border border-border bg-background p-3">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Credential ID</div>
                <div className="mt-2 break-all font-mono text-[11px] leading-5 text-foreground">{item.credentialId}</div>
              </div>
            ) : null}

            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-signal"
            >
              Nachweis öffnen <ArrowUpRight className="h-4 w-4" />
            </a>
          </article>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="mt-8 rounded-md border border-dashed border-border bg-card px-6 py-14 text-center text-sm text-muted-foreground">
          Kein Nachweis passt zu diesem Filter. Selbst Datenbanken verweigern gelegentlich die Kooperation.
        </div>
      ) : null}
    </div>
  )
}
