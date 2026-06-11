'use client'

/**
 * components/ui/ContactForm.tsx
 * ──────────────────────────────────────────────────────────────────────────
 * Contact form with Formspree submission or mailto fallback.
 * Extracted as a Client Component so app/contact/page.tsx stays a Server
 * Component with a full metadata export.
 *
 * Submission strategy:
 *   1. If NEXT_PUBLIC_FORMSPREE_ENDPOINT is set → POST to Formspree (preferred)
 *   2. Otherwise → construct a mailto: link as a graceful fallback
 *
 * State machine: idle → submitting → success | error
 */

import { useState } from 'react'
import { siteConfig } from '@/lib/site-config'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

interface FormState {
  name:    string
  email:   string
  subject: string
  message: string
}

const EMPTY: FormState = { name: '', email: '', subject: '', message: '' }

// ── Field label ────────────────────────────────────────────────────────
function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block font-mono text-[11px] font-semibold tracking-[0.10em] uppercase text-slate-600 mb-2"
    >
      {children}
    </label>
  )
}

// ── Component ─────────────────────────────────────────────────────────
export default function ContactForm() {
  const [form,   setForm]   = useState<FormState>(EMPTY)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [error,  setError]  = useState('')

  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT

  const update = (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm(prev => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    // Basic validation
    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setError('Please fill in all fields before sending.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.')
      return
    }

    setStatus('submitting')

    // ── Formspree path ──────────────────────────────────────────────
    if (endpoint) {
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(form),
        })
        if (res.ok) {
          setStatus('success')
          setForm(EMPTY)
        } else {
          throw new Error(`Status ${res.status}`)
        }
      } catch {
        setStatus('error')
        setError('Something went wrong. Please email directly at ' + siteConfig.email)
      }
      return
    }

    // ── mailto fallback ─────────────────────────────────────────────
    const mailto =
      `mailto:${siteConfig.email}` +
      `?subject=${encodeURIComponent(form.subject)}` +
      `&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`)}`

    window.location.href = mailto
    setStatus('success')
  }

  // ── Success state ──────────────────────────────────────────────────
  if (status === 'success') {
    return (
      <div
        className="rounded-[14px] p-10 flex flex-col items-center justify-center text-center min-h-[360px] gap-4"
        style={{ background: 'rgba(16,185,129,0.05)', border: '1.5px solid rgba(16,185,129,0.2)' }}
      >
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center text-[24px]"
          style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.25)' }}
          aria-hidden="true"
        >
          ✓
        </div>
        <div>
          <h3 className="font-syne font-extrabold text-[19px] text-slate-900 mb-2">Message sent.</h3>
          <p className="text-[14.5px] text-gray-500 leading-[1.65] max-w-[300px]">
            {endpoint
              ? "I'll read it personally and get back to you within 48 hours."
              : 'Your email client should have opened. If not, email ' + siteConfig.email + ' directly.'}
          </p>
        </div>
        <button
          onClick={() => setStatus('idle')}
          className="mt-2 font-mono text-[11.5px] font-semibold text-indigo hover:text-indigo-light transition-colors duration-200 focus-visible:outline-none focus-visible:underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-[18px]" noValidate>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px]">
        {/* Name */}
        <div>
          <Label htmlFor="contact-name">Name</Label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            value={form.name}
            onChange={update('name')}
            required
            disabled={status === 'submitting'}
            className="form-field disabled:opacity-60 disabled:cursor-not-allowed"
          />
        </div>
        {/* Email */}
        <div>
          <Label htmlFor="contact-email">Email</Label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="your@email.com"
            value={form.email}
            onChange={update('email')}
            required
            disabled={status === 'submitting'}
            className="form-field disabled:opacity-60 disabled:cursor-not-allowed"
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <Label htmlFor="contact-subject">Subject</Label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          placeholder="What's this about?"
          value={form.subject}
          onChange={update('subject')}
          required
          disabled={status === 'submitting'}
          className="form-field disabled:opacity-60 disabled:cursor-not-allowed"
        />
      </div>

      {/* Message */}
      <div>
        <Label htmlFor="contact-message">Message</Label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          placeholder="Tell me a bit about what you're working on or what you'd like to discuss…"
          value={form.message}
          onChange={update('message')}
          required
          disabled={status === 'submitting'}
          className="form-field resize-none disabled:opacity-60 disabled:cursor-not-allowed"
          style={{ minHeight: 144, lineHeight: '1.6' }}
        />
      </div>

      {/* Error message */}
      {error && (
        <p className="text-[13.5px] text-rose-500 font-medium" role="alert">{error}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex items-center justify-center gap-2.5 bg-indigo text-white font-bold text-[15px] rounded-full px-8 py-4 transition-all duration-200 hover:bg-indigo-light hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(79,70,229,0.32)] active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo focus-visible:ring-offset-2"
        style={{ boxShadow: '0 4px 14px rgba(79,70,229,0.28)' }}
      >
        {status === 'submitting' ? (
          <>
            <span
              className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin"
              aria-hidden="true"
            />
            Sending…
          </>
        ) : (
          <>
            Send Message
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2.5 8h11M9.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </>
        )}
      </button>

      <p className="text-[12.5px] text-gray-400 text-center leading-[1.5]">
        I read every message personally and aim to respond within 48 hours.
      </p>

    </form>
  )
}
