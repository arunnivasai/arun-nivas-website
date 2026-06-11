/**
 * lib/types/index.ts
 * Shared TypeScript interfaces for the entire site.
 * All data files in lib/data/ return values typed against these.
 * All components that accept data props use these types.
 */

// ── Navigation ─────────────────────────────────────────────────────────────

export interface NavLink {
  label:    string
  href:     string
  variant?: 'default' | 'jarvis' | 'cta'
}

export interface FooterColumn {
  title: string
  links: Array<{
    label:     string
    href:      string
    variant?:  'default' | 'jarvis'
    external?: boolean
  }>
}

// ── Services ───────────────────────────────────────────────────────────────

export interface ServiceItem {
  id:           string
  icon:         string
  category:     string
  title:        string
  outcome:      string
  description:  string
  outcomes:     string[]
  tags:         string[]
  href:         string
  barClass:     string
  recommended?: boolean
}

// ── AI Projects ────────────────────────────────────────────────────────────

export interface FlowStep {
  step:  string
  label: string
}

export interface AISystem {
  num:              string
  colorKey:         string
  icon:             string
  category:         string
  title:            string
  problemStatement: string
  problem:          string
  flowSteps:        FlowStep[]
  outcomes:         string[]
  tags:             string[]
  serviceHref:      string
  barClass:         string
}

export interface TechLayer {
  num:   string
  icon:  string
  title: string
  desc:  string
  tools: string[]
}

export interface NextSystem {
  status: 'in-progress' | 'planned'
  title:  string
  desc:   string
  tags:   string[]
}

// ── J.A.R.V.I.S. ──────────────────────────────────────────────────────────

export interface JarvisLayer {
  num:    string
  title:  string
  desc:   string
  output: string
}

export interface JarvisEpisode {
  num:         number
  company:     string
  status:      'published' | 'in-progress'
  subtitle:    string
  description: string
  sector:      string
  insights:    string[]
  href:        string
  tags:        string[]
}

export interface JarvisRoadmapItem {
  episode: string
  company: string
  sector:  string
  status:  'in-progress' | 'planned'
}

export interface JarvisPrinciple {
  num:   string
  title: string
  desc:  string
}

// ── Portfolio ──────────────────────────────────────────────────────────────

export type PortfolioCategory =
  | 'Strategic Analysis'
  | 'AI Systems'
  | 'Marketing'
  | 'Framework'
  | 'MBA Projects'

export interface PortfolioItem {
  id:           string
  category:     PortfolioCategory
  badge:        string
  badgeVariant: 'indigo' | 'emerald' | 'amber' | 'violet' | 'slate'
  title:        string
  subtitle:     string
  description:  string
  tags:         string[]
  skills:       string[]
  href?:        string
  status:       'live' | 'in-portfolio' | 'coming-soon' | 'in-progress'
  featured?:    boolean
  barClass?:    string
}

export interface MBAProject {
  title: string
  type:  string
}

// ── Shared UI ─────────────────────────────────────────────────────────────

export type BadgeVariant =
  | 'indigo'
  | 'emerald'
  | 'amber'
  | 'amber-dark'
  | 'slate'
  | 'violet'
  | 'violet-dark'
  | 'soon'
  | 'dark'
  | 'recommend'

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'ghost-light'
  | 'ghost-indigo'
  | 'white'
  | 'white-outline'
  | 'white-sm'
  | 'ghost-white-sm'

export type ButtonSize = 'sm' | 'md' | 'lg'

export interface CTAButton {
  label:     string
  href:      string
  variant?:  ButtonVariant
  external?: boolean
  icon?:     boolean
}

// ── Contact ────────────────────────────────────────────────────────────────

export interface ContactMethod {
  platform:    string
  label:       string
  value:       string
  description: string
  action:      string
  href:        string
  external?:   boolean
  icon:        'linkedin' | 'email' | 'location'
}

export interface ReachOutTopic {
  icon:  string
  title: string
  desc:  string
}

export interface OpennesItem {
  icon:  string
  title: string
  desc:  string
}

// ── Homepage ───────────────────────────────────────────────────────────────

export interface StatPill {
  icon:  string
  value: string
  label: string
}

export interface FocusTag {
  icon:  string
  label: string
}
