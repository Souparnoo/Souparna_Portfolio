'use client'
import { motion } from 'framer-motion'
import { TOOLS } from '@/lib/data'

export default function SoftwareTools() {
  return (
    <section id="tools" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-accent-cyan font-mono text-sm">07.</span>
            <h2 className="section-heading text-text-primary">Software &amp; Tools</h2>
          </div>
          <div className="h-px bg-gradient-to-r from-accent-cyan/40 via-accent-blue/20 to-transparent" />
          <p className="text-text-secondary text-sm mt-4">
            Tools and environments I work with across hardware design, simulation, and software development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TOOLS.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-strong rounded-2xl p-6 border border-white/5 group hover:border-opacity-30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-60"
                style={{ background: `linear-gradient(90deg, ${group.color}, transparent)` }}
              />

              {/* Background glow */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-5 group-hover:opacity-10 transition-opacity"
                style={{ background: group.color }}
              />

              <div className="relative">
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: `${group.color}15`, border: `1px solid ${group.color}25` }}
                  >
                    {group.icon}
                  </div>
                  <h3
                    className="font-display font-bold text-sm leading-tight"
                    style={{ color: group.color }}
                  >
                    {group.category}
                  </h3>
                </div>

                {/* Tool pills */}
                <div className="flex flex-wrap gap-2">
                  {group.tools.map(tool => (
                    <span
                      key={tool}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-text-secondary transition-all duration-200 hover:text-text-primary"
                      style={{
                        background: `${group.color}08`,
                        border: `1px solid ${group.color}20`,
                      }}
                      onMouseEnter={e => {
                        const el = e.currentTarget
                        el.style.background = `${group.color}18`
                        el.style.borderColor = `${group.color}50`
                        el.style.color = group.color
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget
                        el.style.background = `${group.color}08`
                        el.style.borderColor = `${group.color}20`
                        el.style.color = ''
                      }}
                    >
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: group.color }}
                      />
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}