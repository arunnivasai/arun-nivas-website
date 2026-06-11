/**
 * site-config.ts
 * ──────────────────────────────────────────────────────────────────────────
 * Single source of truth for all personal information, contact details,
 * professional status, and SEO defaults across the entire site.
 *
 * MAINTENANCE GUIDE
 * ─────────────────
 * When any of the following change, edit ONLY this file:
 *
 *   · Email address             → siteConfig.email
 *   · LinkedIn URL              → siteConfig.linkedIn
 *   · Location / availability   → siteConfig.location, siteConfig.status
 *   · Resume file               → siteConfig.resumePath
 *   · Production domain         → siteConfig.url (all metadata updates automatically)
 *   · Professional tagline      → siteConfig.tagline
 *   · Framework version         → siteConfig.frameworkVersion
 *   · Current focus areas       → siteConfig.currentFocus
 *   · Open-to-work status       → siteConfig.status.*
 */

export const siteConfig = {

  // ── Identity ──────────────────────────────────────────────────────────
  name:        'Arun Nivas',
  firstName:   'Arun',
  lastName:    'Nivas',
  initials:    'AN',

  // ── Professional positioning ──────────────────────────────────────────
  title:    'MBA (Marketing) Graduate',
  subtitle: 'AI Growth Systems Consultant',
  tagline:  'MBA (Marketing) Graduate | Business Analysis, Growth Strategy & AI Systems',

  // ── Contact ───────────────────────────────────────────────────────────
  email:          'arunsaravanan1310@gmail.com',
  linkedIn:       'https://www.linkedin.com/in/arun-nivas',
  linkedInHandle: 'arun-nivas',

  // ── Location ──────────────────────────────────────────────────────────
  location:      'Chennai, India',
  locationShort: 'Chennai',
  locationNote:  'Open to opportunities across India and remote',

  // ── Professional status ───────────────────────────────────────────────
  /**
   * These booleans drive the availability badge on the About/Homepage hero,
   * the Contact page availability card, and the pulsing status dots.
   *
   * Set openToWork: false once you secure a full-time role.
   * Set openToConsulting / openToFreelance: false if capacity is committed.
   */
  status: {
    openToWork:       true,
    openToConsulting: true,
    openToFreelance:  true,
  },

  // ── Current focus areas ───────────────────────────────────────────────
  /**
   * Drives the "Current Focus" strip on the Homepage and the
   * "Current Focus" section on the Portfolio page.
   *
   * Order matters — first item is most prominent on mobile layouts.
   * Each item maps to an icon in components/sections/FocusStrip.tsx.
   */
  currentFocus: [
    'Business Analysis',
    'Growth Strategy',
    'AI Systems',
    'Marketing Automation',
  ] as const,

  // ── Asset paths ───────────────────────────────────────────────────────
  resumePath:  '/resume/arun-nivas-resume.pdf',
  photoPath:   '/images/arun-nivas.jpg',
  ogImagePath: '/og/og-image.png',

  // ── Site / domain ─────────────────────────────────────────────────────
  /**
   * `url` is used as `metadataBase` in app/layout.tsx.
   * Update this when the custom domain is live on Vercel.
   */
  url:      'https://arunnivas.com',
  siteName: 'Arun Nivas',

  // ── Marketing J.A.R.V.I.S. ───────────────────────────────────────────
  /**
   * frameworkName must never be abbreviated or expanded.
   * Increment frameworkVersion when the methodology is meaningfully updated.
   */
  frameworkName:    'Marketing J.A.R.V.I.S.',
  frameworkVersion: 'v1.0',

  // ── Social links ─────────────────────────────────────────────────────
  social: {
    linkedIn: 'https://www.linkedin.com/in/arun-nivas',
    email:    'mailto:arunsaravanan1310@gmail.com',
  },

  // ── SEO defaults ──────────────────────────────────────────────────────
  /**
   * `titleTemplate` wraps page-level titles: "About — Arun Nivas".
   * The %s placeholder is replaced with the page title in each page's
   * metadata export.
   */
  seo: {
    defaultTitle:
      'Arun Nivas — MBA (Marketing) Graduate & AI Growth Systems Consultant',

    titleTemplate: '%s — Arun Nivas',

    defaultDescription:
      'MBA (Marketing) Graduate and AI Growth Systems Consultant combining ' +
      'business analysis, growth strategy, and AI systems to help organizations ' +
      'make smarter decisions, automate workflows, and drive growth.',

    keywords: [
      'Arun Nivas',
      'MBA Marketing Graduate',
      'AI Growth Systems',
      'Business Analysis',
      'Growth Strategy',
      'Marketing Consultant',
      'AI Automation',
      'Marketing JARVIS',
      'Strategic Analysis',
      'AI Marketing',
    ],
  },

} as const


// ── Derived helpers ────────────────────────────────────────────────────────

/**
 * Returns a concise human-readable availability string.
 * Used in the About hero badge and Contact page status indicator.
 */
export function openStatusLabel(): string {
  const { openToWork, openToConsulting, openToFreelance } = siteConfig.status
  if (openToWork && openToConsulting) return 'Open to opportunities & conversations'
  if (openToWork)                     return 'Open to full-time opportunities'
  if (openToConsulting || openToFreelance) return 'Open to consulting & freelance'
  return 'Currently unavailable'
}

/**
 * Returns true if any availability flag is active.
 * Drives the pulsing green dot visibility across hero sections.
 */
export function isAvailable(): boolean {
  const { openToWork, openToConsulting, openToFreelance } = siteConfig.status
  return openToWork || openToConsulting || openToFreelance
}

/**
 * Formats the mailto: link with an optional pre-filled subject.
 * Used in CTA buttons across the site.
 */
export function mailtoLink(subject?: string): string {
  const base = `mailto:${siteConfig.email}`
  return subject
    ? `${base}?subject=${encodeURIComponent(subject)}`
    : base
}


// ── Type exports ───────────────────────────────────────────────────────────
export type SiteConfig      = typeof siteConfig
export type CurrentFocus    = typeof siteConfig.currentFocus[number]
export type SocialPlatform  = keyof typeof siteConfig.social
