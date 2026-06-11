/**
 * components/ui/Badge.tsx
 * ──────────────────────────────────────────────────────────────────────────
 * Compact label component used for status indicators, category tags,
 * and credential chips throughout the site.
 *
 * Variants match every badge style from the HTML files:
 *
 *   indigo       — Indigo bg/text, standard category badge
 *   emerald      — Green, "Published" status
 *   amber        — Amber, "In Progress" / "Coming Soon" status
 *   amber-dark   — Deep amber, used on dark backgrounds
 *   slate        — Neutral gray, secondary info
 *   violet       — Violet bg/text, alternative category
 *   violet-dark  — Violet on dark background
 *   soon         — Soft amber border, "Coming Soon" / "In Portfolio"
 *   dark         — White/10 on dark backgrounds
 *   recommend    — Indigo with star prefix, "Recommended First Step"
 */

import { cn } from '@/lib/utils/cn'
import type { BadgeVariant } from '@/lib/types'

const variantStyles: Record<BadgeVariant, string> = {
  indigo: cn(
    'bg-indigo-50 text-indigo border border-indigo-100',
  ),
  emerald: cn(
    'bg-emerald/[0.08] text-emerald-800 border border-emerald/[0.15]',
  ),
  amber: cn(
    'bg-amber/10 text-amber-700 border border-amber/20',
  ),
  'amber-dark': cn(
    'bg-amber/[0.1] text-amber border border-amber/[0.2]',
  ),
  slate: cn(
    'bg-gray-100 text-slate-600 border border-border',
  ),
  violet: cn(
    'bg-violet/[0.08] text-violet border border-violet/[0.15]',
  ),
  'violet-dark': cn(
    'bg-violet/[0.15] text-violet-light border border-violet/[0.25]',
  ),
  soon: cn(
    'bg-amber/[0.08] text-amber-700 border border-amber/[0.18]',
  ),
  dark: cn(
    'bg-white/[0.06] text-white/40 border border-white/[0.1]',
  ),
  recommend: cn(
    'bg-gradient-to-r from-indigo/10 to-violet/[0.08]',
    'text-indigo border border-indigo/[0.18]',
  ),
}

interface BadgeProps {
  variant?:   BadgeVariant
  children:   React.ReactNode
  className?: string
  /** If true, prepends a '★ ' star before children (used for recommend badge) */
  star?:      boolean
}

export default function Badge({
  variant   = 'indigo',
  children,
  className,
  star      = false,
}: BadgeProps) {
  return (
    <span
      className={cn(
        // Base styles shared by every badge variant
        'inline-flex items-center gap-1.5',
        'font-mono text-[10px] font-semibold',
        'tracking-[0.06em] uppercase',
        'px-[9px] py-[3px] rounded-full',
        variantStyles[variant],
        className,
      )}
    >
      {star && <span aria-hidden="true">★</span>}
      {children}
    </span>
  )
}
