'use client'
import { Github, Linkedin, ExternalLink, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg glass flex items-center justify-center glow-cyan">
              <span className="text-accent-cyan font-mono text-xs font-bold">SK</span>
            </div>
            <div>
              <p className="font-display font-bold text-sm text-text-primary">Souparna Kundu</p>
              <p className="text-text-muted text-xs font-mono">ETCE @ Jadavpur University</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Souparnoo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg glass text-text-secondary hover:text-text-primary transition-colors hover:scale-110"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/souparna-kundu-823357287/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg glass text-text-secondary hover:text-text-primary transition-colors hover:scale-110"
            >
              <Linkedin size={16} />
            </a>
            {/* <a
              href="https://codeforces.com/profile/Souparnoo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg glass text-text-secondary hover:text-text-primary transition-colors hover:scale-110"
            >
              <ExternalLink size={16} />
            </a> */}
          </div>

          <p className="text-text-muted text-xs font-mono flex items-center gap-1.5">
            Built with <Heart size={11} className="text-red-400" /> using Next.js & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
