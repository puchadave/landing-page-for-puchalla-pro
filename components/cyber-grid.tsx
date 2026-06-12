"use client"

import { motion } from "motion/react"

export function CyberGrid() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Panning tactical grid */}
      <div className="absolute inset-0 bg-cyber-grid animate-grid-pan opacity-70" />

      {/* Radial vignette to focus the center */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, transparent 35%, var(--background) 78%)",
        }}
      />

      {/* Animated data nodes */}
      <div className="absolute inset-0">
        {NODES.map((n, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-signal"
            style={{ left: `${n.x}%`, top: `${n.y}%` }}
            animate={{ opacity: [0.15, 1, 0.15], scale: [1, 1.6, 1] }}
            transition={{
              duration: n.d,
              repeat: Number.POSITIVE_INFINITY,
              delay: n.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Connecting trace lines */}
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <motion.line
          x1="12%" y1="22%" x2="48%" y2="40%"
          stroke="var(--signal)" strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.4, 0] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.line
          x1="88%" y1="18%" x2="60%" y2="52%"
          stroke="var(--signal)" strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.35, 0] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.5 }}
        />
      </svg>
    </div>
  )
}

const NODES = [
  { x: 12, y: 22, d: 4, delay: 0 },
  { x: 48, y: 40, d: 5, delay: 0.6 },
  { x: 88, y: 18, d: 4.5, delay: 1.1 },
  { x: 60, y: 52, d: 6, delay: 0.3 },
  { x: 30, y: 68, d: 5.5, delay: 1.8 },
  { x: 78, y: 72, d: 4.2, delay: 0.9 },
  { x: 18, y: 50, d: 5, delay: 2.2 },
]
