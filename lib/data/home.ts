/**
 * lib/data/home.ts
 * ──────────────────────────────────────────────────────────────────────────
 * All content for the Homepage sections:
 *   - Hero (headline, subheadline, CTAs, stats)
 *   - Current Focus strip
 *   - Trust / tools bar
 *   - Services preview (subset)
 *   - Featured portfolio preview
 *   - AI Projects preview
 *   - J.A.R.V.I.S. teaser
 *   - Homepage CTA banner
 *
 * IMPORTANT: All personal data (name, email, LinkedIn, location) is always
 * read from siteConfig. Copy that isn't personal lives here.
 */

import { siteConfig } from '@/lib/site-config'
import type { StatPill, FocusTag, CTAButton } from '@/lib/types'

// ── Hero section ────────────────────────────────────────────────────────
export const heroContent = {
  // Badge shown above the name
  badge: {
    statusText: 'Open to Opportunities Across India',
    pills: ['MBA', 'AI', 'Marketing'],
  },

  // Main headline — name rendered separately; taglines rendered below
  titleLine1: siteConfig.firstName,
  titleGradient: 'Nivas.',

  // Role descriptor below the name
  role: {
    part1: siteConfig.title,
    separator: '·',
    part2: siteConfig.subtitle,
  },

  // Subheadline — audience-agnostic positioning statement
  subheadline:
    `I study how businesses grow and build AI-powered systems that help them grow faster.`,

  // Body — expands on the subheadline for visitors who read further
  description:
    'I combine marketing, business analysis, and AI systems to help organizations ' +
    'make smarter decisions, automate workflows, and drive growth.',

  // Primary CTA
  ctaPrimary:  { label: 'View Portfolio',  href: '/portfolio' } as CTAButton,
  ctaSecondary:{ label: 'Get In Touch',    href: '/contact'   } as CTAButton,
}

// ── Hero stat pills ─────────────────────────────────────────────────────
export const heroStats: StatPill[] = [
  {
    icon:  '🤖',
    value: '5',
    label: 'AI Projects Built',
  },
  {
    icon:  '📊',
    value: '2',
    label: 'Published Analyses',
  },
  {
    icon:  '🎓',
    value: 'MBA',
    label: 'Marketing Graduate',
  },
]

// ── Current Focus strip ─────────────────────────────────────────────────
// Order matches siteConfig.currentFocus for consistency.
// Icons are mapped here because they're presentational, not config data.
export const currentFocusTags: FocusTag[] = [
  { icon: '📈', label: 'Growth Marketing' },
  { icon: '📊', label: 'Business Analysis' },
  { icon: '🤖', label: 'AI Automation' },
  { icon: '🚀', label: 'SaaS & Startups' },
]

// ── Trust / Tools bar ───────────────────────────────────────────────────
export const trustBarTools: string[] = [
  'n8n',
  'OpenAI API',
  'Google Sheets',
  'Python',
  'Power BI',
  'Canva',
  'Next.js',
  'Framer',
]

// ── Services section (homepage preview) ─────────────────────────────────
export const servicesPreviewHeader = {
  label:    'What I Do',
  title:    'End-to-End AI & Marketing Services',
  subtitle:
    'From AI systems to strategic research — built for founders, teams, and organisations ' +
    'that want a real edge.',
}

// IDs of services shown in the homepage preview grid (max 6 = all of them)
export const homepageServiceIds: string[] = [
  'business-research',
  'competitor-intel',
  'marketing-automation',
  'lead-generation',
  'personal-branding',
  'growth-audit',
]

// ── Portfolio section (homepage preview) ────────────────────────────────
export const portfolioPreviewHeader = {
  label:    'Selected Work',
  title:    'Projects at the intersection of AI, strategy & growth.',
  subtitle: undefined,
}

// IDs of portfolio items shown in the homepage grid (featured + 3)
export const homepagePortfolioIds: string[] = [
  'jarvis-framework',
  'swiggy-analysis',
  'zomato-analysis',
  'ai-automation-portfolio',
]

// ── AI Projects section (homepage preview) ──────────────────────────────
export const aiProjectsPreviewHeader = {
  label:    'AI Systems',
  title:    'Production-Grade AI Systems I\'ve Built',
  subtitle:
    'End-to-end automation pipelines using OpenAI API, n8n, and Python — covering the ' +
    'full marketing and business intelligence stack.',
}

// ── J.A.R.V.I.S. teaser section ─────────────────────────────────────────
export const jarvisTeaserContent = {
  label:    'Signature Framework',
  title:    'A proprietary analytical framework, built by Arun.',
  eyebrow:  'Signature Framework',
  name:     siteConfig.frameworkName,
  subname:  'AI-Assisted Strategic Growth Analysis Framework',
  description:
    'A proprietary framework combining AI tools, business strategy, and market intelligence to ' +
    'produce deep strategic growth analyses for high-growth companies. Built to uncover what ' +
    'traditional research misses.',
  // Episode chips rendered in the teaser card
  episodeChips: [
    { label: 'Swiggy',  status: 'published'    as const },
    { label: 'Zomato',  status: 'published'    as const },
    { label: 'Zepto',   status: 'in-progress'  as const },
  ],
  cta: { label: 'Explore Framework →', href: '/jarvis' },
}

// ── Homepage CTA banner ──────────────────────────────────────────────────
export const homepageCTA = {
  eyebrow:  'Let\'s Work Together',
  title:    'Ready to build something meaningful?',
  subtitle: 'Whether you\'re hiring, building, or scaling — let\'s connect and explore what\'s possible together.',
  audiencePills: [
    'Recruiters & Hiring Managers',
    'Startup Founders',
    'Freelance Clients',
  ],
  primaryBtn:   { label: 'Get In Touch',   href: '/contact'   } as CTAButton,
  secondaryBtn: { label: 'View Portfolio', href: '/portfolio' } as CTAButton,
}

// ── About page preview snippet (used on Homepage if needed) ─────────────
export const aboutSnippet = {
  name:        siteConfig.name,
  title:       siteConfig.title,
  subtitle:    siteConfig.subtitle,
  location:    siteConfig.location,
  locationNote:siteConfig.locationNote,
  resumePath:  siteConfig.resumePath,
}
