/**
 * lib/data/footer.ts
 * ──────────────────────────────────────────────────────────────────────────
 * Footer column definitions consumed by Footer.tsx.
 * All personal contact data comes from siteConfig — never hardcoded here.
 */

import { siteConfig } from '@/lib/site-config'
import type { FooterColumn } from '@/lib/types'

/**
 * footerColumns
 * The three right-hand columns of the footer grid.
 * The first (brand) column is rendered directly in Footer.tsx
 * using siteConfig values, not from this array.
 */
export const footerColumns: FooterColumn[] = [
  {
    title: 'Pages',
    links: [
      { label: 'Home',      href: '/' },
      { label: 'About',     href: '/about' },
      { label: 'Services',  href: '/services' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Contact',   href: '/contact' },
    ],
  },
  {
    title: 'Work',
    links: [
      { label: 'Portfolio',       href: '/portfolio' },
      { label: 'AI Projects',     href: '/ai-projects' },
      { label: 'J.A.R.V.I.S.',   href: '/jarvis',         variant: 'jarvis' },
      { label: 'Swiggy Analysis', href: '/jarvis/swiggy',  variant: 'jarvis' },
      { label: 'Zomato Analysis', href: '/jarvis/zomato',  variant: 'jarvis' },
    ],
  },
  {
    title: 'Connect',
    links: [
      {
        label:    'LinkedIn',
        href:     siteConfig.linkedIn,
        external: true,
      },
      {
        label: 'Email',
        href:  `mailto:${siteConfig.email}`,
      },
      {
        label: 'Contact Form',
        href:  '/contact',
      },
    ],
  },
]

/**
 * footerBottomLinks
 * The small links in the footer copyright bar.
 */
export const footerBottomLinks = [
  { label: 'About',    href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact',  href: '/contact' },
]
