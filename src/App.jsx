import React, { useState, useEffect } from 'react'
import MeadowBlush from './components/MeadowBlush'
import TopMenuBar from './components/TopMenuBar'
import DesktopIcons from './components/DesktopIcons'
import DesktopWindow from './components/DesktopWindow'
import HeroCard from './components/HeroCard'
import Dock from './components/Dock'
import ScrollFlowView from './components/ScrollFlowView'

// Windows
import AboutWindow from './components/windows/AboutWindow'
import ProjectsWindow from './components/windows/ProjectsWindow'
import SkillsWindow from './components/windows/SkillsWindow'
import ResumeWindow from './components/windows/ResumeWindow'
import ContactWindow from './components/windows/ContactWindow'
import MeadowSettingsWindow from './components/windows/MeadowSettingsWindow'

import {
  FolderGit2,
  User,
  Cpu,
  FileText,
  Mail,
  Sliders,
  CheckCircle,
  Bell
} from 'lucide-react'

export default function App() {
  const [viewMode, setViewMode] = useState('desktop')
  const [zIndexCounter, setZIndexCounter] = useState(20)

  // 3D Voxel Meadow Configuration
  const [meadowConfig, setMeadowConfig] = useState({
    wind: 10,
    grass: 5,
    flowers: 3.7,
    cloudSpeed: 3,
    dayTime: 18, // 18:00 Sunset default
    dayCycle: false
  })

  // Desktop OS Windows State
  const [windows, setWindows] = useState({
    projects: {
      isOpen: true,
      isMinimized: false,
      zIndex: 10,
      initialPosition: { x: 70, y: 65 },
      initialSize: { width: 840, height: 580 }
    },
    about: {
      isOpen: false,
      isMinimized: false,
      zIndex: 11,
      initialPosition: { x: 120, y: 75 },
      initialSize: { width: 780, height: 560 }
    },
    skills: {
      isOpen: false,
      isMinimized: false,
      zIndex: 12,
      initialPosition: { x: 180, y: 90 },
      initialSize: { width: 780, height: 560 }
    },
    resume: {
      isOpen: false,
      isMinimized: false,
      zIndex: 13,
      initialPosition: { x: 200, y: 70 },
      initialSize: { width: 820, height: 620 }
    },
    contact: {
      isOpen: false,
      isMinimized: false,
      zIndex: 14,
      initialPosition: { x: 160, y: 90 },
      initialSize: { width: 760, height: 540 }
    },
    meadow: {
      isOpen: false,
      isMinimized: false,
      zIndex: 15,
      initialPosition: { x: 220, y: 100 },
      initialSize: { width: 680, height: 480 }
    }
  })

  // Toasts
  const [toasts, setToasts] = useState([])

  const addToast = (message) => {
    const id = Date.now() + Math.random()
    setToasts((prev) => [...prev, { id, message }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 3500)
  }

  // Auto-adapt on small mobile screens: open in Flow View by default
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setViewMode('flow')
    }
  }, [])

  const bringToFront = (id) => {
    setZIndexCounter((prev) => {
      const nextZ = prev + 1
      setWindows((w) => ({
        ...w,
        [id]: {
          ...w[id],
          isOpen: true,
          isMinimized: false,
          zIndex: nextZ
        }
      }))
      return nextZ
    })
  }

  const openWindow = (id) => {
    bringToFront(id)
  }

  const closeWindow = (id) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isOpen: false }
    }))
  }

  const minimizeWindow = (id) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isMinimized: true }
    }))
  }

  const handleDockClick = (id) => {
    if (windows[id]?.isOpen && !windows[id]?.isMinimized) {
      minimizeWindow(id)
    } else {
      bringToFront(id)
    }
  }

  const activeWindowCount = Object.values(windows).filter((w) => w.isOpen && !w.isMinimized).length

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        minHeight: '100vh',
        overflowX: 'hidden',
        background: '#0b0f17'
      }}
    >
      {/* 3D Voxel Meadow Background (Fixed) */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1,
          pointerEvents: viewMode === 'desktop' ? 'auto' : 'none',
          opacity: viewMode === 'flow' ? 0.35 : 1,
          transition: 'opacity 0.4s ease'
        }}
      >
        <MeadowBlush
          flowers={meadowConfig.flowers}
          grass={meadowConfig.grass}
          wind={meadowConfig.wind}
          speed={10}
          cloudSpeed={meadowConfig.cloudSpeed}
          day={{
            cycle: meadowConfig.dayCycle,
            time: meadowConfig.dayTime,
            length: 90
          }}
        />
      </div>

      {/* Top Menu Bar (macOS / Framer style) */}
      <TopMenuBar
        viewMode={viewMode}
        setViewMode={setViewMode}
        dayTime={meadowConfig.dayTime}
        setDayTime={(t) => setMeadowConfig((prev) => ({ ...prev, dayTime: t }))}
        activeWindowCount={activeWindowCount}
        onOpenWindow={openWindow}
      />

      {/* View Mode: Desktop OS View */}
      {viewMode === 'desktop' && (
        <main style={{ position: 'relative', width: '100%', height: '100vh', zIndex: 10 }}>
          {/* Desktop App Icons */}
          <DesktopIcons onOpenWindow={openWindow} />

          {/* Hero Welcome Card (Centered or top-right) */}
          <HeroCard
            onOpenWindow={openWindow}
            onViewScroll={() => setViewMode('flow')}
          />

          {/* Desktop Windows */}
          {/* 1. Projects Window */}
          <DesktopWindow
            id="projects"
            title="Projects & Engineering Blueprints"
            badge="6 Projects"
            icon={<FolderGit2 size={16} style={{ color: '#f59e0b' }} />}
            isOpen={windows.projects.isOpen}
            isMinimized={windows.projects.isMinimized}
            zIndex={windows.projects.zIndex}
            initialPosition={windows.projects.initialPosition}
            initialSize={windows.projects.initialSize}
            onClose={() => closeWindow('projects')}
            onMinimize={() => minimizeWindow('projects')}
            onFocus={() => bringToFront('projects')}
          >
            <ProjectsWindow onOpenWindow={openWindow} onNotify={addToast} />
          </DesktopWindow>

          {/* 2. About Window */}
          <DesktopWindow
            id="about"
            title="About Harshitha G S — Profile & Experience"
            badge="ECE Engineer"
            icon={<User size={16} style={{ color: '#38bdf8' }} />}
            isOpen={windows.about.isOpen}
            isMinimized={windows.about.isMinimized}
            zIndex={windows.about.zIndex}
            initialPosition={windows.about.initialPosition}
            initialSize={windows.about.initialSize}
            onClose={() => closeWindow('about')}
            onMinimize={() => minimizeWindow('about')}
            onFocus={() => bringToFront('about')}
          >
            <AboutWindow onOpenWindow={openWindow} onNotify={addToast} />
          </DesktopWindow>

          {/* 3. Skills Window */}
          <DesktopWindow
            id="skills"
            title="Technical Skills & Hardware-Software Stack"
            badge="VLSI & MERN"
            icon={<Cpu size={16} style={{ color: '#10b981' }} />}
            isOpen={windows.skills.isOpen}
            isMinimized={windows.skills.isMinimized}
            zIndex={windows.skills.zIndex}
            initialPosition={windows.skills.initialPosition}
            initialSize={windows.skills.initialSize}
            onClose={() => closeWindow('skills')}
            onMinimize={() => minimizeWindow('skills')}
            onFocus={() => bringToFront('skills')}
          >
            <SkillsWindow />
          </DesktopWindow>

          {/* 4. Resume Window */}
          <DesktopWindow
            id="resume"
            title="Curriculum Vitae — Verified Credentials"
            badge="Printable"
            icon={<FileText size={16} style={{ color: '#a855f7' }} />}
            isOpen={windows.resume.isOpen}
            isMinimized={windows.resume.isMinimized}
            zIndex={windows.resume.zIndex}
            initialPosition={windows.resume.initialPosition}
            initialSize={windows.resume.initialSize}
            onClose={() => closeWindow('resume')}
            onMinimize={() => minimizeWindow('resume')}
            onFocus={() => bringToFront('resume')}
          >
            <ResumeWindow onNotify={addToast} />
          </DesktopWindow>

          {/* 5. Contact Window */}
          <DesktopWindow
            id="contact"
            title="Get in Touch — Message & Contacts"
            badge="Available for Hire"
            icon={<Mail size={16} style={{ color: '#f43f5e' }} />}
            isOpen={windows.contact.isOpen}
            isMinimized={windows.contact.isMinimized}
            zIndex={windows.contact.zIndex}
            initialPosition={windows.contact.initialPosition}
            initialSize={windows.contact.initialSize}
            onClose={() => closeWindow('contact')}
            onMinimize={() => minimizeWindow('contact')}
            onFocus={() => bringToFront('contact')}
          >
            <ContactWindow onNotify={addToast} />
          </DesktopWindow>

          {/* 6. 3D Meadow Lab Settings */}
          <DesktopWindow
            id="meadow"
            title="3D Sunset Meadow Physical Controls"
            badge="Three.js Lab"
            icon={<Sliders size={16} style={{ color: '#fb923c' }} />}
            isOpen={windows.meadow.isOpen}
            isMinimized={windows.meadow.isMinimized}
            zIndex={windows.meadow.zIndex}
            initialPosition={windows.meadow.initialPosition}
            initialSize={windows.meadow.initialSize}
            onClose={() => closeWindow('meadow')}
            onMinimize={() => minimizeWindow('meadow')}
            onFocus={() => bringToFront('meadow')}
          >
            <MeadowSettingsWindow
              meadowConfig={meadowConfig}
              setMeadowConfig={setMeadowConfig}
            />
          </DesktopWindow>

          {/* Bottom Floating Glass Dock */}
          <Dock
            openWindows={windows}
            onOpenWindow={handleDockClick}
            viewMode={viewMode}
            setViewMode={setViewMode}
          />
        </main>
      )}

      {/* View Mode: Scroll Flow View */}
      {viewMode === 'flow' && (
        <ScrollFlowView
          onNotify={addToast}
          onSwitchToDesktop={() => setViewMode('desktop')}
        />
      )}

      {/* Toast Notification Container */}
      <div className="toast-container">
        {toasts.map((t) => (
          <div key={t.id} className="toast-item">
            <CheckCircle size={16} style={{ color: '#10b981' }} />
            <span>{t.message}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
