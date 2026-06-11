/**
 * app/portfolio/page.tsx — Portfolio Page
 * ──────────────────────────────────────────────────────────────────────────
 * Design priority: Proof-of-work before capabilities.
 *
 * Sections (in order):
 *   1. Hero              — "Work that thinks." + 4 stat pills including framework
 *   2. Featured Work     — J.A.R.V.I.S. flagship + Swiggy + Zomato + Zepto
 *   3. Strategic Analysis— AI Dashboard + Nike + MBA Portfolio
 *   4. Marketing Work    — Kotler's Quorum (featured) + Canva + Campaigns + LinkedIn
 *   5. AI Systems        — Dark numbered list → links to /ai-projects
 *   6. Skills Map        — Six competency cards evidenced by named work
 *   7. Current Focus     — Four cards signalling direction
 *   8. Philosophy        — Two-column quote + prose
 *   9. CTA               — Three-path close
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
  portfolioItems,
  featuredPortfolioItem,
  jarvisEpisodeItems,
  mbaProjects,
} from '@/lib/data/portfolio'
import { homepageAISystems } from '@/lib/data/ai-projects'

// ── Page metadata ────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    `Strategic work, AI systems, and business analyses by ${siteConfig.name}. ` +
    `Featuring ${siteConfig.frameworkName}, Swiggy and Zomato strategic growth analyses, ` +
    'and five production AI systems built on n8n, OpenAI API, and Python.',
}

// ── Arrow icon ───────────────────────────────────────────────────────────
function ArrowRight({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <path d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ── Check icon ───────────────────────────────────────────────────────────
function Check({ color = 'white' }: { color?: string }) {
  return (
    <svg width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <polyline points="1.5,5 4,7.5 8.5,2.5" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ── Static page data ─────────────────────────────────────────────────────
const heroStats = [
  { value: '1',   label: 'Proprietary Framework', accent: true },
  { value: '2',   label: 'Published Analyses',    accent: false },
  { value: '5',   label: 'AI Systems Built',       accent: false },
  { value: '7+',  label: 'Strategic Projects',     accent: false },
]

const marketingItems = [
  {
    id:       'canva-portfolio',
    icon:     '🎨',
    badge:    'Design Portfolio',
    variant:  'violet' as const,
    title:    'Canva Design Portfolio',
    subtitle: 'Visual Communication Work',
    desc:     'A collection of design work spanning LinkedIn banners, presentation decks, social media content, and marketing collateral — demonstrating visual communication and brand consistency.',
    tags:     ['Canva', 'Visual Design', 'Branding'],
    status:   'coming-soon' as const,
  },
  {
    id:       'campaign-concepts',
    icon:     '📈',
    badge:    'Campaign Strategy',
    variant:  'emerald' as const,
    title:    'Marketing Campaign Concepts',
    subtitle: 'Strategic Campaign Planning',
    desc:     'Conceptual marketing campaigns developed across brand strategy, growth marketing, and digital channels — covering audience targeting, messaging frameworks, channel strategy, and KPI design.',
    tags:     ['Campaign Planning', 'Digital Strategy'],
    status:   'coming-soon' as const,
  },
  {
    id:       'linkedin-brand',
    icon:     '🔗',
    badge:    'Personal Branding',
    variant:  'indigo' as const,
    title:    'LinkedIn Personal Brand',
    subtitle: 'Ongoing Brand-Building Initiative',
    desc:     'An ongoing personal branding initiative — building thought leadership at the intersection of marketing, business analysis, and AI through consistent content and strategic positioning.',
    tags:     ['LinkedIn', 'Content Strategy', 'Thought Leadership'],
    status:   'live' as const,
    href:     siteConfig.linkedIn,
  },
]

const skillCards = [
  {
    icon:  '📊',
    title: 'Business Analysis',
    desc:  'Structuring complex business problems, applying analytical frameworks, producing decision-ready recommendations.',
    evidence: ['J.A.R.V.I.S.', 'Swiggy', 'Zomato', 'AI Dashboard', 'MBA Projects'],
    gradient: 'from-indigo to-indigo-light',
  },
  {
    icon:  '🧠',
    title: 'Strategic Thinking',
    desc:  'Synthesising market intelligence, competitive dynamics, and customer insight into coherent strategic positions.',
    evidence: ['J.A.R.V.I.S. Framework', 'Nike Strategy', 'Gear Up Bikes', 'Zara Analysis'],
    gradient: 'from-violet to-[#9333EA]',
  },
  {
    icon:  '📈',
    title: 'Marketing',
    desc:  'Full-funnel marketing strategy, brand positioning, content creation, social media management, and campaign design.',
    evidence: ["Kotler's Quorum", 'LinkedIn Brand', 'Campaign Concepts', 'Nike Strategy'],
    gradient: 'from-cyan to-indigo',
  },
  {
    icon:  '🔬',
    title: 'Research',
    desc:  'Primary and secondary market research, literature review, competitive intelligence, customer insight synthesis.',
    evidence: ['J.A.R.V.I.S. Layers 1–5', 'EV Literature Review', 'Circular Economy', 'MuscleBlaze'],
    gradient: 'from-emerald to-cyan',
  },
  {
    icon:  '🤖',
    title: 'AI Automation',
    desc:  'End-to-end AI system design and deployment — from workflow architecture through API integration to production pipelines.',
    evidence: ['AI Research System', 'Competitor Intel', 'Lead Gen System', 'Content Repurposing', 'AI Dashboard'],
    gradient: 'from-amber to-[#F97316]',
  },
  {
    icon:  '✍️',
    title: 'Communication',
    desc:  'Translating complex analysis into clear, structured, decision-ready communication across reports, presentations, and documents.',
    evidence: ['J.A.R.V.I.S. Reports', 'Canva Portfolio', "Kotler's Quorum", 'MBA White Papers'],
    gradient: 'from-[#EC4899] to-[#9333EA]',
  },
]

const focusCards = [
  { icon: '📊', title: 'Business Analysis',   items: ['Strategic growth analysis', 'Market intelligence', 'Competitive research'] },
  { icon: '🤖', title: 'AI Growth Systems',    items: ['Lead generation systems', 'Marketing automation', 'Research workflows'] },
  { icon: '📈', title: 'Growth Marketing',     items: ['Customer acquisition', 'Content strategy', 'Brand positioning'] },
  { icon: '🚀', title: 'SaaS & Startups',      items: ['Enterprise SaaS', 'Product-led growth', 'Digital adoption'] },
]

// ── Status badge helper ──────────────────────────────────────────────────
function StatusBadge({ status }: { status: string }) {
  if (status === 'live') return null
  if (status === 'in-progress') return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold tracking-[0.06em] uppercase text-amber">
      <span className="w-1.5 h-1.5 rounded-full bg-amber" style={{ animation: 'pulseAmber 1.5s infinite' }} aria-hidden="true" />
      In Progress
    </span>
  )
  if (status === 'in-portfolio') return <Badge variant="soon">In Portfolio</Badge>
  return <Badge variant="soon">Coming Soon</Badge>
}

// ════════════════════════════════════════════════════════════════════════
export default function PortfolioPage() {
  // Non-featured items for the right-side of the featured grid
  const analysisItems = portfolioItems.filter(p =>
    ['swiggy-analysis', 'zomato-analysis', 'zepto-analysis'].includes(p.id)
  )
  const strategicItems = portfolioItems.filter(p =>
    ['ai-business-dashboard', 'nike-linkedin-strategy', 'mba-projects'].includes(p.id)
  )

  return (
    <div className="flex flex-col">

      {/* ══════════════════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════════════════ */}
      <section
        aria-label="Portfolio introduction"
        className="relative bg-white overflow-hidden pt-16"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(79,70,229,0.032) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.032) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            WebkitMaskImage: 'radial-gradient(ellipse 65% 80% at 90% 40%, black 0%, transparent 70%)',
            maskImage: 'radial-gradient(ellipse 65% 80% at 90% 40%, black 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute top-0 right-0 pointer-events-none"
          style={{ width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 65%)', transform: 'translate(20%,-20%)' }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-site mx-auto section-px hero-py">
          <div className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-3.5 py-1.5 text-[13px] font-medium text-slate-600 shadow-sm mb-7 hero-anim anim-delay-100">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo flex-shrink-0" aria-hidden="true" />
            Strategic Work · Business Analysis · AI Systems
          </div>

          <h1 className="font-syne font-extrabold text-display text-slate-900 hero-anim anim-delay-200">
            Work that <GradientText>thinks.</GradientText>
          </h1>

          <p className="mt-5 text-body-lg text-gray-500 max-w-tight hero-anim anim-delay-300">
            This is not a gallery of outputs. It is a record of{' '}
            <strong className="text-slate-700 font-semibold">problems solved</strong>,{' '}
            <strong className="text-slate-700 font-semibold">questions answered</strong>, and{' '}
            <strong className="text-slate-700 font-semibold">systems built</strong> — across
            strategic analysis, marketing execution, and AI-powered automation.
          </p>

          {/* Category anchor chips */}
          <div className="flex flex-wrap gap-2 mt-8 hero-anim anim-delay-400">
            {[
              { label: 'J.A.R.V.I.S. Framework', href: '#featured' },
              { label: 'Strategic Analysis',      href: '#strategic' },
              { label: 'Marketing Work',           href: '#marketing' },
              { label: 'AI Systems',               href: '#ai-systems' },
            ].map(chip => (
              <a
                key={chip.label}
                href={chip.href}
                className="font-mono text-[11.5px] font-medium px-3.5 py-1.5 rounded-full bg-gray-100 border border-border text-slate-600 transition-all duration-200 hover:bg-indigo-50 hover:border-indigo-100 hover:text-indigo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo"

              >
                {chip.label}
              </a>
            ))}
          </div>

          {/* Stats */}
          <div
            className="flex flex-wrap mt-10 border border-border rounded-[14px] overflow-hidden bg-white shadow-sm w-fit hero-anim anim-delay-500"
          >
            {heroStats.map((stat, i) => (
              <div
                key={stat.label}
                className="px-7 py-[18px] text-center"
                style={{ borderRight: i < heroStats.length - 1 ? '1px solid #E8EAED' : undefined }}
              >
                <div
                  className="font-syne font-extrabold text-[26px] leading-none tracking-tight"
                  style={stat.accent ? undefined : { color: '#0F172A' }}
                >
                  {stat.accent ? <GradientText>{stat.value}</GradientText> : stat.value}
                </div>
                <div className="font-mono text-[10px] text-gray-400 mt-1 tracking-[0.06em] uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          2. FEATURED WORK — J.A.R.V.I.S. + ANALYSES
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="featured"
        aria-labelledby="featured-heading"
        className="bg-gray-50 section-p scroll-mt-16"
      >
        <div className="max-w-site mx-auto">
          <AnimateOnScroll>
            <div className="flex justify-between items-end gap-4 flex-wrap">
              <SectionHeader
                label="Featured Work"
                title={<span id="featured-heading">The work I&rsquo;d put in front<br />of anyone, first.</span>}
                subtitle="The most significant output across the portfolio — the work that best represents how I think about strategy, research, and business intelligence."
              />
              <Button href="/jarvis" variant="secondary" className="flex-shrink-0">
                Explore J.A.R.V.I.S. →
              </Button>
            </div>
          </AnimateOnScroll>

          {/* J.A.R.V.I.S. flagship card */}
          {featuredPortfolioItem && (
            <AnimateOnScroll delay={0.08} className="mt-10">
              <article
                className="rounded-[20px] overflow-hidden relative transition-all duration-300 hover:-translate-y-[2px] hover:shadow-glow"
                style={{
                  background: 'linear-gradient(#0F172A, #0F172A) padding-box, linear-gradient(135deg, #4F46E5, #7C3AED) border-box',
                  border: '1.5px solid transparent',
                  padding: 'clamp(32px,4vw,48px)',
                }}
                aria-label={`Featured: ${featuredPortfolioItem.title}`}
              >
                {/* Orb */}
                <div
                  className="absolute -top-20 -right-20 w-80 h-80 rounded-full pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.12) 0%, transparent 65%)' }}
                  aria-hidden="true"
                />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-5">
                      <Badge variant="amber" star>Signature Framework</Badge>
                      <Badge variant="dark">Proprietary IP</Badge>
                      <span
                        className="font-mono text-[9.5px] font-semibold tracking-[0.08em] uppercase px-2.5 py-1 rounded-full"
                        style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.3)', border: '1px solid rgba(255,255,255,0.1)' }}
                      >
                        {siteConfig.frameworkVersion}
                      </span>
                    </div>

                    <h2 className="font-syne font-extrabold text-[clamp(28px,4.5vw,50px)] text-white leading-[1.08] tracking-tight">
                      {siteConfig.frameworkName}
                    </h2>
                    <p className="text-[clamp(14px,1.8vw,17px)] font-semibold text-indigo-pale mt-2 mb-4">
                      Proprietary Strategic Growth Analysis Framework
                    </p>
                    <p className="text-[15px] leading-[1.72] text-white/55 max-w-[580px]">
                      A seven-layer framework combining business intelligence, market research, and
                      AI-accelerated investigation to produce decision-ready strategic analyses of
                      high-growth companies. The only proprietary analytical methodology in this portfolio.
                    </p>

                    {/* Episode status chips */}
                    <div className="flex flex-wrap gap-2.5 mt-6">
                      {jarvisEpisodeItems.map(ep => (
                        <div
                          key={ep.id}
                          className="flex items-center gap-2 rounded-[10px] px-4 py-2 transition-all duration-200 hover:bg-indigo/[0.15]"
                          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)' }}
                        >
                          <span
                            className={`w-[6px] h-[6px] rounded-full flex-shrink-0 ${ep.status === 'live' ? 'bg-emerald' : 'bg-amber'}`}
                            style={ep.status === 'in-progress' ? { animation: 'pulseAmber 1.5s infinite' } : undefined}
                            aria-hidden="true"
                          />
                          <div>
                            <p className="font-mono text-[9px] font-semibold tracking-[0.08em] uppercase text-white/25 mb-0.5">
                              {ep.status === 'live' ? 'Published' : 'In Progress'}
                            </p>
                            <p className="font-syne font-bold text-[13.5px] text-white/75">{ep.title}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2.5 mt-7">
                      <Button href="/jarvis" variant="white-sm">
                        Explore Framework →
                      </Button>
                      <Button href="/jarvis#analyses" variant="ghost-white-sm">
                        View Analyses
                      </Button>
                    </div>
                  </div>

                  {/* J monogram */}
                  <div
                    className="hidden lg:block font-syne font-extrabold leading-none select-none flex-shrink-0"
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
              </article>
            </AnimateOnScroll>
          )}

          {/* Swiggy + Zomato published episodes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
            {analysisItems.filter(ep => ep.status === 'live').map((ep, i) => (
              <AnimateOnScroll key={ep.id} delay={0.08 + i * 0.08}>
                <article
                  className="bg-white border-[1.5px] border-border rounded-[14px] overflow-hidden group transition-all duration-300 hover:border-indigo/20 hover:shadow-lg hover:-translate-y-[3px] flex flex-col h-full"
                  aria-label={ep.title}
                >
                  <div className={`h-[3px] ${ep.barClass ?? 'bg-bar-research'}`} aria-hidden="true" />
                  <div className="p-7 flex flex-col flex-1">
                    {/* Episode label */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="font-mono text-[10px] font-semibold tracking-[0.10em] uppercase text-indigo">
                        {ep.id === 'swiggy-analysis' ? 'Episode 01 · J.A.R.V.I.S. Series' : 'Episode 02 · J.A.R.V.I.S. Series'}
                      </span>
                      <Badge variant="emerald">Published</Badge>
                    </div>

                    <h3 className="font-syne font-extrabold text-[clamp(22px,3vw,28px)] text-slate-900 leading-snug mb-1">
                      {ep.title}
                    </h3>
                    <p className="text-[13.5px] font-semibold text-indigo mb-3">{ep.subtitle}</p>
                    <p className="text-[14px] leading-[1.68] text-gray-500 flex-1">{ep.description}</p>

                    {/* What the analysis covers */}
                    <div className="mt-5 p-4 bg-gray-50 rounded-[10px] border border-border">
                      <p className="font-mono text-[9.5px] font-semibold tracking-[0.10em] uppercase text-gray-400 mb-2.5">
                        Analysis Covers
                      </p>
                      <div className="grid grid-cols-2 gap-1.5">
                        {[
                          'Business Model & Growth Architecture',
                          'Market & Competitive Dynamics',
                          'Customer Intelligence',
                          'Strategic Recommendations',
                        ].map(layer => (
                          <div key={layer} className="flex items-start gap-1.5 text-[12px] text-slate-600 leading-snug">
                            <span className="w-1 h-1 rounded-full bg-indigo mt-[5px] flex-shrink-0" aria-hidden="true" />
                            {layer}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {ep.tags.map(tag => (
                        <span key={tag} className="font-mono text-[10.5px] px-2 py-0.5 rounded-[5px] bg-gray-100 text-slate-500 border border-border">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="px-7 py-4 border-t border-border flex items-center justify-between">
                    <Badge variant="indigo">J.A.R.V.I.S.</Badge>
                    <Link
                      href={ep.href!}
                      className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-indigo hover:gap-2.5 transition-all duration-200 focus-visible:outline-none"
                    >
                      View Analysis <ArrowRight />
                    </Link>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Zepto — in progress */}
          {analysisItems.filter(ep => ep.status === 'in-progress').map(ep => (
            <AnimateOnScroll key={ep.id} delay={0.16} className="mt-5">
              <div
                className="flex items-center justify-between gap-5 flex-wrap px-7 py-5 bg-white border border-border rounded-[14px] opacity-80 hover:opacity-100 transition-opacity duration-200"
                aria-label={`${ep.title} — In Progress`}
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[12px] font-semibold text-amber tracking-[0.06em]">EP.03</span>
                  <div>
                    <p className="font-syne font-extrabold text-[18px] text-slate-900 leading-snug">{ep.title}</p>
                    <p className="text-[13px] text-gray-400 mt-0.5">{ep.subtitle}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold text-amber">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber" style={{ animation: 'pulseAmber 1.5s infinite' }} aria-hidden="true" />
                    In Progress
                  </span>
                  <Badge variant="indigo">J.A.R.V.I.S.</Badge>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          3. STRATEGIC ANALYSIS
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="strategic"
        aria-labelledby="strategic-heading"
        className="bg-white section-p scroll-mt-16"
      >
        <div className="max-w-site mx-auto">
          <AnimateOnScroll>
            <SectionHeader
              label="Strategic Analysis"
              title={<span id="strategic-heading">Business thinking applied<br />to real problems.</span>}
              subtitle="Strategic projects, market analyses, and structured business research developed through academic rigour and independent study."
            />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-12">

            {/* AI Business Dashboard */}
            {strategicItems.filter(i => i.id === 'ai-business-dashboard').map(item => (
              <AnimateOnScroll key={item.id} delay={0.08}>
                <article className="bg-white border-[1.5px] border-border rounded-[14px] overflow-hidden group transition-all duration-300 hover:border-indigo/20 hover:shadow-md hover:-translate-y-[3px] flex flex-col h-full">
                  <div className={`h-[3px] ${item.barClass ?? 'bg-bar-research'}`} aria-hidden="true" />
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-11 h-11 rounded-[11px] bg-indigo-50 flex items-center justify-center text-[22px] group-hover:bg-indigo-100 transition-colors duration-200">
                        📊
                      </div>
                      <Badge variant={item.badgeVariant}>{item.badge}</Badge>
                    </div>
                    <h3 className="font-syne font-extrabold text-[18px] text-slate-900 mb-1.5 leading-snug">{item.title}</h3>
                    <p className="text-[13.5px] font-semibold text-indigo mb-3">{item.subtitle}</p>
                    <p className="text-[14px] leading-[1.70] text-gray-500 flex-1">{item.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {item.tags.map(tag => (
                        <span key={tag} className="font-mono text-[10.5px] px-2 py-0.5 rounded-[5px] bg-gray-100 text-slate-500 border border-border">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="px-7 py-4 border-t border-border flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {item.skills.slice(0, 2).map(s => <span key={s} className="font-mono text-[10px] text-slate-400">{s}</span>)}
                    </div>
                    <StatusBadge status={item.status} />
                  </div>
                </article>
              </AnimateOnScroll>
            ))}

            {/* Nike LinkedIn Strategy */}
            {strategicItems.filter(i => i.id === 'nike-linkedin-strategy').map(item => (
              <AnimateOnScroll key={item.id} delay={0.14}>
                <article className="bg-white border-[1.5px] border-border rounded-[14px] overflow-hidden group transition-all duration-300 hover:border-indigo/20 hover:shadow-md hover:-translate-y-[3px] flex flex-col h-full">
                  <div className="h-[3px]" style={{ background: 'linear-gradient(90deg,#1a1a1a,#374151)' }} aria-hidden="true" />
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-11 h-11 rounded-[11px] bg-gray-100 flex items-center justify-center text-[22px]">👟</div>
                      <Badge variant={item.badgeVariant}>{item.badge}</Badge>
                    </div>
                    <h3 className="font-syne font-extrabold text-[18px] text-slate-900 mb-1.5 leading-snug">{item.title}</h3>
                    <p className="text-[13.5px] font-semibold text-slate-500 mb-3">{item.subtitle}</p>
                    <p className="text-[14px] leading-[1.70] text-gray-500 flex-1">{item.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {item.tags.map(tag => (
                        <span key={tag} className="font-mono text-[10.5px] px-2 py-0.5 rounded-[5px] bg-gray-100 text-slate-500 border border-border">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="px-7 py-4 border-t border-border flex items-center justify-end">
                    <StatusBadge status={item.status} />
                  </div>
                </article>
              </AnimateOnScroll>
            ))}

            {/* MBA Strategic Projects — full-width dark card */}
            <AnimateOnScroll className="lg:col-span-2" delay={0.1}>
              <article
                className="rounded-[14px] overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-[2px]"
                style={{ background: 'linear-gradient(135deg, #0F172A, #1E293B)', border: '1.5px solid rgba(255,255,255,0.07)' }}
                aria-label="MBA Strategic Projects Portfolio"
              >
                <div className="p-10">
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-2.5 mb-3">
                        <div className="w-[52px] h-[52px] rounded-[13px] flex items-center justify-center text-[26px]" style={{ background: 'rgba(79,70,229,0.15)', border: '1px solid rgba(79,70,229,0.2)' }}>
                          🎓
                        </div>
                        <div>
                          <p className="font-mono text-[9.5px] font-semibold tracking-[0.10em] uppercase text-white/30 mb-0.5">MBA Strategic Projects</p>
                          <p className="text-[12px] text-white/25">O.P. Jindal Global University</p>
                        </div>
                      </div>
                      <h3 className="font-syne font-extrabold text-[22px] text-white leading-snug">
                        MBA Strategic Projects Portfolio
                      </h3>
                      <p className="text-[14px] text-slate-400 mt-1">
                        Six structured business and marketing projects spanning servicescape analysis, business simulation, market research, and sustainability strategy.
                      </p>
                    </div>
                    <Badge variant="soon">Coming Soon</Badge>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {mbaProjects.map(project => (
                      <div
                        key={project.title}
                        className="rounded-[9px] p-3.5 transition-all duration-200 hover:bg-indigo/[0.10] hover:border-indigo/20"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                      >
                        <p className="font-syne font-bold text-[13px] text-white/75 leading-snug mb-1">{project.title}</p>
                        <p className="font-mono text-[10px] text-white/30">{project.type}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          4. MARKETING WORK
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="marketing"
        aria-labelledby="marketing-heading"
        className="bg-gray-50 section-p scroll-mt-16"
      >
        <div className="max-w-site mx-auto">
          <AnimateOnScroll>
            <SectionHeader
              label="Marketing Work"
              title={<span id="marketing-heading">Strategy, content, and<br />brand execution.</span>}
              subtitle="Practical marketing work spanning social media strategy, content creation, visual design, and brand communication."
            />
          </AnimateOnScroll>

          {/* Kotler's Quorum — featured wide card */}
          <AnimateOnScroll delay={0.08} className="mt-12">
            <article
              className="bg-white border-[1.5px] border-border rounded-[14px] overflow-hidden transition-all duration-300 hover:border-indigo/18 hover:shadow-lg hover:-translate-y-[2px]"
              aria-label="Kotler's Quorum"
            >
              <div className="h-[3px]" style={{ background: 'linear-gradient(90deg, #F59E0B, #F97316, #4F46E5)' }} aria-hidden="true" />
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-0">
                <div className="p-9">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="font-mono text-[10.5px] font-semibold tracking-[0.10em] uppercase text-indigo">
                      Featured Marketing Project
                    </span>
                    <Badge variant="indigo">Marketing Association</Badge>
                    <Badge variant="soon">In Portfolio</Badge>
                  </div>
                  <h3 className="font-syne font-extrabold text-[clamp(22px,3vw,32px)] text-slate-900 leading-snug mb-1">
                    Kotler&rsquo;s Quorum
                  </h3>
                  <p className="text-[14.5px] font-semibold text-indigo mb-4">
                    Social Media & Marketing Initiatives — MBA Marketing Association
                  </p>
                  <p className="text-[15px] leading-[1.72] text-gray-500 max-w-[520px]">
                    Led social media strategy and content execution for the marketing association of
                    O.P. Jindal Global University. Designed the content calendar, created visuals and
                    copy, planned event promotions, and built{' '}
                    <strong className="text-slate-700 font-semibold">consistent brand voice across platforms</strong>{' '}
                    to grow student engagement and institutional presence.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {['Content Strategy', 'Visual Design', 'Event Promotion', 'Audience Engagement', 'Brand Voice'].map(pillar => (
                      <div
                        key={pillar}
                        className="flex items-center gap-1.5 px-3.5 py-1.5 bg-gray-50 border border-border rounded-full text-[13px] font-medium text-slate-700 transition-all duration-200 hover:bg-indigo-50 hover:border-indigo-100 hover:text-indigo"
                      >
                        {pillar}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-9 flex flex-col items-end justify-between border-t lg:border-t-0 lg:border-l border-border min-w-[180px]">
                  <div className="text-right">
                    <p className="font-mono text-[10px] text-gray-400 uppercase tracking-[0.08em] mb-1">Role Type</p>
                    <p className="font-syne font-bold text-[15px] text-slate-900">Association Role</p>
                  </div>
                  <div className="bg-gray-50 border border-border rounded-[11px] p-4 text-center mt-4">
                    <p className="font-syne font-extrabold text-[24px] text-slate-900">MBA</p>
                    <p className="text-[11px] text-gray-400 mt-0.5">Social + Events</p>
                  </div>
                </div>
              </div>
            </article>
          </AnimateOnScroll>

          {/* Marketing sub-grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-5">
            {marketingItems.map((item, i) => (
              <AnimateOnScroll key={item.id} delay={i * 0.08}>
                <article
                  className="bg-white border-[1.5px] border-border rounded-[14px] overflow-hidden group transition-all duration-300 hover:border-indigo/20 hover:shadow-md hover:-translate-y-[3px] flex flex-col h-full"
                  aria-label={item.title}
                >
                  <div
                    className="h-[3px]"
                    style={{ background: item.id === 'linkedin-brand' ? 'linear-gradient(90deg,#0077B6,#4F46E5)' : item.id === 'campaign-concepts' ? 'linear-gradient(90deg,#059669,#0891B2)' : 'linear-gradient(90deg,#7C3AED,#EC4899)' }}
                    aria-hidden="true"
                  />
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-11 h-11 rounded-[11px] bg-indigo-50 flex items-center justify-center text-[22px] group-hover:bg-indigo-100 transition-colors duration-200" aria-hidden="true">
                        {item.icon}
                      </div>
                      <Badge variant={item.variant}>{item.badge}</Badge>
                    </div>
                    <h3 className="font-syne font-extrabold text-[17px] text-slate-900 mb-1.5 leading-snug">{item.title}</h3>
                    <p className="text-[13px] text-slate-500 font-medium mb-3">{item.subtitle}</p>
                    <p className="text-[13.5px] leading-[1.68] text-gray-500 flex-1">{item.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {item.tags.map(tag => (
                        <span key={tag} className="font-mono text-[10.5px] px-2 py-0.5 rounded-[5px] bg-gray-100 text-slate-500 border border-border">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="px-7 py-4 border-t border-border flex items-center justify-between">
                    {item.status === 'live' && item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-indigo hover:gap-2.5 transition-all duration-200 focus-visible:outline-none"
                      >
                        View Profile <ArrowRight />
                      </a>
                    ) : (
                      <StatusBadge status={item.status} />
                    )}
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          5. AI SYSTEMS (DARK)
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="ai-systems"
        aria-labelledby="ai-heading"
        className="bg-slate-950 section-p scroll-mt-16"
      >
        <div className="max-w-site mx-auto">
          <AnimateOnScroll>
            <div className="flex justify-between items-end gap-4 flex-wrap">
              <SectionHeader
                dark
                label="AI Systems"
                title={<span id="ai-heading">Five production systems.<br />Built and deployed.</span>}
                subtitle="End-to-end automation pipelines built using n8n, OpenAI API, and Python. Each system solves a specific marketing or business intelligence problem."
              />
              <Link
                href="/ai-projects"
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-slate-400 border border-white/[0.12] px-[18px] py-2.5 rounded-full transition-all duration-200 hover:text-white hover:border-white/25 hover:bg-white/[0.05] flex-shrink-0 focus-visible:outline-none"
              >
                View Full AI Projects →
              </Link>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1} className="mt-10">
            <div
              className="rounded-[14px] overflow-hidden"
              style={{ border: '1px solid rgba(255,255,255,0.07)' }}
              role="list"
            >
              {homepageAISystems.map((sys, i) => (
                <div
                  key={sys.num}
                  role="listitem"
                  className="grid grid-cols-[56px_1fr_auto] items-center gap-5 px-7 py-[22px] border-l-2 border-l-transparent transition-all duration-200 hover:bg-indigo/[0.06] hover:border-l-indigo cursor-default"
                  style={{ borderBottom: i < homepageAISystems.length - 1 ? '1px solid rgba(255,255,255,0.06)' : undefined }}
                >
                  <span className="font-mono text-[13px] font-medium text-white/20">{sys.num}</span>
                  <div>
                    <p className="font-syne font-bold text-[16px] text-white/88 mb-1 leading-snug">{sys.title}</p>
                    <p className="text-[13px] text-slate-500 leading-[1.55]">{sys.desc}</p>
                  </div>
                  <div className="hidden md:flex gap-1.5 flex-wrap justify-end">
                    {sys.tags.map(tag => (
                      <span key={tag} className="font-mono text-[10.5px] px-2.5 py-[3px] rounded-[5px]" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', color: '#94A3B8' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.15} className="mt-6 text-center">
            <Link
              href="/ai-projects"
              className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-slate-400 border border-white/[0.12] px-5 py-2.5 rounded-full transition-all duration-200 hover:text-white hover:border-white/25 hover:bg-white/[0.05] focus-visible:outline-none"
            >
              Explore All AI Projects in Detail →
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          6. SKILLS DEMONSTRATED
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="skills"
        aria-labelledby="skills-heading"
        className="bg-white section-p"
      >
        <div className="max-w-site mx-auto">
          <AnimateOnScroll>
            <SectionHeader
              label="Skills Across the Portfolio"
              title={<span id="skills-heading">Six competencies.<br />Evidenced by the work.</span>}
              subtitle="Every skill listed here maps directly to named portfolio work — not self-assessment, but demonstrated capability with a paper trail."
            />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {skillCards.map((skill, i) => (
              <AnimateOnScroll key={skill.title} delay={(i % 3) * 0.08}>
                <article
                  className="bg-gray-50 border-[1.5px] border-border rounded-[14px] p-7 group cursor-default transition-all duration-300 hover:bg-white hover:border-indigo/18 hover:-translate-y-[3px] hover:shadow-md relative overflow-hidden"
                  aria-label={`${skill.title} skills`}
                >
                  <div
                    className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${skill.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    aria-hidden="true"
                  />
                  <div className="text-[24px] mb-3.5" aria-hidden="true">{skill.icon}</div>
                  <h3 className="font-syne font-extrabold text-[15.5px] text-slate-900 mb-2">{skill.title}</h3>
                  <p className="text-[13px] text-gray-500 leading-[1.6] mb-4">{skill.desc}</p>

                  <div className="flex flex-wrap gap-1.5" role="list" aria-label={`Evidence for ${skill.title}`}>
                    {skill.evidence.map(e => (
                      <span
                        key={e}
                        role="listitem"
                        className="font-mono text-[10px] px-2 py-0.5 rounded-[4px] bg-indigo-50 text-indigo border border-indigo-100"
                      >
                        {e}
                      </span>
                    ))}
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          7. CURRENT FOCUS
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="current-focus"
        aria-labelledby="focus-heading"
        className="bg-gray-50 section-p"
      >
        <div className="max-w-site mx-auto">
          <AnimateOnScroll>
            <SectionHeader
              label="Current Focus"
              title={<span id="focus-heading">Where the work<br />is heading.</span>}
              subtitle="The portfolio documents what's been built. This communicates where the thinking and practice are directed next."
            />
          </AnimateOnScroll>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {focusCards.map((card, i) => (
              <AnimateOnScroll key={card.title} delay={i * 0.08}>
                <div
                  className="bg-white border-[1.5px] border-border rounded-[14px] p-6 group cursor-default transition-all duration-300 hover:border-indigo/20 hover:-translate-y-[3px] hover:shadow-md"
                >
                  <div className="text-[22px] mb-3.5" aria-hidden="true">{card.icon}</div>
                  <h3 className="font-syne font-extrabold text-[15px] text-slate-900 mb-3 leading-snug">{card.title}</h3>
                  <ul className="space-y-1.5" role="list">
                    {card.items.map(item => (
                      <li key={item} className="flex items-center gap-1.5 text-[13px] text-gray-500">
                        <span className="w-[5px] h-[5px] rounded-full bg-indigo/50 flex-shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          8. PORTFOLIO PHILOSOPHY
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="philosophy"
        aria-label="Portfolio philosophy"
        className="bg-white section-p"
      >
        <div className="max-w-site mx-auto">
          <AnimateOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

              {/* Quote */}
              <div className="relative pl-6">
                <div
                  className="absolute left-0 top-0 bottom-0 w-[3px] rounded-[2px]"
                  style={{ background: 'linear-gradient(180deg, #4F46E5, #7C3AED)' }}
                  aria-hidden="true"
                />
                <blockquote>
                  <p className="font-syne font-bold text-[clamp(18px,2.8vw,26px)] text-slate-900 leading-[1.45] tracking-tight">
                    &ldquo;I don&rsquo;t believe portfolios should only showcase{' '}
                    <em className="not-italic text-indigo">outputs</em>. They should showcase
                    thinking, decision-making, and problem-solving.&rdquo;
                  </p>
                  <footer className="mt-5 text-[14px] text-gray-400 font-medium">
                    — {siteConfig.name}
                  </footer>
                </blockquote>
              </div>

              {/* Prose */}
              <div className="space-y-4 text-[15.5px] leading-[1.78] text-gray-500">
                <p>
                  Most portfolios are galleries — collections of finished things arranged to look
                  impressive. They show you what someone made, rarely why they made it, and almost
                  never how they thought about it.
                </p>
                <p>
                  This portfolio is built on a different premise: that the most meaningful evidence
                  of professional capability is not the output itself, but the{' '}
                  <strong className="text-slate-700 font-semibold">quality of thinking behind it</strong>.
                  The {siteConfig.frameworkName} framework exists not just as a deliverable, but as a
                  documented way of approaching strategic analysis. The MBA projects exist not as
                  line items, but as evidence of structured business training applied to real scenarios.
                </p>
                <p>
                  If you&rsquo;re evaluating this work, the question I&rsquo;d encourage you to ask is
                  not <strong className="text-slate-700">&ldquo;what did he produce?&rdquo;</strong> but{' '}
                  <strong className="text-slate-700">&ldquo;how does he think?&rdquo;</strong> The answer,
                  I hope, is visible throughout.
                </p>
              </div>

            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          9. CTA
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
              <div className="absolute rounded-full pointer-events-none" style={{ top: -60, right: -60, width: 260, height: 260, background: 'rgba(255,255,255,0.07)' }} aria-hidden="true" />
              <div className="absolute rounded-full pointer-events-none" style={{ bottom: -80, left: -40, width: 200, height: 200, background: 'rgba(255,255,255,0.05)' }} aria-hidden="true" />

              <div className="relative z-10">
                <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-white/45 mb-5">Next Steps</p>
                <h2 className="font-syne font-extrabold text-[clamp(26px,4vw,44px)] text-white leading-[1.1] tracking-tight">
                  Go deeper into the work.
                </h2>
                <p className="text-[17px] text-white/60 mt-3.5 max-w-[480px] mx-auto leading-[1.6]">
                  Explore the flagship framework in detail, dive into the AI systems, or reach out
                  directly to discuss how this work is relevant to what you&rsquo;re building.
                </p>
                <div className="flex justify-center flex-wrap gap-3 mt-9">
                  <Button href="/jarvis" variant="white">
                    Explore {siteConfig.frameworkName}
                    <ArrowRight size={14} />
                  </Button>
                  <Button href="/ai-projects" variant="white-outline">
                    View AI Projects
                  </Button>
                  <Button href="/contact" variant="white-outline">
                    Get In Touch
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
