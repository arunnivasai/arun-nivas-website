import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {

      // ── Colors ────────────────────────────────────────────────────
      colors: {
        indigo: {
          DEFAULT: '#4F46E5',
          light:   '#6366F1',
          pale:    '#818CF8',
          50:      '#EEF2FF',
          100:     '#E0E7FF',
        },
        violet: {
          DEFAULT: '#7C3AED',
          light:   '#A78BFA',
        },
        // Extend slate to include 950 which Tailwind 3 doesn't have by default
        slate: {
          950: '#020617',
        },
        cyan: {
          DEFAULT: '#0891B2',
          light:   '#22D3EE',
        },
        emerald: {
          light: '#34D399',
        },
        amber: {
          light: '#FCD34D',
        },
        border: '#E8EAED',
      },

      // ── Typography ────────────────────────────────────────────────
      // CSS variables are injected by next/font/google in app/layout.tsx.
      // Fallbacks ensure the fonts still render if the variables aren't set
      // (e.g. in Storybook or standalone component tests).
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'DM Sans', 'sans-serif'],
        syne: ['var(--font-syne)', 'Syne', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'JetBrains Mono', 'monospace'],
      },

      // ── Letter spacing ────────────────────────────────────────────
      letterSpacing: {
        'mono':    '0.06em',
        'mono-md': '0.10em',
        'mono-lg': '0.12em',
        'mono-xl': '0.14em',
      },

      // ── Border radius ─────────────────────────────────────────────
      borderRadius: {
        DEFAULT: '14px',
        lg:      '20px',
      },

      // ── Shadows ───────────────────────────────────────────────────
      boxShadow: {
        sm:         '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        md:         '0 4px 16px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)',
        lg:         '0 16px 48px rgba(0,0,0,0.10), 0 4px 12px rgba(0,0,0,0.06)',
        xl:         '0 24px 64px rgba(0,0,0,0.12)',
        glow:       '0 0 40px rgba(79,70,229,0.15)',
        'glow-sm':  '0 0 24px rgba(79,70,229,0.12)',
        'glow-md':  '0 0 48px rgba(79,70,229,0.18)',
        'glow-lg':  '0 0 60px rgba(79,70,229,0.22)',
      },

      // ── Background gradients ──────────────────────────────────────
      backgroundImage: {
        'grad-main':      'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
        'grad-text':      'linear-gradient(135deg, #818CF8 0%, #A78BFA 60%)',
        'grad-border':    'linear-gradient(135deg, #4F46E5, #7C3AED)',
        'grad-cta':       'linear-gradient(135deg, #4F46E5 0%, #5B21B6 100%)',
        'grad-amber':     'linear-gradient(135deg, #F59E0B, #FCD34D)',
        // System top bars
        'bar-research':   'linear-gradient(90deg, #4F46E5, #6366F1)',
        'bar-competitor': 'linear-gradient(90deg, #0891B2, #06B6D4)',
        'bar-leadgen':    'linear-gradient(90deg, #10B981, #059669)',
        'bar-automation': 'linear-gradient(90deg, #7C3AED, #9333EA)',
        'bar-branding':   'linear-gradient(90deg, #F59E0B, #FBBF24)',
        'bar-audit':      'linear-gradient(90deg, #4F46E5, #10B981)',
        // Grid patterns for hero backgrounds
        'grid-dark':
          'linear-gradient(rgba(79,70,229,0.038) 1px, transparent 1px), ' +
          'linear-gradient(90deg, rgba(79,70,229,0.038) 1px, transparent 1px)',
        'grid-light':
          'linear-gradient(rgba(79,70,229,0.032) 1px, transparent 1px), ' +
          'linear-gradient(90deg, rgba(79,70,229,0.032) 1px, transparent 1px)',
      },

      // ── Max widths ────────────────────────────────────────────────
      maxWidth: {
        site:   '1160px',
        narrow: '800px',
        prose:  '640px',
        tight:  '520px',
      },

      // ── Animations ────────────────────────────────────────────────
      // Hero entry animations (CSS, not Framer Motion).
      // Framer Motion handles all scroll-triggered reveals.
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(22px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        floatOrb: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%':      { transform: 'translateY(-18px) scale(1.04)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.3' },
          '50%':      { opacity: '0.8' },
        },
        pulseDot: {
          '0%, 100%': { boxShadow: '0 0 0 3px rgba(16,185,129,0.2)' },
          '50%':      { boxShadow: '0 0 0 6px rgba(16,185,129,0.07)' },
        },
        pulseAmber: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.35' },
        },
      },
      animation: {
        'fade-up':     'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in':     'fadeIn 0.9s ease forwards',
        'float':       'floatOrb 9s ease-in-out infinite',
        'float-slow':  'floatOrb 12s ease-in-out infinite reverse',
        'shimmer':     'shimmer 5s ease-in-out infinite',
        'pulse-dot':   'pulseDot 2.5s ease-in-out infinite',
        'pulse-amber': 'pulseAmber 1.5s ease-in-out infinite',
      },

    }, // end extend
  }, // end theme

  plugins: [],
}

export default config
