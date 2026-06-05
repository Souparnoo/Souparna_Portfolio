'use client'
import { useState, useEffect } from 'react'

export interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  stargazers_count: number
  forks_count: number
  language: string | null
  updated_at: string
  topics: string[]
  fork: boolean
}

export function useGitHubRepos(username: string) {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=20`,
          { headers: { Accept: 'application/vnd.github.v3+json' } }
        )
        if (!res.ok) throw new Error('Failed to fetch repos')
        const data: GitHubRepo[] = await res.json()
        setRepos(data.filter(r => !r.fork).slice(0, 12))
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }
    fetchRepos()
  }, [username])

  return { repos, loading, error }
}
