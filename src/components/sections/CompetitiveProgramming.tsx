'use client'
import { motion } from 'framer-motion'
import { CP_PROFILES } from '@/lib/data'
import { ExternalLink, TrendingUp } from 'lucide-react'

function RatingBar({ rating, max, color }: { rating: number; max: number; color: string }) {
  const pct = Math.min((rating / max) * 100, 100)
  return (
    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${pct}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
        className="h-full rounded-full"
        style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
      />
    </div>
  )
}

export default function CompetitiveProgramming() {
  return (
    <section id="cp" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-accent-cyan font-mono text-sm">05.</span>
            <h2 className="section-heading text-text-primary">Competitive Programming</h2>
          </div>
          <div className="h-px bg-gradient-to-r from-accent-cyan/40 via-accent-blue/20 to-transparent" />
          <p className="text-text-secondary text-sm mt-4 font-mono">Active on three major competitive programming platforms</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CP_PROFILES.map((profile, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-strong rounded-2xl p-6 border border-white/5 group hover:border-opacity-30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: `linear-gradient(90deg, ${profile.color}80, transparent)` }}
              />

              {/* BG glow */}
              <div
                className="absolute bottom-0 right-0 w-40 h-40 blur-3xl opacity-5 group-hover:opacity-10 transition-opacity rounded-full"
                style={{ background: profile.color }}
              />

              <div className="relative">
                {/* Platform icon */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center font-display font-black text-lg"
                    style={{
                      background: `${profile.color}18`,
                      border: `1px solid ${profile.color}30`,
                      color: profile.color,
                    }}
                  >
                    {profile.icon}
                  </div>
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg glass text-text-muted hover:text-text-primary transition-colors"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>

                <h3 className="font-display font-bold text-xl text-text-primary mb-1">{profile.platform}</h3>
                <p className="text-text-muted text-xs font-mono mb-4">@{profile.handle}</p>

                {/* Rating */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                      <TrendingUp size={12} style={{ color: profile.color }} />
                      <span className="text-text-muted text-xs font-mono">Max Rating</span>
                    </div>
                    <span
                      className="font-display font-black text-2xl"
                      style={{ color: profile.color }}
                    >
                      {profile.maxRating}
                    </span>
                  </div>
                  <RatingBar rating={profile.maxRating} max={2000} color={profile.color} />
                </div>

                {/* Badge */}
                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium"
                  style={{
                    background: `${profile.color}15`,
                    border: `1px solid ${profile.color}30`,
                    color: profile.color,
                  }}
                >
                  <span>⭐</span>
                  {profile.badge}
                </div>

                {/* Visit link */}
                <div className="mt-4 pt-4 border-t border-white/5">
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-mono text-text-muted hover:text-text-primary transition-colors"
                  >
                    <ExternalLink size={11} />
                    View Profile
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
