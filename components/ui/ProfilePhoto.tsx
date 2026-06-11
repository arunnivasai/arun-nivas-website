'use client'

/**
 * components/ui/ProfilePhoto.tsx
 * ──────────────────────────────────────────────────────────────────────────
 * Renders the circular profile photo with gradient ring.
 * Uses next/image with a React state fallback — no direct DOM manipulation.
 *
 * When the image fails to load (or the file doesn't exist yet), the
 * component transitions to showing the initials monogram in the same ring.
 * Visual design is identical in both states.
 */

import { useState } from 'react'
import Image from 'next/image'
import { siteConfig } from '@/lib/site-config'

interface ProfilePhotoProps {
  /** Rendered diameter — e.g. 'clamp(200px,22vw,280px)' */
  size?: string
  className?: string
}

export default function ProfilePhoto({
  size = 'clamp(200px,22vw,280px)',
}: ProfilePhotoProps) {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <div
      className="relative rounded-full p-[3px] shadow-glow-md"
      style={{
        width: size,
        height: size,
        background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
        flexShrink: 0,
      }}
    >
      <div
        className="w-full h-full rounded-full overflow-hidden border-[3px] border-white flex items-center justify-center"
        style={{ background: 'linear-gradient(135deg, #E0E7FF 0%, #EDE9FE 100%)' }}
      >
        {!imgFailed ? (
          <Image
            src={siteConfig.photoPath}
            alt={`${siteConfig.name} — profile photo`}
            width={280}
            height={280}
            className="w-full h-full object-cover"
            priority
            onError={() => setImgFailed(true)}
          />
        ) : (
          /* Monogram fallback — shown when image file is not yet present */
          <span
            className="font-syne font-extrabold select-none grad-text"
            style={{ fontSize: 'clamp(52px,7vw,80px)', letterSpacing: '-2px' }}
            aria-label={`${siteConfig.name} initials`}
          >
            {siteConfig.initials}
          </span>
        )}
      </div>
    </div>
  )
}
