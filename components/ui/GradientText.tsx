/**
 * components/ui/GradientText.tsx
 * ──────────────────────────────────────────────────────────────────────────
 * Renders children with the site's signature indigo→violet gradient applied
 * to the text. Used for name highlights, section headline accents, and the
 * J.A.R.V.I.S. title gradient.
 *
 * Usage:
 *   <h1>
 *     Let's start a<br />
 *     conversation<GradientText>.</GradientText>
 *   </h1>
 *
 *   <h1 className="font-syne font-extrabold">
 *     <GradientText>Arun Nivas.</GradientText>
 *   </h1>
 */

import { cn } from '@/lib/utils/cn'

type GradientVariant = 'indigo-violet' | 'amber' | 'white-fade'

const gradients: Record<GradientVariant, string> = {
  'indigo-violet': 'from-indigo-pale to-violet-light',
  'amber':         'from-amber to-amber-light',
  'white-fade':    'from-white to-white/40',
}

interface GradientTextProps {
  children:    React.ReactNode
  variant?:    GradientVariant
  className?:  string
  /** Render as inline-block (default) or block */
  as?:         'span' | 'div'
}

export default function GradientText({
  children,
  variant   = 'indigo-violet',
  className,
  as: Tag   = 'span',
}: GradientTextProps) {
  return (
    <Tag
      className={cn(
        'bg-gradient-to-br bg-clip-text text-transparent',
        gradients[variant],
        className,
      )}
    >
      {children}
    </Tag>
  )
}
