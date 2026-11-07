import React, { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
  MessageSquare
} from 'lucide-react'
import confetti from 'canvas-confetti'
import { personalInfo } from '../../data/portfolioData'

function LinkedInIcon({ size = 16, style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.69 1.69 0 1 0 0-3.38 1.69 1.69 0 0 0 0 3.38m1.4 9.74V9.97H5.06v8.53h2.8z" />
    </svg>
  )
}

function GitHubIcon({ size = 16, style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

export default function ContactWindow({ onNotify }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [copiedItem, setCopiedItem] = useState('')

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text)
    setCopiedItem(label)
    if (onNotify) onNotify(`${label} copied to clipboard!`)
    setTimeout(() => setCopiedItem(''), 2500)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Fire celebratory confetti!
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        })
      } catch (err) {
        // graceful fallback if canvas not available
      }

      if (onNotify) onNotify('Message sent successfully! Harshitha will reply shortly.')
    }, 900)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Intro Header */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <Sparkles size={16} style={{ color: '#f59e0b' }} />
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>
            Let's Collaborate or Connect
          </h3>
        </div>
        <p style={{ fontSize: '0.86rem', color: 'rgba(255, 255, 255, 0.72)', lineHeight: 1.5 }}>
          Whether you're looking for an ECE intern in VLSI / Embedded Systems, a MERN stack developer, or want to discuss an innovative project, feel free to drop a message!
        </p>
      </div>

      {/* Grid: Direct Contact Channels + Form */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
          gap: '20px'
        }}
      >
        {/* Left: Direct Channels Card */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {/* Email card */}
          <div
            className="glass-card"
            style={{
              padding: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(244, 63, 94, 0.15)',
                  border: '1px solid rgba(244, 63, 94, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#f43f5e'
                }}
              >
                <Mail size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.74rem', color: 'rgba(255, 255, 255, 0.5)' }}>Direct Email</div>
                <div style={{ fontSize: '0.84rem', fontWeight: 600, color: '#fff' }}>
                  {personalInfo.email}
                </div>
              </div>
            </div>

            <button
              onClick={() => handleCopy(personalInfo.email, 'Email')}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: copiedItem === 'Email' ? '#10b981' : '#fff',
                padding: '6px 10px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '0.74rem',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
              title="Copy Email"
            >
              {copiedItem === 'Email' ? <Check size={13} /> : <Copy size={13} />}
              <span>{copiedItem === 'Email' ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {/* Phone card */}
          <div
            className="glass-card"
            style={{
              padding: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#10b981'
                }}
              >
                <Phone size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.74rem', color: 'rgba(255, 255, 255, 0.5)' }}>Phone Number</div>
                <div style={{ fontSize: '0.84rem', fontWeight: 600, color: '#fff' }}>
                  {personalInfo.phoneDisplay}
                </div>
              </div>
            </div>

            <button
              onClick={() => handleCopy(personalInfo.phone, 'Phone')}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: copiedItem === 'Phone' ? '#10b981' : '#fff',
                padding: '6px 10px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '0.74rem',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
              title="Copy Phone"
            >
              {copiedItem === 'Phone' ? <Check size={13} /> : <Copy size={13} />}
              <span>{copiedItem === 'Phone' ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {/* Location card */}
          <div
            className="glass-card"
            style={{
              padding: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(245, 158, 11, 0.15)',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#f59e0b',
                flexShrink: 0
              }}
            >
              <MapPin size={18} />
            </div>
            <div>
              <div style={{ fontSize: '0.74rem', color: 'rgba(255, 255, 255, 0.5)' }}>Location</div>
              <div style={{ fontSize: '0.82rem', fontWeight: 500, color: '#fff', lineHeight: 1.4 }}>
                {personalInfo.address}
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="glass-card"
              style={{
                padding: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                color: '#fff',
                fontSize: '0.82rem',
                fontWeight: 500
              }}
            >
              <LinkedInIcon size={16} style={{ color: '#0077b5' }} />
              <span>LinkedIn</span>
              <ExternalLink size={12} style={{ marginLeft: 'auto', opacity: 0.5 }} />
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="glass-card"
              style={{
                padding: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                color: '#fff',
                fontSize: '0.82rem',
                fontWeight: 500
              }}
            >
              <GitHubIcon size={16} style={{ color: '#fbbf24' }} />
              <span>GitHub</span>
              <ExternalLink size={12} style={{ marginLeft: 'auto', opacity: 0.5 }} />
            </a>
          </div>
        </div>

        {/* Right: Interactive Message Form */}
        <div className="glass-card" style={{ padding: '22px' }}>
          {isSubmitted ? (
            <div
              style={{
                textAlign: 'center',
                padding: '30px 10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px'
              }}
              className="animate-fade-in"
            >
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.2)',
                  border: '2px solid #10b981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#10b981'
                }}
              >
                <Check size={28} />
              </div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>
                Thank You, {formData.name}!
              </h4>
              <p style={{ fontSize: '0.86rem', color: 'rgba(255, 255, 255, 0.75)', maxWidth: '320px' }}>
                Your message has been dispatched to Harshitha's inbox. She will get back to you promptly.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false)
                  setFormData({ name: '', email: '', subject: '', message: '' })
                }}
                className="glass-button"
                style={{ marginTop: '8px', fontSize: '0.8rem' }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <h4 style={{ fontSize: '0.98rem', fontWeight: 600, color: '#fff', marginBottom: '2px' }}>
                Send a Direct Message
              </h4>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.74rem', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '4px' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    style={{
                      width: '100%',
                      padding: '9px 12px',
                      background: 'rgba(0, 0, 0, 0.4)',
                      border: '1px solid rgba(255, 255, 255, 0.14)',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '0.84rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.74rem', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '4px' }}>
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    style={{
                      width: '100%',
                      padding: '9px 12px',
                      background: 'rgba(0, 0, 0, 0.4)',
                      border: '1px solid rgba(255, 255, 255, 0.14)',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '0.84rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.74rem', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '4px' }}>
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Internship opportunity / Collaboration"
                  style={{
                    width: '100%',
                    padding: '9px 12px',
                    background: 'rgba(0, 0, 0, 0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.14)',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '0.84rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.74rem', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '4px' }}>
                  Your Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Harshitha, we reviewed your projects and would love to connect..."
                  style={{
                    width: '100%',
                    padding: '9px 12px',
                    background: 'rgba(0, 0, 0, 0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.14)',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '0.84rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="glass-button glass-button-primary"
                style={{ width: '100%', padding: '11px', marginTop: '4px' }}
              >
                {isSubmitting ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <Send size={15} />
                    <span>Send Message to Harshitha</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
