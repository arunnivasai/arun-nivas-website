/**
 * app/page.tsx — Homepage
 * ──────────────────────────────────────────────────────────────────────────
 * Sections (in order):
 *   1. Hero              — Name, headline, CTAs, stat pills
 *   2. Current Focus     — Four focus area tags
 *   3. Trust Bar         — Tools & stack strip
 *   4. Services          — All six service cards
 *   5. Portfolio         — Featured J.A.R.V.I.S. + three work cards
 *   6. AI Projects       — Dark numbered list preview
 *   7. J.A.R.V.I.S.      — Signature framework teaser card
 *   8. CTA Banner        — Three-audience close
 *
 * Data sources: lib/data/home.ts, lib/data/services.ts,
 *               lib/data/portfolio.ts, lib/data/ai-projects.ts, lib/data/jarvis.ts
 * UI primitives: Button, Badge, SectionHeader, GradientText, AnimateOnScroll
 */

import type { Metadata } from 'next'
import Link from 'next/link'

import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import SectionHeader from '@/components/ui/SectionHeader'
import GradientText from '@/components/ui/GradientText'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import ProfilePhoto from '@/components/ui/ProfilePhoto'

import { siteConfig, isAvailable, openStatusLabel } from '@/lib/site-config'
import {
  heroContent, heroStats, currentFocusTags, trustBarTools,
  servicesPreviewHeader, portfolioPreviewHeader,
  aiProjectsPreviewHeader, jarvisTeaserContent, homepageCTA,
} from '@/lib/data/home'
import { services } from '@/lib/data/services'
import { homepagePortfolioItems, featuredPortfolioItem, jarvisEpisodeItems } from '@/lib/data/portfolio'
import { homepageAISystems } from '@/lib/data/ai-projects'

// ── Page metadata ────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: siteConfig.seo.defaultTitle,
  description: siteConfig.seo.defaultDescription,
}

// ── Arrow SVG (reused across sections) ──────────────────────────────────
function ArrowRight({ size = 14, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true" className={className}>
      <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ── Check SVG ────────────────────────────────────────────────────────────
function Check({ color = 'currentColor' }: { color?: string }) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <polyline points="1.5,5 4,7.5 8.5,2.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ════════════════════════════════════════════════════════════════════════
export default function HomePage() {
  // Derive homepage service list from the full services array
  const homepageServices = services

  // Non-featured portfolio items for the right-side grid
  const gridPortfolioItems = homepagePortfolioItems.filter(p => !p.featured)

  return (
    <div className="flex flex-col">

      {/* ══════════════════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════════════════ */}
      <section
        aria-label="Introduction"
        className="relative min-h-[calc(100vh-4rem)] flex items-start bg-white overflow-hidden"
      >
        {/* Background grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(79,70,229,0.032) 1px, transparent 1px), ' +
              'linear-gradient(90deg, rgba(79,70,229,0.032) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            WebkitMaskImage: 'radial-gradient(ellipse 65% 80% at 90% 40%, black 0%, transparent 70%)',
            maskImage: 'radial-gradient(ellipse 65% 80% at 90% 40%, black 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />
        {/* Background orb */}
        <div
          className="absolute top-0 right-0 pointer-events-none"
          style={{
            width: 500, height: 500, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 65%)',
            transform: 'translate(20%, -20%)',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 w-full max-w-site mx-auto section-px">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center">

            {/* ── Left: text content ───────────────────────────────── */}
            <div>
              {/* Status badge */}
              <div
                className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-3.5 py-1.5 text-[13px] font-medium text-slate-600 shadow-sm mb-7 hero-anim anim-delay-100"
              >
                {isAvailable() && (
                  <span
                    className="w-2 h-2 rounded-full bg-emerald flex-shrink-0"
                    style={{ animation: 'pulseDot 2.5s ease-in-out infinite' }}
                    aria-hidden="true"
                  />
                )}
                {openStatusLabel()}
                <div className="flex gap-2 ml-1">
                  {heroContent.badge.pills.map(pill => (
                    <span
                      key={pill}
                      className="font-mono text-[11px] font-semibold bg-indigo-50 text-indigo px-2 py-0.5 rounded"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Name */}
              <h1
                className="font-syne font-extrabold text-hero text-slate-900 hero-anim anim-delay-200"
              >
                {heroContent.titleLine1}
                <br />
                <GradientText>{heroContent.titleGradient}</GradientText>
              </h1>

              {/* Role */}
              <p
                className="mt-3.5 text-[clamp(15px,2vw,18px)] font-medium text-slate-500 hero-anim anim-delay-300"
              >
                {heroContent.role.part1}
                <span className="mx-2.5 text-gray-200">{heroContent.role.separator}</span>
                {heroContent.role.part2}
              </p>

              {/* Description */}
              <p
                className="mt-5 text-body-lg text-gray-500 max-w-tight hero-anim anim-delay-400"
              >
                I combine <strong className="text-slate-700 font-semibold">marketing</strong>,{' '}
                <strong className="text-slate-700 font-semibold">business analysis</strong>, and{' '}
                <strong className="text-slate-700 font-semibold">AI systems</strong> to help
                organizations make smarter decisions, automate workflows, and drive growth.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 mt-9 hero-anim anim-delay-500">
                <Button href={heroContent.ctaPrimary.href} variant="primary" icon>
                  {heroContent.ctaPrimary.label}
                </Button>
                <Button href={heroContent.ctaSecondary.href} variant="secondary" icon>
                  {heroContent.ctaSecondary.label}
                </Button>
              </div>

              {/* Stat pills */}
              <div
                className="flex flex-wrap gap-5 mt-11 hero-anim anim-delay-600"
              >
                {heroStats.map(stat => (
                  <div
                    key={stat.label}
                    className="flex items-center gap-2.5 bg-white border border-border rounded-full px-4 py-2 shadow-sm"
                  >
                    <span className="text-base" aria-hidden="true">{stat.icon}</span>
                    <div>
                      <div className="font-syne font-extrabold text-[15px] text-slate-900 leading-none">
                        {stat.value}
                      </div>
                      <div className="text-[11px] text-gray-400 mt-0.5">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: photo ─────────────────────────────────────── */}
            <div
              className="hidden lg:flex items-center justify-center relative flex-shrink-0 hero-anim anim-delay-300"
              style={{ animationName: 'fadeIn' }}
            >
              <div className="relative">
                {/* Orb behind ring */}
                <div
                  className="absolute -top-6 -left-6 rounded-full pointer-events-none"
                  style={{
                    width: 88, height: 88,
                    background: 'linear-gradient(135deg, rgba(99,102,241,0.22), rgba(124,58,237,0.12))',
                    filter: 'blur(18px)',
                    zIndex: 0,
                  }}
                  aria-hidden="true"
                />

                {/* Profile photo with monogram fallback */}
                <div className="relative z-10">
                  <ProfilePhoto size="clamp(200px,22vw,280px)" />
                </div>

                {/* Location badge */}
                <div
                  className="absolute -bottom-3 -right-4 z-20 flex items-center gap-2 bg-white border border-border rounded-[10px] px-3.5 py-2.5 shadow-md"
                >
                  <span className="text-xl" aria-hidden="true">📍</span>
                  <div>
                    <div className="text-[10.5px] text-gray-400 font-normal">Open to</div>
                    <div className="text-[13px] font-semibold text-slate-700 leading-tight">
                      Opportunities Across India
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          2. CURRENT FOCUS
      ══════════════════════════════════════════════════════════════ */}
      <section
        aria-label="Current professional focus areas"
        className="bg-white border-y border-border"
      >
        <div className="max-w-site mx-auto section-px py-6">
          <div className="flex items-center gap-5 flex-wrap">
            <span className="font-mono text-[11px] font-semibold tracking-[0.12em] uppercase text-gray-400 flex-shrink-0">
              Current Focus
            </span>
            <div
              className="w-px h-5 bg-border flex-shrink-0 hidden sm:block"
              aria-hidden="true"
            />
            <div className="flex gap-2.5 flex-wrap" role="list" aria-label="Focus areas">
              {currentFocusTags.map(tag => (
                <div
                  key={tag.label}
                  role="listitem"
                  className="flex items-center gap-1.5 bg-gray-100 border border-border rounded-full px-4 py-1.5 text-[13.5px] font-medium text-slate-700 transition-all duration-200 hover:bg-indigo-50 hover:border-indigo-100 hover:text-indigo cursor-default"
                >
                  <span aria-hidden="true">{tag.icon}</span>
                  {tag.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          3. TRUST BAR
      ══════════════════════════════════════════════════════════════ */}
      <section aria-label="Tools and technology stack" className="bg-white">
        <div className="max-w-site mx-auto section-px py-7">
          <div className="flex items-center gap-8 flex-wrap">
            <span className="font-mono text-[11px] text-gray-400 tracking-[0.10em] uppercase flex-shrink-0">
              Tools &amp; Stack
            </span>
            <div
              className="w-px h-6 bg-border flex-shrink-0 hidden sm:block"
              aria-hidden="true"
            />
            <div className="flex gap-6 flex-wrap items-center" role="list">
              {trustBarTools.map(tool => (
                <span
                  key={tool}
                  role="listitem"
                  className="font-mono text-[13px] font-medium text-slate-400 transition-colors duration-200 hover:text-slate-600"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          4. SERVICES
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="services"
        aria-labelledby="services-heading"
        className="bg-white section-p"
      >
        <div className="max-w-site mx-auto">
          <AnimateOnScroll>
            <div className="flex justify-between items-end gap-4 flex-wrap">
              <SectionHeader
                label={servicesPreviewHeader.label}
                title={<span id="services-heading">{servicesPreviewHeader.title}</span>}
                subtitle={servicesPreviewHeader.subtitle}
              />
              <Button href="/services" variant="secondary" className="flex-shrink-0">
                View All Services →
              </Button>
            </div>
          </AnimateOnScroll>

          {/* Services grid — 3×2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px] mt-12">
            {homepageServices.map((service, i) => (
              <AnimateOnScroll key={service.id} delay={(i % 3) * 0.08}>
                <article
                  className="bg-white border-[1.5px] border-border rounded-[14px] overflow-hidden group cursor-default h-full flex flex-col transition-all duration-300 hover:border-indigo/20 hover:shadow-md hover:-translate-y-[3px] relative"
                  aria-label={service.title}
                >
                  {/* Top bar — animates in on hover */}
                  <div
                    className={`h-[2px] w-full ${service.barClass} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    aria-hidden="true"
                  />

                  <div className="p-7 flex flex-col flex-1">
                    {/* Icon */}
                    <div className="w-11 h-11 rounded-[11px] bg-indigo-50 flex items-center justify-center text-[22px] mb-[18px] transition-colors duration-200 group-hover:bg-indigo-100">
                      {service.icon}
                    </div>

                    {/* Recommended badge (Growth Audit only) */}
                    {service.recommended && (
                      <Badge variant="recommend" star className="mb-3 w-fit">
                        Recommended First Step
                      </Badge>
                    )}

                    <h3 className="font-syne font-extrabold text-[16px] text-slate-900 mb-2 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-[13.5px] leading-[1.65] text-gray-500 flex-1">
                      {service.description}
                    </p>

                    {/* Learn more */}
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1.5 mt-[18px] text-[13px] font-semibold text-indigo transition-all duration-200 group-hover:gap-2.5 focus-visible:outline-none focus-visible:underline"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      Learn more
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          5. PORTFOLIO (SELECTED WORK)
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="portfolio"
        aria-labelledby="portfolio-heading"
        className="bg-gray-50 section-p"
      >
        <div className="max-w-site mx-auto">
          <AnimateOnScroll>
            <div className="flex justify-between items-end gap-4 flex-wrap">
              <SectionHeader
                label={portfolioPreviewHeader.label}
                title={<span id="portfolio-heading">{portfolioPreviewHeader.title}</span>}
              />
              <Button href="/portfolio" variant="secondary" className="flex-shrink-0">
                View All Work →
              </Button>
            </div>
          </AnimateOnScroll>

          {/* Asymmetric grid — featured card + 3 cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">

            {/* ── Featured: J.A.R.V.I.S. ─────────────────────────── */}
            {featuredPortfolioItem && (
              <AnimateOnScroll className="lg:row-span-2">
                <article
                  className="h-full flex flex-col rounded-[14px] overflow-hidden transition-all duration-300 hover:-translate-y-[3px] hover:shadow-glow"
                  style={{
                    background: 'linear-gradient(#0F172A, #0F172A) padding-box, linear-gradient(135deg, #4F46E5, #7C3AED) border-box',
                    border: '1.5px solid transparent',
                  }}
                  aria-label="Featured project: Marketing J.A.R.V.I.S."
                >
                  <div className="p-8 flex flex-col flex-1">
                    {/* Meta row */}
                    <div className="flex items-center gap-2 mb-[18px]">
                      <Badge variant="amber" star>Signature Project</Badge>
                      <Badge variant="dark">Proprietary IP</Badge>
                    </div>

                    <h3 className="font-syne font-extrabold text-[clamp(22px,4vw,30px)] text-white leading-[1.1] tracking-tight mb-2">
                      {featuredPortfolioItem.title}
                    </h3>
                    <p className="text-[14px] font-semibold text-indigo-pale mb-3">
                      {featuredPortfolioItem.subtitle}
                    </p>
                    <p className="text-[14px] leading-[1.7] text-white/55 flex-1">
                      {featuredPortfolioItem.description}
                    </p>

                    {/* Tags */}
                    <div className="flex gap-1.5 flex-wrap mt-5">
                      {featuredPortfolioItem.tags.map(tag => (
                        <span key={tag} className="font-mono text-[10.5px] px-2 py-0.5 rounded-[5px] bg-white/[0.07] text-white/40">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Episode chips */}
                    <div
                      className="flex flex-wrap gap-2 mt-6 pt-5"
                      style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
                    >
                      {jarvisEpisodeItems.map(ep => (
                        <span
                          key={ep.id}
                          className="flex items-center gap-1.5 bg-white/[0.06] border border-white/[0.1] rounded-lg px-3 py-1.5 text-[12.5px] font-semibold text-white/65"
                        >
                          <span
                            className={`w-[6px] h-[6px] rounded-full flex-shrink-0 ${ep.status === 'live' ? 'bg-emerald' : 'bg-amber'}`}
                            style={ep.status === 'in-progress' ? { animation: 'pulseAmber 1.5s infinite' } : undefined}
                            aria-hidden="true"
                          />
                          {ep.title}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-6">
                      <Link
                        href="/jarvis"
                        className="inline-flex items-center gap-1.5 text-[14px] font-bold text-indigo-pale/90 hover:text-indigo-pale transition-all duration-200 focus-visible:outline-none"
                      >
                        Explore Framework <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </article>
              </AnimateOnScroll>
            )}

            {/* ── Grid cards: Swiggy, Zomato, AI Portfolio ────────── */}
            {gridPortfolioItems.map((item, i) => (
              <AnimateOnScroll key={item.id} delay={0.1 + i * 0.08}>
                <article
                  className="bg-white border-[1.5px] border-border rounded-[14px] overflow-hidden group transition-all duration-300 hover:border-slate-300 hover:shadow-lg hover:-translate-y-[4px] flex flex-col"
                  aria-label={`Portfolio item: ${item.title}`}
                >
                  {/* Accent bar */}
                  {item.barClass && (
                    <div className={`h-[3px] w-full ${item.barClass}`} aria-hidden="true" />
                  )}
                  <div className="p-7 flex flex-col flex-1">
                    <Badge variant={item.badgeVariant} className="mb-3 w-fit">
                      {item.badge}
                    </Badge>
                    <h3 className="font-syne font-extrabold text-[20px] text-slate-900 mb-1.5 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[13.5px] text-gray-500 leading-[1.65] flex-1">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex gap-1.5 flex-wrap mt-4">
                      {item.tags.map(tag => (
                        <span key={tag} className="font-mono text-[10.5px] px-2 py-0.5 rounded-[5px] bg-gray-100 text-slate-500 border border-border">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="px-7 py-4 border-t border-border">
                    {item.href && item.status === 'live' ? (
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-indigo hover:gap-2.5 transition-all duration-200 focus-visible:outline-none"
                        aria-label={`View ${item.title}`}
                      >
                        View {item.category === 'AI Systems' ? 'Project' : 'Case Study'}
                        <ArrowRight size={13} />
                      </Link>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-[12px] font-mono font-semibold text-amber uppercase tracking-[0.06em]">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber" style={{ animation: 'pulseAmber 1.5s infinite' }} aria-hidden="true" />
                        In Progress
                      </span>
                    )}
                  </div>
                </article>
              </AnimateOnScroll>
            ))}

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          6. AI PROJECTS (DARK)
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="ai-projects"
        aria-labelledby="ai-heading"
        className="bg-slate-950 section-p"
      >
        <div className="max-w-site mx-auto">
          <AnimateOnScroll>
            <div className="flex justify-between items-end gap-4 flex-wrap">
              <SectionHeader
                dark
                label={aiProjectsPreviewHeader.label}
                title={<span id="ai-heading">{aiProjectsPreviewHeader.title}</span>}
                subtitle={aiProjectsPreviewHeader.subtitle}
              />
              <Link
                href="/ai-projects"
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-slate-400 border border-white/[0.12] px-[18px] py-2.5 rounded-full transition-all duration-200 hover:text-white hover:border-white/25 hover:bg-white/[0.05] flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-pale"
              >
                View All Projects →
              </Link>
            </div>
          </AnimateOnScroll>

          {/* Numbered list */}
          <AnimateOnScroll delay={0.1} className="mt-10">
            <div
              className="rounded-[14px] overflow-hidden"
              style={{ border: '1px solid rgba(255,255,255,0.07)' }}
              role="list"
              aria-label="AI systems list"
            >
              {homepageAISystems.map((system, i) => (
                <div
                  key={system.num}
                  role="listitem"
                  className="grid grid-cols-[56px_1fr_auto] items-center gap-5 px-7 py-[22px] border-l-2 border-l-transparent transition-all duration-200 hover:bg-indigo/[0.06] hover:border-l-indigo cursor-default"
                  style={{
                    borderBottom: i < homepageAISystems.length - 1
                      ? '1px solid rgba(255,255,255,0.06)'
                      : undefined,
                  }}
                >
                  {/* Number */}
                  <span className="font-mono text-[13px] font-medium text-white/20">
                    {system.num}
                  </span>

                  {/* Content */}
                  <div>
                    <div className="font-syne font-bold text-[16px] text-white/88 mb-1 leading-snug">
                      {system.title}
                    </div>
                    <div className="text-[13px] text-slate-500 leading-[1.55]">
                      {system.desc}
                    </div>
                  </div>

                  {/* Tech tags — hidden on small screens */}
                  <div className="hidden md:flex gap-1.5 flex-wrap justify-end">
                    {system.tags.map(tag => (
                      <span
                        key={tag}
                        className="font-mono text-[10.5px] px-2.5 py-[3px] rounded-[5px] border text-slate-400"
                        style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.08)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          7. J.A.R.V.I.S. TEASER
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="jarvis"
        aria-labelledby="jarvis-heading"
        className="bg-white section-p"
      >
        <div className="max-w-site mx-auto">
          <AnimateOnScroll>
            <SectionHeader
              label={jarvisTeaserContent.label}
              title="A proprietary analytical framework, built by Arun."
            />
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1} className="mt-10">
            {/* Gradient border card */}
            <div
              className="rounded-[20px] p-12 relative overflow-hidden transition-all duration-300 hover:shadow-glow"
              style={{
                background: 'linear-gradient(#0F172A, #0F172A) padding-box, linear-gradient(135deg, #4F46E5, #7C3AED) border-box',
                border: '1.5px solid transparent',
              }}
              aria-label="Marketing J.A.R.V.I.S. framework"
            >
              {/* Background orb */}
              <div
                className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.15) 0%, transparent 70%)' }}
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-start relative z-10">
                <div>
                  <p className="font-mono text-[11px] font-semibold tracking-[0.12em] uppercase text-white/30 mb-3.5">
                    {jarvisTeaserContent.eyebrow}
                  </p>

                  <h2
                    id="jarvis-heading"
                    className="font-syne font-extrabold text-[clamp(28px,5vw,44px)] text-white leading-[1.1] tracking-tight"
                  >
                    {jarvisTeaserContent.name}
                  </h2>
                  <p className="text-[clamp(14px,1.8vw,16px)] font-semibold text-indigo-pale mt-1.5 mb-4">
                    {jarvisTeaserContent.subname}
                  </p>

                  <p className="text-[15.5px] text-slate-400 leading-[1.72] max-w-[540px]">
                    {jarvisTeaserContent.description}
                  </p>

                  {/* Episode chips */}
                  <div className="flex flex-wrap gap-3 mt-8">
                    {jarvisTeaserContent.episodeChips.map(ep => (
                      <div
                        key={ep.label}
                        className="flex items-center gap-2 rounded-[10px] px-5 py-4 transition-all duration-200 hover:bg-indigo/[0.15]"
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)' }}
                      >
                        <div>
                          <div className="font-mono text-[9.5px] font-semibold tracking-[0.1em] uppercase text-white/25 mb-1.5">
                            {ep.status === 'in-progress' ? 'In Progress' : 'Published'}
                          </div>
                          <div className="font-syne font-bold text-[14px] text-white mb-2 leading-snug">
                            {ep.label}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${ep.status === 'published' ? 'bg-emerald' : 'bg-amber'}`}
                              style={ep.status === 'in-progress' ? { animation: 'pulseAmber 1.5s infinite' } : undefined}
                              aria-hidden="true"
                            />
                            <span className={`text-[11px] font-semibold ${ep.status === 'published' ? 'text-emerald' : 'text-amber'}`}>
                              {ep.status === 'published' ? 'Published' : 'In Progress'}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-8">
                    <Button href={jarvisTeaserContent.cta.href} variant="white-sm">
                      {jarvisTeaserContent.cta.label}
                    </Button>
                  </div>
                </div>

                {/* J monogram */}
                <div
                  className="hidden lg:block font-syne font-extrabold leading-none select-none"
                  style={{
                    fontSize: 'clamp(64px,8vw,108px)',
                    letterSpacing: '-4px',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.12), rgba(79,70,229,0.20))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                  aria-hidden="true"
                >
                  J.
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          8. CTA BANNER
      ══════════════════════════════════════════════════════════════ */}
      <section
        aria-label="Call to action"
        className="bg-gray-100 section-p"
      >
        <div className="max-w-site mx-auto">
          <AnimateOnScroll>
            <div
              className="rounded-[20px] text-center relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #4F46E5 0%, #5B21B6 100%)',
                padding: 'clamp(48px, 6vw, 72px)',
                boxShadow: '0 24px 64px rgba(79,70,229,0.3)',
              }}
            >
              {/* Decorative orbs */}
              <div
                className="absolute rounded-full pointer-events-none"
                style={{ top: -60, right: -60, width: 260, height: 260, background: 'rgba(255,255,255,0.07)' }}
                aria-hidden="true"
              />
              <div
                className="absolute rounded-full pointer-events-none"
                style={{ bottom: -80, left: -40, width: 200, height: 200, background: 'rgba(255,255,255,0.05)' }}
                aria-hidden="true"
              />

              <div className="relative z-10">
                {/* Eyebrow */}
                <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-white/45 mb-5">
                  {homepageCTA.eyebrow}
                </p>

                {/* Headline */}
                <h2 className="font-syne font-extrabold text-[clamp(28px,4vw,48px)] text-white leading-[1.1] tracking-tight">
                  {homepageCTA.title}
                </h2>

                {/* Subtitle */}
                <p className="text-[17px] text-white/60 mt-3.5 max-w-[480px] mx-auto leading-[1.6]">
                  {homepageCTA.subtitle}
                </p>

                {/* Audience pills */}
                <div className="flex justify-center gap-2.5 flex-wrap mt-6">
                  {homepageCTA.audiencePills.map(pill => (
                    <span
                      key={pill}
                      className="text-[13px] font-medium text-white/75 px-3.5 py-1.5 rounded-full border border-white/15"
                      style={{ background: 'rgba(255,255,255,0.10)' }}
                    >
                      {pill}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex justify-center gap-3 flex-wrap mt-9">
                  <Button href={homepageCTA.primaryBtn.href} variant="white">
                    {homepageCTA.primaryBtn.label}
                    <ArrowRight size={14} />
                  </Button>
                  <Button href={homepageCTA.secondaryBtn.href} variant="white-outline">
                    {homepageCTA.secondaryBtn.label}
                  </Button>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

    </div>
  )
}
