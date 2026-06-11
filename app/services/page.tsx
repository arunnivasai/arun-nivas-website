/**
 * app/services/page.tsx — Services Page
 * ──────────────────────────────────────────────────────────────────────────
 * Server Component — metadata export is fully supported.
 * The only interactive element (FAQ accordion) is isolated in
 * components/ui/FAQAccordion.tsx ('use client').
 */

import type { Metadata } from 'next'
import Link from 'next/link'

import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import FAQAccordion from '@/components/ui/FAQAccordion'
import type { FAQItem } from '@/components/ui/FAQAccordion'

import { siteConfig } from '@/lib/site-config'
import { services, recommendedService } from '@/lib/data/services'

// ── Page metadata ────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Services',
  description:
    `AI-powered services from ${siteConfig.name} — business research, competitor intelligence, ` +
    'marketing automation, lead generation, personal branding, and growth audits for startups and organisations.',
}

// ── Check icon ───────────────────────────────────────────────────────────
function CheckIcon({ color = '#818CF8' }: { color?: string }) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <polyline points="1.5,5 4,7.5 8.5,2.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ── Arrow icon ───────────────────────────────────────────────────────────
function ArrowRight({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <path d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ── Static page data ─────────────────────────────────────────────────────
const credibilityItems = [
  siteConfig.frameworkName,
  'Swiggy Strategic Analysis',
  'Zomato Strategic Analysis',
  'AI Systems Portfolio',
  `${siteConfig.title}`,
]

const processSteps = [
  {
    num:   '01',
    icon:  '🔎',
    title: 'Discovery',
    desc:  'Understanding your business, your goals, and where the real constraints are. Before any strategy or system is designed, I need to understand what success looks like — and what\'s actually getting in the way.',
  },
  {
    num:   '02',
    icon:  '🗺',
    title: 'Strategy',
    desc:  'Designing the right system or approach for your specific situation. Not a template, not a standard package — a considered strategic response to the problem we defined in Discovery, with clear reasoning behind every recommendation.',
  },
  {
    num:   '03',
    icon:  '⚒️',
    title: 'Build',
    desc:  'Building, testing, and deploying the system or strategy deliverable. AI systems are built and validated, analyses are produced, and everything is tested against real conditions before handoff.',
  },
  {
    num:   '04',
    icon:  '📦',
    title: 'Handoff & Support',
    desc:  'Transferring ownership with full documentation, walkthroughs, and a support period. Every system is built to run without ongoing dependency.',
    note:  '"You own the system. I document everything."',
  },
]

const audienceCards = [
  { icon: '🚀', title: 'Startup Founders', desc: 'Building go-to-market systems, competitive intelligence, and growth infrastructure from scratch — without the overhead of a full marketing team. Move fast, with the right strategic foundation.' },
  { icon: '📊', title: 'Strategy & Leadership Teams', desc: 'Needing high-quality market research, competitive intelligence, and strategic analysis to inform decisions — delivered faster and more comprehensively than traditional research allows.' },
  { icon: '📈', title: 'Growth & Marketing Teams', desc: 'Looking to improve team efficiency, automate repetitive workflows, and uncover growth opportunities through better data and systems — so the team focuses on work that requires human judgment.' },
  { icon: '👤', title: 'Professionals & Consultants', desc: 'Building personal brand and thought leadership infrastructure that generates consistent visibility and inbound opportunities — without making content creation a second full-time job.' },
  { icon: '🏢', title: 'Growing Organisations', desc: 'Looking to bring AI into marketing and business operations systematically — not through one-off tools, but through integrated systems that compound in value over time.' },
  { icon: '🔭', title: 'Not Sure Where to Start?', desc: 'Begin with an AI Growth Audit. A structured diagnostic that maps your current situation, identifies the highest-leverage opportunities, and produces a clear roadmap — before any execution investment is made.' },
]

const faqs = [
  {
    q: 'Do I need technical knowledge to work with you?',
    a: 'No. You bring the business context — the goals, the constraints, and the domain knowledge. I handle everything technical: system architecture, AI integration, automation logic, and documentation. Our working relationship is built around your business problem, not your familiarity with the tools. Most clients have zero technical background and engage purely at the strategic level throughout.',
  },
  {
    q: 'How long does a typical engagement take?',
    a: 'It depends on the scope. A focused AI Growth Audit typically takes one to two weeks. A complete AI system build usually takes two to four weeks from Discovery to Handoff. Research and analysis engagements are scoped by depth — most are delivered within one to three weeks. All timelines are agreed during Discovery before any work begins.',
  },
  {
    q: 'Do you work with startups and early-stage companies?',
    a: 'Yes — and this is where the work is often most impactful. Early-stage companies benefit most from AI systems because the leverage is highest: a well-built lead generation or competitive intelligence system has an outsized effect when you\'re building foundations rather than scaling an existing operation.',
  },
  {
    q: 'What happens after the system is delivered?',
    a: 'Every engagement ends with a complete handoff: full documentation of the system architecture, a walkthrough session so you understand exactly how everything works, and a support period for questions. The goal is full ownership — you should be able to run, maintain, and adapt the system without ongoing dependency on me.',
  },
]

const auditPoints = [
  'Structured analysis of your growth and marketing stack',
  'Prioritised roadmap of AI and automation opportunities',
  'Clear next steps grounded in evidence, not guesswork',
]

// ════════════════════════════════════════════════════════════════════════
export default function ServicesPage() {

  return (
    <div className="flex flex-col">

      {/* ══════════════════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════════════════ */}
      <section
        aria-label="Services overview"
        className="relative bg-white overflow-hidden pt-16"
      >
        {/* Grid bg */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(79,70,229,0.032) 1px, transparent 1px), ' +
              'linear-gradient(90deg, rgba(79,70,229,0.032) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 80% at 85% 40%, black 0%, transparent 70%)',
            maskImage: 'radial-gradient(ellipse 70% 80% at 85% 40%, black 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute top-0 right-0 pointer-events-none"
          style={{ width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 65%)', transform: 'translate(20%,-20%)' }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-site mx-auto section-px">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 items-center hero-py">

            {/* ── Left ─────────────────────────────────────────────── */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-3.5 py-1.5 text-[13px] font-medium text-slate-600 shadow-sm mb-7 hero-anim anim-delay-100">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo flex-shrink-0" aria-hidden="true" />
                AI Growth Systems & Strategy Consulting
              </div>

              <h1 className="font-syne font-extrabold text-h1 text-slate-900 leading-[1.05] tracking-tight hero-anim anim-delay-200">
                Not tools.<br />
                <span className="grad-text">Business<br />outcomes.</span>
              </h1>

              <p className="mt-6 text-body-lg text-gray-500 max-w-tight hero-anim anim-delay-300">
                I build <strong className="text-slate-700 font-semibold">AI-powered systems and strategies</strong> that
                solve specific business problems — from competitive intelligence and market research
                to lead generation and marketing automation.
                Every engagement ends with something <strong className="text-slate-700 font-semibold">you own and can run without me</strong>.
              </p>

              {/* Anchor chips — scroll to service */}
              <div className="flex flex-wrap gap-2 mt-8 hero-anim anim-delay-400">
                {services.map(s => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="font-mono text-[11.5px] font-medium px-3.5 py-[6px] rounded-full bg-gray-100 border border-border text-slate-600 transition-all duration-200 hover:bg-indigo-50 hover:border-indigo-100 hover:text-indigo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo"

                  >
                    {s.id === 'growth-audit' ? `${s.title} ★` : s.title}
                  </a>
                ))}
              </div>
            </div>

            {/* ── Right: proof stat cards ──────────────────────────── */}
            <div className="hidden lg:flex flex-col gap-3.5 hero-anim anim-delay-300" style={{ animationName: 'fadeIn' }}>
              {[
                { icon: '🤖', num: '5', label: 'Production AI systems built and deployed across marketing and business intelligence functions' },
                { icon: '📊', num: '2+', label: 'Deep strategic analyses using the Marketing J.A.R.V.I.S. framework, published and ongoing' },
                { icon: '🎓', num: 'MBA', label: 'Marketing graduate with a foundation in strategy, research, and business analysis' },
              ].map(stat => (
                <div
                  key={stat.num}
                  className="flex items-start gap-4 bg-white border border-border rounded-[14px] px-6 py-5 shadow-sm transition-all duration-200 hover:border-indigo/20 hover:shadow-md hover:-translate-y-0.5"
                >
                  <span className="text-2xl flex-shrink-0 mt-0.5" aria-hidden="true">{stat.icon}</span>
                  <div>
                    <div className="font-syne font-extrabold text-[28px] text-slate-900 leading-none tracking-tight grad-text">
                      {stat.num}
                    </div>
                    <p className="text-[13px] text-gray-500 mt-1.5 leading-[1.5]">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          2. CREDIBILITY STRIP
      ══════════════════════════════════════════════════════════════ */}
      <section
        aria-label="Work and credentials"
        className="bg-white border-y border-border"
      >
        <div className="max-w-site mx-auto section-px py-5">
          <div className="flex items-center gap-5 flex-wrap">
            <span className="font-mono text-[11px] font-semibold tracking-[0.12em] uppercase text-gray-400 flex-shrink-0 whitespace-nowrap">
              Work & Credentials
            </span>
            <div className="w-px h-5 bg-border flex-shrink-0 hidden sm:block" aria-hidden="true" />
            <div className="flex flex-wrap gap-2" role="list">
              {credibilityItems.map(item => (
                <span
                  key={item}
                  role="listitem"
                  className="flex items-center gap-1.5 text-[13px] font-medium text-slate-500 bg-gray-50 border border-border px-3 py-1.5 rounded-full transition-all duration-200 hover:text-indigo hover:border-indigo-100 hover:bg-indigo-50"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo flex-shrink-0 opacity-50" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          3. SERVICES GRID
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="services-grid"
        aria-labelledby="services-grid-heading"
        className="bg-gray-50 section-p"
      >
        <div className="max-w-site mx-auto">
          <AnimateOnScroll>
            <SectionHeader
              label="Six Services"
              title={<span id="services-grid-heading">Strategy and AI systems,<br />built for your business problems.</span>}
              subtitle="Each service is designed as a complete solution — not a task, not a template, but a system that solves a specific business problem and keeps working after the engagement ends."
            />
          </AnimateOnScroll>

          {/* Service cards — 2-column full-width */}
          <div className="flex flex-col gap-5 mt-12">
            {services.map((service, i) => (
              <AnimateOnScroll key={service.id} delay={i * 0.06}>
                <article
                  id={service.id}
                  className="bg-white border-[1.5px] border-border rounded-[14px] overflow-hidden group transition-all duration-300 hover:border-indigo/20 hover:shadow-lg scroll-mt-20"
                  aria-label={service.title}
                >
                  {/* Gradient top bar */}
                  <div className={`h-[3px] w-full ${service.barClass}`} aria-hidden="true" />

                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] gap-0">

                    {/* ── Col 1: Identity ──────────────────────────── */}
                    <div className="p-8 lg:border-r border-border">
                      {/* Icon + badges */}
                      <div className="flex items-start justify-between mb-5">
                        <div className="w-12 h-12 rounded-[12px] bg-indigo-50 flex items-center justify-center text-[24px] transition-colors duration-200 group-hover:bg-indigo-100">
                          {service.icon}
                        </div>
                        <div className="flex flex-col items-end gap-1.5">
                          {service.recommended && (
                            <Badge variant="recommend" star className="text-[9.5px]">
                              Recommended
                            </Badge>
                          )}
                          <span
                            className="font-mono text-[9.5px] font-semibold tracking-[0.06em] uppercase px-2 py-0.5 rounded-full"
                            style={{ background: 'rgba(79,70,229,0.08)', color: '#4F46E5', border: '1px solid rgba(79,70,229,0.15)' }}
                          >
                            {service.category}
                          </span>
                        </div>
                      </div>

                      <h2 className="font-syne font-extrabold text-[20px] text-slate-900 leading-snug mb-2">
                        {service.title}
                      </h2>
                      <p
                        className="text-[14px] font-semibold mb-3 leading-snug"
                        style={{ color: service.recommended ? '#7C3AED' : '#4F46E5' }}
                      >
                        {service.outcome}
                      </p>
                      <p className="text-[14px] leading-[1.70] text-gray-500">
                        {service.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mt-5">
                        {service.tags.map(tag => (
                          <span key={tag} className="font-mono text-[10.5px] px-2 py-0.5 rounded-[5px] bg-gray-100 text-slate-500 border border-border">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* ── Col 2: Outcomes ──────────────────────────── */}
                    <div className="p-8 lg:border-r border-border border-t lg:border-t-0">
                      <p className="font-mono text-[10px] font-semibold tracking-[0.12em] uppercase text-gray-400 mb-4">
                        What It Delivers
                      </p>
                      <ul className="space-y-3" role="list">
                        {service.outcomes.map(outcome => (
                          <li key={outcome} className="flex items-start gap-2.5 text-[13.5px] text-slate-700 leading-[1.55]">
                            <span
                              className="w-4 h-4 rounded-[4px] flex items-center justify-center flex-shrink-0 mt-[1px]"
                              style={{ background: 'rgba(79,70,229,0.12)', border: '1px solid rgba(79,70,229,0.2)' }}
                              aria-hidden="true"
                            >
                              <CheckIcon />
                            </span>
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* ── Col 3: CTA ───────────────────────────────── */}
                    <div className="p-8 flex flex-col justify-between border-t lg:border-t-0">
                      <div>
                        <p className="font-mono text-[10px] font-semibold tracking-[0.12em] uppercase text-gray-400 mb-3">
                          Best For
                        </p>
                        <p className="text-[13.5px] text-slate-600 leading-[1.65]">
                          {service.recommended
                            ? 'Teams and founders who aren\'t sure where to start. The Growth Audit maps your situation before any system is built.'
                            : 'Organisations that need structured intelligence or scalable systems — and want a clear return on every engagement.'}
                        </p>
                      </div>

                      <div className="mt-8 pt-6 border-t border-border">
                        <Link
                          href={`/contact?service=${service.id}`}
                          className="inline-flex items-center gap-2 text-[13.5px] font-bold transition-all duration-200 focus-visible:outline-none group-hover:gap-3"
                          style={{ color: service.recommended ? '#7C3AED' : '#4F46E5' }}
                          aria-label={`Enquire about ${service.title}`}
                        >
                          {service.recommended ? 'Start Here' : 'Enquire'}
                          <ArrowRight />
                        </Link>
                      </div>
                    </div>

                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          4. HOW I WORK (DARK)
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="process"
        aria-labelledby="process-heading"
        className="bg-slate-950 section-p-lg"
      >
        <div className="max-w-site mx-auto">
          <AnimateOnScroll>
            <SectionHeader
              dark
              label="Engagement Process"
              title={<span id="process-heading">How every engagement works.</span>}
              subtitle="A clear, repeatable four-step process — so you always know where we are, what comes next, and what you'll walk away with."
            />
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1} className="mt-12">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-[14px] overflow-hidden"
              style={{ border: '1px solid rgba(255,255,255,0.07)' }}
            >
              {processSteps.map((step, i) => (
                <div
                  key={step.num}
                  className="relative p-8 group cursor-default transition-colors duration-200 hover:bg-indigo/[0.08]"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    borderRight: i < processSteps.length - 1 ? '1px solid rgba(255,255,255,0.07)' : undefined,
                  }}
                >
                  {/* Hover accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] bg-grad-main opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-hidden="true"
                  />

                  <p className="font-mono text-[12px] font-medium text-white/20 mb-5 tracking-[0.06em]">
                    {step.num} ──
                  </p>
                  <div className="text-[28px] mb-4" aria-hidden="true">{step.icon}</div>
                  <h3 className="font-syne font-extrabold text-[17px] text-white mb-3 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[14px] leading-[1.68] text-slate-500">{step.desc}</p>

                  {step.note && (
                    <p
                      className="mt-4 pt-4 font-mono text-[11px] tracking-[0.02em] text-indigo-pale/55"
                      style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
                    >
                      {step.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          5. WHO THIS IS FOR
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="audience"
        aria-labelledby="audience-heading"
        className="bg-white section-p"
      >
        <div className="max-w-site mx-auto">
          <AnimateOnScroll>
            <SectionHeader
              label="Ideal Clients & Partners"
              title={<span id="audience-heading">Who these services<br />are built for.</span>}
              subtitle="Not for everyone — and that's intentional. These services deliver the most value in specific contexts where strategy, AI, and ambition overlap."
            />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px] mt-12">
            {audienceCards.map((card, i) => (
              <AnimateOnScroll key={card.title} delay={(i % 3) * 0.08}>
                <div
                  className="bg-gray-50 border-[1.5px] border-border rounded-[14px] p-7 group cursor-default transition-all duration-300 hover:bg-white hover:border-indigo/20 hover:-translate-y-[3px] hover:shadow-md h-full"
                >
                  <div className="w-11 h-11 rounded-[11px] bg-indigo-50 flex items-center justify-center text-[22px] mb-4 transition-colors duration-200 group-hover:bg-indigo-100" aria-hidden="true">
                    {card.icon}
                  </div>
                  <h3 className="font-syne font-extrabold text-[16px] text-slate-900 mb-2.5">{card.title}</h3>
                  <p className="text-[14px] leading-[1.68] text-gray-500">{card.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          6. FAQ
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="bg-gray-50 section-p"
      >
        <div className="max-w-site mx-auto">
          <AnimateOnScroll>
            <SectionHeader
              label="Common Questions"
              title={<span id="faq-heading">Before you reach out.</span>}
              subtitle="The questions most people have before starting an engagement — answered clearly."
            />
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1} className="mt-12">
            <FAQAccordion items={faqs} />
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          7. CTA — SPLIT LAYOUT
      ══════════════════════════════════════════════════════════════ */}
      <section
        aria-label="Call to action"
        className="bg-gray-100 section-p"
      >
        <div className="max-w-site mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">

          {/* ── Left: general CTA ──────────────────────────────────── */}
          <AnimateOnScroll>
            <div
              className="rounded-[14px] relative overflow-hidden h-full flex flex-col"
              style={{
                background: 'linear-gradient(135deg, #4F46E5 0%, #5B21B6 100%)',
                padding: 'clamp(36px,5vw,52px)',
                boxShadow: '0 24px 64px rgba(79,70,229,0.28)',
              }}
            >
              <div
                className="absolute rounded-full pointer-events-none"
                style={{ top: -50, right: -50, width: 220, height: 220, background: 'rgba(255,255,255,0.07)' }}
                aria-hidden="true"
              />
              <div className="relative z-10 flex flex-col flex-1">
                <p className="font-mono text-[10.5px] tracking-[0.12em] uppercase text-white/40 mb-4">
                  Ready to start?
                </p>
                <h2 className="font-syne font-extrabold text-[clamp(22px,3.5vw,34px)] text-white leading-[1.12] tracking-tight">
                  Let&rsquo;s work on something that matters.
                </h2>
                <p className="text-[15px] text-white/60 mt-3 leading-[1.65] flex-1">
                  Whether you have a specific project in mind or want to explore how AI can move the needle — reach out and let&rsquo;s talk.
                </p>
                <div className="flex flex-wrap gap-2.5 mt-7">
                  <Button href="/contact" variant="white-sm">
                    Get In Touch <ArrowRight size={13} />
                  </Button>
                  <Button href="/portfolio" variant="ghost-white-sm">
                    Explore Portfolio
                  </Button>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* ── Right: Growth Audit entry point ────────────────────── */}
          {recommendedService && (
            <AnimateOnScroll delay={0.12}>
              <div
                className="rounded-[14px] bg-white border-[1.5px] border-border shadow-sm h-full flex flex-col overflow-hidden hover:border-indigo/20 hover:shadow-lg transition-all duration-300 relative"
                style={{ borderTop: '3px solid transparent', backgroundClip: 'padding-box' }}
              >
                {/* Top gradient bar */}
                <div className="h-[3px] bg-grad-main flex-shrink-0" aria-hidden="true" />

                <div className="p-8 lg:p-10 flex flex-col flex-1">
                  <div className="flex items-center gap-2.5 mb-5">
                    <span
                      className="inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold tracking-[0.08em] uppercase px-3 py-1.5 rounded-full"
                      style={{ background: 'linear-gradient(135deg, rgba(79,70,229,0.1), rgba(124,58,237,0.08))', color: '#4F46E5', border: '1px solid rgba(79,70,229,0.18)' }}
                    >
                      <span style={{ color: '#F59E0B' }}>★</span> Recommended First Step
                    </span>
                  </div>

                  <h3 className="font-syne font-extrabold text-[clamp(20px,2.5vw,28px)] text-slate-900 leading-[1.15] tracking-tight">
                    Start with an<br />AI Growth Audit
                  </h3>
                  <p className="text-[14.5px] leading-[1.70] text-gray-500 mt-3 flex-1">
                    Not sure which service fits your situation? The AI Growth Audit is a focused diagnostic that maps your current state and surfaces the highest-leverage opportunities — before any execution investment is made.
                  </p>

                  {/* Audit checklist */}
                  <ul className="mt-5 space-y-2.5" role="list">
                    {auditPoints.map(point => (
                      <li key={point} className="flex items-start gap-2.5 text-[13.5px] text-slate-700 leading-[1.5]">
                        <span
                          className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-[1px] bg-grad-main"
                          aria-hidden="true"
                        >
                          <CheckIcon color="white" />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-7">
                    <Button
                      href={`/contact?service=${recommendedService.id}`}
                      variant="primary"
                      icon
                      className="w-full justify-center"
                    >
                      Start with a Growth Audit
                    </Button>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          )}

        </div>
      </section>

    </div>
  )
}
