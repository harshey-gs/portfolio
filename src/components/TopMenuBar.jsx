import React, { useState, useEffect } from 'react'
import { Sparkles, Sun, Moon, Sunset, Laptop, Layers, Terminal, ExternalLink } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

export default function TopMenuBar({
  viewMode,
  setViewMode,
  dayTime,
  setDayTime,
  activeWindowCount,
  onOpenWindow
}) {
  const [timeStr, setTimeStr] = useState('')
  const [dateStr, setDateStr] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTimeStr(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      )
      setDateStr(
        now.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })
      )
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '42px',
        background: 'rgba(11, 15, 23, 0.78)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 16px',
        fontSize: '0.82rem',
        userSelect: 'none',
        color: 'var(--text-secondary)'
      }}
    >
      {/* Left section: OS Logo & Menus */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div
          onClick={() => onOpenWindow && onOpenWindow('about')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#fff',
            fontWeight: 700,
            cursor: 'pointer',
            padding: '4px 8px',
            borderRadius: '6px',
            transition: 'background 0.15s ease'
          }}
          className="hover:bg-white/10"
          title="Harshitha G S - ECE Portfolio OS"
        >
          <span style={{ fontSize: '1.05rem' }}>🌸</span>
          <span style={{ letterSpacing: '-0.01em' }}>Harshitha G S</span>
          <span
            style={{
              fontSize: '0.68rem',
              padding: '2px 6px',
              borderRadius: '4px',
              background: 'rgba(245, 158, 11, 0.2)',
              color: '#fbbf24',
              fontWeight: 600,
              border: '1px solid rgba(245, 158, 11, 0.3)'
            }}
          >
            ECE v2.0
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="hidden sm:flex">
          {['projects', 'about', 'skills', 'resume', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => {
                if (viewMode === 'flow') {
                  const targetId = item === 'resume' ? 'certifications' : item
                  const el = document.getElementById(targetId)
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                } else {
                  if (onOpenWindow) onOpenWindow(item)
                }
              }}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'rgba(255, 255, 255, 0.7)',
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '0.8rem',
                cursor: 'pointer',
                textTransform: 'capitalize',
                transition: 'all 0.15s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#fff'
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Center: Status pill */}
      <div
        className="hidden md:flex"
        style={{
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(16, 185, 129, 0.12)',
          border: '1px solid rgba(16, 185, 129, 0.25)',
          padding: '3px 12px',
          borderRadius: '999px',
          fontSize: '0.75rem',
          color: '#34d399'
        }}
      >
        <span
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#10b981',
            boxShadow: '0 0 8px #10b981'
          }}
        />
        <span>Open to ECE & Web Internships</span>
      </div>

      {/* Right section: Controls, Time & Mode Toggle */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {/* Sun/Sunset/Moon time presets */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(255, 255, 255, 0.06)',
            borderRadius: '8px',
            padding: '2px',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}
          title="Meadow Sky Time of Day"
        >
          <button
            onClick={() => setDayTime(18)}
            style={{
              background: dayTime === 18 ? 'rgba(245, 158, 11, 0.3)' : 'transparent',
              border: 'none',
              padding: '4px 6px',
              borderRadius: '6px',
              cursor: 'pointer',
              color: dayTime === 18 ? '#fbbf24' : 'rgba(255, 255, 255, 0.5)',
              display: 'flex',
              alignItems: 'center'
            }}
            title="Golden Sunset (18h)"
          >
            <Sunset size={14} />
          </button>
          <button
            onClick={() => setDayTime(12)}
            style={{
              background: dayTime === 12 ? 'rgba(56, 189, 248, 0.3)' : 'transparent',
              border: 'none',
              padding: '4px 6px',
              borderRadius: '6px',
              cursor: 'pointer',
              color: dayTime === 12 ? '#38bdf8' : 'rgba(255, 255, 255, 0.5)',
              display: 'flex',
              alignItems: 'center'
            }}
            title="High Noon Sky (12h)"
          >
            <Sun size={14} />
          </button>
          <button
            onClick={() => setDayTime(0)}
            style={{
              background: dayTime === 0 ? 'rgba(167, 139, 250, 0.3)' : 'transparent',
              border: 'none',
              padding: '4px 6px',
              borderRadius: '6px',
              cursor: 'pointer',
              color: dayTime === 0 ? '#c084fc' : 'rgba(255, 255, 255, 0.5)',
              display: 'flex',
              alignItems: 'center'
            }}
            title="Starry Night (0h)"
          >
            <Moon size={14} />
          </button>
        </div>

        {/* View mode switcher */}
        <button
          onClick={() => setViewMode(viewMode === 'desktop' ? 'flow' : 'desktop')}
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#fff',
            padding: '4px 10px',
            borderRadius: '8px',
            fontSize: '0.76rem',
            fontWeight: 500,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
          title={viewMode === 'desktop' ? 'Switch to Scroll Flow View' : 'Switch to Desktop OS View'}
        >
          {viewMode === 'desktop' ? (
            <>
              <Layers size={13} style={{ color: '#fbbf24' }} />
              <span className="hidden sm:inline">Scroll View</span>
            </>
          ) : (
            <>
              <Laptop size={13} style={{ color: '#38bdf8' }} />
              <span className="hidden sm:inline">Desktop OS</span>
            </>
          )}
        </button>

        {/* Live Clock */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.78rem',
            fontFamily: 'var(--font-mono)',
            color: 'rgba(255, 255, 255, 0.85)',
            letterSpacing: '0.02em'
          }}
        >
          <span className="hidden lg:inline" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
            {dateStr}
          </span>
          <span>{timeStr}</span>
        </div>
      </div>
    </header>
  )
}
