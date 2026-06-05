import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateLinearCGPA(sgpas: number[]): number {
  if (sgpas.length === 0) return 0
  return sgpas.reduce((a, b) => a + b, 0) / sgpas.length
}

export function calculateWeightedCGPA(
  sgpas: number[],
  weights: number[]
): number {
  if (sgpas.length === 0) return 0
  const completedWeights = weights.slice(0, sgpas.length)
  const totalWeight = completedWeights.reduce((a, b) => a + b, 0)
  const weightedSum = sgpas.reduce((sum, sgpa, i) => sum + sgpa * weights[i], 0)
  return weightedSum / totalWeight
}
