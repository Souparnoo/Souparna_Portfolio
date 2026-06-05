'use client'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { SGPA_DATA, JU_WEIGHTS } from '@/lib/data'
import { calculateLinearCGPA, calculateWeightedCGPA } from '@/lib/utils'
import { Info, TrendingUp, BarChart3 } from 'lucide-react'

export default function Performance() {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<import('chart.js').Chart | null>(null)
  const [activeTab, setActiveTab] = useState<'bar' | 'line'>('bar')

  const sgpas = SGPA_DATA.map(d => d.sgpa)
  const labels = SGPA_DATA.map(d => d.sem)
  const linearCGPA = calculateLinearCGPA(sgpas)
  const weightedCGPA = calculateWeightedCGPA(sgpas, JU_WEIGHTS)

  // Running linear CGPA per semester
  const runningLinear = sgpas.map((_, i) =>
    parseFloat((sgpas.slice(0, i + 1).reduce((a, b) => a + b, 0) / (i + 1)).toFixed(2))
  )

  useEffect(() => {
    let Chart: typeof import('chart.js').Chart
    async function initChart() {
      const { Chart: C, registerables } = await import('chart.js')
      C.register(...registerables)
      Chart = C

      if (chartInstance.current) {
        chartInstance.current.destroy()
      }

      if (!chartRef.current) return
      const ctx = chartRef.current.getContext('2d')
      if (!ctx) return

      const gradientBar = ctx.createLinearGradient(0, 0, 0, 300)
      gradientBar.addColorStop(0, 'rgba(0, 229, 255, 0.8)')
      gradientBar.addColorStop(1, 'rgba(59, 130, 246, 0.3)')

      chartInstance.current = new Chart(ctx, {
        type: activeTab === 'bar' ? 'bar' : 'line',
        data: {
          labels,
          datasets: activeTab === 'bar'
            ? [
                {
                  label: 'SGPA',
                  data: sgpas,
                  backgroundColor: gradientBar,
                  borderColor: 'rgba(0, 229, 255, 0.9)',
                  borderWidth: 1,
                  borderRadius: 6,
                  borderSkipped: false,
                } as never,
              ]
            : [
                {
                  label: 'SGPA',
                  data: sgpas,
                  borderColor: 'rgba(0, 229, 255, 0.9)',
                  backgroundColor: 'rgba(0, 229, 255, 0.1)',
                  borderWidth: 2,
                  pointBackgroundColor: 'rgba(0, 229, 255, 1)',
                  pointRadius: 5,
                  tension: 0.4,
                  fill: true,
                } as never,
                {
                  label: 'Running CGPA',
                  data: runningLinear,
                  borderColor: 'rgba(139, 92, 246, 0.9)',
                  backgroundColor: 'transparent',
                  borderWidth: 2,
                  borderDash: [5, 5],
                  pointBackgroundColor: 'rgba(139, 92, 246, 1)',
                  pointRadius: 4,
                  tension: 0.4,
                } as never,
              ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              labels: {
                color: '#8b9ab5',
                font: { family: 'JetBrains Mono', size: 11 },
                boxWidth: 12,
              },
            },
            tooltip: {
              backgroundColor: 'rgba(8,13,26,0.95)',
              borderColor: 'rgba(0,229,255,0.2)',
              borderWidth: 1,
              titleColor: '#00e5ff',
              bodyColor: '#8b9ab5',
              titleFont: { family: 'JetBrains Mono', size: 12 },
              bodyFont: { family: 'JetBrains Mono', size: 11 },
              callbacks: {
                label: (ctx) => ` ${ctx.dataset.label}: ${ctx.formattedValue}`,
              },
            },
          },
          scales: {
            x: {
              ticks: { color: '#8b9ab5', font: { family: 'JetBrains Mono', size: 11 } },
              grid: { color: 'rgba(255,255,255,0.04)' },
              border: { color: 'rgba(255,255,255,0.08)' },
            },
            y: {
              min: 6,
              max: 10,
              ticks: {
                color: '#8b9ab5',
                font: { family: 'JetBrains Mono', size: 11 },
                stepSize: 0.5,
              },
              grid: { color: 'rgba(255,255,255,0.04)' },
              border: { color: 'rgba(255,255,255,0.08)' },
            },
          },
        },
      })
    }
    initChart()
    return () => { chartInstance.current?.destroy() }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab])

  return (
    <section id="performance" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-accent-cyan font-mono text-sm">03.</span>
            <h2 className="section-heading text-text-primary">Academic Performance</h2>
          </div>
          <div className="h-px bg-gradient-to-r from-accent-cyan/40 via-accent-blue/20 to-transparent" />
        </motion.div>

        {/* SGPA Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-8"
        >
          {SGPA_DATA.map((d, i) => (
            <div key={i} className="glass rounded-xl p-4 text-center group hover:border-accent-cyan/20 border border-white/5 transition-all">
              <p className="text-text-muted font-mono text-xs mb-1">{d.sem}</p>
              <p className={`font-display font-bold text-2xl ${d.sgpa >= 8.5 ? 'text-accent-cyan' : d.sgpa >= 8 ? 'text-accent-blue' : 'text-accent-purple'}`}>
                {d.sgpa}
              </p>
              <div className="mt-2 h-1 rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue"
                  style={{ width: `${((d.sgpa - 6) / 4) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* CGPA Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
        >
          <div className="glass-strong rounded-2xl p-6 border border-accent-cyan/15">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-accent-cyan/10 flex items-center justify-center">
                <TrendingUp size={16} className="text-accent-cyan" />
              </div>
              <div>
                <p className="text-text-muted text-xs font-mono">Linear CGPA</p>
                <p className="font-display font-bold text-3xl text-accent-cyan">{linearCGPA.toFixed(2)}</p>
              </div>
            </div>
            <p className="text-text-secondary text-xs leading-relaxed">
              Simple average of all completed semester SGPAs: ({sgpas.join(' + ')}) ÷ {sgpas.length} = <strong className="text-text-primary">{linearCGPA.toFixed(2)}</strong>
            </p>
          </div>

          <div className="glass-strong rounded-2xl p-6 border border-accent-purple/15">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-accent-purple/10 flex items-center justify-center">
                <BarChart3 size={16} className="text-accent-purple" />
              </div>
              <div>
                <p className="text-text-muted text-xs font-mono">Weighted CGPA <span className="text-accent-purple">(JU System)</span></p>
                <p className="font-display font-bold text-3xl text-accent-purple">{weightedCGPA.toFixed(2)}</p>
              </div>
            </div>
            <p className="text-text-secondary text-xs leading-relaxed">
              JU weights later semesters more heavily. Sems 1–2 count 5% each; 3–4 count 10%; 5–8 count 17.5% each. Weighted sum ÷ total completed weight.
            </p>
          </div>
        </motion.div>

        {/* Explanation box */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass rounded-xl p-4 border border-white/5 mb-8 flex gap-3"
        >
          <Info size={16} className="text-accent-cyan flex-shrink-0 mt-0.5" />
          <div className="text-xs text-text-secondary leading-relaxed">
            <span className="text-text-primary font-medium">Linear vs Weighted CGPA: </span>
            Linear CGPA treats every semester equally. The JU Weighted CGPA assigns more importance to higher semesters (5th–8th get 17.5% each vs 5% for 1st–2nd), better reflecting advanced academic growth. Semesters 6–8 are yet to be completed, so the weighted CGPA shown is calculated over the fraction of completed credits.
          </div>
        </motion.div>

        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="glass-strong rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display font-semibold text-text-primary">Semester Performance Chart</h3>
            <div className="flex gap-2">
              {(['bar', 'line'] as const).map(t => (
                <button
                  key={t}
                  onClick={() => setActiveTab(t)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    activeTab === t
                      ? 'bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30'
                      : 'text-text-muted hover:text-text-secondary'
                  }`}
                >
                  {t === 'bar' ? '▌ Bar' : '⟿ Trend'}
                </button>
              ))}
            </div>
          </div>
          <div style={{ height: 280 }}>
            <canvas ref={chartRef} />
          </div>
        </motion.div>

        {/* JU Weight table */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 glass rounded-xl p-5"
        >
          <p className="text-text-muted text-xs font-mono mb-3">JU Weighting System</p>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
            {JU_WEIGHTS.map((w, i) => (
              <div key={i} className={`rounded-lg p-2 text-center ${i < sgpas.length ? 'bg-accent-cyan/8 border border-accent-cyan/15' : 'bg-white/2 border border-white/5'}`}>
                <p className="text-text-muted font-mono text-xs">S{i + 1}</p>
                <p className={`font-bold text-sm ${i < sgpas.length ? 'text-accent-cyan' : 'text-text-muted'}`}>{(w * 100)}%</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
