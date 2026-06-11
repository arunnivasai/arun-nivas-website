/**
 * lib/data/portfolio.ts
 * ──────────────────────────────────────────────────────────────────────────
 * All portfolio items and MBA project definitions for the Portfolio page
 * and the Homepage featured work section.
 *
 * ITEM STATUS GUIDE:
 *   'live'         — Has a published page/URL. Link renders as active.
 *   'in-progress'  — Work is underway. Badge shows "In Progress" + amber dot.
 *   'in-portfolio' — Work exists offline; no public URL yet. Badge = "In Portfolio".
 *   'coming-soon'  — Planned but not started. Badge = "Coming Soon".
 */

import type { PortfolioItem, MBAProject } from '@/lib/types'

// ── Main portfolio items ────────────────────────────────────────────────
export const portfolioItems: PortfolioItem[] = [

  // ── J.A.R.V.I.S. — Flagship framework (featured) ─────────────────────
  {
    id:           'jarvis-framework',
    category:     'Framework',
    badge:        'Signature Framework',
    badgeVariant: 'amber',
    title:        'Marketing J.A.R.V.I.S.',
    subtitle:     'Proprietary Strategic Growth Analysis Framework',
    description:
      'A proprietary framework combining business intelligence, market research, and ' +
      'AI-accelerated investigation to produce decision-ready strategic analyses of ' +
      'high-growth companies. The only proprietary analytical methodology in this portfolio.',
    tags:     ['AI Strategy', 'Business Analysis', 'Market Research', 'OpenAI', 'n8n'],
    skills:   ['Strategic Analysis', 'Framework Design', 'AI Systems', 'Research', 'Communication'],
    href:     '/jarvis',
    status:   'live',
    featured: true,
    barClass: 'bg-grad-border',
  },

  // ── Swiggy — J.A.R.V.I.S. Episode 01 ────────────────────────────────
  {
    id:           'swiggy-analysis',
    category:     'Strategic Analysis',
    badge:        'Strategic Analysis',
    badgeVariant: 'indigo',
    title:        'Swiggy',
    subtitle:     'Strategic Growth Analysis — Episode 01',
    description:
      'Full application of the Marketing J.A.R.V.I.S. framework to Swiggy — covering ' +
      'business model architecture, competitive dynamics, customer intelligence, and ' +
      'strategic growth recommendations across all seven research layers.',
    tags:     ['Strategy', 'Market Research', 'Competitive Intel', 'AI-Assisted'],
    skills:   ['Business Analysis', 'Strategic Thinking', 'Research', 'Communication'],
    href:     '/jarvis/swiggy',
    status:   'live',
    barClass: 'bg-bar-research',
  },

  // ── Zomato — J.A.R.V.I.S. Episode 02 ────────────────────────────────
  {
    id:           'zomato-analysis',
    category:     'Strategic Analysis',
    badge:        'Strategic Analysis',
    badgeVariant: 'indigo',
    title:        'Zomato',
    subtitle:     'Strategic Growth Analysis — Episode 02',
    description:
      'Full application of the Marketing J.A.R.V.I.S. framework to Zomato — examining ' +
      'growth architecture, competitive positioning against Swiggy and emerging players, ' +
      'customer dynamics, and the strategic decisions defining its next growth phase.',
    tags:     ['Strategy', 'Market Research', 'Competitive Intel', 'AI-Assisted'],
    skills:   ['Business Analysis', 'Strategic Thinking', 'Research', 'Communication'],
    href:     '/jarvis/zomato',
    status:   'live',
    barClass: 'bg-bar-research',
  },

  // ── Zepto — J.A.R.V.I.S. Episode 03 (In Progress) ───────────────────
  {
    id:           'zepto-analysis',
    category:     'Strategic Analysis',
    badge:        'In Progress',
    badgeVariant: 'amber',
    title:        'Zepto',
    subtitle:     'Strategic Growth Analysis — Episode 03',
    description:
      'The third episode in the Marketing J.A.R.V.I.S. series applies the framework to ' +
      'Zepto — India\'s fastest-growing quick-commerce platform and the most direct ' +
      'competitive challenger to Swiggy Instamart and Blinkit. Research underway.',
    tags:     ['Strategy', 'Market Research', 'Quick Commerce', 'AI-Assisted'],
    skills:   ['Business Analysis', 'Strategic Thinking', 'Research'],
    href:     '/jarvis/zepto',
    status:   'in-progress',
    barClass: 'bg-bar-research',
  },

  // ── AI Marketing Automation Portfolio ────────────────────────────────
  {
    id:           'ai-automation-portfolio',
    category:     'AI Systems',
    badge:        'AI Portfolio',
    badgeVariant: 'emerald',
    title:        'AI Marketing Automation Portfolio',
    subtitle:     'Five Production AI Systems',
    description:
      'A complete portfolio of five production AI systems built using n8n, OpenAI API, and ' +
      'Google Sheets — covering the full marketing lifecycle from research and competitive ' +
      'intelligence through lead generation, automation, and personal branding.',
    tags:     ['n8n', 'OpenAI', 'Automation', 'Google Sheets', 'Python'],
    skills:   ['AI Automation', 'Systems Design', 'Workflow Architecture'],
    href:     '/ai-projects',
    status:   'live',
    barClass: 'bg-bar-automation',
  },

  // ── AI Business Dashboard ─────────────────────────────────────────────
  {
    id:           'ai-business-dashboard',
    category:     'AI Systems',
    badge:        'AI + Analytics',
    badgeVariant: 'indigo',
    title:        'AI Business Dashboard',
    subtitle:     'Automated Intelligence via Power BI + Python',
    description:
      'An integrated business dashboard connecting Excel data sources to Power BI ' +
      'visualisations, with a Python-Claude API bridge that generates automated narrative ' +
      'insights from the underlying data. Demonstrates end-to-end data pipeline design.',
    tags:     ['Power BI', 'Python', 'Claude API', 'Excel'],
    skills:   ['Data Analysis', 'AI Integration', 'Business Intelligence'],
    href:     undefined,
    status:   'in-portfolio',
    barClass: 'bg-bar-research',
  },

  // ── Nike LinkedIn Strategy ────────────────────────────────────────────
  {
    id:           'nike-linkedin-strategy',
    category:     'Marketing',
    badge:        'Strategy Report',
    badgeVariant: 'slate',
    title:        'Nike LinkedIn Engagement Strategy',
    subtitle:     'Consulting-Style Brand Strategy Analysis',
    description:
      'A structured consulting-style strategy report analysing Nike\'s LinkedIn presence and ' +
      'developing an engagement framework to improve brand authority and audience interaction. ' +
      'Covers audience segmentation, content pillars, and engagement mechanics.',
    tags:     ['LinkedIn Strategy', 'Brand Analysis', 'Content Strategy'],
    skills:   ['Strategic Analysis', 'Brand Strategy', 'Research', 'Communication'],
    href:     undefined,
    status:   'in-portfolio',
    barClass: 'bg-bar-branding',
  },

  // ── Kotler's Quorum ───────────────────────────────────────────────────
  {
    id:           'kotlers-quorum',
    category:     'Marketing',
    badge:        'Marketing Association',
    badgeVariant: 'violet',
    title:        "Kotler's Quorum",
    subtitle:     'Social Media & Marketing Initiatives — MBA Marketing Association',
    description:
      'Led social media strategy and content execution for the marketing association of ' +
      'O.P. Jindal Global University — designing the content calendar, creating visuals and ' +
      'copy, planning event promotions, and building consistent brand voice across platforms.',
    tags:     ['Content Strategy', 'Visual Design', 'Event Promotion', 'Brand Voice'],
    skills:   ['Marketing', 'Communication', 'Brand Strategy', 'Content Creation'],
    href:     undefined,
    status:   'coming-soon',
    barClass: 'bg-bar-branding',
  },

  // ── LinkedIn Personal Brand ───────────────────────────────────────────
  {
    id:           'linkedin-personal-brand',
    category:     'Marketing',
    badge:        'Personal Branding',
    badgeVariant: 'indigo',
    title:        'LinkedIn Personal Brand',
    subtitle:     'Ongoing Brand-Building Initiative',
    description:
      'An ongoing personal branding initiative on LinkedIn — building thought leadership at ' +
      'the intersection of marketing, business analysis, and AI through consistent content, ' +
      'strategic positioning, and audience engagement.',
    tags:     ['LinkedIn', 'Content Strategy', 'Thought Leadership'],
    skills:   ['Marketing', 'Personal Branding', 'Content Creation', 'Communication'],
    href:     'https://www.linkedin.com/in/arun-nivas-m/',
    status:   'live',
    barClass: 'bg-bar-branding',
  },

  // ── MBA Strategic Projects Portfolio ─────────────────────────────────
  {
    id:           'mba-projects',
    category:     'MBA Projects',
    badge:        'MBA Strategic Projects',
    badgeVariant: 'violet',
    title:        'MBA Strategic Projects Portfolio',
    subtitle:     'O.P. Jindal Global University · 2024–2026',
    description:
      'A collection of rigorous academic and applied projects spanning servicescape analysis, ' +
      'business simulation, market research, sustainability strategy, and circular economy ' +
      'thinking — each grounded in established business frameworks and real-world data.',
    tags:     ['Strategy', 'Research', 'Business Analysis', 'MBA'],
    skills:   ['Business Analysis', 'Strategic Thinking', 'Research', 'Communication'],
    href:     undefined,
    status:   'coming-soon',
    barClass: 'bg-grad-main',
  },
]

// ── MBA sub-projects ────────────────────────────────────────────────────
// These are displayed as chips inside the MBA Portfolio card.
export const mbaProjects: MBAProject[] = [
  { title: 'Zara Servicescape & Mystery Shopping Analysis', type: 'Retail · Service Marketing' },
  { title: 'Gear Up Bikes Business Simulation',             type: 'Strategy · Operations · Pricing' },
  { title: 'MuscleBlaze / HealthKart Podcast Metrics',      type: 'Analytics · Content Marketing' },
  { title: 'EV Sector Literature Review',                   type: 'Sustainable Marketing · Research' },
  { title: 'Circular Economy White Paper',                  type: 'Sustainability · Business Strategy' },
  { title: 'Business Research Projects',                    type: 'Market Research · Analysis' },
]

// ── Helpers ─────────────────────────────────────────────────────────────

/** The J.A.R.V.I.S. framework item — used as the featured card */
export const featuredPortfolioItem = portfolioItems.find((p) => p.featured)!

/** Items suitable for the Homepage "Selected Work" preview (max 4) */
export const homepagePortfolioItems = portfolioItems
  .filter((p) => ['jarvis-framework', 'swiggy-analysis', 'zomato-analysis', 'ai-automation-portfolio'].includes(p.id))

/** J.A.R.V.I.S. episode items only */
export const jarvisEpisodeItems = portfolioItems.filter(
  (p) => ['swiggy-analysis', 'zomato-analysis', 'zepto-analysis'].includes(p.id),
)

/** Items by category */
export function getPortfolioByCategory(category: string): PortfolioItem[] {
  return portfolioItems.filter((p) => p.category === category)
}
