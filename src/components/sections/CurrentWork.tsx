'use client'
import { motion } from 'framer-motion'
import { CURRENT_WORK } from '@/lib/data'
import { Clock, Zap } from 'lucide-react'

const TAG_STYLES: Record<string, string> = {
  'AI Assisted':
    'bg-accent-purple/15 border-accent-purple/30 text-accent-purple',
  'Self Developed':
    'bg-accent-cyan/15 border-accent-cyan/30 text-accent-cyan',
  'VLSI':
    'bg-accent-blue/15 border-accent-blue/30 text-accent-blue',
}

export default function CurrentWork() {
  return (
    <section id="current" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-accent-cyan font-mono text-sm">08.</span>
            <h2 className="section-heading text-text-primary">Currently Building</h2>
          </div>
          <div className="h-px bg-gradient-to-r from-accent-cyan/40 via-accent-blue/20 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CURRENT_WORK.map((work, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-strong rounded-2xl p-6 border border-white/5 relative overflow-hidden group"
            >
              {/* Animated top line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-60"
                style={{ background: `linear-gradient(90deg, ${work.color}, transparent)` }}
              />

              {/* BG glow */}
              <div
                className="absolute top-0 right-0 w-48 h-48 blur-3xl opacity-5 group-hover:opacity-8 transition-opacity rounded-full"
                style={{ background: work.color }}
              />

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                      style={{ background: `${work.color}15`, border: `1px solid ${work.color}25` }}
                    >
                      {work.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <div
                          className="w-1.5 h-1.5 rounded-full animate-pulse"
                          style={{ background: work.color }}
                        />
                        <span className="text-xs font-mono" style={{ color: work.color }}>
                          {work.status}
                        </span>
                      </div>
                      <p className="text-text-muted text-xs font-mono">{work.area}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-full glass">
                    <Clock size={10} className="text-text-muted" />
                    <span className="text-text-muted text-xs font-mono">Active</span>
                  </div>
                </div>

                <div className="mb-3">
                  <h3 className="font-display font-bold text-xl text-text-primary">
                    {work.name}
                  </h3>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {work.tag?.map((tag: string) => (
                      <span
                        key={tag}
                        className={`px-2 py-1 rounded-full text-xs border ${
                          TAG_STYLES[tag] ||
                          'bg-white/5 border-white/10 text-text-muted'
                        }`}
                      >
                        {tag === 'AI Assisted' && '✦ '}
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-5">{work.description}</p>

                {/* Progress bar */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                      <Zap size={12} style={{ color: work.color }} />
                      <span className="text-text-muted text-xs font-mono">Progress</span>
                    </div>
                    <span className="text-xs font-mono font-bold" style={{ color: work.color }}>
                      {work.progress}%
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${work.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${work.color}, ${work.color}60)` }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
