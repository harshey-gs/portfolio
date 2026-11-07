import React, { useState } from 'react'
import {
  ExternalLink,
  Code2,
  Cpu,
  Layers,
  ChevronRight,
  Terminal,
  Sparkles,
  Zap,
  CheckCircle,
  Copy,
  Check
} from 'lucide-react'
import { projects } from '../../data/portfolioData'

export default function ProjectsWindow({ onOpenWindow, onNotify }) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [activeProject, setActiveProject] = useState(projects[0])
  const [copiedCode, setCopiedCode] = useState(false)

  const categories = ['All', 'Embedded & IoT', 'VLSI & Digital', 'Full-Stack Web', 'Hardware & Circuits']

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory)

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(true)
    if (onNotify) onNotify('Code snippet copied to clipboard!')
    setTimeout(() => setCopiedCode(false), 2000)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
      {/* Category Filter Tabs */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          paddingBottom: '4px',
          scrollbarWidth: 'none'
        }}
      >
        {categories.map((cat) => {
          const count =
            cat === 'All' ? projects.length : projects.filter((p) => p.category === cat).length
          const isSelected = selectedCategory === cat
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                background: isSelected ? 'rgba(245, 158, 11, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                border: isSelected
                  ? '1px solid rgba(245, 158, 11, 0.45)'
                  : '1px solid rgba(255, 255, 255, 0.1)',
                color: isSelected ? '#fbbf24' : 'rgba(255, 255, 255, 0.7)',
                padding: '7px 14px',
                borderRadius: '10px',
                fontSize: '0.82rem',
                fontWeight: isSelected ? 600 : 400,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.18s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span>{cat}</span>
              <span
                style={{
                  fontSize: '0.7rem',
                  padding: '1px 5px',
                  borderRadius: '999px',
                  background: isSelected ? '#f59e0b' : 'rgba(255, 255, 255, 0.12)',
                  color: isSelected ? '#000' : 'rgba(255, 255, 255, 0.6)',
                  fontWeight: 700
                }}
              >
                {count}
              </span>
            </button>
          )
        })}
      </div>

      {/* Main Grid: Projects List + Selected Project Detail Drawer */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '16px'
        }}
      >
        {filteredProjects.map((p) => {
          const isSelected = activeProject.id === p.id
          return (
            <div
              key={p.id}
              onClick={() => setActiveProject(p)}
              className="glass-card"
              style={{
                padding: '20px',
                cursor: 'pointer',
                border: isSelected
                  ? '1px solid rgba(245, 158, 11, 0.6)'
                  : '1px solid rgba(255, 255, 255, 0.1)',
                background: isSelected
                  ? 'rgba(245, 158, 11, 0.08)'
                  : 'rgba(255, 255, 255, 0.04)',
                boxShadow: isSelected ? '0 0 25px rgba(245, 158, 11, 0.15)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* Header: Category Badge + Period */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '10px'
                  }}
                >
                  <span
                    className={
                      p.category.includes('VLSI')
                        ? 'badge-pill badge-pill-gold'
                        : p.category.includes('Embedded')
                        ? 'badge-pill badge-pill-emerald'
                        : 'badge-pill badge-pill-sky'
                    }
                  >
                    {p.badge || p.category}
                  </span>

                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'rgba(255, 255, 255, 0.45)'
                    }}
                  >
                    {p.period}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.08rem',
                    fontWeight: 700,
                    color: '#fff',
                    marginBottom: '6px',
                    lineHeight: 1.3
                  }}
                >
                  {p.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.84rem',
                    color: 'rgba(255, 255, 255, 0.72)',
                    lineHeight: 1.5,
                    marginBottom: '14px'
                  }}
                >
                  {p.description}
                </p>
              </div>

              <div>
                {/* Technologies */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '5px',
                    marginBottom: '14px'
                  }}
                >
                  {p.technologies.slice(0, 5).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        fontSize: '0.7rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '2px 8px',
                        borderRadius: '6px',
                        background: 'rgba(255, 255, 255, 0.07)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: 'rgba(255, 255, 255, 0.8)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {p.technologies.length > 5 && (
                    <span
                      style={{
                        fontSize: '0.68rem',
                        padding: '2px 6px',
                        borderRadius: '6px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        color: 'rgba(255, 255, 255, 0.5)'
                      }}
                    >
                      +{p.technologies.length - 5}
                    </span>
                  )}
                </div>

                {/* Footer bar */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '10px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    fontSize: '0.78rem',
                    color: isSelected ? '#fbbf24' : 'rgba(255, 255, 255, 0.6)'
                  }}
                >
                  <span style={{ fontWeight: 500 }}>
                    {isSelected ? 'Currently Viewing' : 'Click to Inspect'}
                  </span>
                  <ChevronRight size={14} />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Deep-Dive Inspection Panel for activeProject */}
      {activeProject && (
        <div
          className="glass-panel"
          style={{
            padding: '24px',
            background: 'rgba(22, 27, 36, 0.95)',
            border: '1px solid rgba(245, 158, 11, 0.35)',
            boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.5)'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              marginBottom: '16px'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <span className="badge-pill badge-pill-gold">Detailed Blueprint</span>
                <span
                  style={{
                    fontSize: '0.74rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'rgba(255, 255, 255, 0.5)'
                  }}
                >
                  {activeProject.period}
                </span>
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff' }}>
                {activeProject.title}
              </h3>
            </div>

            <button
              onClick={() => onOpenWindow('contact')}
              className="glass-button glass-button-primary"
              style={{ fontSize: '0.8rem', padding: '6px 14px' }}
            >
              <span>Inquire About Project</span>
              <ExternalLink size={13} />
            </button>
          </div>

          <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, marginBottom: '18px' }}>
            {activeProject.description}
          </p>

          {/* Key Deliverables Bullet Points */}
          {activeProject.deliverables && (
            <div style={{ marginBottom: '18px' }}>
              <h4 style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fbbf24', marginBottom: '10px' }}>
                ⭐ Engineering Highlights & Validations:
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {activeProject.deliverables.map((deliv, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                      fontSize: '0.84rem',
                      color: 'rgba(255, 255, 255, 0.8)'
                    }}
                  >
                    <CheckCircle size={15} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Code or Verilog/Hardware Snippet */}
          {activeProject.codeSnippet && (
            <div style={{ marginTop: '14px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '8px 12px',
                  background: 'rgba(0, 0, 0, 0.4)',
                  borderTopLeftRadius: '10px',
                  borderTopRightRadius: '10px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderBottom: 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.74rem', color: 'rgba(255, 255, 255, 0.6)' }}>
                  <Terminal size={13} />
                  <span>Architecture Source / Firmware Snippet</span>
                </div>

                <button
                  onClick={() => handleCopyCode(activeProject.codeSnippet)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: copiedCode ? '#10b981' : 'rgba(255, 255, 255, 0.6)',
                    cursor: 'pointer',
                    fontSize: '0.72rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  {copiedCode ? <Check size={12} /> : <Copy size={12} />}
                  <span>{copiedCode ? 'Copied!' : 'Copy Code'}</span>
                </button>
              </div>

              <pre
                style={{
                  margin: 0,
                  padding: '14px 16px',
                  background: '#0a0d14',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderBottomLeftRadius: '10px',
                  borderBottomRightRadius: '10px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  lineHeight: 1.55,
                  color: '#93c5fd',
                  overflowX: 'auto'
                }}
              >
                <code>{activeProject.codeSnippet}</code>
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
