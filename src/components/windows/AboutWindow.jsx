import React from 'react'
import { GraduationCap, Briefcase, MapPin, Mail, Phone, Globe, Award, Sparkles, CheckCircle2 } from 'lucide-react'
import { personalInfo, education, experience } from '../../data/portfolioData'

export default function AboutWindow({ onOpenWindow, onNotify }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      {/* Top Profile Summary Header */}
      <div
        className="glass-card"
        style={{
          padding: '24px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '24px',
          flexWrap: 'wrap'
        }}
      >
        {/* Avatar Monogram */}
        <div
          style={{
            width: '84px',
            height: '84px',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            fontWeight: 800,
            color: '#000',
            boxShadow: '0 10px 25px -5px rgba(245, 158, 11, 0.4)',
            border: '2px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          HG
        </div>

        <div style={{ flex: 1, minWidth: '220px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}>{personalInfo.name}</h2>
            <span className="badge-pill badge-pill-emerald">Open for Roles</span>
          </div>

          <p style={{ color: '#fbbf24', fontWeight: 600, fontSize: '0.92rem', marginBottom: '6px' }}>
            {personalInfo.title}
          </p>

          <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.84rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <MapPin size={14} style={{ color: '#f59e0b' }} />
            <span>{personalInfo.location}</span>
          </p>
        </div>

        {/* Quick CTA */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => onOpenWindow('contact')}
            className="glass-button glass-button-primary"
            style={{ padding: '8px 16px', fontSize: '0.82rem' }}
          >
            <Mail size={14} />
            <span>Message</span>
          </button>
        </div>
      </div>

      {/* Summary Narrative */}
      <div>
        <h3
          style={{
            fontSize: '1rem',
            fontWeight: 600,
            color: '#fff',
            marginBottom: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <Sparkles size={16} style={{ color: '#f59e0b' }} />
          <span>Professional Summary</span>
        </h3>
        <p
          style={{
            fontSize: '0.9rem',
            lineHeight: 1.7,
            color: 'rgba(255, 255, 255, 0.8)',
            background: 'rgba(255, 255, 255, 0.03)',
            padding: '16px 20px',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.06)'
          }}
        >
          {personalInfo.summary}
        </p>
      </div>

      {/* Experience Section */}
      <div>
        <h3
          style={{
            fontSize: '1rem',
            fontWeight: 600,
            color: '#fff',
            marginBottom: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <Briefcase size={16} style={{ color: '#38bdf8' }} />
          <span>Professional Experience</span>
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{ padding: '20px', borderLeft: '3px solid #38bdf8' }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '10px'
                }}
              >
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff' }}>{exp.role}</h4>
                  <p style={{ color: '#38bdf8', fontSize: '0.86rem', fontWeight: 500 }}>
                    {exp.company} • <span style={{ color: 'rgba(255, 255, 255, 0.6)' }}>{exp.type}</span>
                  </p>
                </div>

                <span
                  style={{
                    fontSize: '0.74rem',
                    fontFamily: 'var(--font-mono)',
                    padding: '3px 9px',
                    borderRadius: '6px',
                    background: 'rgba(56, 189, 248, 0.12)',
                    color: '#7dd3fc',
                    border: '1px solid rgba(56, 189, 248, 0.25)'
                  }}
                >
                  {exp.period}
                </span>
              </div>

              <p style={{ fontSize: '0.86rem', color: 'rgba(255, 255, 255, 0.75)', marginBottom: '12px', lineHeight: 1.5 }}>
                {exp.description}
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px' }}>
                {exp.responsibilities.map((resp, rIdx) => (
                  <li
                    key={rIdx}
                    style={{
                      fontSize: '0.83rem',
                      color: 'rgba(255, 255, 255, 0.8)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                      lineHeight: 1.5
                    }}
                  >
                    <CheckCircle2 size={14} style={{ color: '#38bdf8', marginTop: '3px', flexShrink: 0 }} />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {exp.tech.map((t, tIdx) => (
                  <span key={tIdx} className="badge-pill" style={{ fontSize: '0.7rem' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education Timeline */}
      <div>
        <h3
          style={{
            fontSize: '1rem',
            fontWeight: 600,
            color: '#fff',
            marginBottom: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <GraduationCap size={16} style={{ color: '#a855f7' }} />
          <span>Academic Background</span>
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{ padding: '18px', borderLeft: '3px solid #a855f7' }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '6px'
                }}
              >
                <div>
                  <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#fff' }}>{edu.institution}</h4>
                  <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.85rem' }}>{edu.degree}</p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      fontSize: '0.74rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      padding: '3px 8px',
                      borderRadius: '6px',
                      background: 'rgba(168, 85, 247, 0.15)',
                      color: '#c084fc',
                      border: '1px solid rgba(168, 85, 247, 0.3)'
                    }}
                  >
                    {edu.score}
                  </span>

                  <span
                    style={{
                      fontSize: '0.72rem',
                      color: 'rgba(255, 255, 255, 0.5)',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    {edu.period}
                  </span>
                </div>
              </div>

              <p style={{ fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.5)', marginBottom: '8px' }}>
                📍 {edu.location} • {edu.status}
              </p>

              {edu.highlights && (
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {edu.highlights.map((hl, hIdx) => (
                    <li
                      key={hIdx}
                      style={{
                        fontSize: '0.8rem',
                        color: 'rgba(255, 255, 255, 0.7)',
                        lineHeight: 1.4
                      }}
                    >
                      • {hl}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Languages & Soft Skills Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
        <div className="glass-card" style={{ padding: '16px' }}>
          <h4 style={{ fontSize: '0.88rem', fontWeight: 600, color: '#fbbf24', marginBottom: '10px' }}>
            🗣️ Spoken Languages
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.84rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>English</span>
              <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}>Professional Working</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Kannada</span>
              <span style={{ color: '#fbbf24' }}>Native / Fluent</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Hindi</span>
              <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}>Conversational</span>
            </div>
          </div>
        </div>

        <div className="glass-card" style={{ padding: '16px' }}>
          <h4 style={{ fontSize: '0.88rem', fontWeight: 600, color: '#34d399', marginBottom: '10px' }}>
            🤝 Soft Competencies
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            <span className="badge-pill badge-pill-emerald">Teamwork & Leadership</span>
            <span className="badge-pill badge-pill-emerald">Active Listening</span>
            <span className="badge-pill badge-pill-emerald">Rapid Adaptability</span>
            <span className="badge-pill badge-pill-emerald">Analytical Problem Solving</span>
          </div>
        </div>
      </div>
    </div>
  )
}
