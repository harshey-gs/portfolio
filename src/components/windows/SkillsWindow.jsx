import React, { useState } from 'react'
import { Cpu, Code, Wrench, Sparkles, Zap, Layers, CheckCircle2 } from 'lucide-react'
import { skillCategories } from '../../data/portfolioData'

export default function SkillsWindow() {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0)

  const iconMap = {
    Cpu: Cpu,
    Code: Code,
    Wrench: Wrench,
    Sparkles: Sparkles
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Hardware-to-Software Full-Spectrum Banner */}
      <div
        className="glass-card"
        style={{
          padding: '20px 24px',
          background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(56, 189, 248, 0.1) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.14)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <Zap size={16} style={{ color: '#fbbf24' }} />
          <h3 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#fff' }}>
            The Hardware-to-Cloud Dual Engine
          </h3>
        </div>
        <p style={{ fontSize: '0.84rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.5, marginBottom: '16px' }}>
          Unlike traditional software-only developers, Harshitha's ECE engineering background empowers her to understand systems at both the physical silicon/sensor level and the distributed web layer.
        </p>

        {/* Spectrum Steps */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '8px'
          }}
        >
          {[
            { step: '01. RTL & Silicon', label: 'Verilog & Cadence', color: '#fbbf24' },
            { step: '02. Analog & Circuits', label: 'Multisim & TRIAC', color: '#f97316' },
            { step: '03. Microcontrollers', label: 'ESP32 & Embedded C', color: '#34d399' },
            { step: '04. Backend & APIs', label: 'Node & Express', color: '#38bdf8' },
            { step: '05. Interactive UI', label: 'React.js & Three.js', color: '#a855f7' }
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                background: 'rgba(0, 0, 0, 0.3)',
                padding: '10px 12px',
                borderRadius: '8px',
                borderTop: `2px solid ${item.color}`
              }}
            >
              <div style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: item.color }}>
                {item.step}
              </div>
              <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#fff', marginTop: '2px' }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category selector pills */}
      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
        {skillCategories.map((cat, idx) => {
          const IconComponent = iconMap[cat.icon] || Cpu
          const isSelected = activeCategoryIdx === idx
          return (
            <button
              key={idx}
              onClick={() => setActiveCategoryIdx(idx)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: isSelected ? 'rgba(245, 158, 11, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                border: isSelected
                  ? '1px solid rgba(245, 158, 11, 0.5)'
                  : '1px solid rgba(255, 255, 255, 0.1)',
                color: isSelected ? '#fbbf24' : 'rgba(255, 255, 255, 0.7)',
                padding: '8px 16px',
                borderRadius: '10px',
                fontSize: '0.82rem',
                fontWeight: isSelected ? 600 : 500,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.15s ease'
              }}
            >
              <IconComponent size={15} />
              <span>{cat.title}</span>
            </button>
          )
        })}
      </div>

      {/* Active Category Skills Display */}
      {skillCategories[activeCategoryIdx] && (
        <div className="glass-card" style={{ padding: '24px' }}>
          <div style={{ marginBottom: '18px' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>
              {skillCategories[activeCategoryIdx].title}
            </h4>
            <p style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.6)' }}>
              {skillCategories[activeCategoryIdx].description}
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '16px'
            }}
          >
            {skillCategories[activeCategoryIdx].skills.map((skill, sIdx) => (
              <div
                key={sIdx}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  padding: '14px 16px',
                  borderRadius: '10px',
                  border: '1px solid rgba(255, 255, 255, 0.07)'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '8px'
                  }}
                >
                  <span style={{ fontWeight: 600, fontSize: '0.9rem', color: '#fff' }}>
                    {skill.name}
                  </span>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontFamily: 'var(--font-mono)',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      color: '#fbbf24'
                    }}
                  >
                    {skill.tag}
                  </span>
                </div>

                {/* Progress Bar Meter */}
                <div
                  style={{
                    width: '100%',
                    height: '6px',
                    borderRadius: '999px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    overflow: 'hidden'
                  }}
                >
                  <div
                    style={{
                      width: `${skill.level}%`,
                      height: '100%',
                      borderRadius: '999px',
                      background: 'linear-gradient(90deg, #f59e0b, #f97316)',
                      transition: 'width 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
