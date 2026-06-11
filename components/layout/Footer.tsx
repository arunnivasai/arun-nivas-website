/**
 * components/layout/Footer.tsx
 * ──────────────────────────────────────────────────────────────────────────
 * Site footer — dark slate background, 4-column grid on desktop.
 *
 * Structure:
 *   Col 1 (2fr): Brand — logo, tagline, social links
 *   Col 2–4 (1fr each): Link columns from lib/data/footer.ts
 *   Bottom bar: Copyright line + secondary links
 *
 * All personal data comes from siteConfig.
 * Column link data comes from footerColumns in lib/data/footer.ts.
 */

import Link from 'next/link'
import { siteConfig } from '@/lib/site-config'
import { footerColumns, footerBottomLinks } from '@/lib/data/footer'

// ── Social link icons ───────────────────────────────────────────────────
function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

// ── Component ────────────────────────────────────────────────────────────
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 pt-16 pb-8 px-5 md:px-8 lg:px-12">
      <div className="max-w-site mx-auto">

        {/* ── Main grid ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 lg:gap-12">

          {/* ── Brand column ──────────────────────────────────────── */}
          <div>
            {/* Logo */}
            <Link
              href="/"
              className="font-syne font-extrabold text-xl tracking-[-0.3px] text-white no-underline hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-pale focus-visible:ring-offset-1"
              aria-label={`${siteConfig.name} — Home`}
            >
              {siteConfig.firstName}
              <span className="text-indigo-pale">.</span>
            </Link>

            {/* Tagline */}
            <p className="text-sm text-slate-500 mt-2.5 leading-relaxed max-w-[240px]">
              {siteConfig.tagline}
            </p>

            {/* Social links */}
            <div className="flex gap-2.5 mt-5">
              {/* LinkedIn */}
              <a
                href={siteConfig.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-[34px] h-[34px] rounded-lg bg-white/[0.06] border border-white/[0.08] text-slate-400 transition-all duration-200 hover:bg-indigo/20 hover:border-indigo/30 hover:text-indigo-pale"
                aria-label="LinkedIn profile"
              >
                <LinkedInIcon />
              </a>

              {/* Email */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center justify-center w-[34px] h-[34px] rounded-lg bg-white/[0.06] border border-white/[0.08] text-slate-400 transition-all duration-200 hover:bg-indigo/20 hover:border-indigo/30 hover:text-indigo-pale"
                aria-label={`Email ${siteConfig.name}`}
              >
                <EmailIcon />
              </a>
            </div>
          </div>

          {/* ── Link columns ──────────────────────────────────────── */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="font-syne font-bold text-[13px] text-white mb-4">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-2.5" role="list">
                {col.links.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13.5px] text-slate-500 hover:text-slate-300 transition-colors duration-200 no-underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-400"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className={
                          link.variant === 'jarvis'
                            ? 'text-[13.5px] text-indigo-pale/70 hover:text-indigo-pale transition-colors duration-200 no-underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-pale'
                            : 'text-[13.5px] text-slate-500 hover:text-slate-300 transition-colors duration-200 no-underline'
                        }
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Divider ───────────────────────────────────────────────── */}
        <div
          className="my-12"
          style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }}
          role="separator"
          aria-hidden="true"
        />

        {/* ── Bottom bar ────────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          {/* Copyright */}
          <p className="text-[12.5px] text-slate-600">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>

          {/* Secondary links */}
          <nav aria-label="Footer secondary navigation">
            <ul className="flex gap-5" role="list">
              {footerBottomLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[12.5px] text-slate-600 hover:text-slate-400 transition-colors duration-200 no-underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

      </div>
    </footer>
  )
}
