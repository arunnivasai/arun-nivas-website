/**
 * lib/data/jarvis.ts
 * ──────────────────────────────────────────────────────────────────────────
 * All content for the Marketing J.A.R.V.I.S. framework page:
 * - Framework metadata
 * - Seven research layers
 * - Guiding principles
 * - Published and in-progress episodes
 * - Series roadmap
 * - Audience types
 * - "Why This Matters" arguments
 *
 * CRITICAL: frameworkName and frameworkVersion are always sourced from
 * siteConfig, never hardcoded here. Import from site-config.ts.
 */

import { siteConfig } from '@/lib/site-config'
import type { JarvisLayer, JarvisEpisode, JarvisRoadmapItem, JarvisPrinciple } from '@/lib/types'

// ── Framework metadata ──────────────────────────────────────────────────
export const jarvisMetadata = {
  name:        siteConfig.frameworkName,
  version:     siteConfig.frameworkVersion,
  tagline:     'AI-Assisted Strategic Growth Analysis Framework',
  positioning:
    'A structured framework for strategic growth analysis, combining business intelligence, ' +
    'market research, and AI-accelerated investigation to produce decision-ready insights — ' +
    'through a repeatable seven-layer process that can be applied to any high-growth company.',
  heroStatement:
    'Marketing J.A.R.V.I.S. is a seven-layer strategic analysis framework that combines ' +
    'AI-powered research with structured business intelligence to produce comprehensive growth ' +
    'analyses of high-velocity companies — designed to be repeatable, comparable, and decision-ready.',
  creatorNote:
    `${siteConfig.frameworkName} was developed by ${siteConfig.name} as an ongoing initiative ` +
    'to explore how structured strategic thinking and AI-assisted research can work together ' +
    'to produce deeper business intelligence — applied consistently across high-growth companies.',
  // Hero stats
  stats: {
    layers:         7,
    published:      2,
    inProgress:     1,
    planned:        5,
    layerLabel:     'Research Layers',
    publishedLabel: 'Published Analyses',
    inProgressLabel:'Analysis In Progress',
    plannedLabel:   'Future Companies Planned',
  },
  // Closing signature quote — do not modify
  signatureQuote: {
    line1: 'Strategy without intelligence',
    line2: 'is opinion. Intelligence without',
    line3: 'structure is noise. J.A.R.V.I.S. is the structure.',
  },
  // Methodology principle tags
  principleTags: [
    'AI-Accelerated Research',
    'Seven Structured Layers',
    'Repeatable Process',
    'Decision-Ready Output',
    'Cross-Company Comparable',
  ],
}

// ── Seven research layers ────────────────────────────────────────────────
export const jarvisLayers: JarvisLayer[] = [
  {
    num:    'Layer 01',
    title:  'Business Model & Growth Architecture',
    desc:
      'Revenue model, unit economics, core value proposition, growth loops, and the structural ' +
      'advantages that allow the business to compound. Establishes the strategic foundation all ' +
      'subsequent layers build on.',
    output: 'Business architecture map, revenue model classification, growth loop diagram',
  },
  {
    num:    'Layer 02',
    title:  'Market & Industry Dynamics',
    desc:
      'Total addressable market, serviceable segments, category growth vectors, regulatory ' +
      'environment, and macro tailwinds and headwinds shaping the industry\'s trajectory.',
    output: 'Market sizing, category dynamics brief, macro opportunity/threat matrix',
  },
  {
    num:    'Layer 03',
    title:  'Competitive Intelligence',
    desc:
      'Competitive landscape mapping, positioning analysis of key players, differentiation ' +
      'assessment, category dynamics, and an evaluation of where competitive moats are — ' +
      'or are not — being built.',
    output: 'Competitive landscape map, positioning matrix, threat and opportunity assessment',
  },
  {
    num:    'Layer 04',
    title:  'Customer Intelligence',
    desc:
      'Persona mapping, behavioural signals, sentiment analysis across public sources, ' +
      'demand-side insights, retention and churn indicators, and the jobs-to-be-done the ' +
      'product is actually fulfilling for different segments.',
    output: 'Persona profiles, sentiment summary, demand signal analysis',
  },
  {
    num:    'Layer 05',
    title:  'Strategic Positioning Analysis',
    desc:
      'Brand positioning, messaging architecture, content strategy, differentiation narrative, ' +
      'and an assessment of how effectively the company occupies — or fails to occupy — ' +
      'the strategic position it claims.',
    output: 'Positioning audit, messaging strength assessment, content strategy review',
  },
  {
    num:    'Layer 06',
    title:  'Growth Lever Identification',
    desc:
      'Systematically identifying and prioritising the specific mechanisms available to this ' +
      'business for accelerating growth — ranked by impact potential, feasibility, and strategic ' +
      'fit with the company\'s existing architecture.',
    output: 'Prioritised growth lever matrix, feasibility-impact grid',
  },
  {
    num:    'Layer 07',
    title:  'Strategic Recommendations & Roadmap',
    desc:
      'Synthesising all six preceding layers into a structured set of strategic recommendations ' +
      '— with clear reasoning, prioritisation logic, and an actionable roadmap that connects ' +
      'insight to execution. The output a decision-maker can actually use.',
    output: 'Strategic recommendations brief, prioritised roadmap, executive summary',
  },
]

// ── Guiding principles ───────────────────────────────────────────────────
export const jarvisPrinciples: JarvisPrinciple[] = [
  {
    num:   'P.01',
    title: 'AI accelerates research. Not thinking.',
    desc:
      'AI compresses the timeline between question and evidence. It does not — and should not — ' +
      'replace the analytical judgement required to interpret that evidence and draw defensible ' +
      'conclusions. The framework uses AI precisely where it creates leverage: research velocity, ' +
      'synthesis, and pattern recognition. Not strategic reasoning.',
  },
  {
    num:   'P.02',
    title: 'Structure before speed.',
    desc:
      'The seven-layer process is not a checklist to be rushed through. Each layer must be ' +
      'completed before the next begins — because the insights generated in Layer 03 depend on ' +
      'the foundation built in Layers 01 and 02. Structural rigour is what separates analysis ' +
      'from summarisation.',
  },
  {
    num:   'P.03',
    title: 'Output must be decision-ready.',
    desc:
      'An analysis that cannot be acted on is a report, not intelligence. Every J.A.R.V.I.S. ' +
      'output is designed to end with specific, prioritised recommendations — not observations. ' +
      'If a reader finishes and doesn\'t know what to do next, the analysis has not done its job.',
  },
]

// ── Published & in-progress episodes ────────────────────────────────────
export const jarvisEpisodes: JarvisEpisode[] = [
  {
    num:         1,
    company:     'Swiggy',
    status:      'published',
    subtitle:    'Strategic Growth Analysis — All Seven Layers',
    description:
      'A complete application of the J.A.R.V.I.S. framework to Swiggy — examining its business ' +
      'model architecture, competitive dynamics against Zomato and emerging players, customer ' +
      'intelligence signals, and the growth levers available to it as India\'s food delivery ' +
      'and quick-commerce platform.',
    sector:   'Quick Commerce & Food Delivery',
    insights: [
      'Key strategic insight from the Swiggy analysis — to be populated with actual findings.',
      'Key strategic insight from the Swiggy analysis — to be populated with actual findings.',
      'Key strategic insight from the Swiggy analysis — to be populated with actual findings.',
    ],
    href: '/jarvis/swiggy',
    tags: ['Strategy', 'Market Research', 'Competitive Intel', 'AI-Assisted'],
  },
  {
    num:         2,
    company:     'Zomato',
    status:      'published',
    subtitle:    'Strategic Growth Analysis — All Seven Layers',
    description:
      'A complete application of the J.A.R.V.I.S. framework to Zomato — mapping its growth ' +
      'architecture, competitive dynamics, customer dynamics across B2C and B2B segments, ' +
      'and the strategic positioning decisions that will define its next phase of growth.',
    sector:   'Food Delivery & B2B Services',
    insights: [
      'Key strategic insight from the Zomato analysis — to be populated with actual findings.',
      'Key strategic insight from the Zomato analysis — to be populated with actual findings.',
      'Key strategic insight from the Zomato analysis — to be populated with actual findings.',
    ],
    href: '/jarvis/zomato',
    tags: ['Strategy', 'Market Research', 'Competitive Intel', 'AI-Assisted'],
  },
  {
    num:         3,
    company:     'Zepto',
    status:      'in-progress',
    subtitle:    'Strategic Growth Analysis — Research Underway',
    description:
      'The third episode in the J.A.R.V.I.S. series applies the framework to Zepto — ' +
      'India\'s fastest-growing quick-commerce platform and the most direct competitive ' +
      'challenger to Swiggy Instamart and Blinkit. Research across all seven layers is ' +
      'currently underway.',
    sector:   'Quick Commerce',
    insights: [],
    href:     '/jarvis/zepto',
    tags:     ['Strategy', 'Market Research', 'Quick Commerce', 'AI-Assisted'],
  },
]

// ── Series roadmap ──────────────────────────────────────────────────────
export const jarvisRoadmap: JarvisRoadmapItem[] = [
  { episode: 'EP.03', company: 'Zepto',    sector: 'Quick Commerce · Consumer Tech',        status: 'in-progress' },
  { episode: 'EP.04', company: 'Blinkit',  sector: 'Quick Commerce · Zomato Acquisition',   status: 'planned' },
  { episode: 'EP.05', company: 'Meesho',   sector: 'Social Commerce · D2C Enablement',      status: 'planned' },
  { episode: 'EP.06', company: 'Razorpay', sector: 'Fintech · B2B Payments Infrastructure', status: 'planned' },
  { episode: 'EP.07', company: 'CRED',     sector: 'Fintech · Premium Consumer Platform',   status: 'planned' },
]

// ── Who J.A.R.V.I.S. is for ─────────────────────────────────────────────
export const jarvisAudience = [
  {
    icon:  '🚀',
    title: 'Founders & Co-Founders',
    desc:
      'Building competitive intelligence on categories they\'re entering, or studying how market ' +
      'leaders have grown their businesses — to inform their own strategy.',
  },
  {
    icon:  '📈',
    title: 'Growth Teams',
    desc:
      'Understanding the growth architecture of high-performing companies in adjacent or ' +
      'competing categories — to identify patterns, levers, and opportunities applicable ' +
      'to their own business.',
  },
  {
    icon:  '📦',
    title: 'Product Teams',
    desc:
      'Studying how market leaders structure their product and user experience decisions — ' +
      'and how their product architecture connects to their broader growth strategy.',
  },
  {
    icon:  '📣',
    title: 'Marketing Leaders',
    desc:
      'Analysing the positioning, messaging, and content strategies of high-growth companies ' +
      '— to benchmark, challenge, and strengthen their own strategic approach.',
  },
  {
    icon:  '🧠',
    title: 'Strategy Professionals',
    desc:
      'Using the framework as a reference for how rigorous strategic analysis can be ' +
      'structured, scaled, and made actionable — at the intersection of AI and business intelligence.',
  },
  {
    icon:  '🎓',
    title: 'Students & Learners',
    desc:
      'Learning how to think about business strategy through the lens of real companies and ' +
      'structured frameworks — making the principles of strategic analysis concrete and applicable.',
  },
]

// ── Why This Matters ─────────────────────────────────────────────────────
export const jarvisWhyMatters = [
  {
    num:   '01',
    title: 'The speed problem in strategic intelligence',
    body:
      'Strategy decisions happen on timelines that traditional research cycles cannot serve. ' +
      'By the time a conventional analysis is complete, the competitive context has shifted, ' +
      'the window for action has narrowed, and the intelligence that took weeks to produce is ' +
      'already partially outdated. AI changes this — not by replacing rigour, but by compressing ' +
      'the distance between question and evidence.',
  },
  {
    num:   '02',
    title: 'The depth problem in market analysis',
    body:
      'Most publicly available analysis of high-growth companies operates at the surface. It ' +
      'describes what happened — revenue milestones, funding rounds, product launches — without ' +
      'explaining why it happened or what it means strategically. Structural understanding of ' +
      'how a business actually works requires a different kind of analysis.',
  },
  {
    num:   '03',
    title: 'Where AI creates genuine analytical leverage',
    body:
      'AI does not generate strategic insight. What it does is remove the bottleneck between ' +
      'a strategic question and the evidence needed to answer it. The synthesis, the prioritisation, ' +
      'the judgement — those remain human work. The J.A.R.V.I.S. framework is built on this ' +
      'distinction: AI is the research engine. The seven layers are the analytical structure. ' +
      'Strategic reasoning is the output.',
  },
]

// ── Closing quote ────────────────────────────────────────────────────────
export const jarvisClosingQuote =
  'The goal of J.A.R.V.I.S. is not to produce faster reports. It is to produce better ' +
  'thinking — and to make the process of rigorous strategic analysis repeatable, accessible, ' +
  'and scalable.'

// ── Problem statement (for "The Problem" section) ────────────────────────
export const jarvisProblemStatement = {
  challenge: {
    label: 'The Challenge',
    title: 'Strategy decisions move faster than research cycles.',
    body: [
      'Most strategic analyses are either too shallow to be useful or too slow to be timely. ' +
      'Surface-level reports summarise what\'s already public. Deep research takes weeks and arrives ' +
      'after the window for action has closed.',
      'The result is strategy built on incomplete intelligence — assumptions dressed as insights, ' +
      'pattern-matching dressed as analysis. Organisations move forward confident they understand ' +
      'their market, when in reality they\'re navigating with a partial map.',
    ],
    tensionPairs: [
      { before: 'Surface-level',  after: 'Structural depth' },
      { before: 'Too slow',       after: 'Timely intelligence' },
      { before: 'Fragmented',     after: 'Systematic rigour' },
      { before: 'Assumption-led', after: 'Evidence-grounded' },
    ],
  },
  solution: {
    label: 'What J.A.R.V.I.S. Solves',
    title: 'A framework built to close the gap between speed and depth.',
    body: [
      'Marketing J.A.R.V.I.S. was built to address this directly. AI handles the velocity — ' +
      'compressing research timelines that would otherwise take weeks into structured intelligence ' +
      'that can be processed in days. The framework handles the rigour — ensuring that speed never ' +
      'comes at the cost of analytical depth.',
      'The result is strategic analysis that is simultaneously timely enough to inform live decisions ' +
      'and structured enough to be acted on. Not a summary of what\'s publicly known, but a systematic ' +
      'examination of how a business actually works and where its growth constraints and opportunities lie.',
      'The framework applies the same seven analytical layers to every company it examines — ensuring ' +
      'comparability, consistency, and completeness across the entire series.',
    ],
  },
}
