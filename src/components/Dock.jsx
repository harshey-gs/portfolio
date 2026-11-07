import React, { useState } from 'react'
import {
  FolderGit2,
  User,
  Cpu,
  FileText,
  Mail,
  Sliders,
  Compass,
  Layers,
  Sparkles
} from 'lucide-react'

export default function Dock({ openWindows, onOpenWindow, viewMode, setViewMode }) {
  const [hoveredIdx, setHoveredIdx] = useState(null)

  const dockItems = [
    { id: 'projects', label: 'Projects', icon: FolderGit2, color: '#f59e0b', badge: '6' },
    { id: 'about', label: 'About Me', icon: User, color: '#38bdf8' },
    { id: 'skills', label: 'Skills', icon: Cpu, color: '#10b981' },
    { id: 'resume', label: 'Resume', icon: FileText, color: '#a855f7' },
    { id: 'contact', label: 'Contact', icon: Mail, color: '#f43f5e' },
    { id: 'meadow', label: '3D Meadow', icon: Sliders, color: '#fb923c' }
  ]

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '16px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 40,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 14px',
        background: 'rgba(16, 20, 28, 0.75)',
        backdropFilter: 'blur(25px) saturate(160%)',
        WebkitBackdropFilter: 'blur(25px) saturate(160%)',
        border: '1px solid rgba(255, 255, 255, 0.16)',
        borderRadius: '24px',
        boxShadow:
          '0 20px 40px -10px rgba(0, 0, 0, 0.6), 0 0 20px rgba(245, 158, 11, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.08)'
      }}
    >
      {dockItems.map((item, idx) => {
        const Icon = item.icon
        const isOpen = openWindows[item.id]?.isOpen
        const isHovered = hoveredIdx === idx
        const isNeighbor = Math.abs((hoveredIdx ?? -99) - idx) === 1

        let scale = 1
        if (isHovered) scale = 1.25
        else if (isNeighbor) scale = 1.1

        return (
          <div
            key={item.id}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            onClick={() => onOpenWindow(item.id)}
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
              userSelect: 'none'
            }}
          >
            {/* Tooltip */}
            {isHovered && (
              <div
                style={{
                  position: 'absolute',
                  top: '-36px',
                  background: 'rgba(11, 15, 23, 0.95)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#fff',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  padding: '3px 9px',
                  borderRadius: '6px',
                  whiteSpace: 'nowrap',
                  pointerEvents: 'none',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
                }}
                className="animate-fade-in"
              >
                {item.label}
              </div>
            )}

            {/* Icon button */}
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '14px',
                background: isOpen
                  ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.08) 100%)'
                  : 'rgba(255, 255, 255, 0.06)',
                border: isOpen
                  ? `1px solid ${item.color}88`
                  : '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: `scale(${scale}) translateY(${isHovered ? '-6px' : '0'})`,
                transition: 'transform 0.18s cubic-bezier(0.16, 1, 0.3, 1), background 0.2s',
                boxShadow: isHovered
                  ? `0 10px 20px -5px ${item.color}55, 0 0 15px ${item.color}33`
                  : 'none'
              }}
            >
              <Icon size={22} style={{ color: item.color }} />

              {/* Notification badge if any */}
              {item.badge && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-4px',
                    right: '-4px',
                    background: '#f59e0b',
                    color: '#000',
                    fontSize: '0.62rem',
                    fontWeight: 700,
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  {item.badge}
                </span>
              )}
            </div>

            {/* Open indicator dot */}
            <div
              style={{
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                marginTop: '4px',
                background: isOpen ? item.color : 'transparent',
                boxShadow: isOpen ? `0 0 6px ${item.color}` : 'none',
                transition: 'all 0.2s ease'
              }}
            />
          </div>
        )
      })}

      <div
        style={{
          width: '1px',
          height: '28px',
          background: 'rgba(255, 255, 255, 0.12)',
          margin: '0 4px'
        }}
      />

      {/* View Switcher dock item */}
      <div
        onClick={() => setViewMode(viewMode === 'desktop' ? 'flow' : 'desktop')}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          cursor: 'pointer'
        }}
        title="Toggle Scroll View"
      >
        <div
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '14px',
            background: 'rgba(245, 158, 11, 0.12)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.18s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.15) translateY(-4px)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1) translateY(0)')}
        >
          <Layers size={20} style={{ color: '#fbbf24' }} />
        </div>
        <div style={{ width: '4px', height: '4px', marginTop: '4px' }} />
      </div>
    </div>
  )
}
