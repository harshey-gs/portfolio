import React from 'react'
import { Sliders, Sun, Sunset, Moon, Wind, Sparkles, RotateCcw } from 'lucide-react'

export default function MeadowSettingsWindow({ meadowConfig, setMeadowConfig }) {
  const handleReset = () => {
    setMeadowConfig({
      wind: 10,
      grass: 5,
      flowers: 3.7,
      cloudSpeed: 3,
      dayTime: 18,
      dayCycle: false
    })
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <Sliders size={18} style={{ color: '#fb923c' }} />
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff' }}>
              3D Voxel Meadow Lab
            </h3>
          </div>
          <p style={{ fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.7)' }}>
            Adjust physical and environmental parameters of the live Three.js sunset meadow in real time.
          </p>
        </div>

        <button onClick={handleReset} className="glass-button" style={{ padding: '6px 12px', fontSize: '0.76rem' }}>
          <RotateCcw size={12} />
          <span>Reset Defaults</span>
        </button>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '16px'
        }}
      >
        {/* Time of Day */}
        <div className="glass-card" style={{ padding: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <label style={{ fontSize: '0.84rem', fontWeight: 600, color: '#fbbf24', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Sunset size={14} />
              <span>Time of Day: {meadowConfig.dayTime}:00 hrs</span>
            </label>
            <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'rgba(255, 255, 255, 0.5)' }}>
              {meadowConfig.dayTime === 18 ? 'Sunset' : meadowConfig.dayTime === 12 ? 'Noon' : meadowConfig.dayTime === 0 ? 'Night' : 'Custom'}
            </span>
          </div>

          <input
            type="range"
            min="0"
            max="24"
            step="0.5"
            value={meadowConfig.dayTime}
            onChange={(e) =>
              setMeadowConfig((prev) => ({ ...prev, dayTime: parseFloat(e.target.value) }))
            }
            style={{ width: '100%', accentColor: '#f59e0b', cursor: 'pointer' }}
          />

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.4)' }}>
            <span>00:00 (Moon)</span>
            <span>12:00 (Sun)</span>
            <span>18:00 (Sunset)</span>
            <span>24:00</span>
          </div>
        </div>

        {/* Wind Force */}
        <div className="glass-card" style={{ padding: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <label style={{ fontSize: '0.84rem', fontWeight: 600, color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Wind size={14} />
              <span>Wind Gust Intensity</span>
            </label>
            <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: '#38bdf8' }}>
              {meadowConfig.wind} / 10
            </span>
          </div>

          <input
            type="range"
            min="0"
            max="10"
            step="0.5"
            value={meadowConfig.wind}
            onChange={(e) =>
              setMeadowConfig((prev) => ({ ...prev, wind: parseFloat(e.target.value) }))
            }
            style={{ width: '100%', accentColor: '#38bdf8', cursor: 'pointer' }}
          />
        </div>

        {/* Flower Bloom Density */}
        <div className="glass-card" style={{ padding: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <label style={{ fontSize: '0.84rem', fontWeight: 600, color: '#f43f5e', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Sparkles size={14} />
              <span>Voxel Flower Blooms</span>
            </label>
            <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: '#f43f5e' }}>
              {meadowConfig.flowers} / 10
            </span>
          </div>

          <input
            type="range"
            min="0"
            max="10"
            step="0.5"
            value={meadowConfig.flowers}
            onChange={(e) =>
              setMeadowConfig((prev) => ({ ...prev, flowers: parseFloat(e.target.value) }))
            }
            style={{ width: '100%', accentColor: '#f43f5e', cursor: 'pointer' }}
          />
        </div>

        {/* Grass Density */}
        <div className="glass-card" style={{ padding: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <label style={{ fontSize: '0.84rem', fontWeight: 600, color: '#10b981', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>🌾</span>
              <span>Grass Blade Density</span>
            </label>
            <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: '#10b981' }}>
              {meadowConfig.grass} / 10
            </span>
          </div>

          <input
            type="range"
            min="1"
            max="10"
            step="0.5"
            value={meadowConfig.grass}
            onChange={(e) =>
              setMeadowConfig((prev) => ({ ...prev, grass: parseFloat(e.target.value) }))
            }
            style={{ width: '100%', accentColor: '#10b981', cursor: 'pointer' }}
          />
        </div>
      </div>
    </div>
  )
}
