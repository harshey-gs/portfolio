import React from 'react'
import { FolderGit2, User, Cpu, FileText, Mail, Sliders, Award, Sparkles } from 'lucide-react'

export default function DesktopIcons({ onOpenWindow }) {
  const icons = [
    {
      id: 'projects',
      label: 'Projects.dir',
      icon: FolderGit2,
      color: '#f59e0b',
      badge: '6 items'
    },
    {
      id: 'about',
      label: 'About_Harshitha',
      icon: User,
      color: '#38bdf8',
      badge: 'Profile'
    },
    {
      id: 'skills',
      label: 'Tech_Skills.stack',
      icon: Cpu,
      color: '#10b981',
      badge: 'VLSI & Web'
    },
    {
      id: 'resume',
      label: 'Resume_Harshitha.pdf',
      icon: FileText,
      color: '#a855f7',
      badge: 'Education'
    },
    {
      id: 'contact',
      label: 'Contact_Me.msg',
      icon: Mail,
      color: '#f43f5e',
      badge: 'Available'
    },
    {
      id: 'meadow',
      label: 'Meadow_Lab.3d',
      icon: Sliders,
      color: '#fb923c',
      badge: 'Three.js'
    }
  ]

  return (
    <div
      style={{
        position: 'absolute',
        top: '64px',
        left: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        zIndex: 10,
        pointerEvents: 'auto'
      }}
    >
      {icons.map((item) => {
        const Icon = item.icon
        return (
          <div
            key={item.id}
            onClick={() => onOpenWindow(item.id)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '84px',
              cursor: 'pointer',
              userSelect: 'none',
              padding: '8px 4px',
              borderRadius: '10px',
              transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            className="group"
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
            }}
          >
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                background: 'rgba(16, 21, 30, 0.72)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.16)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 20px -3px rgba(0, 0, 0, 0.4)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = `0 12px 25px -4px ${item.color}44, 0 0 15px ${item.color}22`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 8px 20px -3px rgba(0, 0, 0, 0.4)'
              }}
            >
              <Icon size={26} style={{ color: item.color }} />
            </div>

            <span
              style={{
                marginTop: '6px',
                fontSize: '0.72rem',
                color: '#fff',
                textAlign: 'center',
                fontWeight: 500,
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)',
                letterSpacing: '-0.01em',
                maxWidth: '82px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}
            >
              {item.label}
            </span>
          </div>
        )
      })}
    </div>
  )
}
