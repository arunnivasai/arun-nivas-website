/**
 * components/ui/SectionHeader.tsx
 * ──────────────────────────────────────────────────────────────────────────
 * The consistent label → heading → subtitle stack used to open every
 * major section across all pages.
 *
 * Supports two color schemes:
 *   dark  = false (default) — for white/gray backgrounds
 *   dark  = true            — for slate-900/slate-950 backgrounds
 *
 * Supports two alignments:
 *   align = 'left'   (default)
 *   align = 'center'          — used in CTA sections and philosophy sections
 */

import { cn } from '@/lib/utils/cn'

interface SectionHeaderProps {
  /** Monospace eyebrow label above the heading */
  label?:     string
  /** Main section heading — accepts ReactNode for gradient text spans */
  title:      React.ReactNode
  /** Optional body copy below the heading */
  subtitle?:  string
  /** Color scheme — false = light backgrounds, true = dark backgrounds */
  dark?:      boolean
  /** Text alignment */
  align?:     'left' | 'center'
  /** Additional class names for the wrapper */
  className?: string
  /** Applied to the h2 specifically */
  titleClassName?: string
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  dark      = false,
  align     = 'left',
  className,
  titleClassName,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        align === 'center' && 'text-center',
        className,
      )}
    >
      {/* ── Monospace label ──────────────────────────────────────────── */}
      {label && (
        <span
          className={cn(
            // Base
            'inline-block font-mono text-[11px] font-semibold',
            'tracking-[0.14em] uppercase px-3 py-1 rounded-full mb-[18px]',
            // Light variant (default)
            !dark && 'text-indigo bg-indigo-50 border border-indigo-100',
            // Dark variant
            dark && 'text-indigo-pale border',
          )}
          style={
            dark
              ? {
                  background: 'rgba(79,70,229,0.12)',
                  borderColor: 'rgba(79,70,229,0.20)',
                }
              : undefined
          }
        >
          {label}
        </span>
      )}

      {/* ── Section heading ──────────────────────────────────────────── */}
      <h2
        className={cn(
          'font-syne font-extrabold text-h2 leading-[1.1] tracking-tight',
          !dark && 'text-slate-900',
          dark  && 'text-white',
          titleClassName,
        )}
      >
        {title}
      </h2>

      {/* ── Subtitle ─────────────────────────────────────────────────── */}
      {subtitle && (
        <p
          className={cn(
            'text-lg leading-[1.65] mt-3 max-w-[540px]',
            !dark && 'text-gray-500',
            dark  && 'text-slate-400',
            align === 'center' && 'mx-auto',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
