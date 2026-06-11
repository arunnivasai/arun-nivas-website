/**
 * app/ai-projects/page.tsx — AI Projects Page
 * ──────────────────────────────────────────────────────────────────────────
 * Positioning: Business-first. Systems thinker. AI-enabled operator.
 * Signature headline: "Built to run. Not to impress."
 *
 * CORRECTIVE PASS — all event handlers and browser APIs removed:
 *   - onMouseEnter / onMouseLeave → CSS :hover via Tailwind + CSS variables
 *   - onClick + document.getElementById + scrollIntoView → plain <a href="#id">
 *   - id props on AnimateOnScroll → forwarded via updated id prop
 *   - article hover → Tailwind group + CSS hover utilities
 *
 * Sections (approved order):
 *   1. Hero                 — Dark full-viewport, architecture visual, system pills
 *   2. What These Solve     — Three before→after problem statements
 *   3. Business Outcomes    — Four outcome cards (dark strip)
 *   4. Five AI Systems      — Full-depth: Problem · How It Works · What It Produces
 *   5. Tech Stack           — Three-layer architecture (dark)
 *   6. Design Philosophy    — Three numbered principles (white)
 *   7. What's Being Built   — Roadmap: in-progress + planned (gray)
 *   8. CTA                  — Split: services + portfolio navigation (dark)
 *
 * Architecture: Server Component — no browser APIs, no event handlers,
 * no client-only behaviour. Verified clean.
 */

import type { Metadata } from 'next'
import Link from 'next/link'

import Button from '@/components/ui/Button'
import SectionHeader from '@/components/ui/SectionHeader'
import GradientText from '@/components/ui/GradientText'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

import { siteConfig } from '@/lib/site-config'
import {
  aiSystems,
  techLayers,
  designPhilosophy,
  nextSystems,
} from '@/lib/data/ai-projects'

// ── Page metadata ────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'AI Projects',
  description:
    `Five production AI systems built by ${siteConfig.name} — covering market research, ` +
    'competitive intelligence, lead generation, marketing automation, and personal branding. ' +
    'Built on n8n, OpenAI API, and Python to solve specific business problems.',
}

// ── Color identity map ────────────────────────────────────────────────────
// colorKey → CSS values used in inline styles where Tailwind cannot help
// (dynamic gradient strings, rgba values that vary per-system).
// Hover effects use Tailwind group utilities where possible; only the
// system-specific color values that cannot be expressed as static classes
// remain as inline styles.
const systemColors: Record<string, {
  accent: string
  border: string
  text:   string
  bar:    string
}> = {
  research:   { accent: 'rgba(79,70,229,0.10)',   border: 'rgba(79,70,229,0.25)',   text: '#818CF8', bar: 'linear-gradient(90deg,#4F46E5,#6366F1)' },
  competitor: { accent: 'rgba(8,145,178,0.10)',    border: 'rgba(8,145,178,0.25)',    text: '#22D3EE', bar: 'linear-gradient(90deg,#0891B2,#06B6D4)' },
  leadgen:    { accent: 'rgba(16,185,129,0.10)',   border: 'rgba(16,185,129,0.25)',   text: '#34D399', bar: 'linear-gradient(90deg,#10B981,#059669)' },
  automation: { accent: 'rgba(124,58,237,0.10)',   border: 'rgba(124,58,237,0.25)',   text: '#A78BFA', bar: 'linear-gradient(90deg,#7C3AED,#9333EA)' },
  branding:   { accent: 'rgba(245,158,11,0.10)',   border: 'rgba(245,158,11,0.25)',   text: '#FCD34D', bar: 'linear-gradient(90deg,#F59E0B,#FBBF24)' },
}

// ── Inline SVG icons ──────────────────────────────────────────────────────
function ArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Check({ color }: { color: string }) {
  return (
    <svg width="8" height="8" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <polyline points="1.5,5 4,7.5 8.5,2.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArrowDown({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <path d="M7.5 2.5v10M3 9l4.5 4.5L12 9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ── Page-level static content ─────────────────────────────────────────────
const problemSolutions = [
  {
    num:      'Problem 01',
    problem:  'Research takes days. Competitive and market intelligence requires hours of manual source-gathering, synthesis, and formatting before it\'s usable.',
    bold:     'Research takes days.',
    solution: 'AI Research + Competitor Systems',
    sub:      'Hours → Structured intelligence',
  },
  {
    num:      'Problem 02',
    problem:  'Pipeline is inconsistent and manual. Prospecting, qualifying, and reaching out to leads requires repetitive effort that doesn\'t scale with team size.',
    bold:     'Pipeline is inconsistent and manual.',
    solution: 'AI Lead Generation System',
    sub:      'Manual effort → Automated pipeline',
  },
  {
    num:      'Problem 03',
    problem:  'Content and marketing workflows are repetitive. Creating, distributing, and maintaining consistent brand output requires time that compounds weekly.',
    bold:     'Content and marketing workflows are repetitive.',
    solution: 'AI Marketing Automation + Branding',
    sub:      'Repetitive work → Automated systems',
  },
]

const businessOutcomes = [
  {
    from:    'Slow research',
    to:      'Research faster',
    title:   'Compress Research Timelines',
    desc:    'Market and competitive research that previously required days of manual effort is compressed into structured, decision-ready output delivered in hours.',
    gradBar: 'linear-gradient(90deg,#4F46E5,#6366F1)',
  },
  {
    from:    'Inconsistent pipeline',
    to:      'Better leads',
    title:   'Generate Better Leads',
    desc:    'Automated prospect discovery and qualification that surfaces the right opportunities continuously — improving targeting precision without increasing manual overhead.',
    gradBar: 'linear-gradient(90deg,#10B981,#059669)',
  },
  {
    from:    'Manual repetition',
    to:      'Automated work',
    title:   'Automate Repetitive Work',
    desc:    'Marketing workflows that follow predictable patterns — content generation, distribution, reporting, outreach — are automated end-to-end, freeing capacity for higher-order work.',
    gradBar: 'linear-gradient(90deg,#7C3AED,#9333EA)',
  },
  {
    from:    'Data without insight',
    to:      'Better decisions',
    title:   'Make Better Decisions',
    desc:    'Structured business intelligence delivered in formats that directly inform strategy — not raw data or log files, but synthesised analysis with clear implications.',
    gradBar: 'linear-gradient(90deg,#0891B2,#4F46E5)',
  },
]

// ═══════════════════════════════════════════════════════════════════════
export default function AIProjectsPage() {
  return (
    <>
      {/* ════════════════════════════════════════════════════════════
          1. HERO — Dark full-viewport
      ═══════════════════════════════════════════════════════════ */}
      <section
        aria-label="AI Systems portfolio introduction"
        className="relative min-h-[calc(100vh-4rem)] flex items-start bg-slate-950 overflow-hidden"
      >
        {/* Background grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(79,70,229,0.038) 1px, transparent 1px), ' +
              'linear-gradient(90deg, rgba(79,70,229,0.038) 1px, transparent 1px)',
            backgroundSize: '52px 52px',
          }}
          aria-hidden="true"
        />
        {/* Orbs */}
        <div
          className="absolute pointer-events-none animate-float"
          style={{ top: -80, right: -60, width: 560, height: 560, borderRadius: '50%', background: 'radial-gradient(circle, rgba(79,70,229,0.12) 0%, transparent 65%)' }}
          aria-hidden="true"
        />
        <div
          className="absolute pointer-events-none animate-float-slow"
          style={{ bottom: -120, left: -80, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 65%)' }}
          aria-hidden="true"
        />
        <div
          className="absolute left-0 right-0 h-px animate-shimmer pointer-events-none"
          style={{ top: '38%', background: 'linear-gradient(90deg, transparent, rgba(79,70,229,0.35), rgba(8,145,178,0.25), transparent)' }}
          aria-hidden="true"
        />

        <div className="relative z-10 w-full max-w-site mx-auto section-px">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-center">

            {/* Left: text */}
            <div>
              {/* Kicker */}
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 hero-anim anim-delay-100"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <span
                  className="w-[7px] h-[7px] rounded-full"
                  style={{ background: 'linear-gradient(135deg, #818CF8, #A78BFA)', boxShadow: '0 0 8px rgba(129,140,248,0.5)' }}
                  aria-hidden="true"
                />
                <span className="font-mono text-[11px] font-semibold tracking-[0.10em] uppercase text-white/40">
                  AI Systems & Automation Portfolio
                </span>
              </div>

              {/* Headline — approved, do not modify */}
              <h1
                className="font-syne font-extrabold leading-[1.04] tracking-[-0.025em] hero-anim anim-delay-200"
                style={{ fontSize: 'clamp(48px,8vw,96px)' }}
              >
                <span className="block text-white">Built to run.</span>
                <GradientText variant="white-fade">Not to impress.</GradientText>
              </h1>

              <p
                className="mt-6 text-[clamp(16px,2vw,18.5px)] leading-[1.72] text-slate-400 max-w-tight hero-anim anim-delay-300"
              >
                Five production AI systems designed around{' '}
                <strong className="text-white/75 font-semibold">specific business problems</strong> —
                research, competitive intelligence, lead generation, marketing automation, and
                personal branding. Built on{' '}
                <strong className="text-white/75 font-semibold">n8n, OpenAI API, and Python</strong> to
                solve operational constraints, not demonstrate technical capability.
              </p>

              {/* System anchor pills — plain <a> links, CSS hover via Tailwind */}
              <div className="flex flex-wrap gap-2 mt-8 hero-anim" style={{ animationDelay: '0.44s' }}>
                {aiSystems.map(sys => (
                  <a
                    key={sys.num}
                    href={`#s${sys.num}`}
                    className="font-mono text-[10.5px] font-semibold tracking-[0.06em] rounded-full px-3.5 py-[6px] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-pale"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.45)' }}
                  >
                    {sys.num} · {sys.title.replace('AI ', '').replace(' System', '').replace(' & Outreach', '')}
                  </a>
                ))}
              </div>

              {/* Hero stats */}
              <div
                className="flex flex-wrap mt-12 rounded-[14px] overflow-hidden w-fit hero-anim"
                style={{ animationDelay: '0.56s', border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)' }}
              >
                {[
                  { num: '5',    label: 'Systems Built' },
                  { num: '3',    label: 'Tech Layers' },
                  { num: '100%', label: 'Automated' },
                  { num: '∞',    label: 'Ongoing' },
                ].map((stat, i, arr) => (
                  <div
                    key={stat.label}
                    className="px-7 py-[18px] text-center"
                    style={{ borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.07)' : undefined }}
                  >
                    <div className="font-syne font-extrabold text-[26px] leading-none tracking-tight grad-text">
                      {stat.num}
                    </div>
                    <div className="font-mono text-[10px] text-white/25 mt-1 tracking-[0.06em] uppercase">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 mt-9 hero-anim" style={{ animationDelay: '0.68s' }}>
                <Button href="#systems" variant="primary">
                  Browse Systems <ArrowDown size={14} />
                </Button>
                <Button href="/services" variant="ghost-light">
                  View Services →
                </Button>
              </div>
            </div>

            {/* Right: architecture layer cards */}
            <div
              className="hidden lg:flex flex-col gap-2.5 flex-shrink-0 min-w-[240px] hero-anim"
              style={{ animationName: 'fadeIn', animationDelay: '0.4s' }}
            >
              {techLayers.map((layer, i) => (
                <div key={layer.num}>
                  <div
                    className="flex items-center gap-3 rounded-[11px] px-4 py-3.5 border transition-colors duration-200 hover:border-indigo/20"
                    style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)' }}
                  >
                    <span className="text-[18px] flex-shrink-0" aria-hidden="true">{layer.icon}</span>
                    <div>
                      <p className="font-mono text-[10px] font-semibold tracking-[0.10em] uppercase text-white/25 mb-[3px]">
                        {layer.num.split(' · ')[0]}
                      </p>
                      <p className="font-syne font-bold text-[14px] text-white/75">{layer.title}</p>
                      <p className="font-mono text-[10px] text-white/30 mt-0.5">
                        {layer.tools.slice(0, 2).join(' · ')}
                      </p>
                    </div>
                  </div>
                  {i < techLayers.length - 1 && (
                    <div className="flex justify-center my-1 text-white/20 font-mono text-[12px]" aria-hidden="true">
                      ↕
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          2. WHAT THESE SOLVE — White
      ═══════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="problems-heading"
        className="bg-white section-p"
      >
        <div className="max-w-site mx-auto">
          <AnimateOnScroll>
            <span className="section-label">What These Systems Solve</span>
            <h2
              id="problems-heading"
              className="font-syne font-extrabold text-h2 text-slate-900 leading-[1.1] tracking-tight"
            >
              Every system starts<br />with a business problem.
            </h2>
            <p className="text-lg text-gray-500 mt-3 max-w-tight leading-[1.65]">
              No tool was chosen before the problem was defined. Each system exists because a real
              operational constraint needed a structural solution — not a workaround.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1} className="mt-12">
            <div
              className="rounded-[14px] overflow-hidden"
              style={{ border: '1.5px solid #E8EAED' }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {problemSolutions.map((item, i) => (
                  <div
                    key={item.num}
                    className="p-9 bg-white hover:bg-gray-50 transition-colors duration-200"
                    style={{ borderRight: i < problemSolutions.length - 1 ? '1px solid #E8EAED' : undefined }}
                  >
                    <p className="font-mono text-[10.5px] font-semibold tracking-[0.10em] uppercase text-gray-400 mb-3.5">
                      {item.num}
                    </p>
                    <p className="text-[14px] leading-[1.55] text-slate-600 mb-5">
                      <strong className="text-slate-800 font-semibold">{item.bold}</strong>{' '}
                      {item.problem.replace(item.bold, '').trim()}
                    </p>
                    {/* Arrow divider */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, #4F46E5, #7C3AED)' }} aria-hidden="true" />
                      <span className="font-mono text-[11px] text-indigo font-semibold flex-shrink-0">solved by</span>
                    </div>
                    <p className="font-syne font-bold text-[14.5px] text-slate-900">{item.solution}</p>
                    <p className="font-mono text-[11px] text-gray-400 mt-1">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          3. BUSINESS OUTCOMES — Slate-900 strip
      ═══════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="outcomes-label"
        className="section-p-sm"
        style={{ background: '#0F172A' }}
      >
        <div className="max-w-site mx-auto">
          <AnimateOnScroll>
            <p
              id="outcomes-label"
              className="font-mono text-[10.5px] font-semibold tracking-[0.14em] uppercase text-white/30 mb-8"
            >
              Business Outcomes
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {businessOutcomes.map((outcome, i) => (
              <AnimateOnScroll key={outcome.title} delay={i * 0.08}>
                <div
                  className="rounded-[14px] p-7 group cursor-default transition-all duration-300 hover:-translate-y-[3px] relative overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  {/* Hover top bar — uses ::before pattern via CSS group + opacity */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: outcome.gradBar }}
                    aria-hidden="true"
                  />
                  <div className="mb-3">
                    <p className="font-mono text-[10.5px] font-semibold tracking-[0.08em] uppercase text-white/25 mb-2">
                      From → To
                    </p>
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-[12.5px] text-white/30 font-medium">{outcome.from}</span>
                      <span className="font-mono text-[11px] text-indigo-pale mx-0.5" aria-hidden="true">──→</span>
                      <span className="text-[12.5px] text-indigo-pale font-semibold">{outcome.to}</span>
                    </div>
                  </div>
                  <h3 className="font-syne font-extrabold text-[17px] text-white mb-2 leading-snug">
                    {outcome.title}
                  </h3>
                  <p className="text-[13px] leading-[1.65] text-slate-500">{outcome.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          4. FIVE AI SYSTEMS — Slate-950
      ═══════════════════════════════════════════════════════════ */}
      <section
        id="systems"
        aria-labelledby="systems-heading"
        className="bg-slate-950 section-p scroll-mt-16"
      >
        <div className="max-w-site mx-auto">
          <AnimateOnScroll>
            <span className="section-label-dark">Five Systems</span>
            <h2
              id="systems-heading"
              className="font-syne font-extrabold text-h2 text-white leading-[1.1] tracking-tight mt-0"
            >
              Production AI systems,<br />built for specific business problems.
            </h2>
            <p className="text-lg text-slate-400 mt-3 max-w-tight leading-[1.65]">
              Each system is designed around a defined operational constraint — and built to run
              continuously without manual intervention after deployment.
            </p>
          </AnimateOnScroll>

          {/* System cards — full-width, single column */}
          <div className="mt-12 space-y-6">
            {aiSystems.map((sys, i) => {
              const col = systemColors[sys.colorKey]
              return (
                /*
                 * id="s{num}" is placed on the AnimateOnScroll wrapper via the
                 * updated id prop — so anchor pills (#s01 etc.) scroll correctly.
                 * scroll-mt-20 clears the fixed navbar + breathing room.
                 */
                <AnimateOnScroll
                  key={sys.num}
                  delay={i * 0.06}
                  id={`s${sys.num}`}
                  className="scroll-mt-20"
                >
                  <article
                    className="rounded-[20px] overflow-hidden group transition-colors duration-300 hover:border-white/[0.14]"
                    style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)' }}
                    aria-label={sys.title}
                  >
                    {/* Gradient top bar */}
                    <div className="h-[3px] w-full" style={{ background: col.bar }} aria-hidden="true" />

                    <div className="p-9 pb-7">
                      {/* Header */}
                      <div className="grid grid-cols-[auto_1fr_auto] items-start gap-4 mb-7">
                        <div
                          className="w-[52px] h-[52px] rounded-[13px] flex items-center justify-center text-[26px] flex-shrink-0"
                          style={{ background: col.accent, border: `1px solid ${col.border}` }}
                        >
                          {sys.icon}
                        </div>
                        <div>
                          <p
                            className="font-mono text-[10.5px] font-semibold tracking-[0.10em] uppercase mb-1.5"
                            style={{ color: col.text }}
                          >
                            {sys.category}
                          </p>
                          <h3 className="font-syne font-extrabold text-[clamp(18px,2.5vw,24px)] text-white leading-snug">
                            {sys.title}
                          </h3>
                          <p className="text-[14px] text-slate-500 mt-1 italic">{sys.problemStatement}</p>
                        </div>
                        <span
                          className="font-mono text-[9.5px] font-semibold tracking-[0.08em] uppercase px-3 py-1.5 rounded-full flex-shrink-0 hidden sm:block"
                          style={{ background: 'rgba(16,185,129,0.10)', color: '#10B981', border: '1px solid rgba(16,185,129,0.20)' }}
                        >
                          Deployed
                        </span>
                      </div>

                      {/* Three-column body */}
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                        {/* Col 1: The Problem */}
                        <div>
                          <p
                            className="font-mono text-[10px] font-semibold tracking-[0.12em] uppercase text-white/25 mb-3 pb-2"
                            style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                          >
                            The Problem
                          </p>
                          <p className="text-[14px] leading-[1.70] text-slate-400">{sys.problem}</p>
                        </div>

                        {/* Col 2: How It Works */}
                        <div>
                          <p
                            className="font-mono text-[10px] font-semibold tracking-[0.12em] uppercase text-white/25 mb-3 pb-2"
                            style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                          >
                            How It Works
                          </p>
                          <div className="space-y-2">
                            {sys.flowSteps.map((step, j) => (
                              <div key={step.step}>
                                <div
                                  className="flex items-start gap-2.5 rounded-[8px] px-3.5 py-2.5"
                                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                                >
                                  <span
                                    className="font-mono text-[10px] font-semibold flex-shrink-0 mt-0.5"
                                    style={{ color: col.text }}
                                  >
                                    {step.step}
                                  </span>
                                  <span className="text-[13px] text-white/60 leading-[1.45]">
                                    {step.label}
                                  </span>
                                </div>
                                {j < sys.flowSteps.length - 1 && (
                                  <div className="flex justify-start pl-4 my-1" aria-hidden="true">
                                    <div
                                      className="w-[2px] h-3.5 rounded-[1px]"
                                      style={{ background: 'rgba(255,255,255,0.10)' }}
                                    />
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Col 3: What It Produces */}
                        <div>
                          <p
                            className="font-mono text-[10px] font-semibold tracking-[0.12em] uppercase text-white/25 mb-3 pb-2"
                            style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                          >
                            What It Produces
                          </p>
                          <ul className="space-y-2.5" role="list">
                            {sys.outcomes.map((outcome, j) => (
                              <li
                                key={j}
                                className="flex items-start gap-2 text-[13.5px] text-slate-400 leading-[1.55]"
                              >
                                <span
                                  className="flex items-center justify-center rounded-[4px] flex-shrink-0 mt-[2px]"
                                  style={{ width: 16, height: 16, background: col.accent, border: `1px solid ${col.border}` }}
                                  aria-hidden="true"
                                >
                                  <Check color={col.text} />
                                </span>
                                {outcome}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div
                      className="px-9 py-4 flex items-center justify-between flex-wrap gap-3"
                      style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
                    >
                      <div className="flex flex-wrap gap-1.5">
                        {sys.tags.map(tag => (
                          <span
                            key={tag}
                            className="font-mono text-[10.5px] px-2.5 py-[3px] rounded-[5px]"
                            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: '#94A3B8' }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={sys.serviceHref}
                        className="inline-flex items-center gap-1.5 font-bold text-[13px] transition-all duration-200 hover:gap-2.5 focus-visible:outline-none"
                        style={{ color: col.text }}
                        aria-label={`View related service for ${sys.title}`}
                      >
                        Related Service <ArrowRight size={12} />
                      </Link>
                    </div>
                  </article>
                </AnimateOnScroll>
              )
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          5. TECH STACK — Slate-900
      ═══════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="stack-heading"
        className="section-p"
        style={{ background: '#0F172A' }}
      >
        <div className="max-w-site mx-auto">
          <AnimateOnScroll>
            <span className="section-label-dark">Architecture</span>
            <h2
              id="stack-heading"
              className="font-syne font-extrabold text-h2 text-white leading-[1.1] tracking-tight mt-0"
            >
              Three layers.<br />All connected.
            </h2>
            <p className="text-lg text-slate-400 mt-3 max-w-tight leading-[1.65]">
              Every system in this portfolio is built on the same three-layer architecture —
              orchestration, intelligence, and data. The combination is what makes them
              production-grade rather than experimental.
            </p>
          </AnimateOnScroll>

          {/* Layer grid */}
          <AnimateOnScroll delay={0.1} className="mt-12">
            <div
              className="grid grid-cols-1 lg:grid-cols-3 rounded-[14px] overflow-hidden"
              style={{ border: '1px solid rgba(255,255,255,0.07)' }}
            >
              {techLayers.map((layer, i) => (
                <div
                  key={layer.num}
                  className="p-9 group cursor-default transition-colors duration-200 hover:bg-indigo/[0.06] relative"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    borderRight: i < techLayers.length - 1 ? '1px solid rgba(255,255,255,0.07)' : undefined,
                  }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: i === 0
                        ? 'linear-gradient(90deg,#4F46E5,#7C3AED)'
                        : i === 1
                          ? 'linear-gradient(90deg,#0891B2,#4F46E5)'
                          : 'linear-gradient(90deg,#059669,#0891B2)',
                    }}
                    aria-hidden="true"
                  />
                  <p className="font-mono text-[11px] font-medium text-white/20 mb-4 tracking-[0.06em]">
                    {layer.num}
                  </p>
                  <div className="text-[28px] mb-4" aria-hidden="true">{layer.icon}</div>
                  <h3 className="font-syne font-extrabold text-[17px] text-white mb-3 leading-snug">
                    {layer.title}
                  </h3>
                  <p className="text-[14px] leading-[1.68] text-slate-500 mb-5">{layer.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {layer.tools.map(tool => (
                      <span
                        key={tool}
                        className="font-mono text-[10.5px] px-2.5 py-[3px] rounded-[5px]"
                        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', color: '#94A3B8' }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Connection flow */}
          <AnimateOnScroll delay={0.12} className="mt-5">
            <div
              className="rounded-[14px] p-7"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <p className="font-mono text-[10px] font-semibold tracking-[0.12em] uppercase text-white/25 mb-4">
                How the layers connect
              </p>
              <div className="flex flex-wrap items-center gap-0">
                {[
                  'n8n orchestrates',
                  'OpenAI reasons',
                  'Sheets / Python stores',
                  'Output delivered',
                ].map((node, i, arr) => (
                  <div key={node} className="flex items-center">
                    <span
                      className="rounded-[8px] px-4 py-2.5 font-semibold text-[13px]"
                      style={{ background: 'rgba(79,70,229,0.10)', border: '1px solid rgba(79,70,229,0.20)', color: '#818CF8' }}
                    >
                      {node}
                    </span>
                    {i < arr.length - 1 && (
                      <span className="font-mono text-[12px] text-white/20 px-2.5" aria-hidden="true">
                        ──→
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-[13.5px] text-slate-500 leading-[1.65] mt-4 max-w-[720px]">
                n8n manages the sequence and routing of every step. OpenAI receives structured
                inputs and returns structured outputs. Python and Google Sheets persist, format,
                and surface those outputs to end users.{' '}
                <strong className="text-white/60 font-semibold">No layer is optional</strong> — each
                depends on the one before it. This architecture is what makes the systems
                maintainable and extensible over time.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          6. DESIGN PHILOSOPHY — White
      ═══════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="philosophy-heading"
        className="bg-white section-p"
      >
        <div className="max-w-site mx-auto">
          <AnimateOnScroll>
            <SectionHeader
              label="Design Philosophy"
              title={<span id="philosophy-heading">How I think about<br />building AI systems.</span>}
              subtitle="Three principles that run through every system in this portfolio — from the first architecture decision to the final output format."
            />
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1} className="mt-12">
            <div
              className="rounded-[14px] overflow-hidden bg-white"
              style={{ border: '1.5px solid #E8EAED' }}
              role="list"
            >
              {designPhilosophy.map((p, i) => (
                <div
                  key={p.num}
                  role="listitem"
                  className="grid grid-cols-1 sm:grid-cols-[72px_1fr_1fr] items-start gap-6 px-9 py-7 border-l-[3px] border-l-transparent transition-all duration-200 hover:bg-gray-50 hover:border-l-indigo cursor-default"
                  style={{ borderBottom: i < designPhilosophy.length - 1 ? '1px solid #E8EAED' : undefined }}
                >
                  <span className="font-mono text-[26px] font-medium text-gray-200 leading-none">
                    {p.num}
                  </span>
                  <div>
                    <p className="font-syne font-extrabold text-[17px] text-slate-900 mb-1.5 leading-snug">
                      {p.title}
                    </p>
                    <p className="font-mono text-[11.5px] font-semibold text-indigo">{p.subtitle}</p>
                  </div>
                  <p className="text-[14.5px] leading-[1.70] text-gray-500">{p.desc}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          7. WHAT'S BEING BUILT NEXT — Gray
      ═══════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="next-heading"
        className="bg-gray-50 section-p"
      >
        <div className="max-w-site mx-auto">
          <AnimateOnScroll>
            <SectionHeader
              label="Building Next"
              title={<span id="next-heading">What&rsquo;s in the pipeline.</span>}
              subtitle="The systems portfolio is an active practice, not an archive. Three new systems are in various stages of design and development."
            />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-12">
            {nextSystems.map((sys, i) => (
              <AnimateOnScroll key={sys.title} delay={i * 0.08}>
                <div className="bg-white border-[1.5px] border-border rounded-[14px] p-7 transition-all duration-300 hover:border-indigo/20 hover:-translate-y-[3px] hover:shadow-md h-full flex flex-col">
                  {/* Status */}
                  <div className="flex items-center gap-1.5 font-mono text-[10.5px] font-semibold tracking-[0.08em] uppercase mb-4">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{
                        background: sys.status === 'in-progress' ? '#F59E0B' : '#94A3B8',
                        animation: sys.status === 'in-progress' ? 'pulseAmber 1.5s infinite' : undefined,
                      }}
                      aria-hidden="true"
                    />
                    <span style={{ color: sys.status === 'in-progress' ? '#F59E0B' : '#94A3B8' }}>
                      {sys.status === 'in-progress' ? 'In Progress' : 'Planned'}
                    </span>
                  </div>

                  <h3 className="font-syne font-extrabold text-[16px] text-slate-900 mb-2.5 leading-snug">
                    {sys.title}
                  </h3>
                  <p className="text-[13.5px] leading-[1.65] text-gray-500 flex-1">{sys.desc}</p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {sys.tags.map(tag => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] px-2 py-0.5 rounded-[4px] bg-gray-100 text-slate-500 border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          8. CTA — Dark split
      ═══════════════════════════════════════════════════════════ */}
      <section
        aria-label="Call to action"
        className="bg-slate-950 section-p"
      >
        <div className="max-w-site mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">

          {/* Left: commercial */}
          <AnimateOnScroll>
            <div
              className="rounded-[14px] relative overflow-hidden flex flex-col"
              style={{
                background: 'linear-gradient(135deg, #4F46E5 0%, #5B21B6 100%)',
                padding: 'clamp(36px,5vw,52px)',
                boxShadow: '0 24px 64px rgba(79,70,229,0.25)',
                minHeight: 280,
              }}
            >
              <div
                className="absolute rounded-full pointer-events-none"
                style={{ top: -50, right: -50, width: 220, height: 220, background: 'rgba(255,255,255,0.07)' }}
                aria-hidden="true"
              />
              <div className="relative z-10 flex flex-col flex-1">
                <p className="font-mono text-[10.5px] tracking-[0.12em] uppercase text-white/40 mb-4">
                  From Systems to Services
                </p>
                <h2 className="font-syne font-extrabold text-[clamp(20px,3vw,32px)] text-white leading-[1.12] tracking-tight">
                  These systems are available as services.
                </h2>
                <p className="text-[15px] text-white/60 mt-3 leading-[1.65] flex-1">
                  Every system on this page has a corresponding service offering — adapted to
                  your business context and deployed to your operational environment.
                </p>
                <div className="flex flex-wrap gap-2.5 mt-7">
                  <Button href="/services" variant="white-sm">
                    Explore Services <ArrowRight size={13} />
                  </Button>
                  <Button href="/contact" variant="ghost-white-sm">
                    Get In Touch →
                  </Button>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right: portfolio navigation */}
          <AnimateOnScroll delay={0.12}>
            <div
              className="rounded-[14px] flex flex-col"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                padding: 'clamp(36px,5vw,52px)',
                minHeight: 280,
              }}
            >
              <div className="flex-1">
                <h3 className="font-syne font-extrabold text-[clamp(20px,2.8vw,26px)] text-white leading-snug mb-2.5">
                  Explore the rest<br />of the portfolio.
                </h3>
                <p className="text-[14.5px] text-slate-500 leading-[1.68]">
                  The AI systems are one part of a broader body of work spanning strategic
                  analysis, marketing, and the {siteConfig.frameworkName} framework.
                </p>
              </div>
              <div className="mt-7 space-y-2.5">
                {[
                  { label: `${siteConfig.frameworkName} — Strategic Framework`, href: '/jarvis' },
                  { label: 'Full Portfolio — All Work',                          href: '/portfolio' },
                  { label: 'About — The Person Behind the Work',                 href: '/about' },
                ].map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between rounded-[10px] px-4 py-3.5 transition-colors duration-200 hover:bg-indigo/[0.10] hover:border-indigo/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-pale"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    <span className="text-[14px] font-semibold text-white/75">{link.label}</span>
                    <ArrowRight size={12} />
                  </Link>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

        </div>
      </section>
    </>
  )
}
