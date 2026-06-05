'use client'
import { motion } from 'framer-motion'
import { AI_TRANSPARENCY } from '@/lib/data'
import { Shield, Sparkles, BookOpen, Code2, Info } from 'lucide-react'

const categories = [
  {
    key: 'self_developed' as const,
    label: 'Self Developed',
    icon: Code2,
    color: '#00e5ff',
    desc: 'Projects designed, built, and deployed entirely by me without AI assistance.',
  },
  {
    key: 'ai_assisted' as const,
    label: 'AI Assisted Development',
    icon: Sparkles,
    color: '#8b5cf6',
    desc: 'Projects where AI tools (ChatGPT, Claude) were used as development assistants.',
  },
  {
    key: 'academic' as const,
    label: 'Academic Coursework',
    icon: BookOpen,
    color: '#3b82f6',
    desc: 'Projects completed as part of coursework and lab assignments at Jadavpur University.',
  },
]

export default function AITransparency() {
  return (
    <section id="ai-transparency" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-accent-cyan font-mono text-sm">09.</span>
            <h2 className="section-heading text-text-primary">AI Transparency</h2>
          </div>
          <div className="h-px bg-gradient-to-r from-accent-cyan/40 via-accent-blue/20 to-transparent" />
          <p className="text-text-secondary text-sm mt-4">
            Honest disclosure about how my projects were developed — because transparency matters.
          </p>
        </motion.div>

        {/* Disclaimer banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-5 border border-accent-purple/20 mb-8 flex gap-3"
        >
          <Info size={18} className="text-accent-purple flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-text-primary text-sm font-medium mb-1 flex items-center gap-2">
              <Shield size={14} className="text-accent-purple" />
              Disclosure Statement
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">{AI_TRANSPARENCY.disclaimer}</p>
          </div>
        </motion.div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categories.map((cat, i) => {
            const Icon = cat.icon
            const items = AI_TRANSPARENCY[cat.key]
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-strong rounded-2xl p-6 border border-white/5 relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-60"
                  style={{ background: `linear-gradient(90deg, ${cat.color}, transparent)` }}
                />

                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${cat.color}15`, border: `1px solid ${cat.color}30` }}
                  >
                    <Icon size={18} style={{ color: cat.color }} />
                  </div>
                  <h3 className="font-display font-bold text-text-primary text-base">{cat.label}</h3>
                </div>

                <p className="text-text-muted text-xs leading-relaxed mb-5">{cat.desc}</p>

                <ul className="flex flex-col gap-2">
                  {items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-sm text-text-secondary"
                    >
                      <div
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: cat.color }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
