'use client'
import { motion } from 'framer-motion'
import { ABOUT_POINTS } from '@/lib/data'
import { CheckCircle2, Cpu, Code2, Trophy, Brain } from 'lucide-react'

const icons = [Cpu, Code2, Brain, Trophy, Brain, Code2]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
}
const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
}

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-accent-cyan font-mono text-sm">01.</span>
            <h2 className="section-heading text-text-primary">About Me</h2>
          </div>
          <div className="h-px bg-gradient-to-r from-accent-cyan/40 via-accent-blue/20 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Profile card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass-strong rounded-2xl p-8 animated-border relative overflow-hidden">
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent-cyan/5 rounded-full blur-2xl" />

              <div className="relative">
                {/* Avatar placeholder */}
                <div className="w-24 h-24 rounded-2xl glass glow-cyan flex items-center justify-center mb-6 text-3xl">
                  👨‍💻
                </div>

                <h3 className="font-display text-2xl font-bold text-text-primary mb-2">
                  Souparna Kundu
                </h3>
                <p className="text-accent-cyan font-mono text-sm mb-1">ETCE @ Jadavpur University</p>
                <p className="text-text-secondary text-sm font-mono">3rd Year · Batch 2023–2027</p>

                <div className="mt-6 pt-6 border-t border-white/8">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'GATE AIR', value: '1647', color: 'text-accent-cyan' },
                      { label: 'CGPA', value: '8.32', color: 'text-accent-blue' },
                      { label: 'CF Rating', value: '1268', color: 'text-accent-teal' },
                      { label: 'Semester', value: '5th', color: 'text-accent-purple' },
                    ].map(stat => (
                      <div key={stat.label} className="glass rounded-xl p-3">
                        <p className={`font-display font-bold text-xl ${stat.color}`}>{stat.value}</p>
                        <p className="text-text-muted text-xs font-mono mt-0.5">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Points */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {ABOUT_POINTS.map((point, i) => {
              const Icon = icons[i % icons.length]
              return (
                <motion.div
                  key={i}
                  variants={item}
                  className="flex gap-4 p-4 rounded-xl glass hover:border-accent-cyan/20 border border-transparent transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent-cyan/10 flex items-center justify-center group-hover:bg-accent-cyan/20 transition-colors">
                    <Icon size={16} className="text-accent-cyan" />
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">{point}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
