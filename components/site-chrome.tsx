"use client"

import { useEffect, useState } from "react"

const LINKS = [
  { href: "/", label: "Portfolio" },
  { href: "/certificates/", label: "Zertifikate" },
  { href: "/research/", label: "Research" },
  { href: "/products/", label: "Produkte" },
  { href: "https://github.com/puchadave", label: "GitHub", external: true },
]

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
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "border-b border-transparent bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="/" className="flex items-center gap-2.5" aria-label="puchalla.pro Startseite">
          <span className="flex h-7 w-7 items-center justify-center rounded-sm border border-border bg-surface">
            <span className="h-2 w-2 rounded-full bg-signal" />
          </span>
          <span className="font-heading text-sm font-semibold tracking-tight text-foreground">
            puchalla<span className="text-signal">.pro</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Hauptnavigation">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              className="text-mono-label text-[11px] text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://www.linkedin.com/in/davidpuchalla/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-sm border border-border bg-surface px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:border-signal/60"
        >
          Kontakt
        </a>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-sm border border-border bg-surface">
              <span className="h-2 w-2 rounded-full bg-signal" />
            </span>
            <span className="font-heading text-sm font-semibold tracking-tight text-foreground">
              puchalla<span className="text-signal">.pro</span>
            </span>
          </div>
          <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
            Portfolio, Systemarchitektur, verifizierte Qualifikationen und das wissenschaftliche Profil des webOwie Research Lab.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-5 text-xs text-muted-foreground">
          <a href="https://orcid.org/0009-0002-0223-0929" target="_blank" rel="me noreferrer" className="hover:text-foreground">ORCID</a>
          <a href="https://github.com/puchadave" target="_blank" rel="noreferrer" className="hover:text-foreground">GitHub</a>
          <a href="/certificates/" className="hover:text-foreground">Zertifikate</a>
          <a href="/research/" className="hover:text-foreground">Research</a>
        </div>
      </div>
      <div className="border-t border-border px-6 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} puchalla.pro · Systems. Strategies. Control.
      </div>
    </footer>
  )
}
