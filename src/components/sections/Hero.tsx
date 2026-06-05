'use client'
import { motion } from 'framer-motion'
import { Download, Code2, Cpu, ChevronDown, Github, Linkedin, ExternalLink } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-grid">
      {/* Radial glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-purple/6 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass border border-accent-cyan/20"
        >
          <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse-slow" />
          <span className="text-xs font-mono text-text-secondary">Open to opportunities</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl leading-none tracking-tight mb-4"
        >
          <span className="block text-text-primary">Souparna</span>
          <span className="block text-gradient-cyan">Kundu</span>
        </motion.h1>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-col items-center gap-2 mb-3"
        >
          <p className="text-lg sm:text-xl text-text-secondary font-body font-light max-w-xl">
            Electronics &amp; Tele-communication Engineering Student
          </p>
          <div className="flex items-center gap-2 text-text-muted text-sm font-mono">
            <span className="text-accent-cyan">▸</span>
            <span>Jadavpur University</span>
            <span className="text-text-muted">·</span>
            <span>Batch 2023–2027</span>
          </div>
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {['VLSI', 'Digital Design', 'Embedded Systems', 'Software Dev', 'GATE Qualified', 'Competitive Programming'].map(tag => (
            <span key={tag} className="tag glass text-text-secondary border border-white/5">
              {tag}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-cyan text-bg-primary font-semibold text-sm font-mono hover:bg-accent-cyan/90 transition-all duration-200 glow-cyan hover:scale-105"
          >
            <Code2 size={16} />
            Software Portfolio
          </a>
          <a
            href="#electronics"
            className="group flex items-center gap-2 px-6 py-3 rounded-xl glass border border-accent-purple/30 text-accent-purple font-semibold text-sm font-mono hover:bg-accent-purple/10 transition-all duration-200 hover:scale-105"
          >
            <Cpu size={16} />
            Core Electronics
          </a>
          <a
            href="#resume"
            className="group flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-text-secondary font-medium text-sm font-mono hover:text-text-primary hover:border-white/20 transition-all duration-200 hover:scale-105"
          >
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
          className="flex justify-center gap-3"
        >
          <a
            href="https://github.com/Souparnoo"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg glass border border-white/8 text-text-secondary hover:text-text-primary hover:border-accent-cyan/30 transition-all duration-200 hover:scale-110"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/souparna-kundu"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg glass border border-white/8 text-text-secondary hover:text-text-primary hover:border-accent-blue/30 transition-all duration-200 hover:scale-110"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://codeforces.com/profile/Souparnoo"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg glass border border-white/8 text-text-secondary hover:text-text-primary hover:border-accent-cyan/30 transition-all duration-200 hover:scale-110"
          >
            <ExternalLink size={18} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-text-muted"
      >
        <span className="text-xs font-mono">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}
