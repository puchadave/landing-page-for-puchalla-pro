"use client"

import { useMemo, useState } from "react"
import { ArrowUpRight, Award, BriefcaseBusiness, FlaskConical, GraduationCap, Network, Wrench } from "lucide-react"
import { certificates } from "@/data/certificates"
import {
  additionalQualificationEntries,
  careerEntries,
  educationEntries,
  profileIdentity,
  researchEntries,
  skillEntries,
  type ProfileGraphEntry,
} from "@/data/profile-graph"

type GraphView = "overview" | "career" | "education" | "qualifications" | "skills" | "research"

type GraphNode = ProfileGraphEntry & {
  kind: Exclude<GraphView, "overview"> | "person" | "hub"
}

const VIEW_META: Record<Exclude<GraphView, "overview">, { label: string; description: string }> = {
  career: { label: "Werdegang", description: "Berufliche Stationen aus dem CV" },
  education: { label: "Ausbildung", description: "Formale Ausbildung und Berufsabschluss" },
  qualifications: { label: "Qualifikationen", description: "Dokumentierte Zertifikate und Nachweise" },
  skills: { label: "Kompetenzen", description: "Technische, analytische und kommerzielle Kompetenzfelder" },
  research: { label: "Research & Projekte", description: "Research-Outputs und persistente Profile" },
}

const VIEW_ICONS = {
  career: BriefcaseBusiness,
  education: GraduationCap,
  qualifications: Award,
  skills: Wrench,
  research: FlaskConical,
}

function toQualificationNodes(): GraphNode[] {
  const documentedCertificates = certificates.map((certificate, index) => ({
    id: `qualification-${index}`,
    title: certificate.title,
    subtitle: certificate.issuer,
    period: certificate.date,
    detail: certificate.credentialId
      ? `Kategorie: ${certificate.category}. Credential-ID: ${certificate.credentialId}`
      : `Kategorie: ${certificate.category}.`,
    href: certificate.url,
    kind: "qualifications" as const,
  }))

  const additional = additionalQualificationEntries.map((entry) => ({ ...entry, kind: "qualifications" as const }))
  return [...additional, ...documentedCertificates]
}

function getViewNodes(view: Exclude<GraphView, "overview">): GraphNode[] {
  if (view === "career") return careerEntries.map((entry) => ({ ...entry, kind: view }))
  if (view === "education") return educationEntries.map((entry) => ({ ...entry, kind: view }))
  if (view === "skills") return skillEntries.map((entry) => ({ ...entry, kind: view }))
  if (view === "research") return researchEntries.map((entry) => ({ ...entry, kind: view }))
  return toQualificationNodes()
}

function GraphCard({ node, selected, onSelect }: { node: GraphNode; selected: boolean; onSelect: () => void }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`h-full w-full rounded-md border px-4 py-3 text-left transition-colors ${
        selected
          ? "border-signal bg-signal/10 shadow-lg shadow-signal/10"
          : "border-border bg-card/95 hover:border-signal/60"
      }`}
    >
      <div className="text-[11px] font-semibold leading-4 text-foreground">{node.title}</div>
      {node.subtitle ? <div className="mt-1 text-[10px] leading-4 text-muted-foreground">{node.subtitle}</div> : null}
      {node.period ? <div className="mt-1 font-mono text-[9px] text-signal">{node.period}</div> : null}
    </button>
  )
}

export function ProfileGraph() {
  const [view, setView] = useState<GraphView>("overview")
  const [selectedId, setSelectedId] = useState(profileIdentity.id)

  const qualificationCount = certificates.length + additionalQualificationEntries.length
  const counts = useMemo(
    () => ({
      career: careerEntries.length,
      education: educationEntries.length,
      qualifications: qualificationCount,
      skills: skillEntries.length,
      research: researchEntries.length,
    }),
    [qualificationCount],
  )

  const activeNodes = useMemo(() => {
    if (view === "overview") return []
    return getViewNodes(view)
  }, [view])

  const selectedNode = useMemo<GraphNode>(() => {
    if (selectedId === profileIdentity.id) return { ...profileIdentity, kind: "person" }
    const found = activeNodes.find((node) => node.id === selectedId)
    return found ?? { ...profileIdentity, kind: "person" }
  }, [activeNodes, selectedId])

  const setActiveView = (nextView: GraphView) => {
    setView(nextView)
    setSelectedId(profileIdentity.id)
  }

  const overviewHubs = (Object.keys(VIEW_META) as Array<Exclude<GraphView, "overview">>).map((key) => ({
    key,
    ...VIEW_META[key],
    count: counts[key],
  }))

  const columns = 4
  const itemWidth = 250
  const itemHeight = 88
  const columnGap = 42
  const rowGap = 42
  const startX = 54
  const startY = 350
  const rows = Math.max(1, Math.ceil(activeNodes.length / columns))
  const canvasHeight = view === "overview" ? 690 : Math.max(690, startY + rows * (itemHeight + rowGap) + 40)
  const hubX = 540
  const hubY = 205

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Profilgraph filtern">
        <button
          type="button"
          onClick={() => setActiveView("overview")}
          className={`rounded-sm border px-3 py-2 text-xs font-semibold ${
            view === "overview" ? "border-signal bg-signal/10 text-foreground" : "border-border bg-card text-muted-foreground"
          }`}
        >
          Übersicht
        </button>
        {(Object.keys(VIEW_META) as Array<Exclude<GraphView, "overview">>).map((key) => {
          const Icon = VIEW_ICONS[key]
          return (
            <button
              key={key}
              type="button"
              onClick={() => setActiveView(key)}
              className={`inline-flex items-center gap-2 rounded-sm border px-3 py-2 text-xs font-semibold ${
                view === key ? "border-signal bg-signal/10 text-foreground" : "border-border bg-card text-muted-foreground"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              {VIEW_META[key].label}
              <span className="font-mono text-[10px] text-signal">{counts[key]}</span>
            </button>
          )
        })}
      </div>

      <div className="mt-5 overflow-x-auto rounded-md border border-border bg-background">
        <svg
          viewBox={`0 0 1280 ${canvasHeight}`}
          className="min-w-[1080px]"
          style={{ width: "100%", height: "auto" }}
          role="img"
          aria-label="Interaktiver Knowledge Graph aus Lebenslauf, Qualifikationen, Kompetenzen und Research-Projekten"
        >
          <defs>
            <pattern id="profile-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.12" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#profile-grid)" className="text-muted-foreground" />

          {view === "overview" ? (
            <>
              {overviewHubs.map((hub, index) => {
                const positions = [
                  { x: 80, y: 350 },
                  { x: 330, y: 460 },
                  { x: 515, y: 545 },
                  { x: 765, y: 460 },
                  { x: 950, y: 350 },
                ]
                const pos = positions[index]
                return (
                  <g key={hub.key}>
                    <line x1="640" y1="145" x2={pos.x + 125} y2={pos.y} stroke="currentColor" strokeWidth="1.5" className="text-border" />
                    <foreignObject x={pos.x} y={pos.y} width="250" height="105">
                      <button
                        type="button"
                        onClick={() => setActiveView(hub.key)}
                        className="h-full w-full rounded-md border border-border bg-card/95 px-5 py-4 text-left transition-colors hover:border-signal/70 hover:bg-signal/5"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="text-xs font-semibold text-foreground">{hub.label}</div>
                            <div className="mt-1 text-[10px] leading-4 text-muted-foreground">{hub.description}</div>
                          </div>
                          <div className="font-mono text-lg font-semibold text-signal">{hub.count}</div>
                        </div>
                      </button>
                    </foreignObject>
                  </g>
                )
              })}
            </>
          ) : (
            <>
              <line x1="640" y1="145" x2="640" y2={hubY} stroke="currentColor" strokeWidth="1.5" className="text-border" />
              {activeNodes.map((node, index) => {
                const col = index % columns
                const row = Math.floor(index / columns)
                const x = startX + col * (itemWidth + columnGap)
                const y = startY + row * (itemHeight + rowGap)
                return (
                  <line
                    key={`edge-${node.id}`}
                    x1="640"
                    y1={hubY + 82}
                    x2={x + itemWidth / 2}
                    y2={y}
                    stroke="currentColor"
                    strokeWidth="1.2"
                    className="text-border"
                  />
                )
              })}

              <foreignObject x={hubX} y={hubY} width="200" height="82">
                <button
                  type="button"
                  onClick={() => setSelectedId(profileIdentity.id)}
                  className="h-full w-full rounded-md border border-signal/60 bg-signal/10 px-4 py-3 text-center"
                >
                  <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-signal">Relation cluster</div>
                  <div className="mt-2 text-xs font-semibold text-foreground">{VIEW_META[view].label}</div>
                  <div className="mt-1 text-[10px] text-muted-foreground">{activeNodes.length} Knoten</div>
                </button>
              </foreignObject>

              {activeNodes.map((node, index) => {
                const col = index % columns
                const row = Math.floor(index / columns)
                const x = startX + col * (itemWidth + columnGap)
                const y = startY + row * (itemHeight + rowGap)
                return (
                  <foreignObject key={node.id} x={x} y={y} width={itemWidth} height={itemHeight}>
                    <GraphCard node={node} selected={selectedNode.id === node.id} onSelect={() => setSelectedId(node.id)} />
                  </foreignObject>
                )
              })}
            </>
          )}

          <foreignObject x="500" y="38" width="280" height="107">
            <button
              type="button"
              onClick={() => setSelectedId(profileIdentity.id)}
              className={`h-full w-full rounded-md border px-5 py-4 text-center transition-colors ${
                selectedNode.id === profileIdentity.id ? "border-signal bg-signal/10" : "border-border bg-card/95 hover:border-signal/60"
              }`}
            >
              <div className="flex items-center justify-center gap-2 text-signal">
                <Network className="h-4 w-4" />
                <span className="font-mono text-[9px] uppercase tracking-[0.16em]">Profile root</span>
              </div>
              <div className="mt-2 text-sm font-semibold text-foreground">{profileIdentity.title}</div>
              <div className="mt-1 text-[10px] leading-4 text-muted-foreground">{profileIdentity.subtitle}</div>
            </button>
          </foreignObject>
        </svg>
      </div>

      <section className="mt-5 rounded-md border border-border bg-card p-6" aria-live="polite">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal">Selected node</p>
            <h3 className="mt-2 text-lg font-semibold text-foreground">{selectedNode.title}</h3>
            {selectedNode.subtitle ? <p className="mt-1 text-sm text-muted-foreground">{selectedNode.subtitle}</p> : null}
            {selectedNode.period ? <p className="mt-2 font-mono text-xs text-signal">{selectedNode.period}</p> : null}
            <p className="mt-4 max-w-3xl text-sm leading-6 text-muted-foreground">{selectedNode.detail}</p>
          </div>
          {selectedNode.href ? (
            <a
              href={selectedNode.href}
              target={selectedNode.href.startsWith("http") ? "_blank" : undefined}
              rel={selectedNode.href.startsWith("http") ? "noreferrer" : undefined}
              className="inline-flex shrink-0 items-center gap-2 rounded-sm border border-border bg-background px-4 py-2 text-xs font-semibold hover:border-signal/60"
            >
              Quelle öffnen <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          ) : null}
        </div>
      </section>
    </div>
  )
}
