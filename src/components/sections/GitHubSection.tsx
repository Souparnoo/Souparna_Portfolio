'use client'
import { motion } from 'framer-motion'
import { useGitHubRepos } from '@/hooks/useGitHubRepos'
import { Github, Star, GitFork, ExternalLink, Code2, Loader2 } from 'lucide-react'

const LANG_COLORS: Record<string, string> = {
  JavaScript: '#f7df1e',
  TypeScript: '#3178c6',
  Python: '#3776ab',
  Java: '#b07219',
  'C++': '#f34b7d',
  C: '#555555',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Verilog: '#b2b7f8',
  Shell: '#89e051',
}

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime()
  const days = Math.floor(diff / 86400000)
  if (days < 1) return 'today'
  if (days < 30) return `${days}d ago`
  if (days < 365) return `${Math.floor(days / 30)}mo ago`
  return `${Math.floor(days / 365)}y ago`
}

export default function GitHubSection() {
  const { repos, loading, error } = useGitHubRepos('Souparnoo')

  return (
    <section id="github" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-accent-cyan font-mono text-sm">10.</span>
            <h2 className="section-heading text-text-primary">GitHub Repositories</h2>
          </div>
          <div className="h-px bg-gradient-to-r from-accent-cyan/40 via-accent-blue/20 to-transparent" />
          <div className="flex items-center justify-between mt-4">
            <p className="text-text-secondary text-sm">Live data fetched from GitHub API</p>
            <a
              href="https://github.com/Souparnoo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono text-text-secondary hover:text-accent-cyan transition-colors"
            >
              <Github size={13} />
              github.com/Souparnoo
            </a>
          </div>
        </motion.div>

        {loading && (
          <div className="flex flex-col items-center gap-4 py-20">
            <Loader2 size={32} className="text-accent-cyan animate-spin" />
            <p className="text-text-muted text-sm font-mono">Fetching repositories from GitHub...</p>
          </div>
        )}

        {error && (
          <div className="glass rounded-xl p-6 border border-red-500/20 text-center">
            <p className="text-text-secondary text-sm">
              Could not load repositories — GitHub API rate limit or network issue.
            </p>
            <a
              href="https://github.com/Souparnoo"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-accent-cyan text-sm font-mono"
            >
              <ExternalLink size={13} />
              Visit GitHub profile directly
            </a>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {repos.map((repo, i) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="glass rounded-xl p-5 border border-white/5 hover:border-accent-cyan/20 transition-all duration-300 group flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Code2 size={14} className="text-accent-cyan" />
                    <span className="font-mono text-sm font-medium text-text-primary group-hover:text-accent-cyan transition-colors truncate max-w-[160px]">
                      {repo.name}
                    </span>
                  </div>
                  <ExternalLink size={12} className="text-text-muted group-hover:text-text-secondary transition-colors flex-shrink-0" />
                </div>

                <p className="text-text-muted text-xs leading-relaxed flex-1 mb-4 line-clamp-2">
                  {repo.description || 'No description provided.'}
                </p>

                <div className="flex items-center gap-3 text-text-muted text-xs font-mono">
                  {repo.language && (
                    <div className="flex items-center gap-1">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: LANG_COLORS[repo.language] || '#8b9ab5' }}
                      />
                      <span>{repo.language}</span>
                    </div>
                  )}
                  {repo.stargazers_count > 0 && (
                    <div className="flex items-center gap-1">
                      <Star size={10} />
                      <span>{repo.stargazers_count}</span>
                    </div>
                  )}
                  {repo.forks_count > 0 && (
                    <div className="flex items-center gap-1">
                      <GitFork size={10} />
                      <span>{repo.forks_count}</span>
                    </div>
                  )}
                  <span className="ml-auto">{timeAgo(repo.updated_at)}</span>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
