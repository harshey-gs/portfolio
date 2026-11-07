import React, { useState } from 'react'
import {
  Sparkles,
  ArrowRight,
  Download,
  Send,
  Cpu,
  Terminal,
  Code2,
  Briefcase,
  GraduationCap,
  MapPin,
  Mail,
  Phone,
  CheckCircle2,
  ExternalLink,
  Copy,
  Check,
  Award,
  Layers,
  ArrowUp
} from 'lucide-react'
import confetti from 'canvas-confetti'
import {
  personalInfo,
  education,
  experience,
  projects,
  skillCategories,
  certifications
} from '../data/portfolioData'

export default function ScrollFlowView({ onNotify, onSwitchToDesktop }) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [activeSkillCategory, setActiveSkillCategory] = useState(0)
  const [copiedItem, setCopiedItem] = useState('')
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const categories = ['All', 'Embedded & IoT', 'VLSI & Digital', 'Full-Stack Web', 'Hardware & Circuits']

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory)

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text)
    setCopiedItem(label)
    if (onNotify) onNotify(`${label} copied to clipboard!`)
    setTimeout(() => setCopiedItem(''), 2000)
  }

  const handleContactSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      try {
        confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } })
      } catch (err) {}
      if (onNotify) onNotify('Message sent successfully! Harshitha will reply soon.')
    }, 800)
  }

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', zIndex: 10 }}>
      {/* 1. HERO SECTION (Overlaid atop Meadow) */}
      <section
        id="hero"
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '120px 24px 60px',
          textAlign: 'center',
          position: 'relative'
        }}
      >
        <div
          style={{
            maxWidth: '840px',
            background: 'rgba(11, 15, 23, 0.72)',
            backdropFilter: 'blur(28px) saturate(180%)',
            WebkitBackdropFilter: 'blur(28px) saturate(180%)',
            border: '1px solid rgba(255, 255, 255, 0.16)',
            borderRadius: '28px',
            padding: '48px 36px',
            boxShadow: '0 30px 70px -10px rgba(0, 0, 0, 0.7), 0 0 40px rgba(245, 158, 11, 0.12)'
          }}
          className="animate-fade-in"
        >
          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '999px',
              background: 'rgba(245, 158, 11, 0.15)',
              border: '1px solid rgba(245, 158, 11, 0.35)',
              color: '#fbbf24',
              fontSize: '0.82rem',
              fontWeight: 600,
              marginBottom: '20px'
            }}
          >
            <Sparkles size={14} />
            <span>ECE Engineering Student • GM University</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              marginBottom: '16px',
              color: '#fff'
            }}
          >
            Bridging Silicon & Software: <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #fbbf24 0%, #f97316 45%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}
            >
              Hardware to Cloud.
            </span>
          </h1>

          <p
            style={{
              fontSize: 'clamp(0.95rem, 2vw, 1.12rem)',
              color: 'rgba(255, 255, 255, 0.82)',
              lineHeight: 1.6,
              maxWidth: '680px',
              margin: '0 auto 28px'
            }}
          >
            I am <strong style={{ color: '#fff' }}>Harshitha G S</strong>, an Electronics and Communication Engineering student with proven hands-on experience in <strong>VLSI & Verilog</strong>, <strong>Edge AI & Embedded IoT</strong>, and <strong>Full-Stack MERN Web Development</strong>.
          </p>

          {/* Quick CTA Buttons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              flexWrap: 'wrap',
              marginBottom: '32px'
            }}
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="glass-button glass-button-primary"
              style={{ padding: '12px 24px', fontSize: '0.94rem' }}
            >
              <span>Explore Projects (6)</span>
              <ArrowRight size={16} />
            </button>

            <button
              onClick={() => scrollToSection('about')}
              className="glass-button"
              style={{ padding: '12px 22px', fontSize: '0.94rem' }}
            >
              <span>About My Journey</span>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="glass-button"
              style={{ padding: '12px 22px', fontSize: '0.94rem' }}
            >
              <Send size={15} />
              <span>Contact Me</span>
            </button>
          </div>

          {/* Key Metrics Strip */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '12px',
              paddingTop: '20px',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fbbf24' }}>6+</div>
              <div style={{ fontSize: '0.74rem', color: 'rgba(255, 255, 255, 0.6)' }}>Engineered Projects</div>
            </div>
            <div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#38bdf8' }}>Internship</div>
              <div style={{ fontSize: '0.74rem', color: 'rgba(255, 255, 255, 0.6)' }}>Amdox Technologies</div>
            </div>
            <div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#10b981' }}>88.3%</div>
              <div style={{ fontSize: '0.74rem', color: 'rgba(255, 255, 255, 0.6)' }}>PUC Academic Score</div>
            </div>
            <div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#a855f7' }}>3+</div>
              <div style={{ fontSize: '0.74rem', color: 'rgba(255, 255, 255, 0.6)' }}>Bootcamps & Certs</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT ME & EXPERIENCE SECTION */}
      <section
        id="about"
        style={{
          padding: '80px 24px',
          maxWidth: '1100px',
          margin: '0 auto',
          position: 'relative'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <span className="badge-pill badge-pill-sky" style={{ marginBottom: '10px' }}>
            Background & Experience
          </span>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
            About Harshitha G S
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.94rem', maxWidth: '600px', margin: '8px auto 0' }}>
            Committed to engineering excellence across hardware microarchitectures and responsive web software.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {/* Bio Card */}
          <div className="glass-panel" style={{ padding: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '18px' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '18px',
                  background: 'linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.6rem',
                  fontWeight: 800,
                  color: '#000'
                }}
              >
                HG
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>{personalInfo.name}</h3>
                <p style={{ color: '#fbbf24', fontSize: '0.86rem', fontWeight: 600 }}>{personalInfo.title}</p>
                <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.78rem' }}>📍 {personalInfo.location}</p>
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', lineHeight: 1.65, color: 'rgba(255, 255, 255, 0.8)', marginBottom: '16px' }}>
              {personalInfo.summary}
            </p>

            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '16px' }}>
              <div style={{ fontSize: '0.84rem', fontWeight: 600, color: '#fbbf24', marginBottom: '8px' }}>
                🗣️ Multilingual Agility:
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span className="badge-pill">English (Professional)</span>
                <span className="badge-pill">Kannada (Native)</span>
                <span className="badge-pill">Hindi (Conversational)</span>
              </div>
            </div>
          </div>

          {/* Experience Card */}
          <div className="glass-panel" style={{ padding: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <Briefcase size={20} style={{ color: '#38bdf8' }} />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff' }}>
                Professional Experience
              </h3>
            </div>

            {experience.map((exp, idx) => (
              <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '18px', borderRadius: '14px', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>{exp.role}</h4>
                    <p style={{ color: '#38bdf8', fontSize: '0.84rem' }}>{exp.company} • {exp.type}</p>
                  </div>
                  <span className="badge-pill badge-pill-sky" style={{ fontSize: '0.7rem' }}>
                    {exp.period}
                  </span>
                </div>

                <p style={{ fontSize: '0.84rem', color: 'rgba(255, 255, 255, 0.75)', marginBottom: '12px', lineHeight: 1.5 }}>
                  {exp.description}
                </p>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '12px' }}>
                  {exp.responsibilities.map((r, rIdx) => (
                    <li key={rIdx} style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.8)', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <CheckCircle2 size={13} style={{ color: '#38bdf8', marginTop: '3px', flexShrink: 0 }} />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                  {exp.tech.map((t, tIdx) => (
                    <span key={tIdx} style={{ fontSize: '0.68rem', padding: '2px 7px', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.08)', color: 'rgba(255, 255, 255, 0.8)' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div style={{ marginTop: '28px' }}>
          <div className="glass-panel" style={{ padding: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <GraduationCap size={20} style={{ color: '#a855f7' }} />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff' }}>
                Academic Journey
              </h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              {education.map((edu, idx) => (
                <div key={idx} className="glass-card" style={{ padding: '18px', borderLeft: '3px solid #a855f7' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <h4 style={{ fontSize: '0.94rem', fontWeight: 700, color: '#fff' }}>{edu.institution}</h4>
                    <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#c084fc' }}>
                      {edu.score}
                    </span>
                  </div>
                  <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.82rem', marginBottom: '4px' }}>{edu.degree}</p>
                  <p style={{ fontSize: '0.74rem', color: 'rgba(255, 255, 255, 0.5)' }}>📍 {edu.location} • {edu.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL SKILLS SECTION */}
      <section
        id="skills"
        style={{
          padding: '80px 24px',
          maxWidth: '1100px',
          margin: '0 auto',
          position: 'relative'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="badge-pill badge-pill-emerald" style={{ marginBottom: '10px' }}>
            Capabilities & Toolchains
          </span>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
            Technical Competencies
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.94rem', maxWidth: '600px', margin: '8px auto 0' }}>
            From transistor-level modeling and hardware simulation to full-stack cloud software engineering.
          </p>
        </div>

        {/* Categories Bar */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '28px' }}>
          {skillCategories.map((cat, idx) => {
            const isSelected = activeSkillCategory === idx
            return (
              <button
                key={idx}
                onClick={() => setActiveSkillCategory(idx)}
                style={{
                  background: isSelected ? 'rgba(245, 158, 11, 0.25)' : 'rgba(255, 255, 255, 0.05)',
                  border: isSelected ? '1px solid #f59e0b' : '1px solid rgba(255, 255, 255, 0.1)',
                  color: isSelected ? '#fbbf24' : 'rgba(255, 255, 255, 0.7)',
                  padding: '9px 18px',
                  borderRadius: '12px',
                  fontSize: '0.86rem',
                  fontWeight: isSelected ? 600 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                {cat.title}
              </button>
            )
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="glass-panel" style={{ padding: '28px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '16px'
            }}
          >
            {skillCategories[activeSkillCategory].skills.map((skill, sIdx) => (
              <div
                key={sIdx}
                className="glass-card"
                style={{ padding: '16px' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontWeight: 600, fontSize: '0.92rem', color: '#fff' }}>{skill.name}</span>
                  <span style={{ fontSize: '0.7rem', color: '#fbbf24', background: 'rgba(245, 158, 11, 0.15)', padding: '2px 6px', borderRadius: '4px' }}>
                    {skill.tag}
                  </span>
                </div>

                <div style={{ width: '100%', height: '6px', borderRadius: '999px', background: 'rgba(255, 255, 255, 0.1)', overflow: 'hidden' }}>
                  <div
                    style={{
                      width: `${skill.level}%`,
                      height: '100%',
                      background: 'linear-gradient(90deg, #f59e0b, #ec4899)',
                      borderRadius: '999px'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROJECTS SECTION */}
      <section
        id="projects"
        style={{
          padding: '80px 24px',
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="badge-pill badge-pill-gold" style={{ marginBottom: '10px' }}>
            Featured Engineering
          </span>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
            Academic & Industry Projects
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.94rem', maxWidth: '600px', margin: '8px auto 0' }}>
            Real-world applications spanning VLSI design, AIoT smart agriculture, power electronics, and full-stack platforms.
          </p>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  background: isSelected ? 'rgba(245, 158, 11, 0.25)' : 'rgba(255, 255, 255, 0.05)',
                  border: isSelected ? '1px solid #f59e0b' : '1px solid rgba(255, 255, 255, 0.1)',
                  color: isSelected ? '#fbbf24' : 'rgba(255, 255, 255, 0.7)',
                  padding: '8px 16px',
                  borderRadius: '10px',
                  fontSize: '0.82rem',
                  fontWeight: isSelected ? 600 : 400,
                  cursor: 'pointer'
                }}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '20px'
          }}
        >
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="glass-panel"
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.2s ease, border-color 0.2s ease'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span className="badge-pill badge-pill-gold">{p.badge}</span>
                  <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'rgba(255, 255, 255, 0.45)' }}>
                    {p.period}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
                  {p.title}
                </h3>

                <p style={{ fontSize: '0.86rem', color: 'rgba(255, 255, 255, 0.76)', lineHeight: 1.6, marginBottom: '14px' }}>
                  {p.description}
                </p>

                {p.deliverables && (
                  <div style={{ marginBottom: '14px' }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#fbbf24', marginBottom: '6px' }}>
                      Key Deliverables:
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      {p.deliverables.slice(0, 2).map((d, dIdx) => (
                        <li key={dIdx} style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.75)', display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                          <CheckCircle2 size={13} style={{ color: '#10b981', marginTop: '3px', flexShrink: 0 }} />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '16px' }}>
                  {p.technologies.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        fontSize: '0.7rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '2px 8px',
                        borderRadius: '6px',
                        background: 'rgba(255, 255, 255, 0.08)',
                        color: 'rgba(255, 255, 255, 0.85)'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="glass-button"
                  style={{ width: '100%', fontSize: '0.82rem', padding: '8px' }}
                >
                  <span>Discuss Technical Details</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CERTIFICATIONS SECTION */}
      <section
        id="certifications"
        style={{
          padding: '80px 24px',
          maxWidth: '1100px',
          margin: '0 auto',
          position: 'relative'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="badge-pill badge-pill-sky" style={{ marginBottom: '10px' }}>
            Verified Accreditations
          </span>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
            Certifications & Leadership
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '18px' }}>
          {certifications.map((cert) => (
            <div key={cert.id} className="glass-panel" style={{ padding: '24px', borderLeft: '4px solid #f59e0b' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <span className="badge-pill badge-pill-gold" style={{ fontSize: '0.7rem' }}>
                  {cert.credential}
                </span>
                <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'rgba(255, 255, 255, 0.5)' }}>
                  {cert.date}
                </span>
              </div>

              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>
                {cert.title}
              </h4>

              <p style={{ color: '#38bdf8', fontSize: '0.84rem', fontWeight: 500, marginBottom: '10px' }}>
                {cert.issuer}
              </p>

              <p style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.72)', lineHeight: 1.5, marginBottom: '12px' }}>
                {cert.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {cert.skillsGained.map((sk, sIdx) => (
                  <span key={sIdx} className="badge-pill" style={{ fontSize: '0.68rem' }}>
                    {sk}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CONTACT SECTION */}
      <section
        id="contact"
        style={{
          padding: '80px 24px 120px',
          maxWidth: '1000px',
          margin: '0 auto',
          position: 'relative'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="badge-pill badge-pill-emerald" style={{ marginBottom: '10px' }}>
            Get in Touch
          </span>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
            Contact Harshitha
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.94rem', maxWidth: '560px', margin: '8px auto 0' }}>
            Let's discuss opportunities, internships, hardware projects, or innovative web development.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {/* Direct channels */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div className="glass-panel" style={{ padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(244, 63, 94, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f43f5e' }}>
                  <Mail size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.74rem', color: 'rgba(255, 255, 255, 0.5)' }}>Direct Email</div>
                  <div style={{ fontSize: '0.86rem', fontWeight: 600, color: '#fff' }}>{personalInfo.email}</div>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personalInfo.email, 'Email')}
                className="glass-button"
                style={{ padding: '6px 10px', fontSize: '0.74rem' }}
              >
                {copiedItem === 'Email' ? <Check size={12} /> : <Copy size={12} />}
                <span>{copiedItem === 'Email' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div className="glass-panel" style={{ padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981' }}>
                  <Phone size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.74rem', color: 'rgba(255, 255, 255, 0.5)' }}>Phone</div>
                  <div style={{ fontSize: '0.86rem', fontWeight: 600, color: '#fff' }}>{personalInfo.phoneDisplay}</div>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personalInfo.phone, 'Phone')}
                className="glass-button"
                style={{ padding: '6px 10px', fontSize: '0.74rem' }}
              >
                {copiedItem === 'Phone' ? <Check size={12} /> : <Copy size={12} />}
                <span>{copiedItem === 'Phone' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div className="glass-panel" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(245, 158, 11, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f59e0b' }}>
                <MapPin size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.74rem', color: 'rgba(255, 255, 255, 0.5)' }}>Location</div>
                <div style={{ fontSize: '0.84rem', color: '#fff' }}>{personalInfo.address}</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="glass-panel" style={{ padding: '28px' }}>
            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)', border: '2px solid #10b981', margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981' }}>
                  <Check size={26} />
                </div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>Message Sent!</h4>
                <p style={{ fontSize: '0.86rem', color: 'rgba(255, 255, 255, 0.75)', marginBottom: '16px' }}>
                  Thank you for reaching out. Harshitha will respond to you directly.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false)
                    setFormData({ name: '', email: '', subject: '', message: '' })
                  }}
                  className="glass-button"
                  style={{ fontSize: '0.8rem' }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>Send a Message</h4>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <input
                    type="text"
                    required
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ padding: '10px 14px', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', color: '#fff', fontSize: '0.84rem', outline: 'none' }}
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ padding: '10px 14px', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', color: '#fff', fontSize: '0.84rem', outline: 'none' }}
                  />
                </div>

                <input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  style={{ padding: '10px 14px', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', color: '#fff', fontSize: '0.84rem', outline: 'none' }}
                />

                <textarea
                  required
                  rows={4}
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{ padding: '10px 14px', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', color: '#fff', fontSize: '0.84rem', outline: 'none', resize: 'vertical' }}
                />

                <button type="submit" disabled={isSubmitting} className="glass-button glass-button-primary" style={{ padding: '12px' }}>
                  {isSubmitting ? 'Sending...' : 'Send Message to Harshitha'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          background: 'rgba(11, 15, 23, 0.85)',
          backdropFilter: 'blur(16px)',
          padding: '24px',
          textAlign: 'center',
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize: '0.82rem'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', marginBottom: '10px' }}>
          <button
            onClick={onSwitchToDesktop}
            className="glass-button"
            style={{ fontSize: '0.74rem', padding: '6px 12px' }}
          >
            <span>Switch to 3D Desktop OS View</span>
          </button>

          <button
            onClick={() => scrollToSection('hero')}
            className="glass-button"
            style={{ fontSize: '0.74rem', padding: '6px 12px' }}
          >
            <ArrowUp size={12} />
            <span>Back to Top</span>
          </button>
        </div>

        <p>© 2026 Harshitha G S • Electronics & Communication Engineering • Built with React & Three.js</p>
      </footer>
    </div>
  )
}
