/**
 * lib/utils/cn.ts
 * ──────────────────────────────────────────────────────────────────────────
 * Class name utility — merges clsx conditional logic with tailwind-merge
 * conflict resolution.
 *
 * Usage:
 *   cn('px-4 py-2', isActive && 'bg-indigo text-white', className)
 *
 * tailwind-merge ensures that conflicting Tailwind classes are resolved
 * correctly, e.g. cn('px-4', 'px-6') → 'px-6' rather than 'px-4 px-6'.
 */

import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
