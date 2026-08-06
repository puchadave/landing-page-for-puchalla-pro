"use client"

import { useMemo, useState } from "react"
import { Search, SlidersHorizontal } from "lucide-react"

export type Product = {
  sku: string
  name: string
  category: string
  description: string
  manufacturer?: string
  unit?: string
  image?: string
  datasheet?: string
  inquiryUrl?: string
  tags?: string[]
}

export function ProductCatalog({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("Alle")

  const categories = useMemo(
    () => ["Alle", ...Array.from(new Set(products.map((product) => product.category))).sort()],
    [products],
  )

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return products.filter((product) => {
      const categoryMatches = category === "Alle" || product.category === category
      const searchMatches =
        !needle ||
        [
          product.sku,
          product.name,
          product.category,
          product.description,
          product.manufacturer,
          ...(product.tags ?? []),
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
          .includes(needle)
      return categoryMatches && searchMatches
    })
  }, [category, products, query])

  return (
    <div>
      <div className="grid gap-4 rounded-md border border-border bg-card p-5 md:grid-cols-[1fr_260px]">
        <label className="relative block">
          <Search className="pointer-events-none absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
          <span className="sr-only">Produkte durchsuchen</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Name, Artikelnummer, Hersteller oder Stichwort"
            className="h-11 w-full rounded-sm border border-border bg-background pl-10 pr-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-signal"
          />
        </label>

        <label className="relative block">
          <SlidersHorizontal className="pointer-events-none absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
          <span className="sr-only">Kategorie auswählen</span>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="h-11 w-full appearance-none rounded-sm border border-border bg-background pl-10 pr-4 text-sm outline-none transition-colors focus:border-signal"
          >
            {categories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-5 flex items-center justify-between text-sm text-muted-foreground">
        <span>{filtered.length} von {products.length} Produkten</span>
        <a href="/products-template.csv" download className="text-signal hover:underline">
          CSV-Vorlage laden
        </a>
      </div>

      {products.length === 0 ? (
        <div className="mt-8 rounded-md border border-dashed border-border bg-card px-6 py-16 text-center">
          <h2 className="text-xl font-semibold">Produktdatenbank ist vorbereitet.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
            Es wurden noch keine realen Produktdaten importiert. Lege die Produktliste als CSV ab und führe
            <code className="mx-1 rounded bg-surface px-1.5 py-0.5 text-foreground">npm run import:products -- data/products.csv</code>
            aus. Der Build übernimmt danach Suche, Kategorien und Produktkarten automatisch.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((product) => (
            <article key={product.sku} className="flex flex-col rounded-md border border-border bg-card p-6">
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-sm border border-border bg-surface px-2 py-1 font-mono text-[11px] text-muted-foreground">
                  {product.sku}
                </span>
                <span className="text-right text-xs text-signal">{product.category}</span>
              </div>
              <h2 className="mt-5 text-xl font-semibold">{product.name}</h2>
              <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{product.description}</p>
              <dl className="mt-6 grid grid-cols-2 gap-3 border-t border-border pt-5 text-xs">
                <div>
                  <dt className="text-muted-foreground">Hersteller</dt>
                  <dd className="mt-1 text-foreground">{product.manufacturer || "Auf Anfrage"}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Einheit</dt>
                  <dd className="mt-1 text-foreground">{product.unit || "Auf Anfrage"}</dd>
                </div>
              </dl>
              <div className="mt-6 flex gap-3">
                {product.datasheet && (
                  <a href={product.datasheet} className="rounded-sm border border-border px-3 py-2 text-xs font-semibold hover:border-signal/60">
                    Datenblatt
                  </a>
                )}
                <a
                  href={product.inquiryUrl || "https://www.linkedin.com/in/davidpuchalla/"}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-sm bg-signal px-3 py-2 text-xs font-semibold text-white"
                >
                  Produkt anfragen
                </a>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
