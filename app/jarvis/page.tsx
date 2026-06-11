/**
 * app/jarvis/page.tsx — Marketing J.A.R.V.I.S. Framework Page
 * ──────────────────────────────────────────────────────────────────────────
 * This is the signature intellectual property page of the entire site.
 * Design register: strategy consulting meets AI — not a portfolio project page.
 *
 * FINAL VERSION 1.0 — Do not redesign without explicit approval.
 *
 * Sections (approved order):
 *   1.  Hero                  — Dark full-viewport, framework identity
 *   2.  Problem Statement     — Two-column: challenge vs solution, tension pairs
 *   3.  Methodology           — Framework overview + seven layers + principles
 *   4.  Framework at a Glance — Four stat cards
 *   5.  Published Analyses    — Episodes 01–03 (two published, one in-progress)
 *   6.  Why This Matters      — Three arguments, closing quote
 *   7.  Who J.A.R.V.I.S. Is For — Six audience cards
 *   8.  Series Roadmap        — Five-item roadmap + editorial note
 *   9.  Framework Creator     — Author attribution + version card
 *   10. Signature Close       — Three-line quote + two CTAs
 *
 * Architecture:
 *   - Server Component — no client state needed anywhere on this page.
 *   - All data from lib/data/jarvis.ts (which reads from siteConfig for
 *     frameworkName and frameworkVersion — never hardcoded).
 *   - Dark body background set via className on the outermost div; the
 *     root layout's <body> is bg-[#FAFAFA], so this page overrides at
 *     the section level rather than globally.
 */

import type { Metadata } from 'next'
import Link from 'next/link'

import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import SectionHeader from '@/components/ui/SectionHeader'
import GradientText from '@/components/ui/GradientText'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

import { siteConfig } from '@/lib/site-config'
import {
  jarvisMetadata,
  jarvisLayers,
  jarvisPrinciples,
  jarvisEpisodes,
  jarvisRoadmap,
  jarvisAudience,
  jarvisWhyMatters,
  jarvisClosingQuote,
  jarvisProblemStatement,
} from '@/lib/data/jarvis'

// ── Page metadata ────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: `${siteConfig.frameworkName} — Proprietary Strategic Growth Analysis Framework`,
  description:
    `${siteConfig.frameworkName} is a seven-layer strategic analysis framework combining ` +
    'business intelligence, market research, and AI-accelerated investigation to produce ' +
    'decision-ready strategic analyses of high-growth companies.',
  openGraph: {
    title: siteConfig.frameworkName,
    description: jarvisMetadata.positioning,
  },
}

// ── Inline icons ─────────────────────────────────────────────────────────
function ArrowDown({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <path d="M7.5 2.5v10M3 9l4.5 4.5L12 9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArrowRight({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <path d="M2.5 7.5h10M9 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ── Dark ghost button (used on dark sections) ────────────────────────────
function GhostDark({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 bg-transparent text-white/70 font-semibold text-[15px] border border-white/[0.15] px-7 py-3 rounded-full transition-all duration-200 hover:text-white hover:border-white/35 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
    >
      {children}
    </Link>
  )
}

// ════════════════════════════════════════════════════════════════════════
export default function JarvisPage() {
  const { signatureQuote, stats, creatorNote, principleTags } = jarvisMetadata
  const { challenge, solution } = jarvisProblemStatement

  return (
    <>
      {/* ════════════════════════════════════════════════════════════
          1. HERO — Dark full-viewport
      ═══════════════════════════════════════════════════════════ */}
      <section
        aria-label={`${siteConfig.frameworkName} framework introduction`}
        className="relative min-h-[calc(100vh-4rem)] flex items-start bg-slate-950 overflow-hidden"
      >
        {/* Animated background elements */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(79,70,229,0.038) 1px, transparent 1px), ' +
              'linear-gradient(90deg, rgba(79,70,229,0.038) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute pointer-events-none animate-float"
          style={{
            top: -120, right: -80, width: 600, height: 600, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(79,70,229,0.14) 0%, transparent 65%)',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute pointer-events-none animate-float-slow"
          style={{
            bottom: -160, left: -100, width: 500, height: 500, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124,58,237,0.09) 0%, transparent 65%)',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute left-0 right-0 h-px animate-shimmer pointer-events-none"
          style={{
            top: '35%',
            background: 'linear-gradient(90deg, transparent, rgba(79,70,229,0.35), rgba(124,58,237,0.25), transparent)',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 w-full max-w-site mx-auto section-px">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-20 items-center">

            {/* ── Left: text ─────────────────────────────────────── */}
            <div>
              {/* Framework tag + version badge */}
              <div className="flex items-center flex-wrap gap-2.5 mb-8 hero-anim anim-delay-100">
                <div
                  className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.10)' }}
                >
                  <span
                    className="w-[7px] h-[7px] rounded-full"
                    style={{ background: 'linear-gradient(135deg, #818CF8, #A78BFA)', boxShadow: '0 0 8px rgba(129,140,248,0.6)' }}
                    aria-hidden="true"
                  />
                  <span className="font-mono text-[11px] font-semibold tracking-[0.10em] uppercase text-white/40">
                    Proprietary Strategic Framework
                  </span>
                </div>
                <span
                  className="inline-flex items-center gap-1.5 font-mono text-[10.5px] font-semibold tracking-[0.08em] uppercase px-3 py-1.5 rounded-full"
                  style={{ background: 'rgba(245,158,11,0.08)', color: '#F59E0B', border: '1px solid rgba(245,158,11,0.18)' }}
                >
                  <span className="w-[5px] h-[5px] rounded-full bg-amber flex-shrink-0" aria-hidden="true" />
                  {jarvisMetadata.version}
                </span>
              </div>

              {/* Headline */}
              <h1
                className="font-syne font-extrabold leading-[1.0] tracking-[-0.025em] hero-anim anim-delay-200"
                style={{ fontSize: 'clamp(56px,9vw,108px)' }}
              >
                <span
                  className="block text-[clamp(20px,3vw,28px)] text-white/35 font-semibold tracking-[-0.01em] mb-2"
                >
                  Marketing
                </span>
                <GradientText variant="white-fade">J.A.R.V.I.S.</GradientText>
              </h1>

              {/* Positioning statement — strategy-first */}
              <p
                className="mt-6 text-[clamp(17px,2vw,20px)] leading-[1.72] text-slate-400 max-w-[560px] hero-anim anim-delay-350"
                style={{ animationDelay: '0.35s' }}
              >
                {jarvisMetadata.positioning}
              </p>

              {/* Stats row */}
              <div
                className="flex flex-wrap mt-12 rounded-[14px] overflow-hidden w-fit hero-anim"
                style={{
                  animationDelay: '0.5s',
                  border: '1px solid rgba(255,255,255,0.07)',
                  background: 'rgba(255,255,255,0.02)',
                }}
              >
                {[
                  { num: stats.layers,      label: stats.layerLabel },
                  { num: stats.published,   label: stats.publishedLabel },
                  { num: stats.planned,     label: stats.plannedLabel },
                  { num: '∞',               label: 'Ongoing Series' },
                ].map((stat, i, arr) => (
                  <div
                    key={stat.label}
                    className="px-7 py-[18px] text-center"
                    style={{ borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.07)' : undefined }}
                  >
                    <div
                      className="font-syne font-extrabold text-[26px] leading-none tracking-tight grad-text"
                    >
                      {stat.num}
                    </div>
                    <div className="font-mono text-[10px] text-white/25 mt-1 tracking-[0.06em] uppercase whitespace-nowrap">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div
                className="flex flex-wrap gap-3 mt-9 hero-anim"
                style={{ animationDelay: '0.62s' }}
              >
                <Button href="#analyses" variant="primary" className="!rounded-full">
                  View Published Analyses <ArrowDown size={14} />
                </Button>
                <GhostDark href="#methodology">
                  Explore the Framework <ArrowRight />
                </GhostDark>
              </div>
            </div>

            {/* ── Right: J monogram ────────────────────────────── */}
            <div
              className="hidden lg:flex items-center justify-center flex-shrink-0 hero-anim"
              style={{ animationName: 'fadeIn', animationDelay: '0.4s' }}
            >
              <div className="relative">
                <div
                  className="flex items-center justify-center rounded-[28px]"
                  style={{
                    width: 'clamp(160px,18vw,240px)',
                    height: 'clamp(160px,18vw,240px)',
                    background: 'linear-gradient(#0F172A, #0F172A) padding-box, linear-gradient(135deg, #4F46E5, #7C3AED) border-box',
                    border: '1.5px solid transparent',
                    boxShadow: '0 0 60px rgba(79,70,229,0.2), inset 0 0 40px rgba(79,70,229,0.06)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    className="absolute inset-0"
                    style={{ background: 'radial-gradient(circle at 30% 30%, rgba(79,70,229,0.12) 0%, transparent 60%)' }}
                    aria-hidden="true"
                  />
                  <span
                    className="font-syne font-extrabold leading-none relative z-10 select-none"
                    style={{
                      fontSize: 'clamp(80px,12vw,140px)',
                      letterSpacing: '-4px',
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(165,180,252,0.6) 60%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                    aria-hidden="true"
                  >
                    J.
                  </span>
                </div>
                <div
                  className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] font-semibold tracking-[0.10em] uppercase rounded-full px-3.5 py-1.5"
                  style={{
                    background: '#020617',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: '#818CF8',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
                  }}
                >
                  Strategic Analysis Framework
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          2. PROBLEM STATEMENT — White background
      ═══════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="problem-heading"
        className="bg-white section-p"
      >
        <div className="max-w-site mx-auto">
          <AnimateOnScroll>
            <span className="section-label">The Problem</span>
            <h2
              id="problem-heading"
              className="font-syne font-extrabold text-h2 text-slate-900 leading-[1.1] tracking-tight"
            >
              Why most strategic analysis<br />fails to produce usable intelligence.
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1} className="mt-12">
            <div
              className="rounded-[14px] overflow-hidden shadow-md"
              style={{ border: '1.5px solid #E8EAED' }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">

                {/* Left: the challenge */}
                <div
                  className="p-11 relative"
                  style={{ background: '#0F172A', borderRight: '1.5px solid rgba(255,255,255,0.07)' }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px]"
                    style={{ background: 'linear-gradient(90deg, #4F46E5, #6366F1)' }}
                    aria-hidden="true"
                  />
                  <p className="font-mono text-[10.5px] font-semibold tracking-[0.12em] uppercase text-white/30 mb-3.5">
                    {challenge.label}
                  </p>
                  <h3 className="font-syne font-extrabold text-[21px] text-white leading-snug mb-5">
                    {challenge.title}
                  </h3>
                  {challenge.body.map((para, i) => (
                    <p key={i} className="text-[15px] leading-[1.78] text-slate-400 mb-3.5 last:mb-0">
                      {para}
                    </p>
                  ))}
                  {/* Tension pairs */}
                  <div className="mt-7 space-y-2.5">
                    {challenge.tensionPairs.map(pair => (
                      <div
                        key={pair.before}
                        className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 py-3 rounded-[8px]"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
                      >
                        <span className="text-[13px] text-white/35 font-medium text-right">{pair.before}</span>
                        <span className="font-mono text-[13px] text-indigo-pale">──→</span>
                        <span className="text-[13px] text-indigo-pale/85 font-semibold">{pair.after}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: the solution */}
                <div className="p-11 bg-gray-50 relative">
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px]"
                    style={{ background: 'linear-gradient(90deg, #7C3AED, #9333EA)' }}
                    aria-hidden="true"
                  />
                  <p className="font-mono text-[10.5px] font-semibold tracking-[0.12em] uppercase text-indigo mb-3.5">
                    {solution.label}
                  </p>
                  <h3 className="font-syne font-extrabold text-[21px] text-slate-900 leading-snug mb-5">
                    {solution.title}
                  </h3>
                  {solution.body.map((para, i) => (
                    <p key={i} className="text-[15px] leading-[1.78] text-gray-500 mb-3.5 last:mb-0">
                      {para}
                    </p>
                  ))}
                </div>

              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          3. METHODOLOGY — Gray background
      ═══════════════════════════════════════════════════════════ */}
      <section
        id="methodology"
        aria-labelledby="methodology-heading"
        className="bg-gray-50 section-p scroll-mt-16"
      >
        <div className="max-w-site mx-auto">
          <AnimateOnScroll>
            <span className="section-label">The Framework</span>
            <h2
              id="methodology-heading"
              className="font-syne font-extrabold text-h2 text-slate-900 leading-[1.1] tracking-tight"
            >
              A seven-layer methodology<br />for strategic growth analysis.
            </h2>
            <p className="text-lg text-gray-500 mt-3 max-w-tight leading-[1.65]">
              Not a checklist. Not a template. A structured analytical process that maps the
              complete strategic landscape of a company — from its business architecture to
              its highest-leverage growth opportunities.
            </p>
          </AnimateOnScroll>

          {/* Framework overview card */}
          <AnimateOnScroll delay={0.1} className="mt-12">
            <div
              className="bg-white border-[1.5px] border-border rounded-[20px] p-12 relative overflow-hidden shadow-sm"
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: 'linear-gradient(90deg, #4F46E5, #7C3AED)' }}
                aria-hidden="true"
              />
              <p className="font-syne font-bold text-[clamp(17px,2.2vw,22px)] text-slate-900 leading-[1.55] max-w-[720px]">
                {siteConfig.frameworkName} is a{' '}
                <span className="text-indigo">seven-layer strategic analysis framework</span>{' '}
                that combines AI-powered research with structured business intelligence to produce
                comprehensive growth analyses of high-velocity companies — designed to be{' '}
                <span className="text-indigo">repeatable, comparable, and decision-ready</span>.
              </p>
              <div className="flex flex-wrap gap-2.5 mt-7">
                {principleTags.map(tag => (
                  <span
                    key={tag}
                    className="flex items-center gap-1.5 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 font-mono text-[11.5px] font-semibold text-indigo"
                  >
                    <span className="w-[5px] h-[5px] rounded-full bg-indigo flex-shrink-0" aria-hidden="true" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Seven research layers */}
          <AnimateOnScroll delay={0.08} className="mt-14">
            <h3 className="font-syne font-extrabold text-[clamp(20px,2.8vw,30px)] text-slate-900 mb-2">
              The Seven Research Layers
            </h3>
            <p className="text-[16px] text-gray-500 mb-8 max-w-[480px] leading-[1.65]">
              Each layer builds on the one before it. The output of Layer 07 is only as strong
              as the work done in Layers 01 through 06.
            </p>

            {/* Spine + rows */}
            <div className="grid grid-cols-[52px_1fr]">
              {/* Spine */}
              <div className="flex flex-col items-center relative">
                <div
                  className="absolute top-5 bottom-5 w-[2px] opacity-25"
                  style={{ background: 'linear-gradient(180deg, #4F46E5, #7C3AED)' }}
                  aria-hidden="true"
                />
                {jarvisLayers.map((layer, i) => (
                  <div
                    key={layer.num}
                    className="flex items-center justify-center rounded-full font-mono text-[10px] font-semibold relative z-10 flex-shrink-0"
                    style={{
                      width: 36, height: 36,
                      margin: `${i === 0 ? 20 : 20}px 0`,
                      background: 'linear-gradient(#F9FAFB, #F9FAFB) padding-box, linear-gradient(135deg, #4F46E5, #7C3AED) border-box',
                      border: '1.5px solid transparent',
                      color: '#4F46E5',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                ))}
              </div>

              {/* Layer rows */}
              <div>
                {jarvisLayers.map((layer, i) => (
                  <div
                    key={layer.num}
                    className="flex items-stretch border-l-2 border-l-transparent transition-all duration-200 hover:border-l-indigo hover:bg-indigo/[0.025] rounded-r-[12px] cursor-default"
                    style={{
                      padding: '20px 24px',
                      borderBottom: i < jarvisLayers.length - 1 ? '1px solid #E8EAED' : undefined,
                    }}
                  >
                    <div>
                      <p className="font-mono text-[10.5px] font-semibold tracking-[0.10em] uppercase text-indigo mb-1.5">
                        {layer.num}
                      </p>
                      <h4 className="font-syne font-extrabold text-[17px] text-slate-900 mb-2 leading-snug">
                        {layer.title}
                      </h4>
                      <p className="text-[14px] leading-[1.68] text-gray-500 max-w-[600px]">{layer.desc}</p>
                      <div className="flex items-center gap-1.5 mt-2.5">
                        <span
                          className="w-[5px] h-[5px] rounded-full bg-emerald flex-shrink-0"
                          aria-hidden="true"
                        />
                        <p className="font-mono text-[11px] text-slate-500">{layer.output}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Guiding principles — dark strip */}
          <AnimateOnScroll delay={0.1} className="mt-14">
            <div
              className="rounded-[14px] overflow-hidden"
              style={{ background: '#020617', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="px-9 pt-7 pb-2">
                <p className="font-mono text-[10.5px] font-semibold tracking-[0.12em] uppercase text-white/30 mb-1.5">
                  Guiding Principles
                </p>
                <p className="font-syne font-extrabold text-[20px] text-white">
                  The intellectual commitments behind the framework.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 p-6 gap-px">
                {jarvisPrinciples.map(p => (
                  <div
                    key={p.num}
                    className="px-6 py-6 rounded-[10px] group transition-colors duration-200 hover:bg-white/[0.04]"
                  >
                    <p className="font-mono text-[11px] font-semibold text-white/20 mb-2.5">{p.num}</p>
                    <h4 className="font-syne font-extrabold text-[15px] text-white mb-2.5 leading-snug">
                      {p.title}
                    </h4>
                    <p className="text-[13.5px] leading-[1.65] text-slate-500">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          4. FRAMEWORK AT A GLANCE — White
      ═══════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="stats-heading"
        className="bg-white section-p"
      >
        <div className="max-w-site mx-auto">
          <AnimateOnScroll>
            <span className="section-label">Framework at a Glance</span>
            <h2
              id="stats-heading"
              className="font-syne font-extrabold text-h2 text-slate-900 leading-[1.1] tracking-tight"
            >
              The {siteConfig.frameworkName} series<br />in numbers.
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {[
              {
                num: String(stats.layers),
                numStyle: 'grad-text',
                label: 'Research Layers per Analysis',
                sub: 'Business → Market → Competitive → Customer → Positioning → Levers → Roadmap',
                barGrad: 'from-indigo to-indigo-light',
              },
              {
                num: String(stats.published),
                numStyle: 'text-emerald',
                label: 'Published Strategic Analyses',
                sub: 'Swiggy · Zomato — Fully published',
                barGrad: 'from-emerald to-[#059669]',
              },
              {
                num: String(stats.inProgress),
                numStyle: 'grad-text-amber',
                label: 'Analysis Currently In Progress',
                sub: 'Zepto — Active research underway',
                barGrad: 'from-amber to-[#FBBF24]',
              },
              {
                num: String(stats.planned),
                numStyle: 'grad-text',
                label: 'Future Companies Planned',
                sub: 'Blinkit · Meesho · Razorpay · CRED · More',
                barGrad: 'from-violet to-violet-light',
              },
            ].map((card, i) => (
              <AnimateOnScroll key={card.label} delay={i * 0.08}>
                <div
                  className="bg-white border-[1.5px] border-border rounded-[14px] p-8 text-center group cursor-default transition-all duration-300 hover:border-indigo/15 hover:shadow-md hover:-translate-y-[3px] relative overflow-hidden"
                >
                  <div
                    className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${card.barGrad} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    aria-hidden="true"
                  />
                  <div
                    className={`font-syne font-extrabold leading-none tracking-tight mb-2.5 ${card.numStyle}`}
                    style={{ fontSize: 'clamp(40px,5vw,56px)' }}
                  >
                    {card.num}
                  </div>
                  <p className="font-semibold text-[14px] text-slate-700 leading-snug mb-2">{card.label}</p>
                  <p className="font-mono text-[11px] text-gray-400 leading-snug">{card.sub}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          5. PUBLISHED ANALYSES — Dark
      ═══════════════════════════════════════════════════════════ */}
      <section
        id="analyses"
        aria-labelledby="analyses-heading"
        className="bg-slate-950 section-p scroll-mt-16"
      >
        <div className="max-w-site mx-auto">
          <AnimateOnScroll>
            <span className="section-label-dark">Published Analyses</span>
            <h2
              id="analyses-heading"
              className="font-syne font-extrabold text-h2 text-white leading-[1.1] tracking-tight mt-0"
            >
              The framework applied.<br />The thinking made visible.
            </h2>
            <p className="text-lg text-slate-400 mt-3 max-w-tight leading-[1.65]">
              Each analysis is a complete application of the seven-layer {siteConfig.frameworkName} framework
              to a high-growth company — examining its business architecture, competitive position,
              and the strategic levers available to it.
            </p>
          </AnimateOnScroll>

          <div className="mt-12 space-y-5">
            {jarvisEpisodes.map((ep, i) => {
              const isInProgress = ep.status === 'in-progress'
              return (
                <AnimateOnScroll key={ep.company} delay={i * 0.08}>
                  <article
                    className="rounded-[20px] overflow-hidden transition-all duration-300"
                    style={
                      isInProgress
                        ? { background: 'rgba(255,255,255,0.02)', border: '1.5px solid rgba(255,255,255,0.07)', opacity: 0.85 }
                        : {
                            background: 'linear-gradient(#0F172A, #0F172A) padding-box, linear-gradient(135deg, #4F46E5, #7C3AED) border-box',
                            border: '1.5px solid transparent',
                            boxShadow: '0 0 24px rgba(79,70,229,0.12)',
                          }
                    }
                    aria-label={`Episode ${ep.num}: ${ep.company}`}
                  >
                    <div className="grid grid-cols-[auto_1fr_auto] gap-8 p-9 items-stretch">

                      {/* Episode number */}
                      <div className="flex flex-col items-center gap-2 pt-1 flex-shrink-0">
                        <p className="font-mono text-[9.5px] font-semibold tracking-[0.12em] uppercase text-white/25">
                          Episode
                        </p>
                        <span
                          className="font-syne font-extrabold text-[40px] leading-none tracking-tight"
                          style={
                            isInProgress
                              ? {
                                  background: 'linear-gradient(135deg, #F59E0B, #FCD34D)',
                                  WebkitBackgroundClip: 'text',
                                  WebkitTextFillColor: 'transparent',
                                  backgroundClip: 'text',
                                }
                              : {
                                  background: 'linear-gradient(135deg, #818CF8 0%, #A78BFA 60%)',
                                  WebkitBackgroundClip: 'text',
                                  WebkitTextFillColor: 'transparent',
                                  backgroundClip: 'text',
                                }
                          }
                        >
                          {String(ep.num).padStart(2, '0')}
                        </span>
                        <div
                          className="flex-1 w-px"
                          style={{ background: 'rgba(255,255,255,0.07)', minHeight: 32 }}
                          aria-hidden="true"
                        />
                      </div>

                      {/* Content */}
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                          <Badge variant={isInProgress ? 'amber-dark' : 'emerald'}>
                            {isInProgress ? (
                              <span className="flex items-center gap-1.5">
                                <span
                                  className="w-[5px] h-[5px] rounded-full bg-amber"
                                  style={{ animation: 'pulseAmber 1.5s infinite' }}
                                  aria-hidden="true"
                                />
                                In Progress
                              </span>
                            ) : 'Published'}
                          </Badge>
                          <Badge variant="dark">J.A.R.V.I.S. Framework</Badge>
                        </div>

                        <h3
                          className="font-syne font-extrabold leading-snug tracking-tight mb-1.5"
                          style={{ fontSize: 'clamp(24px,3.5vw,36px)', color: isInProgress ? 'rgba(255,255,255,0.5)' : 'white' }}
                        >
                          {ep.company}
                        </h3>
                        <p className="text-[14.5px] font-medium text-slate-400 mb-3.5">{ep.subtitle}</p>
                        <p
                          className="text-[15px] leading-[1.72] max-w-[580px]"
                          style={{ color: isInProgress ? '#64748B' : '#64748B' }}
                        >
                          {ep.description}
                        </p>

                        {/* Insights (published only) */}
                        {!isInProgress && ep.insights.length > 0 && (
                          <div className="mt-5">
                            <p className="font-mono text-[10px] font-semibold tracking-[0.12em] uppercase text-white/25 mb-2.5">
                              Key Strategic Insights
                            </p>
                            <div className="space-y-2">
                              {ep.insights.map((insight, j) => (
                                <div
                                  key={j}
                                  className="flex items-start gap-2.5 text-[13.5px] text-slate-400 leading-[1.55]"
                                >
                                  <span
                                    className="flex items-center justify-center rounded-[4px] flex-shrink-0 mt-[1px] font-mono text-[8px] font-semibold"
                                    style={{
                                      width: 16, height: 16,
                                      background: 'rgba(79,70,229,0.20)',
                                      border: '1px solid rgba(79,70,229,0.25)',
                                      color: '#818CF8',
                                    }}
                                  >
                                    {String(j + 1).padStart(2, '0')}
                                  </span>
                                  {insight}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* CTA — published only */}
                      {!isInProgress && (
                        <div className="flex flex-col items-end justify-between gap-4 flex-shrink-0">
                          <p
                            className="font-mono text-[10px] font-semibold tracking-[0.08em] uppercase text-right leading-snug"
                            style={{ color: 'rgba(255,255,255,0.2)' }}
                          >
                            {ep.sector}
                          </p>
                          <Link
                            href={ep.href}
                            className="inline-flex items-center gap-2 font-bold text-[13.5px] rounded-full px-5 py-2.5 transition-all duration-200 hover:bg-indigo hover:border-indigo hover:text-white focus-visible:outline-none"
                            style={{
                              background: 'rgba(79,70,229,0.15)',
                              border: '1px solid rgba(79,70,229,0.25)',
                              color: '#818CF8',
                            }}
                            aria-label={`View full analysis: ${ep.company}`}
                          >
                            View Full Analysis
                            <ArrowRight size={13} />
                          </Link>
                        </div>
                      )}

                    </div>
                  </article>
                </AnimateOnScroll>
              )
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          6. WHY THIS MATTERS — Slate-900
      ═══════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="matters-heading"
        className="section-p"
        style={{ background: '#0F172A' }}
      >
        <div className="max-w-site mx-auto">
          <AnimateOnScroll>
            <span className="section-label-dark">Why This Matters</span>
            <h2
              id="matters-heading"
              className="font-syne font-extrabold text-h2 text-white leading-[1.1] tracking-tight mt-0"
            >
              On the role of structured<br />analysis in strategy.
            </h2>
          </AnimateOnScroll>

          <div
            className="mt-12 grid grid-cols-1 lg:grid-cols-3"
            style={{ border: '1px solid rgba(255,255,255,0.06)', borderRadius: 14, overflow: 'hidden' }}
          >
            {jarvisWhyMatters.map((item, i) => (
              <AnimateOnScroll key={item.num} delay={i * 0.08}>
                <div
                  className="p-9 group cursor-default transition-colors duration-200 hover:bg-indigo/[0.06] relative"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    borderRight: i < jarvisWhyMatters.length - 1 ? '1px solid rgba(255,255,255,0.06)' : undefined,
                  }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(90deg, #4F46E5, #7C3AED)' }}
                    aria-hidden="true"
                  />
                  <p className="font-mono text-[28px] font-medium text-white/[0.07] mb-4 leading-none">{item.num}</p>
                  <h3 className="font-syne font-extrabold text-[18px] text-white mb-3 leading-snug">{item.title}</h3>
                  <p className="text-[14.5px] leading-[1.72] text-slate-500">
                    {item.body}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Closing quote */}
          <AnimateOnScroll delay={0.1} className="mt-12 flex gap-5 items-start max-w-[760px]">
            <div
              className="w-[3px] flex-shrink-0 rounded-[2px]"
              style={{ minHeight: 88, background: 'linear-gradient(180deg, #4F46E5, #7C3AED)' }}
              aria-hidden="true"
            />
            <blockquote className="font-syne text-[clamp(17px,2.2vw,20px)] font-semibold text-white/65 leading-[1.6] italic">
              &ldquo;{jarvisClosingQuote}&rdquo;
            </blockquote>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          7. WHO J.A.R.V.I.S. IS FOR — White
      ═══════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="audience-heading"
        className="bg-white section-p"
      >
        <div className="max-w-site mx-auto">
          <AnimateOnScroll>
            <SectionHeader
              label="Who This Is For"
              title={
                <span id="audience-heading">
                  The framework was built<br />for those who think in systems.
                </span>
              }
              subtitle={`${siteConfig.frameworkName} analyses are designed to be useful to anyone whose work requires understanding how high-growth companies actually operate — and where their real opportunities lie.`}
            />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px] mt-12">
            {jarvisAudience.map((card, i) => (
              <AnimateOnScroll key={card.title} delay={(i % 3) * 0.08}>
                <div
                  className="bg-gray-50 border-[1.5px] border-border rounded-[14px] p-7 group cursor-default transition-all duration-300 hover:bg-white hover:border-indigo/20 hover:-translate-y-[3px] hover:shadow-md"
                >
                  <span className="text-[26px] mb-3.5 block" aria-hidden="true">{card.icon}</span>
                  <h3 className="font-syne font-extrabold text-[16px] text-slate-900 mb-2.5">{card.title}</h3>
                  <p className="text-[14px] leading-[1.68] text-gray-500">{card.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          8. SERIES ROADMAP — Gray
      ═══════════════════════════════════════════════════════════ */}
      <section
        id="roadmap"
        aria-labelledby="roadmap-heading"
        className="bg-gray-50 section-p scroll-mt-16"
      >
        <div className="max-w-site mx-auto">
          <AnimateOnScroll>
            <SectionHeader
              label="Series Roadmap"
              title={<span id="roadmap-heading">What comes next.</span>}
              subtitle={`The ${siteConfig.frameworkName} series is an ongoing analytical project. Future analyses are selected based on strategic interest, market significance, and the analytical complexity they represent.`}
            />
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.08} className="mt-12">
            <div
              className="rounded-[14px] overflow-hidden bg-white"
              style={{ border: '1.5px solid #E8EAED' }}
              role="list"
              aria-label="Series roadmap"
            >
              {jarvisRoadmap.map((item, i) => (
                <div
                  key={item.episode}
                  role="listitem"
                  className="grid grid-cols-[80px_1fr_auto] items-center gap-6 px-8 py-[22px] cursor-default transition-all duration-200 hover:bg-gray-50 group"
                  style={{
                    borderBottom: i < jarvisRoadmap.length - 1 ? '1px solid #E8EAED' : undefined,
                    borderLeft: `3px solid ${item.status === 'in-progress' ? '#F59E0B' : 'transparent'}`,
                  }}
                >
                  <span
                    className="font-mono text-[13px] font-semibold tracking-[0.04em]"
                    style={{ color: item.status === 'in-progress' ? '#F59E0B' : '#94A3B8' }}
                  >
                    {item.episode}
                  </span>
                  <div>
                    <p className="font-syne font-extrabold text-[17px] text-slate-900 leading-snug">{item.company}</p>
                    <p className="text-[13px] text-gray-400 mt-0.5">{item.sector}</p>
                  </div>
                  <span
                    className="font-mono text-[10px] font-semibold tracking-[0.08em] uppercase px-3 py-1.5 rounded-full"
                    style={
                      item.status === 'in-progress'
                        ? { background: 'rgba(245,158,11,0.10)', color: '#F59E0B', border: '1px solid rgba(245,158,11,0.20)' }
                        : { background: '#F3F4F6', color: '#94A3B8', border: '1px solid #E8EAED' }
                    }
                  >
                    {item.status === 'in-progress' ? 'In Progress' : 'Planned'}
                  </span>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Editorial note */}
          <AnimateOnScroll delay={0.12} className="mt-6">
            <div className="bg-indigo-50 border border-indigo-100 rounded-[14px] px-7 py-5">
              <p className="text-[14px] text-indigo leading-[1.65]">
                <strong className="font-semibold">The framework can be applied to any high-growth company.</strong>{' '}
                Future analyses are selected to maximise strategic diversity — different business models,
                different competitive dynamics, different growth patterns — so the series builds into
                a comparative intelligence resource across India&rsquo;s high-growth landscape.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          9. FRAMEWORK CREATOR — Slate-900
      ═══════════════════════════════════════════════════════════ */}
      <section
        aria-label="Framework creator"
        className="section-p-sm"
        style={{ background: '#0F172A' }}
      >
        <div className="max-w-site mx-auto">
          <AnimateOnScroll>
            <div className="flex items-start justify-between flex-wrap gap-8">
              <div className="flex-1 min-w-[280px]">
                <p className="font-mono text-[10.5px] font-semibold tracking-[0.12em] uppercase text-white/25 mb-3.5">
                  Framework Creator
                </p>
                <p className="text-[15.5px] leading-[1.75] text-slate-400 max-w-[640px]">
                  {creatorNote.split(siteConfig.name).map((part, i, arr) => (
                    i < arr.length - 1 ? (
                      <span key={i}>
                        {part}
                        <Link
                          href="/about"
                          className="text-indigo-pale font-semibold transition-colors duration-200 hover:text-violet-light focus-visible:outline-none"
                        >
                          {siteConfig.name}
                        </Link>
                      </span>
                    ) : part
                  ))}
                </p>
              </div>

              {/* Version card */}
              <div className="flex flex-col items-end gap-2.5 flex-shrink-0">
                <div
                  className="rounded-[10px] px-5 py-4 text-right"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <p className="font-mono text-[10px] font-semibold tracking-[0.10em] uppercase text-white/20 mb-1.5">
                    Current Version
                  </p>
                  <p className="font-syne font-extrabold text-[22px] text-white tracking-tight">
                    {siteConfig.frameworkVersion}
                  </p>
                </div>
                <p className="font-mono text-[10px] text-white/20 tracking-[0.06em]">
                  Framework · {new Date().getFullYear()}
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          10. SIGNATURE CLOSE — Slate-950
      ═══════════════════════════════════════════════════════════ */}
      <section
        aria-label="Signature statement"
        className="bg-slate-950 section-p-xl relative overflow-hidden"
      >
        {/* Orbs */}
        <div
          className="absolute pointer-events-none"
          style={{ top: -100, right: -80, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(79,70,229,0.10) 0%, transparent 65%)' }}
          aria-hidden="true"
        />
        <div
          className="absolute pointer-events-none"
          style={{ bottom: -120, left: -60, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 65%)' }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-site mx-auto">

          {/* Eyebrow */}
          <AnimateOnScroll>
            <span className="section-label-dark">The Framework</span>
          </AnimateOnScroll>

          {/* Signature quote — do not modify */}
          <AnimateOnScroll delay={0.08}>
            <p
              className="font-syne font-extrabold leading-[1.15] tracking-tight max-w-[820px]"
              style={{ fontSize: 'clamp(28px,5vw,62px)' }}
            >
              <span className="block text-white/90">{signatureQuote.line1}</span>
              <span className="block text-white/45 mt-1">{signatureQuote.line2}</span>
              <span className="block grad-text mt-1">{signatureQuote.line3}</span>
            </p>
          </AnimateOnScroll>

          {/* Divider */}
          <div
            className="mt-12 mb-12 max-w-[820px]"
            style={{ height: '1px', background: 'rgba(255,255,255,0.07)' }}
            aria-hidden="true"
          />

          {/* CTAs */}
          <AnimateOnScroll delay={0.12}>
            <div className="flex flex-wrap gap-3.5">
              <Button href="#analyses" variant="primary">
                View Published Analyses <ArrowRight />
              </Button>
              <GhostDark href="/contact?re=jarvis">
                Discuss an Analysis <ArrowRight />
              </GhostDark>
            </div>
          </AnimateOnScroll>

        </div>
      </section>
    </>
  )
}
