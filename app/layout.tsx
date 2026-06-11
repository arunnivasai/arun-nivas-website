/**
 * app/layout.tsx
 * ──────────────────────────────────────────────────────────────────────────
 * Root layout — wraps every page with:
 *   1. Global metadata (title template, description, Open Graph, Twitter)
 *   2. Google Fonts loaded via next/font/google for optimal performance
 *   3. Global CSS import
 *   4. Navbar (sticky, responsive, light/dark variants)
 *   5. <main> content area with top padding to clear the fixed navbar
 *   6. Footer
 *
 * Metadata strategy:
 *   - Root layout sets metadataBase, default title, description, and OG image.
 *   - Individual pages export their own metadata object, using
 *     siteConfig.seo.titleTemplate so titles read "About — Arun Nivas".
 *   - All values derive from siteConfig so updating that file
 *     automatically propagates to every page's metadata.
 */

import type { Metadata, Viewport } from 'next'
import { DM_Sans, Syne, JetBrains_Mono } from 'next/font/google'
import './globals.css'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { siteConfig } from '@/lib/site-config'

// ── Font configuration ──────────────────────────────────────────────────
// next/font/google eliminates the need for the @import in globals.css
// and prevents layout shift by preloading fonts as part of the build.
// The `variable` option exposes each font as a CSS custom property so
// Tailwind's fontFamily utilities (font-sans, font-syne, font-mono) work.

const dmSans = DM_Sans({
  subsets:  ['latin'],
  weight:   ['300', '400', '500', '600'],
  style:    ['normal', 'italic'],
  display:  'swap',
  variable: '--font-dm-sans',
})

const syne = Syne({
  subsets:  ['latin'],
  weight:   ['400', '500', '600', '700', '800'],
  display:  'swap',
  variable: '--font-syne',
})

const jetbrainsMono = JetBrains_Mono({
  subsets:  ['latin'],
  weight:   ['400', '500', '600'],
  display:  'swap',
  variable: '--font-jetbrains-mono',
})

// ── Root metadata ───────────────────────────────────────────────────────
export const metadata: Metadata = {
  // metadataBase resolves relative OG/Twitter image paths to absolute URLs.
  // During local dev, Next.js falls back to http://localhost:3000.
  metadataBase: new URL(siteConfig.url),

  // Title template: page-level titles render as "About — Arun Nivas"
  title: {
    default:  siteConfig.seo.defaultTitle,
    template: siteConfig.seo.titleTemplate,
  },

  description: siteConfig.seo.defaultDescription,
  keywords:    [...siteConfig.seo.keywords],

  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,

  // ── Open Graph ──────────────────────────────────────────────────────
  openGraph: {
    type:        'website',
    locale:      'en_IN',
    url:         siteConfig.url,
    siteName:    siteConfig.siteName,
    title:       siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: [
      {
        url:    siteConfig.ogImagePath,
        width:  1200,
        height: 630,
        alt:    `${siteConfig.name} — ${siteConfig.title}`,
      },
    ],
  },

  // ── Twitter / X card ────────────────────────────────────────────────
  twitter: {
    card:        'summary_large_image',
    title:       siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images:      [siteConfig.ogImagePath],
    creator:     `@${siteConfig.linkedInHandle}`,
  },

  // ── Canonical / alternate ────────────────────────────────────────────
  alternates: {
    canonical: siteConfig.url,
  },

  // ── Robots ──────────────────────────────────────────────────────────
  robots: {
    index:   true,
    follow:  true,
    googleBot: {
      index:  true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // ── Icons ────────────────────────────────────────────────────────────
  // Add /public/favicon.ico, /public/apple-touch-icon.png, etc.
  // once assets are ready. Next.js auto-discovers favicon.ico from /public.
  icons: {
    icon:  '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

// ── Viewport ────────────────────────────────────────────────────────────
export const viewport: Viewport = {
  width:          'device-width',
  initialScale:   1,
  // Prevents iOS font size inflation on rotation
  maximumScale:   5,
  themeColor:     [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)',  color: '#020617' },
  ],
}

// ── Root layout ─────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={[
        dmSans.variable,
        syne.variable,
        jetbrainsMono.variable,
      ].join(' ')}
      // Suppress hydration warning caused by browser extensions injecting
      // attributes onto <html> (e.g. Grammarly, password managers).
      suppressHydrationWarning
    >
      <body
        className={[
          dmSans.className,
          // Prevent content width changes when a scrollbar appears/disappears
          'overflow-x-hidden',
          // Ensure the body fills at least the full viewport height so the
          // footer is always pushed to the bottom of the page.
          'min-h-screen flex flex-col',
        ].join(' ')}
      >
        {/* ── Sticky navbar ─────────────────────────────────────────── */}
        <Navbar />

        {/* ── Main content ──────────────────────────────────────────── */}
        {/*
          pt-16 clears the 64px fixed navbar.
          flex-1 ensures this area grows to push the footer down on
          short pages (like the Contact page on large screens).
        */}
        <main
          id="main-content"
          className="flex-1 pt-16"
          // Skip-to-main link target (accessibility)
          tabIndex={-1}
        >
          {children}
        </main>

        {/* ── Footer ────────────────────────────────────────────────── */}
        <Footer />
      </body>
    </html>
  )
}
