

const nextConfig = {
  // ── Output ───────────────────────────────────────────────────────────
  // Vercel auto-configures the output format — no override needed.
  // For self-hosted / Docker deployment, uncomment: output: 'standalone',

  // ── Images ───────────────────────────────────────────────────────────
  images: {
    formats: ['image/avif', 'image/webp'],
    // Add external domains here if you ever pull images from a CDN:
    // domains: ['cdn.example.com'],
  },

  // ── Security headers ─────────────────────────────────────────────────
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options',         value: 'DENY' },
          { key: 'X-Content-Type-Options',   value: 'nosniff' },
          { key: 'Referrer-Policy',          value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy',       value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },

  // ── Redirects ────────────────────────────────────────────────────────
  // Canonical redirect: non-www → www (or vice versa) once domain is live.
  // Uncomment and adjust when custom domain is configured.
  //
  // async redirects() {
  //   return [
  //     {
  //       source: '/(.*)',
  //       has: [{ type: 'host', value: 'arunnivas.com' }],
  //       destination: 'https://www.arunnivas.com/:path*',
  //       permanent: true,
  //     },
  //   ]
  // },
}

export default nextConfig
