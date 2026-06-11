/**
 * app/about/page.tsx — About Page
 * ──────────────────────────────────────────────────────────────────────────
 * Sections (in order):
 *   1. Hero            — Name, positioning statement, meta pills, photo
 *   2. Story           — Two-column narrative: MBA foundation + AI acceleration
 *   3. Education       — Formal credential + certifications grid
 *   4. Skills          — Four-pillar competency grid
 *   5. Current Focus   — Four focus cards with contextual descriptions
 *   6. Career Vision   — Dark section: direction, three vision cards, blockquote
 *   7. Values          — Four numbered professional values
 *   8. CTA             — Three-path close with resume download link
 *
 * Data: siteConfig for all personal information
 * UI:   Button, Badge, SectionHeader, GradientText, AnimateOnScroll, ProfilePhoto
 */

import type { Metadata } from 'next'
import Link from 'next/link'

import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import SectionHeader from '@/components/ui/SectionHeader'
import GradientText from '@/components/ui/GradientText'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import ProfilePhoto from '@/components/ui/ProfilePhoto'

import { siteConfig, openStatusLabel, isAvailable } from '@/lib/site-config'

// ── Page metadata ────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'About',
  description:
    `${siteConfig.name} is an ${siteConfig.title} and ${siteConfig.subtitle} ` +
    'combining marketing strategy, business analysis, and AI systems to help ' +
    'organizations make smarter decisions and drive growth.',
}

// ── Static page data (About-specific, not in siteConfig) ─────────────────
// Defined here rather than in a data file because this content is tightly
// coupled to the page layout and not reused elsewhere.

const storyChapters = [
  {
    eyebrow:  'Chapter One',
    title:    'The Business & Marketing Foundation',
    icon:     '📐',
    accentColor: '#4F46E5',
    body: [
      `I didn't start with tools. I started with questions: Why do some companies grow and others plateau? What makes a market move? How do customers actually make decisions?`,
      `My MBA in Marketing at O.P. Jindal Global University gave me a rigorous foundation in strategy, consumer behaviour, market research, and competitive dynamics. I learned to think in frameworks — to dissect a business, understand its levers, and translate complex problems into clear strategic recommendations.`,
      `But I was also drawn to the analytical side of marketing. Strategy without data is just opinion. I became fascinated by how companies use intelligence — competitive, market, and customer — to make decisions that compound over time. That obsession eventually led to building Marketing J.A.R.V.I.S.: a proprietary framework for producing deep strategic growth analyses, applied first to Swiggy and Zomato.`,
    ],
    quote: 'Great marketing is not about being louder. It\'s about understanding the market better than everyone else in the room.',
  },
  {
    eyebrow:  'Chapter Two',
    title:    'AI as a Force Multiplier',
    icon:     '⚡',
    accentColor: '#7C3AED',
    body: [
      `Then came the inflection point. Not a course. Not a certification. A realisation: everything I had learned about business strategy could now be executed at a scale and speed that wasn't previously possible.`,
      `AI didn't replace my thinking — it amplified it. I started building. Research systems that synthesise intelligence from hundreds of sources in minutes. Competitive monitoring pipelines that surface insights before they become obvious. Content engines that maintain strategic consistency at scale.`,
      `The result is a way of working that combines the rigour of business strategy with the velocity of AI execution. That combination — not the tools alone — is what I bring to every engagement.`,
    ],
    quote: 'I learned how businesses grow. Then I learned how AI can accelerate that growth. Now I build systems that do both.',
  },
]

const certifications = [
  {
    icon:   '🤖',
    name:   'AI Generalist Accelerator',
    sub:    'n8n · OpenAI API · Python · Workflow Automation',
    status: 'completed' as const,
  },
  {
    icon:   '📣',
    name:   'Digital Marketing Certification',
    sub:    'SEO · Content Strategy · Performance Marketing',
    status: 'completed' as const,
  },
  {
    icon:   '🏗️',
    name:   'Built & Deployed: 5 AI Systems + 1 Framework',
    sub:    'Marketing J.A.R.V.I.S. · AI Research · Competitor Intel · Lead Gen · Automation · Branding',
    status: 'completed' as const,
  },
]

const educationTags = [
  'Marketing Strategy', 'Consumer Behaviour', 'Market Research',
  'Business Analytics', 'Strategic Management', 'Brand Management',
]

const skillPillars = [
  {
    icon:     '📈',
    title:    'Marketing Strategy',
    subtitle: 'Brand, growth, and content',
    items: [
      'Growth Marketing',
      'Brand Strategy',
      'Content Strategy',
      'LinkedIn Growth & Personal Branding',
      'Marketing Funnel Design',
    ],
    gradient: 'from-indigo to-indigo-light',
  },
  {
    icon:     '📊',
    title:    'Business Analysis',
    subtitle: 'Research, intelligence, and insight',
    items: [
      'Market Research & Analysis',
      'Competitive Intelligence',
      'Strategic Reports & Recommendations',
      'Data Analysis & Visualisation',
      'Business Strategy Frameworks',
    ],
    gradient: 'from-violet to-[#9333EA]',
  },
  {
    icon:     '🤖',
    title:    'AI & Automation',
    subtitle: 'Systems, agents, and workflows',
    items: [
      'Workflow Automation (n8n)',
      'AI Research Systems',
      'Prompt Engineering',
      'AI Agent Workflows',
      'OpenAI API Integration',
    ],
    gradient: 'from-cyan to-indigo',
  },
  {
    icon:     '🛠',
    title:    'Tools & Tech Stack',
    subtitle: 'The instruments behind the work',
    items: [
      'n8n · OpenAI API · Python',
      'Power BI · Google Sheets',
      'Canva · Framer · Next.js',
      'Google Workspace Suite',
      'Notion · Airtable',
    ],
    gradient: 'from-emerald to-cyan',
  },
]

const focusCards = [
  {
    icon:    '📈',
    title:   'Growth Marketing',
    desc:    `Building and scaling full-funnel growth systems — from awareness to acquisition to retention. I'm particularly focused on the intersection of content strategy, audience intelligence, and AI-assisted campaign execution that makes growth repeatable, not reliant on bursts of effort.`,
    tags:    ['Growth Loops', 'Content Strategy', 'Performance Marketing', 'Retention'],
  },
  {
    icon:    '📊',
    title:   'Business Analysis',
    desc:    `Translating market complexity into clear strategic intelligence. My work here includes competitive deep-dives, market entry analysis, and the ${siteConfig.frameworkName} framework — a proprietary system for producing structured strategic analyses of high-growth companies.`,
    tags:    ['Market Research', 'Competitive Intel', 'Strategic Frameworks', 'Insight Synthesis'],
  },
  {
    icon:    '🤖',
    title:   'AI Automation',
    desc:    `Designing production-grade AI systems that handle research, content, lead generation, and competitive monitoring — freeing teams to focus on decisions, not data gathering. Every system I build is designed to run continuously and compound in value over time.`,
    tags:    ['n8n Pipelines', 'OpenAI API', 'Agent Workflows', 'Process Design'],
  },
  {
    icon:    '🚀',
    title:   'SaaS & Startups',
    desc:    `I'm drawn to fast-moving, ambitious companies where strategy and execution happen in the same room. SaaS businesses in particular — with their compounding revenue models, data-rich environments, and high tolerance for experimentation — are where I want to operate and add the most value.`,
    tags:    ['SaaS Growth', 'Startup Strategy', 'Product-Led Growth', 'GTM Strategy'],
  },
]

const visionCards = [
  {
    eyebrow: 'Growth & Strategy Roles',
    title:   'Inside High-Growth Organisations',
    desc:    'Contributing to companies where strategy, data, and execution converge — as a Growth Analyst, Marketing Strategist, or Business Analyst embedded in a team that moves fast and thinks clearly.',
  },
  {
    eyebrow: 'AI Consulting',
    title:   'AI Systems for Founders',
    desc:    'Building bespoke AI growth infrastructure for founders and leadership teams — turning what used to require entire departments into intelligent, automated systems that scale from day one.',
  },
  {
    eyebrow: 'Long-Term Direction',
    title:   'Building at the Frontier',
    desc:    'Ultimately, I want to contribute to the future of AI-native marketing and strategy by helping organisations make better decisions, move faster, and scale intelligently — as a practitioner who combines strategic thinking with hands-on AI execution.',
  },
]

const values = [
  {
    num:      '01',
    title:    'Systems Thinking',
    subtitle: 'Scale, not one-off output',
    desc:     'I build things that compound. Every project is designed as a system — not a deliverable — because one-time output doesn\'t create competitive advantage. Repeatable, automated, scalable processes do.',
  },
  {
    num:      '02',
    title:    'Clarity Over Complexity',
    subtitle: 'Strategy should be explainable',
    desc:     'The best strategic thinking collapses complexity into clear decisions. If I can\'t explain the recommendation simply, the thinking isn\'t finished. Clarity is a discipline, not a communication style.',
  },
  {
    num:      '03',
    title:    'Speed × Quality',
    subtitle: 'AI enables both, not a trade-off',
    desc:     'AI doesn\'t mean cutting corners on thinking — it means doing the thinking faster and applying it more broadly. I use AI to compress timelines on execution, never to shortcut the analytical rigour that makes output worth having.',
  },
  {
    num:      '04',
    title:    'Continuous Building',
    subtitle: 'Ship something every week',
    desc:     'The best learning is applied learning. I maintain a weekly cadence of building — new systems, analyses, case studies, and frameworks — because capability compounds through practice, not study.',
  },
]

// ════════════════════════════════════════════════════════════════════════
export default function AboutPage() {
  return (
    <div className="flex flex-col">

      {/* ══════════════════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════════════════ */}
      <section
        aria-label="Introduction"
        className="relative min-h-[calc(80vh-4rem)] flex items-start bg-white overflow-hidden"
      >
        {/* Background */}
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

        <div className="relative z-10 w-full max-w-site mx-auto section-px">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-18 items-center">

            {/* ── Left: text ───────────────────────────────────────── */}
            <div>
              {/* Status badge */}
              <div className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-3.5 py-1.5 text-[13px] font-medium text-slate-600 shadow-sm mb-7 hero-anim anim-delay-100">
                {isAvailable() && (
                  <span
                    className="w-2 h-2 rounded-full bg-emerald flex-shrink-0"
                    style={{ animation: 'pulseDot 2.5s ease-in-out infinite' }}
                    aria-hidden="true"
                  />
                )}
                {openStatusLabel()}
              </div>

              {/* Headline */}
              <h1 className="font-syne font-extrabold text-display text-slate-900 hero-anim anim-delay-200">
                The person behind<br />
                the <GradientText>work.</GradientText>
              </h1>

              {/* Bio */}
              <p className="mt-5 text-body-lg text-gray-500 max-w-tight hero-anim anim-delay-300">
                I&rsquo;m <strong className="text-slate-700 font-semibold">{siteConfig.name}</strong> —
                an <strong className="text-slate-700 font-semibold">{siteConfig.title}</strong> and{' '}
                <strong className="text-slate-700 font-semibold">{siteConfig.subtitle}</strong> who
                sits at the intersection of business strategy, analytical thinking, and
                AI-powered execution.
                I study how businesses grow and build AI-powered systems that help them grow faster.
              </p>

              {/* Meta pills */}
              <div className="flex flex-wrap gap-2.5 mt-8 hero-anim anim-delay-400">
                {[
                  { icon: '🎓', label: siteConfig.title },
                  { icon: '🤖', label: 'AI Growth Systems' },
                  { icon: '📊', label: 'Business Analysis' },
                ].map(pill => (
                  <div
                    key={pill.label}
                    className="flex items-center gap-1.5 bg-gray-100 border border-border rounded-full px-4 py-2 text-[13px] font-medium text-slate-700"
                  >
                    <span aria-hidden="true">{pill.icon}</span>
                    {pill.label}
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
                {/* Orb */}
                <div
                  className="absolute -top-6 -left-6 w-20 h-20 rounded-full pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(99,102,241,0.22), rgba(124,58,237,0.12))',
                    filter: 'blur(18px)',
                    zIndex: 0,
                  }}
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  <ProfilePhoto size="clamp(180px,20vw,280px)" />
                </div>

                {/* Location badge */}
                <div className="absolute -bottom-3 -right-4 z-20 flex items-center gap-2 bg-white border border-border rounded-[10px] px-3.5 py-2.5 shadow-md">
                  <span className="text-xl" aria-hidden="true">📍</span>
                  <div>
                    <div className="text-[10.5px] text-gray-400">Based in</div>
                    <div className="text-[13px] font-semibold text-slate-700 leading-tight">
                      {siteConfig.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          2. STORY
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="story"
        aria-labelledby="story-heading"
        className="bg-gray-50 section-p"
      >
        <div className="max-w-site mx-auto">
          <AnimateOnScroll>
            <SectionHeader
              label="My Journey"
              title={
                <span id="story-heading">
                  How I got here —<br />and where I&rsquo;m going.
                </span>
              }
              subtitle="Two chapters, one through-line: understanding how businesses grow, then building the systems that help them grow faster."
            />
          </AnimateOnScroll>

          {/* Two-column story grid */}
          <div
            className="mt-12 rounded-[14px] overflow-hidden shadow-md"
            style={{ border: '1.5px solid #E8EAED' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {storyChapters.map((chapter, i) => (
                <AnimateOnScroll key={chapter.eyebrow} delay={i * 0.12}>
                  <div
                    className="bg-white p-10 lg:p-11 h-full flex flex-col relative"
                    style={{
                      borderRight: i === 0 ? '1.5px solid #E8EAED' : undefined,
                      borderBottom: undefined,
                    }}
                  >
                    {/* Accent bar */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[3px]"
                      style={{ background: `linear-gradient(90deg, ${chapter.accentColor}, ${chapter.accentColor}cc)` }}
                      aria-hidden="true"
                    />

                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-[12px] flex items-center justify-center text-[24px] mb-5"
                      style={{ background: i === 0 ? '#EEF2FF' : 'rgba(124,58,237,0.08)' }}
                    >
                      {chapter.icon}
                    </div>

                    {/* Eyebrow */}
                    <p
                      className="font-mono text-[10.5px] font-semibold tracking-[0.10em] uppercase mb-2.5"
                      style={{ color: chapter.accentColor }}
                    >
                      {chapter.eyebrow}
                    </p>

                    {/* Title */}
                    <h2 className="font-syne font-extrabold text-[21px] text-slate-900 mb-4 leading-snug">
                      {chapter.title}
                    </h2>

                    {/* Body */}
                    <div className="flex-1 space-y-3.5">
                      {chapter.body.map((para, j) => (
                        <p key={j} className="text-[15px] leading-[1.78] text-gray-500">
                          {para}
                        </p>
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote
                      className="mt-7 pl-4 text-[14px] leading-[1.65] text-slate-600 italic"
                      style={{ borderLeft: `3px solid ${chapter.accentColor}` }}
                    >
                      &ldquo;{chapter.quote}&rdquo;
                    </blockquote>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          3. EDUCATION & CREDENTIALS
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="education"
        aria-labelledby="education-heading"
        className="bg-white section-p"
      >
        <div className="max-w-site mx-auto">
          <AnimateOnScroll>
            <SectionHeader
              label="Education & Credentials"
              title={<span id="education-heading">Formal training, continuous<br />self-directed learning.</span>}
              subtitle="Academic rigour combined with a self-built AI curriculum — because the best education doesn't stop at graduation."
            />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">

            {/* ── Formal education ─────────────────────────────────── */}
            <AnimateOnScroll delay={0.08}>
              <div className="bg-white border-[1.5px] border-border rounded-[14px] overflow-hidden hover:border-indigo/20 hover:shadow-md transition-all duration-300 h-full flex flex-col">
                <div className="h-[3px] bg-grad-main" aria-hidden="true" />
                <div className="p-9 flex flex-col flex-1">
                  <div className="w-[52px] h-[52px] rounded-[14px] bg-indigo-50 flex items-center justify-center text-[26px] mb-5">
                    🎓
                  </div>
                  <p className="font-mono text-[10.5px] font-semibold tracking-[0.10em] uppercase text-indigo mb-2">
                    Formal Education
                  </p>
                  <h3 className="font-syne font-extrabold text-[19px] text-slate-900 mb-1 leading-snug">
                    {siteConfig.title}
                  </h3>
                  <p className="text-[14px] text-slate-500 font-medium mb-4">
                    O.P. Jindal Global University · Sonipat, India
                  </p>
                  <p className="text-[14px] leading-[1.70] text-gray-500 flex-1">
                    Two years of deep work in marketing strategy, consumer behaviour, market
                    research, business analytics, and strategic management. Built a strong
                    foundation in how markets work and how businesses create sustainable
                    competitive advantage.
                  </p>
                  {/* Subject tags */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {educationTags.map(tag => (
                      <span
                        key={tag}
                        className="font-mono text-[11px] font-medium px-2.5 py-1 rounded-[6px] bg-indigo-50 text-indigo border border-indigo-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* ── Certifications ───────────────────────────────────── */}
            <AnimateOnScroll delay={0.16}>
              <div className="bg-white border-[1.5px] border-border rounded-[14px] overflow-hidden hover:border-indigo/20 hover:shadow-md transition-all duration-300 h-full flex flex-col">
                <div className="h-[3px] bg-grad-main" aria-hidden="true" />
                <div className="p-9 flex flex-col flex-1">
                  <div className="w-[52px] h-[52px] rounded-[14px] bg-indigo-50 flex items-center justify-center text-[26px] mb-5">
                    🧪
                  </div>
                  <p className="font-mono text-[10.5px] font-semibold tracking-[0.10em] uppercase text-indigo mb-2">
                    Certifications & Continuous Learning
                  </p>
                  <h3 className="font-syne font-extrabold text-[19px] text-slate-900 mb-1 leading-snug">
                    Self-Built AI & Marketing Curriculum
                  </h3>
                  <p className="text-[14px] text-slate-500 font-medium mb-5">
                    Ongoing · 2024 — Present
                  </p>

                  <div className="flex flex-col gap-3.5 flex-1">
                    {certifications.map(cert => (
                      <div
                        key={cert.name}
                        className="flex items-center gap-3.5 p-3.5 bg-gray-50 border border-border rounded-[10px] transition-all duration-200 hover:bg-indigo-50 hover:border-indigo-100"
                      >
                        <span className="text-[18px] flex-shrink-0" aria-hidden="true">{cert.icon}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-[14px] font-semibold text-slate-800 leading-snug">{cert.name}</p>
                          <p className="text-[12px] text-gray-400 mt-0.5">{cert.sub}</p>
                        </div>
                        <Badge variant={cert.status === 'completed' ? 'emerald' : 'amber'} className="flex-shrink-0">
                          {cert.status === 'completed' ? 'Completed' : 'Ongoing'}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          4. SKILLS & EXPERTISE
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="skills"
        aria-labelledby="skills-heading"
        className="bg-gray-50 section-p"
      >
        <div className="max-w-site mx-auto">
          <AnimateOnScroll>
            <SectionHeader
              label="Skills & Expertise"
              title={<span id="skills-heading">Four pillars. One integrated<br />way of working.</span>}
              subtitle="Not isolated skills — a connected competency stack built to think strategically, analyse deeply, automate intelligently, and execute precisely."
            />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-12">
            {skillPillars.map((pillar, i) => (
              <AnimateOnScroll key={pillar.title} delay={i * 0.08}>
                <article
                  className="bg-white border-[1.5px] border-border rounded-[14px] p-8 group cursor-default transition-all duration-300 hover:border-indigo/15 hover:shadow-md hover:-translate-y-[3px] relative overflow-hidden h-full"
                  aria-label={`${pillar.title} skills`}
                >
                  {/* Hover accent bar */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    aria-hidden="true"
                  />

                  <div className="text-[24px] mb-4" aria-hidden="true">{pillar.icon}</div>
                  <h3 className="font-syne font-extrabold text-[16px] text-slate-900 mb-1">{pillar.title}</h3>
                  <p className="text-[12.5px] text-gray-400 mb-5">{pillar.subtitle}</p>

                  <div
                    className="h-px bg-border mb-4"
                    aria-hidden="true"
                  />

                  <ul className="space-y-[9px]" role="list">
                    {pillar.items.map(item => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-[14px] text-slate-700 font-medium"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-br from-indigo to-violet"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          5. CURRENT FOCUS AREAS
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="focus"
        aria-labelledby="focus-heading"
        className="bg-white section-p"
      >
        <div className="max-w-site mx-auto">
          <AnimateOnScroll>
            <SectionHeader
              label="Current Focus"
              title={<span id="focus-heading">What I&rsquo;m actively<br />building toward.</span>}
              subtitle="Not keywords — deliberate focus areas chosen because they sit at the highest-leverage intersection of market demand and personal capability."
            />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-12">
            {focusCards.map((card, i) => (
              <AnimateOnScroll key={card.title} delay={i * 0.08}>
                <article
                  className="bg-gray-50 border-[1.5px] border-border rounded-[14px] p-8 group cursor-default transition-all duration-300 hover:bg-white hover:border-indigo/20 hover:-translate-y-[3px] hover:shadow-md h-full flex flex-col"
                  aria-label={card.title}
                >
                  <div
                    className="w-12 h-12 rounded-[12px] bg-indigo-50 flex items-center justify-center text-[24px] mb-5 transition-colors duration-200 group-hover:bg-indigo-100"
                    aria-hidden="true"
                  >
                    {card.icon}
                  </div>
                  <h3 className="font-syne font-extrabold text-[17px] text-slate-900 mb-2.5">{card.title}</h3>
                  <p className="text-[14.5px] leading-[1.70] text-gray-500 flex-1">{card.desc}</p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {card.tags.map(tag => (
                      <span
                        key={tag}
                        className="font-mono text-[10.5px] font-medium px-2.5 py-[3px] rounded-[5px] bg-white border border-border text-slate-500 transition-all duration-200 group-hover:bg-indigo-50 group-hover:border-indigo-100 group-hover:text-indigo"
                      >
                        {tag}
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
          6. CAREER VISION (DARK)
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="vision"
        aria-labelledby="vision-heading"
        className="bg-slate-950 section-p-lg"
      >
        <div className="max-w-site mx-auto">

          <AnimateOnScroll>
            <span className="section-label-dark">Career Vision</span>
            <h2
              id="vision-heading"
              className="font-syne font-extrabold text-h1 text-white leading-[1.1] tracking-tight mt-0 max-w-[800px]"
            >
              Operating at the intersection of{' '}
              <GradientText>strategy, growth, and AI.</GradientText>
            </h2>
            <p className="text-[clamp(16px,2vw,18px)] leading-[1.8] text-slate-400 mt-7 max-w-[660px]">
              The most interesting problems in business today live at the boundary between{' '}
              <strong className="text-white/75 font-semibold">strategic intelligence</strong> and{' '}
              <strong className="text-white/75 font-semibold">scalable execution</strong>.
              That&rsquo;s the territory I&rsquo;m building toward — where deep analytical thinking meets
              the ability to actually build and ship the systems that act on those insights.
            </p>
          </AnimateOnScroll>

          {/* Vision cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            {visionCards.map((card, i) => (
              <AnimateOnScroll key={card.title} delay={i * 0.1}>
                <div
                  className="rounded-[14px] p-7 group cursor-default transition-all duration-300 hover:bg-indigo/[0.08] relative overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] bg-grad-main opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-hidden="true"
                  />
                  <p className="font-mono text-[10px] font-semibold tracking-[0.10em] uppercase text-white/25 mb-2.5">
                    {card.eyebrow}
                  </p>
                  <h3 className="font-syne font-bold text-[16px] text-white/85 mb-2.5 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-[13.5px] leading-[1.65] text-slate-500">{card.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Divider */}
          <div
            className="mt-12"
            style={{ height: '1px', background: 'rgba(255,255,255,0.07)' }}
            aria-hidden="true"
          />

          {/* Vision blockquote */}
          <AnimateOnScroll delay={0.1} className="mt-12 flex gap-5 items-start max-w-[760px]">
            <div
              className="w-[3px] rounded-[2px] flex-shrink-0 bg-grad-main"
              style={{ minHeight: 88 }}
              aria-hidden="true"
            />
            <blockquote className="font-syne text-[clamp(16px,2.2vw,20px)] font-semibold text-white/65 leading-[1.6] italic">
              &ldquo;I want to work on problems where business strategy, market intelligence,
              and AI systems are not three separate disciplines — but one integrated way of
              operating. That&rsquo;s the work I&rsquo;m building toward, and it&rsquo;s the work I&rsquo;m already doing.&rdquo;
            </blockquote>
          </AnimateOnScroll>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          7. PROFESSIONAL VALUES
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="values"
        aria-labelledby="values-heading"
        className="bg-gray-50 section-p"
      >
        <div className="max-w-site mx-auto">
          <AnimateOnScroll>
            <SectionHeader
              label="Professional Values"
              title={<span id="values-heading">What I stand for.<br />How I work.</span>}
              subtitle="Four principles that run through every project, every analysis, and every system I build — not as stated values, but as working constraints."
            />
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1} className="mt-12">
            <div
              className="rounded-[14px] overflow-hidden bg-white"
              style={{ border: '1.5px solid #E8EAED' }}
              role="list"
              aria-label="Professional values"
            >
              {values.map((value, i) => (
                <div
                  key={value.num}
                  role="listitem"
                  className="grid grid-cols-1 sm:grid-cols-[72px_1fr_1fr] items-start gap-6 px-9 py-7 border-l-[3px] border-l-transparent transition-all duration-200 hover:bg-gray-50 hover:border-l-indigo"
                  style={{
                    borderBottom: i < values.length - 1 ? '1px solid #E8EAED' : undefined,
                  }}
                >
                  <span className="font-mono text-[26px] font-medium text-gray-200 leading-none transition-colors duration-200">
                    {value.num}
                  </span>
                  <div>
                    <p className="font-syne font-extrabold text-[17px] text-slate-900 mb-1.5">{value.title}</p>
                    <p className="font-mono text-[11.5px] font-semibold text-indigo">{value.subtitle}</p>
                  </div>
                  <p className="text-[14.5px] leading-[1.70] text-gray-500">{value.desc}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          8. CTA
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
                padding: 'clamp(48px,6vw,72px)',
                boxShadow: '0 24px 64px rgba(79,70,229,0.3)',
              }}
            >
              {/* Orbs */}
              <div className="absolute rounded-full pointer-events-none" style={{ top: -60, right: -60, width: 280, height: 280, background: 'rgba(255,255,255,0.07)' }} aria-hidden="true" />
              <div className="absolute rounded-full pointer-events-none" style={{ bottom: -80, left: -40, width: 200, height: 200, background: 'rgba(255,255,255,0.05)' }} aria-hidden="true" />

              <div className="relative z-10">
                <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-white/45 mb-5">
                  Let&rsquo;s Connect
                </p>
                <h2 className="font-syne font-extrabold text-[clamp(26px,4vw,44px)] text-white leading-[1.1] tracking-tight">
                  Let&rsquo;s build something<br />together.
                </h2>
                <p className="text-[17px] text-white/60 mt-3.5 max-w-[480px] mx-auto leading-[1.6]">
                  Whether you&rsquo;re looking to hire, collaborate, or bring AI into your growth strategy — I&rsquo;d like to talk.
                </p>

                <div className="flex justify-center flex-wrap gap-3 mt-9">
                  <Button href="/contact" variant="white">
                    Get In Touch →
                  </Button>
                  <Button href="/portfolio" variant="white-outline">
                    View Portfolio
                  </Button>
                  <Button href="/jarvis" variant="white-outline">
                    Explore {siteConfig.frameworkName} →
                  </Button>
                </div>

                {/* Resume download — quiet text link */}
                <a
                  href={siteConfig.resumePath}
                  download
                  className="inline-flex items-center gap-1.5 mt-5 text-[13.5px] font-medium text-white/45 hover:text-white/75 transition-colors duration-200 focus-visible:outline-none focus-visible:underline"
                  aria-label="Download resume PDF"
                >
                  ↓ Download Resume
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

    </div>
  )
}
