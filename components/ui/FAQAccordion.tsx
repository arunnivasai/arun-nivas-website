'use client'

/**
 * components/ui/FAQAccordion.tsx
 * ──────────────────────────────────────────────────────────────────────────
 * Self-contained FAQ accordion. The only client component on the Services
 * page — extracted so app/services/page.tsx can remain a Server Component.
 *
 * Behaviour:
 *   - One item open at a time (standard accordion pattern).
 *   - Smooth max-height transition for the answer panel.
 *   - Keyboard accessible: button role, aria-expanded, focus-visible ring.
 */

import { useState } from 'react'

export interface FAQItem {
  q: string
  a: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

function PlusIcon({ open }: { open: boolean }) {
  return (
    <span
      className="w-7 h-7 rounded-full border flex items-center justify-center flex-shrink-0 text-[16px] font-light transition-all duration-200"
      style={
        open
          ? { background: '#4F46E5', borderColor: '#4F46E5', color: 'white', transform: 'rotate(45deg)' }
          : { borderColor: '#E8EAED', color: '#64748B' }
      }
      aria-hidden="true"
    >
      +
    </span>
  )
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) =>
    setOpenIndex(prev => (prev === i ? null : i))

  return (
    <div
      className="rounded-[14px] overflow-hidden bg-white"
      style={{ border: '1.5px solid #E8EAED' }}
      role="list"
    >
      {items.map((item, i) => (
        <div
          key={i}
          role="listitem"
          className="border-b last:border-b-0"
          style={{ borderColor: '#E8EAED' }}
        >
          <button
            onClick={() => toggle(i)}
            className="w-full flex items-center justify-between gap-5 px-8 py-6 text-left transition-colors duration-200 hover:bg-gray-50 focus-visible:outline-none focus-visible:bg-gray-50"
            aria-expanded={openIndex === i}
          >
            <span className="font-syne font-bold text-[16px] text-slate-900 leading-snug">
              {item.q}
            </span>
            <PlusIcon open={openIndex === i} />
          </button>

          <div
            className="overflow-hidden transition-all duration-300"
            style={{ maxHeight: openIndex === i ? 400 : 0 }}
          >
            <p className="px-8 pb-6 text-[15px] leading-[1.75] text-gray-500">
              {item.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
