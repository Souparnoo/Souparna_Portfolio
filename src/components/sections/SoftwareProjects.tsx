'use client'
import { motion } from 'framer-motion'
import { SOFTWARE_PROJECTS } from '@/lib/data'
import { Github, ExternalLink, Cpu, Code2, Sparkles } from 'lucide-react'

const TAG_STYLES: Record<string, string> = {
  'AI Assisted': 'bg-accent-purple/15 border-accent-purple/30 text-accent-purple',
  'Self Developed': 'bg-accent-cyan/15 border-accent-cyan/30 text-accent-cyan',
  'Full Stack': 'bg-accent-blue/15 border-accent-blue/30 text-accent-blue',
}

export default function SoftwareProjects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-accent-cyan font-mono text-sm">06.</span>
            <h2 className="section-heading text-text-primary">Software Projects</h2>
          </div>
          <div className="h-px bg-gradient-to-r from-accent-cyan/40 via-accent-blue/20 to-transparent" />
          <p className="text-text-secondary text-sm mt-4">
            A mix of self-developed and AI-assisted projects spanning full-stack development, algorithms, and utilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SOFTWARE_PROJECTS.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-strong rounded-2xl p-6 border border-white/5 hover:border-accent-cyan/20 transition-all duration-300 group flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center text-accent-cyan group-hover:scale-110 transition-transform">
                  {project.category === 'ai_assisted' ? <Sparkles size={18} /> : <Code2 size={18} />}
                </div>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-text-muted hover:text-text-primary transition-colors glass"
                      title="GitHub Repository"
                    >
                      <Github size={14} />
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-text-muted hover:text-accent-cyan transition-colors glass"
                      title="Live Website"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}

                  {(project as { backendGithub?: string }).backendGithub && (
                    <a
                      href={(project as { backendGithub?: string }).backendGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-text-muted hover:text-text-primary transition-colors glass"
                      title="Backend Repository"
                    >
                      <Cpu size={14} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="font-display font-bold text-text-primary text-lg mb-2 group-hover:text-accent-cyan transition-colors">
                {project.name}
              </h3>

              <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-4">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map(t => (
                  <span key={t} className="tag bg-white/4 text-text-muted border border-white/8">
                    {t}
                  </span>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map(tag => (
                  <span key={tag} className={`tag border ${TAG_STYLES[tag] || 'bg-white/5 text-text-muted border-white/10'}`}>
                    {tag === 'AI Assisted' && '✦ '}
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
