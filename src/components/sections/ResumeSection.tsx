'use client'
import { motion } from 'framer-motion'
import { RESUMES } from '@/lib/data'
import { Download, FileText, ExternalLink } from 'lucide-react'

export default function ResumeSection() {
  return (
    <section id="resume" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-accent-cyan font-mono text-sm">11.</span>
            <h2 className="section-heading text-text-primary">Resume</h2>
          </div>
          <div className="h-px bg-gradient-to-r from-accent-cyan/40 via-accent-blue/20 to-transparent" />
          <p className="text-text-secondary text-sm mt-4">
            Two tailored resumes — one for software roles, one for core electronics and VLSI positions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {RESUMES.map((resume, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-strong rounded-2xl p-8 border border-white/5 relative overflow-hidden group"
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-70"
                style={{ background: `linear-gradient(90deg, ${resume.color}, transparent)` }}
              />

              {/* BG glow */}
              <div
                className="absolute bottom-0 right-0 w-40 h-40 blur-3xl opacity-5 group-hover:opacity-10 transition-opacity rounded-full"
                style={{ background: resume.color }}
              />

              <div className="relative">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5"
                  style={{ background: `${resume.color}15`, border: `1px solid ${resume.color}25` }}
                >
                  {resume.icon}
                </div>

                <h3 className="font-display font-bold text-2xl text-text-primary mb-2">
                  {resume.type}
                </h3>
                <h4 className="font-mono text-sm mb-3" style={{ color: resume.color }}>Resume</h4>

                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {resume.description}
                </p>

                <div className="flex flex-col gap-3">
                  <a
                    href={`/${resume.filename}`}
                    download
                    className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-mono text-sm font-medium transition-all duration-200 hover:scale-[1.02]"
                    style={{
                      background: `${resume.color}20`,
                      border: `1px solid ${resume.color}40`,
                      color: resume.color,
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget
                      el.style.background = `${resume.color}30`
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget
                      el.style.background = `${resume.color}20`
                    }}
                  >
                    <Download size={15} />
                    Download PDF
                  </a>

                  <a
                    href={`/${resume.filename}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-medium text-text-muted hover:text-text-secondary transition-all glass border border-white/5"
                  >
                    <ExternalLink size={13} />
                    Preview
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-text-muted text-xs font-mono mt-8"
        >
        </motion.p>
      </div>
    </section>
  )
}
