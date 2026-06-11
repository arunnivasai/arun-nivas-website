'use client'

/**
 * components/ui/AnimateOnScroll.tsx
 * ──────────────────────────────────────────────────────────────────────────
 * Single source of truth for all scroll-triggered reveal animations.
 * Replaces the IntersectionObserver pattern from the HTML files with
 * Framer Motion's whileInView, which is more reliable across browsers
 * and integrates cleanly with Next.js server components (via 'use client').
 *
 * Design decisions:
 * - `once: true`     — element animates in once and stays visible.
 *                      Re-animating on scroll-back feels cheap for a
 *                      professional portfolio.
 * - `margin: '-60px'` — triggers 60px before the element fully enters
 *                       the viewport, preventing a jarring late-pop on
 *                       fast scrolls.
 * - `ease: [0.16,1,0.3,1]` — the spring-like cubic-bezier from the HTML
 *                       files, preserved exactly.
 * - `duration: 0.75`  — matches the .75s transition duration from CSS.
 *                       J.A.R.V.I.S. page uses 0.85s for extra gravitas;
 *                       pass `duration={0.85}` there.
 *
 * Usage:
 *   <AnimateOnScroll>
 *     <SomeSection />
 *   </AnimateOnScroll>
 *
 *   // Staggered children (apply increasing delay to each sibling):
 *   {items.map((item, i) => (
 *     <AnimateOnScroll key={item.id} delay={i * 0.08}>
 *       <Card {...item} />
 *     </AnimateOnScroll>
 *   ))}
 */

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils/cn'

interface AnimateOnScrollProps {
  children:    React.ReactNode
  /** Seconds to delay the animation start. Default 0. */
  delay?:      number
  /** Animation duration in seconds. Default 0.75. */
  duration?:   number
  /** Y offset for the initial hidden state. Default 24. */
  yOffset?:    number
  /** Additional class names applied to the motion wrapper div. */
  className?:  string
  /**
   * Viewport margin — triggers before the element fully enters the viewport.
   * Use a negative value (e.g. '-60px') to trigger earlier.
   */
  margin?:     string
  /**
   * Optional id forwarded to the motion.div — used for anchor scroll targets
   * on Server Component pages where a wrapping element is not available.
   * Example: <AnimateOnScroll id="s01"> makes the reveal wrapper the anchor.
   */
  id?:         string
}

export default function AnimateOnScroll({
  children,
  delay    = 0,
  duration = 0.75,
  yOffset  = 24,
  className,
  margin   = '-60px',
  id,
}: AnimateOnScrollProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
