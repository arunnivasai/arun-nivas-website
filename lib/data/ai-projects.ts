/**
 * lib/data/ai-projects.ts
 * ──────────────────────────────────────────────────────────────────────────
 * All AI system definitions, tech stack layers, design philosophy, and
 * roadmap items consumed by the AI Projects page.
 *
 * Positioning rule (enforced across all copy):
 *   Business-first. Systems thinker. AI-enabled operator.
 *   Never "experiments", never "hobby builds" — always "production systems".
 */

import type { AISystem, TechLayer, NextSystem } from '@/lib/types'

// ── Five production AI systems ──────────────────────────────────────────
export const aiSystems: AISystem[] = [

  // ── 01 Research ────────────────────────────────────────────────────────
  {
    num:              '01',
    colorKey:         'research',
    icon:             '🔬',
    category:         'System 01 · AI Research',
    title:            'AI Marketing Research System',
    problemStatement: 'Business problem: Research timelines are too slow to serve live strategy decisions.',
    problem:
      'Market research is valuable only when it arrives in time to inform decisions. ' +
      'Traditional research cycles — manual source identification, synthesis, and formatting — ' +
      'take days that strategy timelines don\'t have. The result is decisions made on ' +
      'stale or incomplete intelligence.',
    flowSteps: [
      { step: '01', label: 'n8n triggers research pipeline from defined source list or query input' },
      { step: '02', label: 'OpenAI extracts, synthesises, and structures intelligence from raw source material' },
      { step: '03', label: 'Structured research report delivered to Google Sheets with categorised findings' },
    ],
    outcomes: [
      'Structured market intelligence reports ready for immediate use in strategy decisions',
      'Research cycle compressed from days of manual work to hours of automated processing',
      'Consistent research format across all outputs — comparable, searchable, and archivable',
    ],
    tags:        ['n8n', 'OpenAI API', 'Google Sheets', 'Workflow Automation'],
    serviceHref: '/services#business-research',
    barClass:    'bg-bar-research',
  },

  // ── 02 Competitor Intelligence ─────────────────────────────────────────
  {
    num:              '02',
    colorKey:         'competitor',
    icon:             '🧠',
    category:         'System 02 · Intelligence',
    title:            'AI Competitor Intelligence System',
    problemStatement: 'Business problem: Competitive landscapes shift faster than manual monitoring can track.',
    problem:
      'Competitors move daily — new content, pricing shifts, positioning changes, product updates. ' +
      'Manual competitive monitoring is either too infrequent to be useful or too time-consuming ' +
      'to be sustainable. Most organisations track competitors reactively, after the signal has ' +
      'already become obvious.',
    flowSteps: [
      { step: '01', label: 'Python scripts crawl defined competitor sources on a scheduled trigger' },
      { step: '02', label: 'OpenAI analyses content for positioning shifts, messaging changes, and strategic signals' },
      { step: '03', label: 'Structured competitive intelligence report logged to database with delta tracking' },
    ],
    outcomes: [
      'Always-on competitive monitoring that surfaces signals before they become obvious to the market',
      'Structured competitor database with historical tracking — see how rivals have evolved over time',
      'Actionable intelligence reports that directly inform positioning and strategy decisions',
    ],
    tags:        ['Python', 'OpenAI API', 'Google Sheets', 'Scheduled Automation'],
    serviceHref: '/services#competitor-intel',
    barClass:    'bg-bar-competitor',
  },

  // ── 03 Lead Generation ────────────────────────────────────────────────
  {
    num:              '03',
    colorKey:         'leadgen',
    icon:             '⚡',
    category:         'System 03 · Pipeline',
    title:            'AI Lead Generation & Outreach System',
    problemStatement: 'Business problem: Inconsistent lead flow is a systems failure, not a sales failure.',
    problem:
      'Most lead generation processes are either entirely manual — requiring consistent effort ' +
      'that doesn\'t scale — or poorly targeted, generating volume without quality. The result ' +
      'is a pipeline that fluctuates with team capacity rather than running as a reliable ' +
      'business system.',
    flowSteps: [
      { step: '01', label: 'n8n pipeline sources prospects matching defined ICP criteria from target channels' },
      { step: '02', label: 'OpenAI qualifies leads against ICP and generates personalised outreach messages with contextual relevance' },
      { step: '03', label: 'Qualified leads and messages routed to CRM with follow-up sequences triggered automatically' },
    ],
    outcomes: [
      'A continuously running pipeline that surfaces qualified prospects without manual prospecting effort',
      'Context-aware personalised outreach generated at scale — improving response rates vs generic templates',
      'Full CRM integration with automated follow-up — time between prospecting and first contact reduced from days to hours',
    ],
    tags:        ['n8n', 'OpenAI API', 'CRM Integration', 'Outreach Automation'],
    serviceHref: '/services#lead-generation',
    barClass:    'bg-bar-leadgen',
  },

  // ── 04 Marketing Automation ───────────────────────────────────────────
  {
    num:              '04',
    colorKey:         'automation',
    icon:             '⚙️',
    category:         'System 04 · Automation',
    title:            'AI Marketing Automation System',
    problemStatement: 'Business problem: Marketing execution is bottlenecked by repetitive, high-frequency production work.',
    problem:
      'Marketing teams consistently lose capacity to work that is predictable, repetitive, and ' +
      'rule-based — content generation, reformatting for different channels, distribution ' +
      'scheduling, and performance reporting. These tasks follow patterns that can be automated ' +
      'end-to-end, freeing teams for strategy and relationship work.',
    flowSteps: [
      { step: '01', label: 'Long-form content or source brief entered as input trigger to the n8n pipeline' },
      { step: '02', label: 'OpenAI generates channel-specific content variants — LinkedIn posts, email copy, summaries, social assets' },
      { step: '03', label: 'Formatted outputs routed to appropriate channels or content database for review and scheduling' },
    ],
    outcomes: [
      'One content input repurposed into multiple channel-ready formats — eliminating manual reformatting work',
      'Brand-consistent content output at scale — maintaining tone, voice, and messaging across every asset',
      'Full marketing workflow automation from content creation through distribution to reporting',
    ],
    tags:        ['n8n', 'OpenAI API', 'Google Sheets', 'Content Workflows'],
    serviceHref: '/services#marketing-automation',
    barClass:    'bg-bar-automation',
  },

  // ── 05 Personal Branding ──────────────────────────────────────────────
  {
    num:              '05',
    colorKey:         'branding',
    icon:             '👤',
    category:         'System 05 · Branding',
    title:            'AI Personal Branding System',
    problemStatement: 'Business problem: Consistent personal brand output requires production effort that competes with the actual work.',
    problem:
      'Building a strong professional brand requires consistent, high-quality output over ' +
      'extended time — daily or weekly content, strategic positioning, audience engagement. ' +
      'For most professionals, this consistency is the constraint: not lack of ideas, but lack ' +
      'of a system that makes showing up continuously sustainable alongside primary work.',
    flowSteps: [
      { step: '01', label: 'Topic ideation pipeline generates content ideas aligned to brand positioning and audience signals' },
      { step: '02', label: 'OpenAI generates on-brand LinkedIn posts, articles, and engagement responses calibrated to voice and audience' },
      { step: '03', label: 'Content routed to posting workflow with engagement tracking and performance signals fed back into ideation' },
    ],
    outcomes: [
      'A complete personal brand production system — from topic ideation through content creation to publishing and engagement tracking',
      'Consistent brand voice maintained across all output — audience experiences the same positioning regardless of post volume',
      'Performance feedback loop — engagement signals feed back into content strategy, improving output over time',
    ],
    tags:        ['OpenAI API', 'Python', 'Google Sheets', 'LinkedIn Workflow'],
    serviceHref: '/services#personal-branding',
    barClass:    'bg-bar-branding',
  },
]

// ── Tech stack layers ───────────────────────────────────────────────────
export const techLayers: TechLayer[] = [
  {
    num:   'Layer 01 · Orchestration',
    icon:  '⚙️',
    title: 'n8n Workflow Engine',
    desc:
      'The coordination layer — manages triggers, data routing, conditional logic, and the ' +
      'sequencing of every automated step. n8n provides visual workflow architecture that makes ' +
      'complex pipelines maintainable and auditable.',
    tools: ['n8n', 'Webhooks', 'Scheduled Triggers', 'Conditional Logic', 'API Routing'],
  },
  {
    num:   'Layer 02 · Intelligence',
    icon:  '🧠',
    title: 'OpenAI API',
    desc:
      'The reasoning layer — handles extraction, synthesis, generation, and classification. ' +
      'Prompt engineering determines output quality; the intelligence layer is only as good as ' +
      'the instructions it receives and the structure it\'s given to work within.',
    tools: ['OpenAI API', 'GPT Models', 'Prompt Engineering', 'Structured Output', 'Context Windows'],
  },
  {
    num:   'Layer 03 · Data',
    icon:  '🗄️',
    title: 'Python · Sheets · Storage',
    desc:
      'The persistence layer — stores structured outputs, manages data pipelines, enables ' +
      'historical comparison, and serves as the interface between automated systems and human ' +
      'users. Python handles data transformation; Sheets provides accessible, queryable output storage.',
    tools: ['Python', 'Google Sheets', 'Excel', 'Data Structuring', 'Pipeline Management'],
  },
]

// ── Design philosophy ────────────────────────────────────────────────────
export const designPhilosophy = [
  {
    num:      '01',
    title:    'Start with the business problem.',
    subtitle: 'Never with the tool.',
    desc:
      'Every system here was built backwards from a specific operational constraint — not built ' +
      'forward from a technology. The tool choice follows from the problem definition. When the ' +
      'problem is research velocity, the answer is an automated pipeline. The technology is ' +
      'always in service of the business outcome, never the other way around.',
  },
  {
    num:      '02',
    title:    'Systems should run without you.',
    subtitle: "If it needs weekly intervention, it's not a system.",
    desc:
      'A workflow that requires manual triggering, daily oversight, or regular correction is an ' +
      'assisted process — not a system. Every system here is designed to run continuously and ' +
      'autonomously after initial setup and calibration. The test: can it produce consistent ' +
      'output for a month without manual intervention?',
  },
  {
    num:      '03',
    title:    'Output must be usable.',
    subtitle: 'Not raw data. Not a log file. A decision.',
    desc:
      'The most common failure mode of AI systems is producing output that requires significant ' +
      'human processing before it\'s actionable. Every system here produces output that can be ' +
      'acted on directly — structured reports, prioritised leads, formatted content, specific ' +
      'recommendations. If someone needs an hour to process the output before using it, the system has failed.',
  },
]

// ── What's being built next ──────────────────────────────────────────────
export const nextSystems: NextSystem[] = [
  {
    status: 'in-progress',
    title:  'AI Business Dashboard v2',
    desc:
      'Expanding the existing Power BI + Python + Claude API dashboard into a full automated ' +
      'intelligence layer — with scheduled data pulls, AI-generated narrative summaries, and ' +
      'strategic performance flagging built into the reporting workflow.',
    tags:   ['Power BI', 'Python', 'Claude API', 'Automated Reporting'],
  },
  {
    status: 'planned',
    title:  'AI Market Monitoring System',
    desc:
      'A continuous market signal monitoring system — tracking industry news, funding ' +
      'announcements, regulatory changes, and emerging trends across defined market categories, ' +
      'with AI-synthesised weekly intelligence briefings delivered automatically.',
    tags:   ['n8n', 'OpenAI', 'Market Intelligence', 'Trend Monitoring'],
  },
  {
    status: 'planned',
    title:  'AI Strategic Report Generator',
    desc:
      'An automation layer built directly on the J.A.R.V.I.S. framework — a system that ' +
      'orchestrates the seven research layers programmatically, feeding AI-gathered data into ' +
      'the analytical structure to accelerate the production of full strategic analyses.',
    tags:   ['J.A.R.V.I.S.', 'n8n', 'OpenAI', 'Strategic Analysis'],
  },
]

// ── Homepage preview (numbered list format) ─────────────────────────────
export const homepageAISystems = aiSystems.map((s) => ({
  num:   s.num,
  title: s.title,
  desc:  s.problem.split('. ')[0] + '.', // First sentence only for preview
  tags:  s.tags.slice(0, 3),
}))
