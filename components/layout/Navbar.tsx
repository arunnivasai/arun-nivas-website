'use client'

/**
 * components/layout/Navbar.tsx
 * ──────────────────────────────────────────────────────────────────────────
 * Sticky navbar with:
 * - Transparent → frosted glass on scroll (both light and dark variants)
 * - Active link detection via usePathname()
 * - Dark variant for pages with dark hero sections (J.A.R.V.I.S., AI Projects)
 * - Mobile hamburger → full-screen overlay drawer
 * - Keyboard-accessible (Escape closes the drawer)
 *
 * Color scheme:
 *   Light pages: dark text on white/transparent background
 *   Dark pages:  light text on slate-950/transparent background
 *
 * The dark variant is determined by matching the current pathname against
 * darkNavPages from lib/data/navigation.ts.
 */

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils/cn'
import { siteConfig } from '@/lib/site-config'
import { navLinks, mobileNavLinks, darkNavPages } from '@/lib/data/navigation'

// ── Close icon (inline SVG) ──────────────────────────────────────────────
function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M18 6L6 18M6 6l12 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

// ── Hamburger icon ──────────────────────────────────────────────────────
function HamburgerIcon({ dark }: { dark: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path
        d="M2 5h18M2 11h18M2 17h18"
        stroke={dark ? 'white' : '#0F172A'}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

// ── LinkedIn icon ───────────────────────────────────────────────────────
function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

// ── Component ────────────────────────────────────────────────────────────
export default function Navbar() {
  const pathname     = usePathname()
  const [scrolled,   setScrolled]   = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  // Determine if current page uses the dark navbar variant
  const isDark = darkNavPages.some(
    (page) => pathname === page || pathname.startsWith(page + '/'),
  )

  // ── Scroll listener ──────────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    // Set initial state on mount
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ── Close drawer on route change ─────────────────────────────────────
  useEffect(() => {
    setDrawerOpen(false)
    document.body.style.overflow = ''
  }, [pathname])

  // ── Keyboard: Escape closes drawer ──────────────────────────────────
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && drawerOpen) closeDrawer()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [drawerOpen]) // eslint-disable-line react-hooks/exhaustive-deps

  const openDrawer = useCallback(() => {
    setDrawerOpen(true)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false)
    document.body.style.overflow = ''
  }, [])

  // ── Active link check ────────────────────────────────────────────────
  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(href + '/')
  }

  // ── Scrolled navbar background ───────────────────────────────────────
  const scrolledBg = isDark
    ? 'bg-slate-950/92 border-white/[0.08]'
    : 'bg-white/88 border-border'

  return (
    <>
      {/* ══ Navbar ══════════════════════════════════════════════════════ */}
      <header
        role="banner"
        className={cn(
          'fixed top-0 left-0 right-0 z-[100]',
          'h-16 flex items-center justify-between',
          'px-5 md:px-8 lg:px-12',
          'border-b border-transparent',
          'transition-all duration-300',
          // Dark pages: ALWAYS show slate-950 background so white links are visible
          // Light pages: show frosted white background only after scrolling
          isDark
            ? 'bg-slate-950/95 backdrop-blur-md border-white/[0.08]'
            : scrolled && 'bg-white/90 backdrop-blur-md border-border',
        )}
      >
        {/* ── Logo ──────────────────────────────────────────────────── */}
        <Link
          href="/"
          className={cn(
            'font-syne font-bold text-[17px] tracking-[-0.3px] no-underline',
            'transition-opacity duration-200 hover:opacity-80',
            isDark ? 'text-white' : 'text-slate-900',
          )}
          aria-label={`${siteConfig.name} — Home`}
        >
          {siteConfig.firstName}
          <span className={isDark ? 'text-indigo-pale' : 'text-indigo'}>.</span>
        </Link>

        {/* ── Desktop nav links ────────────────────────────────────── */}
        <nav
          aria-label="Main navigation"
          className="hidden md:flex items-center gap-1"
        >
          {navLinks.map((link) => {
            const active = isActive(link.href)

            if (link.variant === 'cta') {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-[13.5px] font-semibold px-[18px] py-2 rounded-full',
                    'transition-all duration-200',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo focus-visible:ring-offset-2',
                    isDark
                      ? 'bg-indigo text-white shadow-[0_4px_14px_rgba(79,70,229,0.3)] hover:bg-indigo-light'
                      : 'bg-slate-900 text-white hover:bg-slate-800',
                  )}
                >
                  {link.label}
                </Link>
              )
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium px-3 py-1.5 rounded-lg',
                  'transition-colors duration-200',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo focus-visible:ring-offset-2',
                  // Light nav
                  !isDark && !active && link.variant !== 'jarvis' && 'text-slate-500 hover:text-slate-900 hover:bg-gray-100',
                  !isDark && active  && 'text-slate-900 bg-gray-100',
                  !isDark && link.variant === 'jarvis' && !active && 'text-indigo hover:bg-indigo-50',
                  !isDark && link.variant === 'jarvis' && active  && 'text-indigo bg-indigo-50',
                  // Dark nav
                  isDark && !active && link.variant !== 'jarvis' && 'text-white/70 hover:text-white hover:bg-white/[0.06]',
                  isDark && active  && 'text-indigo-pale bg-indigo/[0.12]',
                  isDark && link.variant === 'jarvis' && !active && 'text-indigo-pale hover:bg-indigo/[0.12]',
                  isDark && link.variant === 'jarvis' && active  && 'text-indigo-pale bg-indigo/[0.12]',
                )}
                aria-current={active ? 'page' : undefined}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* ── Mobile hamburger ─────────────────────────────────────── */}
        <button
          className="flex md:hidden items-center justify-center p-1"
          onClick={openDrawer}
          aria-label="Open navigation menu"
          aria-expanded={drawerOpen}
          aria-controls="mobile-drawer"
        >
          <HamburgerIcon dark={isDark} />
        </button>
      </header>

      {/* ══ Mobile Drawer ═══════════════════════════════════════════════ */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[98] bg-black/20 backdrop-blur-sm md:hidden"
              onClick={closeDrawer}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              id="mobile-drawer"
              role="dialog"
              aria-label="Navigation menu"
              aria-modal="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className={cn(
                'fixed inset-0 z-[99] md:hidden',
                'flex flex-col items-center justify-center gap-6',
                isDark
                  ? 'bg-slate-950/97'
                  : 'bg-white/97',
                'backdrop-blur-xl',
              )}
            >
              {/* Close button */}
              <button
                className={cn(
                  'absolute top-5 right-6 p-1',
                  'transition-opacity duration-200 hover:opacity-60',
                  isDark ? 'text-white/50' : 'text-slate-500',
                )}
                onClick={closeDrawer}
                aria-label="Close navigation menu"
              >
                <CloseIcon />
              </button>

              {/* Links */}
              <nav aria-label="Mobile navigation">
                <ul className="flex flex-col items-center gap-6">
                  {mobileNavLinks.map((link, i) => {
                    const active = isActive(link.href)
                    return (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.3 }}
                      >
                        <Link
                          href={link.href}
                          onClick={closeDrawer}
                          className={cn(
                            'font-syne font-bold text-[28px] tracking-[-0.5px]',
                            'transition-colors duration-200',
                            'focus-visible:outline-none',
                            // Light drawer
                            !isDark && link.variant !== 'jarvis' && !active && 'text-slate-900 hover:text-indigo',
                            !isDark && active && 'text-indigo',
                            !isDark && link.variant === 'jarvis' && 'text-indigo',
                            // Dark drawer
                            isDark && link.variant !== 'jarvis' && !active && 'text-white hover:text-indigo-pale',
                            isDark && active && 'text-indigo-pale',
                            isDark && link.variant === 'jarvis' && 'text-indigo-pale',
                          )}
                          aria-current={active ? 'page' : undefined}
                        >
                          {link.label}
                        </Link>
                      </motion.li>
                    )
                  })}
                </ul>
              </nav>

              {/* Social quick links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="flex items-center gap-4 mt-4"
              >
                <a
                  href={siteConfig.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'flex items-center justify-center w-9 h-9 rounded-lg',
                    'transition-all duration-200',
                    isDark
                      ? 'bg-white/[0.06] text-slate-400 border border-white/[0.08] hover:bg-indigo/20 hover:text-indigo-pale'
                      : 'bg-gray-100 text-slate-500 border border-border hover:bg-indigo-50 hover:text-indigo',
                  )}
                  aria-label="LinkedIn profile"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className={cn(
                    'flex items-center justify-center w-9 h-9 rounded-lg',
                    'transition-all duration-200',
                    isDark
                      ? 'bg-white/[0.06] text-slate-400 border border-white/[0.08] hover:bg-indigo/20 hover:text-indigo-pale'
                      : 'bg-gray-100 text-slate-500 border border-border hover:bg-indigo-50 hover:text-indigo',
                  )}
                  aria-label="Send email"
                >
                  {/* Email icon */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
