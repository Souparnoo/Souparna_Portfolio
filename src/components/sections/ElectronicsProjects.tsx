'use client'
import { motion } from 'framer-motion'
import { ELECTRONICS_PROJECTS } from '@/lib/data'

export default function ElectronicsProjects() {
  return (
    <section id="electronics" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-accent-purple font-mono text-sm">07.</span>
            <h2 className="section-heading text-text-primary">Core Electronics Projects</h2>
          </div>
          <div className="h-px bg-gradient-to-r from-accent-purple/40 via-accent-blue/20 to-transparent" />
          <p className="text-text-secondary text-sm mt-4">
            Hardware-focused projects spanning digital design, simulation, and HDL-based circuit implementation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ELECTRONICS_PROJECTS.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-strong rounded-2xl p-6 border border-white/5 hover:border-accent-purple/25 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl glass flex-shrink-0 group-hover:scale-110 transition-transform"
                  style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)' }}>
                  {project.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-text-primary group-hover:text-accent-purple transition-colors leading-tight">
                    {project.name}
                  </h3>
                  <p className="text-text-muted text-xs font-mono mt-1">{project.tool}</p>
                </div>
              </div>

              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="tag"
                    style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.25)', color: '#a78bfa' }}
                  >
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
