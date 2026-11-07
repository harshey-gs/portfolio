import React from 'react'
import { Sparkles, ArrowRight, Download, Send, Terminal, Cpu, Code2 } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

export default function HeroCard({ onOpenWindow, onViewScroll }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: '12%',
        right: '4%',
        maxWidth: '560px',
        width: 'calc(100% - 32px)',
        zIndex: 15,
        pointerEvents: 'auto'
      }}
      className="hidden md:block animate-fade-in"
    >
      <div
        className="glass-panel"
        style={{
          padding: '28px 32px',
          background: 'rgba(14, 18, 26, 0.76)',
          backdropFilter: 'blur(28px) saturate(180%)',
          WebkitBackdropFilter: 'blur(28px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.16)',
          borderRadius: '24px',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.65), 0 0 35px rgba(245, 158, 11, 0.1)'
        }}
      >
        {/* Top badge */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div className="badge-pill badge-pill-gold">
            <Sparkles size={12} />
            <span>ECE Engineering Student & Web Developer</span>
          </div>

          <span
            style={{
              fontSize: '0.72rem',
              color: 'rgba(255, 255, 255, 0.45)',
              fontFamily: 'var(--font-mono)'
            }}
          >
            GM University, Davangere
          </span>
        </div>

        {/* Hero Headline */}
        <h1
          style={{
            fontSize: '2.2rem',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            marginBottom: '12px',
            color: '#fff'
          }}
        >
          Engineering the Future in{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #fbbf24 0%, #f97316 50%, #ec4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}
          >
            Silicon & Code.
          </span>
        </h1>

        {/* Subtitle / summary */}
        <p
          style={{
            fontSize: '0.94rem',
            lineHeight: 1.6,
            color: 'rgba(255, 255, 255, 0.78)',
            marginBottom: '20px'
          }}
        >
          Hi, I'm <strong style={{ color: '#fff' }}>Harshitha G S</strong>. I bridge hardware and software — designing VLSI digital circuits with Verilog, autonomous IoT with Edge AI & ESP32, and high-performance MERN web platforms.
        </p>

        {/* Pill tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
          <span className="badge-pill">
            <Cpu size={12} style={{ color: '#fbbf24' }} />
            <span>VLSI & Verilog</span>
          </span>
          <span className="badge-pill">
            <Terminal size={12} style={{ color: '#34d399' }} />
            <span>Embedded C & IoT</span>
          </span>
          <span className="badge-pill">
            <Code2 size={12} style={{ color: '#38bdf8' }} />
            <span>MERN Full-Stack</span>
          </span>
          <span className="badge-pill badge-pill-sky">
            <span>Amdox Tech Intern</span>
          </span>
        </div>

        {/* Action buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <button
            onClick={() => onOpenWindow('projects')}
            className="glass-button glass-button-primary"
            style={{ padding: '10px 20px' }}
          >
            <span>Explore 6 Projects</span>
            <ArrowRight size={15} />
          </button>

          <button
            onClick={() => onOpenWindow('resume')}
            className="glass-button"
            style={{ padding: '10px 18px' }}
          >
            <Download size={15} />
            <span>View Resume</span>
          </button>

          <button
            onClick={() => onOpenWindow('contact')}
            className="glass-button"
            style={{ padding: '10px 18px' }}
          >
            <Send size={15} />
            <span>Contact Me</span>
          </button>
        </div>

        {/* Interactive meadow hint */}
        <div
          style={{
            marginTop: '18px',
            paddingTop: '14px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.74rem',
            color: 'rgba(255, 255, 255, 0.45)',
            fontFamily: 'var(--font-mono)'
          }}
        >
          <span>🌾 Tip: Move your cursor across the background meadow to part the 3D grass & flowers.</span>
        </div>
      </div>
    </div>
  )
}
