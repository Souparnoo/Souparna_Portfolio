'use client'
import { motion } from 'framer-motion'
import { COMPETITIVE_EXAMS } from '@/lib/data'
import { Medal, Hash, Target } from 'lucide-react'

export default function CompetitiveExams() {
  return (
    <section id="exams" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-accent-cyan font-mono text-sm">04.</span>
            <h2 className="section-heading text-text-primary">Competitive Exams</h2>
          </div>
          <div className="h-px bg-gradient-to-r from-accent-cyan/40 via-accent-blue/20 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {COMPETITIVE_EXAMS.map((exam, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-strong rounded-2xl p-6 border border-white/5 hover:border-opacity-30 transition-all duration-300 group relative overflow-hidden"
              style={{ '--exam-color': exam.color } as React.CSSProperties}
            >
              {/* Accent top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-60"
                style={{ background: `linear-gradient(90deg, ${exam.color}, transparent)` }}
              />

              {/* Background glow */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-5 group-hover:opacity-10 transition-opacity"
                style={{ background: exam.color }}
              />

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                      style={{ background: `${exam.color}15`, border: `1px solid ${exam.color}25` }}
                    >
                      {exam.icon}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-text-primary text-lg">{exam.exam}</h3>
                      <p className="text-text-muted text-xs font-mono">{exam.subject}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="glass rounded-xl p-3">
                    <div className="flex items-center gap-1 mb-1">
                      <Target size={10} style={{ color: exam.color }} />
                      <span className="text-text-muted text-xs font-mono">Score</span>
                    </div>
                    <p className="font-display font-bold text-base" style={{ color: exam.color }}>
                      {exam.score}
                    </p>
                  </div>

                  <div className="glass rounded-xl p-3">
                    <div className="flex items-center gap-1 mb-1">
                      <Medal size={10} style={{ color: exam.color }} />
                      <span className="text-text-muted text-xs font-mono">Marks</span>
                    </div>
                    <p className="font-display font-bold text-base text-text-primary">
                      {exam.marks}
                    </p>
                  </div>

                  <div className="glass rounded-xl p-3">
                    <div className="flex items-center gap-1 mb-1">
                      <Hash size={10} style={{ color: exam.color }} />
                      <span className="text-text-muted text-xs font-mono">Rank</span>
                    </div>
                    <p className="font-display font-bold text-base text-text-primary text-sm">
                      {exam.rank}
                    </p>
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
