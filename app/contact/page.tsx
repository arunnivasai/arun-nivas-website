/**
 * app/contact/page.tsx — Contact Page
 * ──────────────────────────────────────────────────────────────────────────
 * Design directive: Trust, professionalism, ease of conversation.
 * This is the natural conclusion of the journey. The visitor has read the
 * work. They should leave thinking: "This is someone I'd like to speak with."
 *
 * Sections (approved order):
 *   1. Hero              — Light, warm, two CTAs above the fold
 *   2. Contact Methods   — LinkedIn (preferred) · Email · Location
 *   3. Contact Form      — Four fields, no phone, no company size
 *   4. Reach Out About   — Four topic cards (job, freelance, J.A.R.V.I.S., AI)
 *   5. Response Philosophy— Two-column: headline + four openness items
 *   6. Final CTA         — Two buttons only: LinkedIn + Email
 *
 * Architecture:
 *   - Server Component — no client state on the page itself.
 *   - ContactForm extracted to components/ui/ContactForm.tsx ('use client').
 *   - All personal data from siteConfig.
 *   - Light mode throughout.
 */

import type { Metadata } from 'next'

import Button from '@/components/ui/Button'
import SectionHeader from '@/components/ui/SectionHeader'
import GradientText from '@/components/ui/GradientText'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import ContactForm from '@/components/ui/ContactForm'

import { siteConfig, openStatusLabel, isAvailable } from '@/lib/site-config'

// ── Page metadata ────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Contact',
  description:
    `Get in touch with ${siteConfig.name} — open to job opportunities, consulting engagements, ` +
    `freelance projects, and conversations about ${siteConfig.frameworkName} and AI systems.`,
}

// ── Static page data (contact-specific, not reused elsewhere) ─────────────
const contactMethods = [
  {
    icon:     '🔗',
    platform: 'Preferred Channel',
    label:    'LinkedIn',
    desc:     'The fastest way to connect. Send a connection request or a direct message — I check LinkedIn daily.',
    action:   'Connect on LinkedIn',
    href:     siteConfig.linkedIn,
    external: true,
  },
  {
    icon:     '✉️',
    platform: 'Email',
    label:    siteConfig.email,
    desc:     'For longer conversations, detailed enquiries, or sharing documents — email works best for structured communication.',
    action:   'Send an Email',
    href:     `mailto:${siteConfig.email}`,
    external: false,
  },
  {
    icon:     '📍',
    platform: 'Location',
    label:    'India',
    desc:     `Based in ${siteConfig.locationShort}. Open to opportunities across India — Bangalore, Hyderabad, Mumbai, Chennai — and remote opportunities globally.`,
    action:   null,
    href:     null,
    external: false,
  },
]

const reachOutTopics = [
  {
    icon:  '💼',
    title: 'Job Opportunities',
    desc:  'Recruiters, hiring managers, and founders exploring whether there might be a fit — for growth marketing, business analysis, strategy, or AI-related roles across India or remote. Actively looking and open to conversations at any stage.',
  },
  {
    icon:  '🤝',
    title: 'Freelancing & Consulting',
    desc:  `Founders, operators, and teams looking for help with AI systems, market research, competitive intelligence, growth strategy, or marketing automation. Project-based and retainer engagements welcome — the best starting point is a brief conversation about the problem first.`,
  },
  {
    icon:  '📊',
    title: `${siteConfig.frameworkName}`,
    desc:  'Questions about the framework, interest in commissioning an analysis of a specific company, or simply wanting to discuss the methodology and how it was built. Strategic analysis conversations are always welcome.',
  },
  {
    icon:  '🤖',
    title: 'AI Systems & Automation',
    desc:  'Conversations about how the systems were built, what problems they solve, or how similar infrastructure could work for your business. Also open to discussing AI strategy more broadly — what to build, when to build it, and how to think about the right architecture.',
  },
]

const opennessItems = [
  {
    icon:  '🚀',
    title: 'Open to Opportunities',
    desc:  'Actively exploring full-time roles in growth, strategy, business analysis, and AI-adjacent functions across India and remote.',
  },
  {
    icon:  '🛠',
    title: 'Open to Collaboration',
    desc:  'Building something interesting and think there might be a way to work together? Projects at the intersection of strategy, data, and AI are always interesting.',
  },
  {
    icon:  '🎓',
    title: 'Open to Learning',
    desc:  'Conversations with practitioners, researchers, and operators who are thinking seriously about AI, growth, and business strategy are consistently the most valuable ones I have.',
  },
  {
    icon:  '💡',
    title: 'Open to Discussing Ideas',
    desc:  'Half-formed thoughts, interesting problems, strategic questions with no obvious answer — these are the conversations I find most interesting. No formal agenda required.',
  },
]

// ── Inline SVG icons ──────────────────────────────────────────────────────
function ArrowRight({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <path d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

// ════════════════════════════════════════════════════════════════════════
export default function ContactPage() {
  return (
    <div className="flex flex-col bg-white">

      {/* ════════════════════════════════════════════════════════════
          1. HERO — Light, warm
      ═══════════════════════════════════════════════════════════ */}
      <section
        aria-label="Contact introduction"
        className="relative bg-white overflow-hidden pt-16"
      >
        {/* Subtle background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 55% 50% at 80% 30%, rgba(99,102,241,0.055) 0%, transparent 60%), ' +
              'radial-gradient(ellipse 40% 40% at 15% 70%, rgba(124,58,237,0.04) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(79,70,229,0.028) 1px, transparent 1px), ' +
              'linear-gradient(90deg, rgba(79,70,229,0.028) 1px, transparent 1px)',
            backgroundSize: '52px 52px',
            WebkitMaskImage: 'radial-gradient(ellipse 60% 70% at 85% 35%, black 0%, transparent 68%)',
            maskImage: 'radial-gradient(ellipse 60% 70% at 85% 35%, black 0%, transparent 68%)',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-site mx-auto section-px hero-py">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">

            {/* Left: text */}
            <div>
              {/* Status badge */}
              <div className="inline-flex items-center gap-2.5 bg-white border border-border rounded-full px-4 py-2 text-[13px] font-medium text-slate-600 shadow-sm mb-8 hero-anim anim-delay-100">
                {isAvailable() && (
                  <span
                    className="w-2 h-2 rounded-full bg-emerald flex-shrink-0"
                    style={{ animation: 'pulseDot 2.5s ease-in-out infinite' }}
                    aria-hidden="true"
                  />
                )}
                {openStatusLabel()}
              </div>

              <h1
                className="font-syne font-extrabold leading-[1.06] tracking-[-0.025em] text-slate-900 hero-anim anim-delay-200"
                style={{ fontSize: 'clamp(40px,6.5vw,78px)' }}
              >
                Let&rsquo;s start a<br />
                conversation<GradientText>.</GradientText>
              </h1>

              <p className="mt-5 text-[clamp(16px,2vw,19px)] leading-[1.74] text-gray-500 max-w-tight hero-anim anim-delay-300">
                Whether you&rsquo;re exploring opportunities, discussing ideas, collaborating on
                projects, or looking to build better systems — I&rsquo;d be happy to connect.
              </p>

              {/* Quick action buttons */}
              <div className="flex flex-wrap gap-3 mt-9 hero-anim" style={{ animationDelay: '0.44s' }}>
                <a
                  href={siteConfig.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-indigo text-white font-semibold text-[14.5px] rounded-full px-6 py-3 transition-all duration-200 hover:bg-indigo-light hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(79,70,229,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo focus-visible:ring-offset-2"
                  style={{ boxShadow: '0 4px 14px rgba(79,70,229,0.28)' }}
                >
                  <LinkedInIcon />
                  Connect on LinkedIn
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 bg-white text-slate-700 font-semibold text-[14.5px] rounded-full px-6 py-3 border border-border shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-gray-50 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo focus-visible:ring-offset-2"
                >
                  <EmailIcon />
                  Send an Email
                </a>
              </div>
            </div>

            {/* Right: availability card */}
            <div
              className="hidden lg:block relative hero-anim min-w-[230px]"
              style={{ animationName: 'fadeIn', animationDelay: '0.35s' }}
            >
              <div
                className="rounded-[20px] p-8 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(#FFFFFF, #FFFFFF) padding-box, linear-gradient(135deg, #4F46E5, #7C3AED) border-box',
                  border: '1.5px solid transparent',
                  boxShadow: '0 16px 48px rgba(79,70,229,0.1)',
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{ background: 'linear-gradient(90deg, #4F46E5, #7C3AED)' }}
                  aria-hidden="true"
                />
                <p className="font-mono text-[10px] font-semibold tracking-[0.12em] uppercase text-gray-400 mb-4">
                  Available For
                </p>
                <p className="font-syne font-extrabold text-[20px] text-slate-900 mb-1">{siteConfig.name}</p>
                <p className="text-[12.5px] text-gray-400 leading-snug mb-5">
                  {siteConfig.title}<br />{siteConfig.subtitle}
                </p>

                <div className="h-px bg-border mb-5" aria-hidden="true" />

                {[
                  { icon: '💼', title: 'Full-time roles', sub: 'Growth, Strategy, Analysis' },
                  { icon: '🤝', title: 'Consulting & Projects', sub: 'AI Systems, Research, Strategy' },
                  { icon: '📍', title: siteConfig.locationShort + ' & Remote', sub: siteConfig.locationNote },
                ].map(item => (
                  <div key={item.title} className="flex items-center gap-3 mb-4 last:mb-0">
                    <span className="text-[16px] flex-shrink-0" aria-hidden="true">{item.icon}</span>
                    <div>
                      <p className="text-[13px] font-semibold text-slate-800 leading-snug">{item.title}</p>
                      <p className="text-[11.5px] text-gray-400 mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          2. CONTACT METHODS
      ═══════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="methods-heading"
        className="bg-gray-50 section-p"
      >
        <div className="max-w-site mx-auto">
          <AnimateOnScroll>
            <SectionHeader
              label="Get In Touch"
              title={<span id="methods-heading">Three ways to connect.</span>}
              subtitle="Choose whichever channel feels most natural — I respond to all of them."
            />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[18px] mt-12">
            {contactMethods.map((method, i) => (
              <AnimateOnScroll key={method.platform} delay={i * 0.08}>
                <div className={`bg-white border-[1.5px] border-border rounded-[14px] overflow-hidden group cursor-default transition-all duration-300 hover:border-indigo/20 hover:shadow-md hover:-translate-y-[3px] flex flex-col h-full ${method.href ? 'cursor-pointer' : ''} relative`}>
                  <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-grad-main" aria-hidden="true" />
                  <div className="p-8 flex flex-col flex-1">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-[12px] bg-indigo-50 flex items-center justify-center text-[24px] mb-5 transition-colors duration-200 group-hover:bg-indigo-100">
                      {method.icon}
                    </div>
                    <p className="font-mono text-[10.5px] font-semibold tracking-[0.10em] uppercase text-indigo mb-2">
                      {method.platform}
                    </p>
                    <h3 className="font-syne font-extrabold text-[17px] text-slate-900 mb-2.5 leading-snug break-all">
                      {method.label}
                    </h3>
                    <p className="text-[14px] leading-[1.65] text-gray-500 flex-1">{method.desc}</p>

                    {method.href && method.action ? (
                      <a
                        href={method.href}
                        target={method.external ? '_blank' : undefined}
                        rel={method.external ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center gap-1.5 mt-5 text-[13.5px] font-bold text-indigo hover:gap-2.5 transition-all duration-200 focus-visible:outline-none focus-visible:underline"
                      >
                        {method.action}
                        <ArrowRight />
                      </a>
                    ) : (
                      /* Location card — no link */
                      <div className="flex items-center gap-1.5 mt-5">
                        <span
                          className="w-[6px] h-[6px] rounded-full bg-emerald flex-shrink-0"
                          aria-hidden="true"
                        />
                        <span className="text-[12.5px] text-gray-400">Open to opportunities</span>
                      </div>
                    )}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          3. CONTACT FORM
      ═══════════════════════════════════════════════════════════ */}
      <section
        id="contact-form"
        aria-labelledby="form-heading"
        className="bg-white section-p scroll-mt-16"
      >
        <div className="max-w-site mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left: context */}
            <AnimateOnScroll>
              <span className="section-label">Send a Message</span>
              <h2
                id="form-heading"
                className="font-syne font-extrabold text-h2 text-slate-900 leading-[1.1] tracking-tight"
              >
                Prefer to write?<br />Use the form.
              </h2>
              <p className="text-[15.5px] text-gray-500 mt-4 leading-[1.72]">
                Tell me a bit about what you&rsquo;re working on, what you&rsquo;re looking for,
                or what&rsquo;s on your mind. I read every message personally.
              </p>

              {/* Note */}
              <div className="mt-8 rounded-[10px] px-6 py-5 border-l-4 border-indigo" style={{ background: '#F9FAFB', borderLeftColor: '#4F46E5' }}>
                <p className="text-[14px] text-slate-600 leading-[1.65]">
                  <strong className="font-semibold text-slate-800">No template required.</strong>{' '}
                  A few sentences about who you are and what you&rsquo;d like to discuss is
                  everything needed to start a useful conversation.
                </p>
              </div>

              {/* Response time */}
              <div className="flex items-center gap-2 mt-5">
                <span className="w-[7px] h-[7px] rounded-full bg-emerald flex-shrink-0" aria-hidden="true" />
                <span className="text-[13px] text-gray-500">I aim to respond within 48 hours.</span>
              </div>
            </AnimateOnScroll>

            {/* Right: form — client component */}
            <AnimateOnScroll delay={0.12}>
              <ContactForm />
            </AnimateOnScroll>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          4. WHAT PEOPLE REACH OUT ABOUT
      ═══════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="topics-heading"
        className="bg-gray-50 section-p"
      >
        <div className="max-w-site mx-auto">
          <AnimateOnScroll>
            <SectionHeader
              label="Common Topics"
              title={<span id="topics-heading">What people usually<br />reach out about.</span>}
              subtitle="No agenda required. If something here resonates with what you're thinking, that's enough to start."
            />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px] mt-12">
            {reachOutTopics.map((topic, i) => (
              <AnimateOnScroll key={topic.title} delay={i * 0.08}>
                <div
                  className="bg-white border-[1.5px] border-border rounded-[14px] p-8 group cursor-default transition-all duration-300 hover:border-indigo/20 hover:-translate-y-[3px] hover:shadow-md h-full relative overflow-hidden"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: i === 0
                        ? 'linear-gradient(90deg,#4F46E5,#6366F1)'
                        : i === 1
                          ? 'linear-gradient(90deg,#7C3AED,#9333EA)'
                          : i === 2
                            ? 'linear-gradient(90deg,#818CF8,#7C3AED)'
                            : 'linear-gradient(90deg,#0891B2,#4F46E5)',
                    }}
                    aria-hidden="true"
                  />
                  <span className="text-[28px] mb-4 block" aria-hidden="true">{topic.icon}</span>
                  <h3 className="font-syne font-extrabold text-[17px] text-slate-900 mb-3 leading-snug">
                    {topic.title}
                  </h3>
                  <p className="text-[14.5px] leading-[1.72] text-gray-500">{topic.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          5. RESPONSE PHILOSOPHY
      ═══════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="philosophy-heading"
        className="bg-white section-p"
      >
        <div className="max-w-site mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: headline */}
            <AnimateOnScroll>
              <span className="section-label">How I Engage</span>
              <h2
                id="philosophy-heading"
                className="font-syne font-extrabold text-h2 text-slate-900 leading-[1.1] tracking-tight"
              >
                Every conversation<br />starts with{' '}
                <GradientText>curiosity.</GradientText>
              </h2>
              <p className="text-[16px] text-gray-500 mt-4 leading-[1.72] max-w-[400px]">
                I don&rsquo;t sort conversations by whether they&rsquo;re immediately commercial or
                immediately actionable. The most interesting opportunities usually start as a
                casual question or a half-formed idea. I&rsquo;m open to all of it.
              </p>
            </AnimateOnScroll>

            {/* Right: openness list */}
            <AnimateOnScroll delay={0.1}>
              <div className="flex flex-col gap-3">
                {opennessItems.map(item => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 p-[18px] rounded-[12px] bg-gray-50 border border-border transition-all duration-200 hover:bg-indigo-50 hover:border-indigo-100 cursor-default"
                  >
                    <span className="text-[20px] flex-shrink-0 mt-0.5" aria-hidden="true">
                      {item.icon}
                    </span>
                    <div>
                      <p className="font-syne font-bold text-[14.5px] text-slate-900 mb-1">
                        {item.title}
                      </p>
                      <p className="text-[13px] text-gray-500 leading-[1.55]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          6. FINAL CTA — Dark, two buttons only
      ═══════════════════════════════════════════════════════════ */}
      <section
        aria-label="Final call to action"
        className="bg-slate-950 section-p-xl relative overflow-hidden"
      >
        {/* Orbs */}
        <div
          className="absolute pointer-events-none"
          style={{ top: -80, right: -60, width: 440, height: 440, borderRadius: '50%', background: 'radial-gradient(circle, rgba(79,70,229,0.10) 0%, transparent 65%)' }}
          aria-hidden="true"
        />
        <div
          className="absolute pointer-events-none"
          style={{ bottom: -100, left: -60, width: 380, height: 380, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 65%)' }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-site mx-auto text-center">
          <AnimateOnScroll>
            <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-white/30 mb-5">
              Let&rsquo;s Connect
            </p>
            <h2
              className="font-syne font-extrabold leading-[1.12] tracking-tight text-white"
              style={{ fontSize: 'clamp(28px,5vw,54px)' }}
            >
              The best opportunities often start<br />with a{' '}
              <GradientText>simple conversation.</GradientText>
            </h2>
            <p className="text-[17px] text-white/45 mt-5 max-w-[460px] mx-auto leading-[1.68]">
              No pitch needed. No formal request. Just reach out and let&rsquo;s see what&rsquo;s
              possible from there.
            </p>

            {/* Two buttons — exactly two, no third CTA */}
            <div className="flex justify-center flex-wrap gap-4 mt-12">
              <a
                href={siteConfig.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-indigo text-white font-bold text-[15.5px] rounded-full px-8 py-[15px] transition-all duration-200 hover:bg-indigo-light hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(79,70,229,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-pale"
                style={{ boxShadow: '0 4px 20px rgba(79,70,229,0.35)' }}
              >
                <LinkedInIcon />
                Connect on LinkedIn
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2.5 font-semibold text-[15.5px] rounded-full px-8 py-[15px] transition-all duration-200 hover:text-white hover:bg-white/[0.12] hover:border-white/[0.28] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.8)', border: '1.5px solid rgba(255,255,255,0.14)' }}
              >
                <EmailIcon />
                Send an Email
              </a>
            </div>

            {/* Resume download — quiet text link */}
            <a
              href={siteConfig.resumePath}
              download
              className="inline-block mt-7 text-[13.5px] font-medium text-white/30 hover:text-white/60 transition-colors duration-200 focus-visible:outline-none focus-visible:underline"
              aria-label="Download resume PDF"
            >
              ↓ Download Resume
            </a>

            {/* Closing paragraph — site journey callback */}
            <div
              className="mt-14 pt-10 max-w-[720px] mx-auto"
              style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
            >
              <p className="text-[14px] text-white/25 leading-[1.70]">
                You&rsquo;ve reached the end of the site. If something you&rsquo;ve seen here
                resonates — whether it&rsquo;s the{' '}
                <a href="/jarvis" className="text-indigo-pale/60 hover:text-indigo-pale/90 transition-colors duration-200 focus-visible:outline-none focus-visible:underline">
                  {siteConfig.frameworkName} framework
                </a>
                , the{' '}
                <a href="/ai-projects" className="text-indigo-pale/60 hover:text-indigo-pale/90 transition-colors duration-200 focus-visible:outline-none focus-visible:underline">
                  AI systems
                </a>
                , or simply how I think about{' '}
                <a href="/about" className="text-indigo-pale/60 hover:text-indigo-pale/90 transition-colors duration-200 focus-visible:outline-none focus-visible:underline">
                  strategy and business
                </a>{' '}
                — I&rsquo;d genuinely enjoy the conversation.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

    </div>
  )
}
