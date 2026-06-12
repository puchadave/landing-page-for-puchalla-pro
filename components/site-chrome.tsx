"use client"

import { useState, useEffect } from "react"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-sm border border-border bg-surface">
            <span className="h-2 w-2 rounded-full bg-signal" />
          </span>
          <span className="font-heading text-sm font-semibold tracking-tight text-foreground">
            puchalla<span className="text-signal">.pro</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-mono-label text-[11px] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#kontakt"
          className="inline-flex items-center rounded-sm border border-border bg-surface px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:border-signal/60"
        >
          Analyse anfordern
        </a>
      </div>
    </header>
  )
}

const LINKS = [
  { href: "#systeme", label: "Systeme" },
  { href: "#kontakt", label: "Kontakt" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center lg:px-8">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-sm border border-border bg-surface">
            <span className="h-2 w-2 rounded-full bg-signal" />
          </span>
          <span className="font-heading text-sm font-semibold tracking-tight text-foreground">
            puchalla<span className="text-signal">.pro</span>
          </span>
        </div>
        <p className="text-mono-label text-[10px] text-muted-foreground">
          Systems · Strategies · Control
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} puchalla.pro — Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  )
}
