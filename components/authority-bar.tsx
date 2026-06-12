"use client"

const ITEMS = [
  "OSINT-Driven",
  "SOCMINT Audited",
  "HUMINT Profiling",
  "Zero-Trust Architecture",
  "SEO Synergy Core",
  "Behavioral Analytics",
  "Encrypted Pipelines",
  "Liquidity Tracking",
]

export function AuthorityBar() {
  return (
    <section
      aria-label="Kernkompetenzen"
      className="relative overflow-hidden border-b border-border bg-card py-7"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-card to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-card to-transparent" />

      <div className="flex w-max animate-[marquee_38s_linear_infinite] gap-12 pr-12">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center gap-3 text-mono-label text-xs text-muted-foreground/80"
          >
            <span className="h-1 w-1 rounded-full bg-signal/70" />
            {item}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
