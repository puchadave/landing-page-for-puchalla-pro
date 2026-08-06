import type { Metadata } from "next"
import { ProductCatalog, type Product } from "@/components/product-catalog"
import { SiteFooter, SiteHeader } from "@/components/site-chrome"
import productsData from "@/data/products.json"

export const metadata: Metadata = {
  title: "B2B-Produktkatalog",
  description: "Durchsuchbarer B2B-Produktkatalog mit Artikelnummern, Kategorien, technischen Daten und Anfragefunktion.",
}

const products = productsData as Product[]

export default function ProductsPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <p className="text-mono-label text-xs text-signal">// Procurement catalog</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">B2B-Produktkatalog</h1>
            <p className="mt-5 max-w-3xl leading-7 text-muted-foreground">
              Produkte nach Artikelnummer, Kategorie, Hersteller und technischen Stichwörtern filtern. Preise und Verfügbarkeit werden bewusst nicht als statische Behauptungen veröffentlicht, sondern im Rahmen der konkreten B2B-Anfrage bestätigt.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <ProductCatalog products={products} />
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
