'use client'
import { motion } from 'framer-motion'
import { EDUCATION } from '@/lib/data'
import { GraduationCap, Calendar, Award } from 'lucide-react'

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-accent-cyan font-mono text-sm">02.</span>
            <h2 className="section-heading text-text-primary">Education</h2>
          </div>
          <div className="h-px bg-gradient-to-r from-accent-cyan/40 via-accent-blue/20 to-transparent" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan/40 via-accent-blue/20 to-transparent hidden md:block" />

          <div className="flex flex-col gap-8">
            {EDUCATION.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex gap-6 md:pl-16 relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-5 top-6 w-6 h-6 rounded-full glass border border-accent-cyan/40 flex items-center justify-center hidden md:flex z-10">
                  <div className="w-2 h-2 rounded-full bg-accent-cyan" />
                </div>

                <div className="flex-1 glass-strong rounded-2xl p-6 hover:border-accent-cyan/20 border border-white/5 transition-all duration-300 group">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-2xl flex-shrink-0">
                        {edu.icon}
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-lg text-text-primary group-hover:text-accent-cyan transition-colors">
                          {edu.institution}
                        </h3>
                        <p className="text-text-secondary text-sm mt-1">{edu.degree}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-2">
                      <div className="flex items-center gap-1.5 text-text-muted text-xs font-mono">
                        <Calendar size={12} />
                        <span>{edu.year}</span>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20">
                        <Award size={12} className="text-accent-cyan" />
                        <span className="text-accent-cyan text-xs font-mono font-bold">{edu.details}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
