import type { Page } from '../App'

interface Props {
  current: Page
  onNavigate: (p: Page) => void
}

const NAV_ITEMS: { id: Page; label: string }[] = [
  { id: 'intro',      label: 'Introduction' },
  { id: 'projects',   label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'about',      label: 'About Me' },
]

export default function Navbar({ current, onNavigate }: Props) {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: 'var(--nav-h)',
      background: 'rgba(255,255,255,0.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)',
      display: 'flex', alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 40px',
      animation: 'slideDown .4s ease both',
    }}>
      {/* Logo */}
      <button
        onClick={() => onNavigate('intro')}
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: 10,
        }}
      >
        <div style={{
          width: 36, height: 36, borderRadius: 10,
          background: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontWeight: 800, fontSize: '.9rem', letterSpacing: '-.5px',
        }}>VW</div>
        <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text)', letterSpacing: '-.3px' }}>
          Wenyuan
        </span>
      </button>

      {/* Nav links */}
      <div style={{ display: 'flex', gap: 4 }}>
        {NAV_ITEMS.map(({ id, label }) => {
          const active = current === id
          return (
            <button
              key={id}
              onClick={() => onNavigate(id)}
              style={{
                background: active ? 'var(--primary-light)' : 'none',
                border: 'none',
                borderRadius: 100,
                padding: '8px 18px',
                fontSize: '.875rem',
                fontWeight: active ? 600 : 500,
                color: active ? 'var(--primary)' : 'var(--muted)',
                cursor: 'pointer',
                transition: 'all .18s',
                position: 'relative',
              }}
              onMouseEnter={e => {
                if (!active) (e.currentTarget as HTMLButtonElement).style.background = 'var(--surface)'
              }}
              onMouseLeave={e => {
                if (!active) (e.currentTarget as HTMLButtonElement).style.background = 'none'
              }}
            >
              {label}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
