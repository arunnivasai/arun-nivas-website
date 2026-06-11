/**
 * lib/data/services.ts
 * ──────────────────────────────────────────────────────────────────────────
 * All six service definitions consumed by the Services page.
 *
 * ORDER:
 * Reflects strategic positioning: Research → Intelligence → Automation →
 * Lead Generation → Branding → Growth Audit (entry-point service last).
 *
 * MAINTENANCE:
 * To update a service, edit only the relevant object below.
 * All fields map directly to the ServiceCard component on /services.
 */

import type { ServiceItem } from '@/lib/types'

export const services: ServiceItem[] = [
  // ── 01 ─────────────────────────────────────────────────────────────────
  {
    id:       'business-research',
    icon:     '🔬',
    category: 'AI-Powered Intelligence',
    title:    'AI-Powered Business Research & Analysis',
    outcome:  'Strategic intelligence for better business decisions.',
    description:
      'Most organisations make strategy decisions with incomplete, outdated, or surface-level ' +
      'information. This service delivers the depth of intelligence that was previously only ' +
      'accessible to large research teams — automated, structured, and decision-ready.',
    outcomes: [
      'Understand your market\'s structure, key players, and growth dynamics through structured AI-powered research',
      'Surface customer insights, demand signals, and unmet needs from publicly available data at scale',
      'Receive structured strategic reports with clear analysis, framing, and actionable recommendations',
      'Ground strategic decisions in evidence, not assumptions — from market entry to product positioning',
    ],
    tags:     ['Market Research', 'OpenAI', 'Python', 'Sheets'],
    href:     '/services#business-research',
    barClass: 'bg-bar-research',
  },

  // ── 02 ─────────────────────────────────────────────────────────────────
  {
    id:       'competitor-intel',
    icon:     '🧠',
    category: 'Continuous Monitoring',
    title:    'AI Competitor Research Systems',
    outcome:  'Continuous competitive monitoring and market intelligence.',
    description:
      'Competitive landscapes shift faster than manual research can keep up with. This service ' +
      'builds an always-on intelligence system that monitors your rivals across content, messaging, ' +
      'positioning, and product signals — and delivers structured insights on demand.',
    outcomes: [
      'Monitor competitor content, messaging, and positioning changes automatically — no manual tracking',
      'Surface strategic gaps and whitespace in your market before competitors do',
      'Receive structured competitive intelligence reports that feed directly into positioning and strategy decisions',
      'Build a continuously refreshed competitor database your team can query at any time',
    ],
    tags:     ['n8n', 'OpenAI', 'Python', 'Sheets'],
    href:     '/services#competitor-intel',
    barClass: 'bg-bar-competitor',
  },

  // ── 03 ─────────────────────────────────────────────────────────────────
  {
    id:       'marketing-automation',
    icon:     '⚙️',
    category: 'Workflow Systems',
    title:    'AI Marketing Automation',
    outcome:  'Automate repetitive marketing workflows and execution.',
    description:
      'Marketing teams spend a disproportionate amount of time on tasks that follow predictable ' +
      'patterns — content creation, distribution, reporting, and follow-up. This service automates ' +
      'those patterns so your team focuses on strategy and relationships, not production work.',
    outcomes: [
      'Automate content generation, repurposing, and distribution across channels with AI-powered pipelines',
      'Eliminate manual bottlenecks in workflows that repeat weekly — approvals, reporting, briefing, scheduling',
      'Build end-to-end automated pipelines that maintain brand consistency and quality at scale',
      'Free your team to focus on the decisions and relationships that actually require human judgment',
    ],
    tags:     ['n8n', 'OpenAI', 'Sheets', 'Zapier'],
    href:     '/services#marketing-automation',
    barClass: 'bg-bar-automation',
  },

  // ── 04 ─────────────────────────────────────────────────────────────────
  {
    id:       'lead-generation',
    icon:     '⚡',
    category: 'Pipeline Systems',
    title:    'AI Lead Generation Systems',
    outcome:  'Build scalable systems that consistently surface qualified opportunities.',
    description:
      'Inconsistent lead flow is a systems problem, not a sales problem. This service builds an ' +
      'automated pipeline that continuously identifies, qualifies, and surfaces the right prospects ' +
      '— so your team is always working from a full, high-quality funnel.',
    outcomes: [
      'Build automated prospect sourcing pipelines that find and qualify leads matching your ideal customer profile',
      'Generate personalised outreach at scale — context-aware, on-brand, and routed to your CRM automatically',
      'Reduce the time between prospecting and first contact from days to hours with automated follow-up sequences',
      'Create a repeatable, measurable pipeline system that improves over time as data accumulates',
    ],
    tags:     ['n8n', 'OpenAI', 'CRM Integration', 'Sheets'],
    href:     '/services#lead-generation',
    barClass: 'bg-bar-leadgen',
  },

  // ── 05 ─────────────────────────────────────────────────────────────────
  {
    id:       'personal-branding',
    icon:     '👤',
    category: 'Visibility & Authority',
    title:    'AI Personal Branding Systems',
    outcome:  'Create repeatable systems for visibility, authority, and audience growth.',
    description:
      'Strong personal brands are built through consistent, high-quality output over time — but ' +
      'most professionals lack the system to sustain that output alongside their actual work. This ' +
      'service builds the engine so that showing up consistently becomes automatic, not effortful.',
    outcomes: [
      'Build a content system that generates on-brand LinkedIn posts, articles, and carousels aligned to your positioning',
      'Repurpose your existing ideas, talks, and work into multiple formats automatically — one input, many outputs',
      'Grow audience and inbound opportunities through consistent, strategic visibility in the right channels',
      'Design a brand architecture — positioning, tone of voice, content pillars — that scales with you',
    ],
    tags:     ['OpenAI', 'n8n', 'LinkedIn', 'Canva'],
    href:     '/services#personal-branding',
    barClass: 'bg-bar-branding',
  },

  // ── 06 ─────────────────────────────────────────────────────────────────
  {
    id:          'growth-audit',
    icon:        '🔍',
    category:    'Diagnostic Engagement',
    title:       'AI Growth Audit',
    outcome:     'Identify bottlenecks, opportunities, and growth levers before investing in execution.',
    description:
      'Before building systems or investing in campaigns, it\'s worth knowing exactly where the ' +
      'real growth constraints are. The AI Growth Audit is a focused diagnostic that maps your ' +
      'current state, surfaces high-leverage opportunities, and produces a clear strategic roadmap ' +
      '— so any execution that follows is grounded in evidence.',
    outcomes: [
      'Map your current marketing and growth stack to identify the highest-impact automation and AI opportunities',
      'Diagnose growth bottlenecks in acquisition, conversion, and retention with a structured analytical framework',
      'Receive a prioritised strategic roadmap: what to build, in what order, and why — with clear reasoning',
      'Understand exactly where to invest in AI systems for the highest return — before committing to execution',
    ],
    tags:        ['Strategy', 'AI Analysis', 'Roadmapping'],
    href:        '/services#growth-audit',
    barClass:    'bg-bar-audit',
    recommended: true,
  },
]

/**
 * Helper — find a service by its id slug.
 * Used by the Services page for anchor-linked CTA navigation.
 */
export function getServiceById(id: string): ServiceItem | undefined {
  return services.find((s) => s.id === id)
}

/**
 * The recommended entry-point service.
 * Used by the Services CTA section to highlight the Growth Audit.
 */
export const recommendedService = services.find((s) => s.recommended)!
