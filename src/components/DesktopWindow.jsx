import React, { useState, useRef, useEffect } from 'react'
import { Minus, Square, X, Maximize2, Minimize2 } from 'lucide-react'

export default function DesktopWindow({
  id,
  title,
  icon,
  badge,
  isOpen,
  isMinimized,
  zIndex,
  initialPosition = { x: 80, y: 70 },
  initialSize = { width: 780, height: 560 },
  onClose,
  onMinimize,
  onFocus,
  children
}) {
  const [position, setPosition] = useState(initialPosition)
  const [size, setSize] = useState(initialSize)
  const [isMaximized, setIsMaximized] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const dragRef = useRef({ startX: 0, startY: 0, initialX: 0, initialY: 0 })
  const windowRef = useRef(null)

  // Recenter if viewport is smaller than window
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const vw = window.innerWidth
      const vh = window.innerHeight
      if (vw < 768) {
        setIsMaximized(true)
      } else {
        const maxX = Math.max(20, vw - size.width - 20)
        const maxY = Math.max(50, vh - size.height - 80)
        setPosition((prev) => ({
          x: Math.min(prev.x, maxX),
          y: Math.min(prev.y, maxY)
        }))
      }
    }
  }, [size])

  const handlePointerDown = (e) => {
    onFocus()
    if (isMaximized) return
    setIsDragging(true)
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initialX: position.x,
      initialY: position.y
    }

    const handlePointerMove = (moveEvent) => {
      const dx = moveEvent.clientX - dragRef.current.startX
      const dy = moveEvent.clientY - dragRef.current.startY
      const newX = Math.max(10, Math.min(window.innerWidth - 100, dragRef.current.initialX + dx))
      const newY = Math.max(45, Math.min(window.innerHeight - 80, dragRef.current.initialY + dy))
      setPosition({ x: newX, y: newY })
    }

    const handlePointerUp = () => {
      setIsDragging(false)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', handlePointerUp)
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', handlePointerUp)
  }

  if (!isOpen || isMinimized) return null

  const windowStyle = isMaximized
    ? {
        position: 'fixed',
        top: '46px',
        left: '12px',
        right: '12px',
        bottom: '84px',
        width: 'calc(100vw - 24px)',
        height: 'calc(100vh - 130px)',
        zIndex
      }
    : {
        position: 'fixed',
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `min(${size.width}px, calc(100vw - 24px))`,
        height: `min(${size.height}px, calc(100vh - 140px))`,
        zIndex
      }

  return (
    <div
      ref={windowRef}
      onClick={onFocus}
      style={{
        ...windowStyle,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '16px',
        background: 'rgba(17, 22, 31, 0.88)',
        backdropFilter: 'blur(30px) saturate(180%)',
        WebkitBackdropFilter: 'blur(30px) saturate(180%)',
        border: '1px solid rgba(255, 255, 255, 0.16)',
        boxShadow:
          zIndex > 20
            ? '0 30px 70px -10px rgba(0, 0, 0, 0.75), 0 0 0 1px rgba(255, 255, 255, 0.15), 0 0 40px rgba(245, 158, 11, 0.08)'
            : '0 20px 50px -10px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.1)',
        overflow: 'hidden',
        transition: isDragging ? 'none' : 'box-shadow 0.2s ease, transform 0.2s ease'
      }}
      className="animate-fade-in"
    >
      {/* Titlebar */}
      <div
        className="window-titlebar"
        onPointerDown={handlePointerDown}
        style={{
          cursor: isMaximized ? 'default' : isDragging ? 'grabbing' : 'grab'
        }}
      >
        {/* Left: Traffic light dots */}
        <div className="traffic-dots">
          <button
            onClick={(e) => {
              e.stopPropagation()
              onClose()
            }}
            className="traffic-dot dot-red"
            title="Close"
          >
            <X size={8} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              onMinimize()
            }}
            className="traffic-dot dot-yellow"
            title="Minimize"
          >
            <Minus size={8} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              setIsMaximized(!isMaximized)
            }}
            className="traffic-dot dot-green"
            title={isMaximized ? 'Restore' : 'Maximize'}
          >
            {isMaximized ? <Minimize2 size={8} /> : <Maximize2 size={8} />}
          </button>
        </div>

        {/* Center: Window Title and Icon */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.85rem',
            fontWeight: 600,
            color: '#fff',
            letterSpacing: '-0.01em'
          }}
        >
          {icon && <span style={{ display: 'flex', alignItems: 'center' }}>{icon}</span>}
          <span>{title}</span>
          {badge && (
            <span
              style={{
                fontSize: '0.68rem',
                padding: '1px 7px',
                borderRadius: '999px',
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'rgba(255, 255, 255, 0.7)',
                fontWeight: 500
              }}
            >
              {badge}
            </span>
          )}
        </div>

        {/* Right side spacer */}
        <div style={{ width: '45px' }} />
      </div>

      {/* Window Body */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          overflowX: 'hidden',
          padding: '20px 24px',
          position: 'relative',
          color: 'var(--text-primary)'
        }}
      >
        {children}
      </div>
    </div>
  )
}
