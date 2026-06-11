/**
 * lib/data/navigation.ts
 * ──────────────────────────────────────────────────────────────────────────
 * All navigation link definitions consumed by Navbar.tsx.
 * Import siteConfig for any link that references personal data
 * (e.g. email mailto, LinkedIn).
 */

import type { NavLink } from '@/lib/types'

/**
 * Desktop nav links — rendered left-to-right in the center of the navbar.
 * The 'jarvis' variant renders with --indigo color to signal the flagship page.
 * The 'cta' variant renders as a filled pill button (the Contact link).
 */
export const navLinks: NavLink[] = [
  { label: 'About',       href: '/about' },
  { label: 'Services',    href: '/services' },
  { label: 'Portfolio',   href: '/portfolio' },
  { label: 'AI Projects', href: '/ai-projects' },
  { label: 'J.A.R.V.I.S.', href: '/jarvis', variant: 'jarvis' },
  { label: 'Contact →',   href: '/contact', variant: 'cta' },
]

/**
 * Mobile drawer links — same destination set as desktop, without variant
 * overrides (the drawer renders all links at the same large size).
 * The jarvis link keeps its href; styling is handled in Navbar.tsx.
 */
export const mobileNavLinks: NavLink[] = [
  { label: 'Home',        href: '/' },
  { label: 'About',       href: '/about' },
  { label: 'Services',    href: '/services' },
  { label: 'Portfolio',   href: '/portfolio' },
  { label: 'AI Projects', href: '/ai-projects' },
  { label: 'J.A.R.V.I.S.', href: '/jarvis', variant: 'jarvis' },
  { label: 'Contact',     href: '/contact' },
]

/**
 * Pages that use a dark navbar variant (dark background hero).
 * Navbar.tsx reads the current pathname and matches against this list
 * to switch between light and dark nav link colors.
 */
export const darkNavPages: string[] = [
  '/jarvis',
  '/ai-projects',
]
