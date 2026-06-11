'use client'

/**
 * components/ui/Button.tsx
 * ──────────────────────────────────────────────────────────────────────────
 * Polymorphic button component covering every variant used across the site.
 * Renders as <Link> when `href` is provided, <a> when external, <button> otherwise.
 *
 * Variants map directly to the button styles established in the HTML files:
 *
 *   primary        — Solid indigo, used for primary CTAs
 *   secondary      — White with border, used for secondary CTAs
 *   ghost-light    — Transparent with light border, for dark backgrounds
 *   ghost-indigo   — Transparent with indigo border, for light backgrounds
 *   white          — Solid white, used inside dark gradient CTA sections
 *   white-outline  — Transparent white outline, used inside dark CTA sections
 *   white-sm       — Smaller solid white, used in J.A.R.V.I.S. / AI Projects CTAs
 *   ghost-white-sm — Smaller ghost white, used alongside white-sm
 */

import Link from 'next/link'
import { cn } from '@/lib/utils/cn'
import type { ButtonVariant, ButtonSize } from '@/lib/types'

// ── Arrow icon (inline SVG) ─────────────────────────────────────────────
function ArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.5 7h9M8 3.5L11.5 7 8 10.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// ── Variant style map ────────────────────────────────────────────────────
const variantStyles: Record<ButtonVariant, string> = {
  primary: cn(
    'inline-flex items-center gap-2',
    'bg-indigo text-white font-semibold',
    'rounded-full transition-all duration-200',
    'shadow-[0_4px_14px_rgba(79,70,229,0.3)]',
    'hover:bg-indigo-light hover:-translate-y-0.5',
    'hover:shadow-[0_8px_24px_rgba(79,70,229,0.35)]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo focus-visible:ring-offset-2',
  ),
  secondary: cn(
    'inline-flex items-center gap-2',
    'bg-white text-slate-700 font-semibold',
    'border border-border rounded-full',
    'shadow-sm transition-all duration-200',
    'hover:border-slate-300 hover:bg-gray-100 hover:-translate-y-px',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo focus-visible:ring-offset-2',
  ),
  'ghost-light': cn(
    'inline-flex items-center gap-2',
    'bg-transparent font-semibold text-white/70',
    'border rounded-full',
    'transition-all duration-200',
    'hover:text-white hover:bg-white/5',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40',
  ),
  'ghost-indigo': cn(
    'inline-flex items-center gap-2',
    'bg-transparent text-indigo font-semibold',
    'border border-indigo-100 rounded-full',
    'transition-all duration-200',
    'hover:bg-indigo-50 hover:border-indigo/30 hover:-translate-y-px',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo focus-visible:ring-offset-2',
  ),
  white: cn(
    'inline-flex items-center gap-2',
    'bg-white text-slate-900 font-bold',
    'rounded-full shadow-md',
    'transition-all duration-200',
    'hover:bg-indigo-50 hover:-translate-y-0.5',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60',
  ),
  'white-outline': cn(
    'inline-flex items-center gap-2',
    'bg-transparent text-white/80 font-semibold',
    'border-2 rounded-full',
    'transition-all duration-200',
    'hover:border-white/50 hover:text-white hover:bg-white/[0.06]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40',
  ),
  'white-sm': cn(
    'inline-flex items-center gap-1.5',
    'bg-white text-slate-900 font-bold',
    'rounded-full shadow-md',
    'transition-all duration-200',
    'hover:bg-indigo-50 hover:-translate-y-px',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60',
  ),
  'ghost-white-sm': cn(
    'inline-flex items-center gap-1.5',
    'bg-transparent text-white/70 font-semibold',
    'border rounded-full',
    'transition-all duration-200',
    'hover:text-white hover:bg-white/[0.06]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40',
  ),
}

// ── Size style map ───────────────────────────────────────────────────────
const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-[18px] py-[9px]  text-[13.5px]',
  md: 'px-[22px] py-[11px] text-[14px]',
  lg: 'px-[26px] py-[13px] text-[15px]',
}

// ── Ghost-light border color — varies by background ─────────────────────
// ghost-light and ghost-white-sm use white/15 by default; this is
// consistent with their use on dark backgrounds throughout the site.
const ghostBorderStyles: Partial<Record<ButtonVariant, string>> = {
  'ghost-light':    'border-white/[0.15]',
  'white-outline':  'border-white/[0.22]',
  'ghost-white-sm': 'border-white/[0.15]',
}

// ── Props ────────────────────────────────────────────────────────────────
interface ButtonProps {
  variant?:   ButtonVariant
  size?:      ButtonSize
  href?:      string
  external?:  boolean
  icon?:      boolean
  className?: string
  onClick?:   () => void
  type?:      'button' | 'submit' | 'reset'
  disabled?:  boolean
  children:   React.ReactNode
}

// ── Component ────────────────────────────────────────────────────────────
export default function Button({
  variant   = 'primary',
  size      = 'lg',
  href,
  external  = false,
  icon      = false,
  className,
  onClick,
  type      = 'button',
  disabled  = false,
  children,
}: ButtonProps) {
  const classes = cn(
    variantStyles[variant],
    sizeStyles[size],
    ghostBorderStyles[variant],
    disabled && 'opacity-60 cursor-not-allowed pointer-events-none',
    className,
  )

  // ── Render as <a> for external links ──────────────────────────────────
  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
        {icon && <ArrowRight size={variant.includes('sm') ? 13 : 14} />}
      </a>
    )
  }

  // ── Render as Next.js <Link> for internal navigation ──────────────────
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {icon && <ArrowRight size={variant.includes('sm') ? 13 : 14} />}
      </Link>
    )
  }

  // ── Render as <button> for actions ────────────────────────────────────
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
      {icon && <ArrowRight size={variant.includes('sm') ? 13 : 14} />}
    </button>
  )
}
