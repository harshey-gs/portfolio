import React from 'react'
import { Printer, Download, ExternalLink, Award, CheckCircle, FileText } from 'lucide-react'
import { personalInfo, education, experience, projects, certifications } from '../../data/portfolioData'

export default function ResumeWindow({ onNotify }) {
  const handlePrint = () => {
    window.print()
    if (onNotify) onNotify('Print dialog opened! You can save as PDF.')
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Top Action Bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          paddingBottom: '16px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FileText size={18} style={{ color: '#a855f7' }} />
          <span style={{ fontSize: '0.92rem', fontWeight: 600, color: '#fff' }}>
            Curriculum Vitae • Harshitha G S
          </span>
          <span className="badge-pill badge-pill-emerald">Verified Resume</span>
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          <button onClick={handlePrint} className="glass-button glass-button-primary" style={{ padding: '8px 14px', fontSize: '0.8rem' }}>
            <Printer size={14} />
            <span>Print / Save as PDF</span>
          </button>
        </div>
      </div>

      {/* Styled Printable Resume Document Sheet */}
      <div
        id="printable-resume"
        style={{
          background: '#ffffff',
          color: '#1a1a1a',
          padding: '40px 48px',
          borderRadius: '12px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
          fontFamily: 'serif',
          lineHeight: 1.45
        }}
      >
        {/* Resume Header */}
        <div style={{ textAlign: 'center', borderBottom: '2px solid #222', paddingBottom: '12px', marginBottom: '16px' }}>
          <h1 style={{ fontSize: '2rem', letterSpacing: '2px', fontWeight: 800, textTransform: 'uppercase', margin: '0 0 6px 0', fontFamily: 'serif' }}>
            HARSHITHA G S
          </h1>
          <div style={{ fontSize: '0.82rem', color: '#333', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '14px', fontFamily: 'sans-serif' }}>
            <span>{personalInfo.email}</span>
            <span>•</span>
            <span>{personalInfo.phone}</span>
            <span>•</span>
            <span>{personalInfo.location}</span>
            <span>•</span>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" style={{ color: '#0066cc', textDecoration: 'none' }}>LinkedIn</a>
            <span>•</span>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" style={{ color: '#0066cc', textDecoration: 'none' }}>GitHub</a>
          </div>
          <div style={{ fontSize: '0.78rem', color: '#555', marginTop: '4px', fontFamily: 'sans-serif' }}>
            {personalInfo.address}
          </div>
        </div>

        {/* SUMMARY */}
        <div style={{ marginBottom: '16px' }}>
          <h2 style={{ fontSize: '0.95rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid #444', paddingBottom: '3px', margin: '0 0 6px 0', fontFamily: 'sans-serif' }}>
            SUMMARY
          </h2>
          <p style={{ fontSize: '0.86rem', color: '#222', margin: 0, fontFamily: 'serif' }}>
            {personalInfo.summary}
          </p>
        </div>

        {/* EDUCATION */}
        <div style={{ marginBottom: '16px' }}>
          <h2 style={{ fontSize: '0.95rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid #444', paddingBottom: '3px', margin: '0 0 8px 0', fontFamily: 'sans-serif' }}>
            EDUCATION
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.88rem' }}>
                <span>UG ECE</span>
                <span>Aug 2023 – Present</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem', fontStyle: 'italic' }}>
                <span>GM University</span>
                <span style={{ fontWeight: 600 }}>CGPA: 6.99</span>
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.88rem' }}>
                <span>Pre-University Course (PUC / 12th)</span>
                <span>Completed</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem', fontStyle: 'italic' }}>
                <span>Akshara PU College Shikaripura</span>
                <span style={{ fontWeight: 600 }}>CGPA: 88.33%</span>
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.88rem' }}>
                <span>SSLC / 10th Grade</span>
                <span>Completed</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem', fontStyle: 'italic' }}>
                <span>Banasiri Lions Educational Society(R) Shikaripura</span>
                <span style={{ fontWeight: 600 }}>CGPA: 87.04%</span>
              </div>
            </div>
          </div>
        </div>

        {/* PROFESSIONAL EXPERIENCE */}
        <div style={{ marginBottom: '16px' }}>
          <h2 style={{ fontSize: '0.95rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid #444', paddingBottom: '3px', margin: '0 0 8px 0', fontFamily: 'sans-serif' }}>
            PROFESSIONAL EXPERIENCE
          </h2>
          {experience.map((exp, idx) => (
            <div key={idx} style={{ marginBottom: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.88rem' }}>
                <span>{exp.role} @ {exp.company}</span>
                <span>{exp.period}</span>
              </div>
              <div style={{ fontSize: '0.82rem', color: '#555', fontStyle: 'italic', marginBottom: '4px' }}>
                {exp.type}
              </div>
              <ul style={{ margin: '0 0 4px 18px', padding: 0, fontSize: '0.84rem' }}>
                <li>Developed a Job Listing Portal with secure authentication, job management, and candidate tracking.</li>
                <li>Built a Certificate Verification System for certificate search, instant validation, and download using unique IDs.</li>
              </ul>
            </div>
          ))}
        </div>

        {/* PROJECTS */}
        <div style={{ marginBottom: '16px' }}>
          <h2 style={{ fontSize: '0.95rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid #444', paddingBottom: '3px', margin: '0 0 8px 0', fontFamily: 'sans-serif' }}>
            PROJECTS
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {projects.map((proj) => (
              <div key={proj.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.88rem' }}>
                  <span>{proj.title}</span>
                  <span style={{ fontWeight: 400, fontSize: '0.82rem' }}>{proj.period}</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: '#444', fontStyle: 'italic', marginBottom: '2px' }}>
                  Tech: {proj.technologies.join(', ')}
                </div>
                <div style={{ fontSize: '0.83rem', color: '#222' }}>
                  • {proj.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TECHNICAL SKILLS */}
        <div style={{ marginBottom: '16px' }}>
          <h2 style={{ fontSize: '0.95rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid #444', paddingBottom: '3px', margin: '0 0 6px 0', fontFamily: 'sans-serif' }}>
            TECHNICAL SKILLS
          </h2>
          <div style={{ fontSize: '0.84rem', lineHeight: 1.6, fontFamily: 'serif' }}>
            <div><strong>Technical Skills:</strong> Python • HTML • CSS • MERN • Embedded C • Verilog</div>
            <div><strong>Tools:</strong> GitHub • LabVIEW • Cadence • Multisim</div>
            <div><strong>Soft Skills:</strong> Teamwork • Adaptability • Active Listening</div>
            <div><strong>Languages:</strong> English • Kannada • Hindi</div>
          </div>
        </div>

        {/* CERTIFICATIONS */}
        <div>
          <h2 style={{ fontSize: '0.95rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '1px solid #444', paddingBottom: '3px', margin: '0 0 8px 0', fontFamily: 'sans-serif' }}>
            CERTIFICATIONS
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {certifications.map((cert) => (
              <div key={cert.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.86rem' }}>
                  <span>{cert.title}</span>
                  <span>{cert.date}</span>
                </div>
                <div style={{ fontSize: '0.82rem', color: '#555', fontStyle: 'italic' }}>
                  {cert.issuer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
