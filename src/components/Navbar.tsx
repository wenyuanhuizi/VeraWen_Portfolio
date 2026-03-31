import type { Page } from '../App'

interface Props {
  current: Page
  onNavigate: (p: Page) => void
}

const NAV_ITEMS: { id: Page; label: string }[] = [
  { id: 'intro',    label: 'Introduction' },
  { id: 'projects', label: 'Projects' },
  { id: 'about',    label: 'About Me' },
]

export default function Navbar({ current, onNavigate }: Props) {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: 'var(--nav-h)',
      background: 'rgba(10,10,10,0.88)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(212,168,67,0.15)',
      display: 'flex', alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 40px',
      animation: 'slideDown .4s ease both',
    }}>
      {/* Logo */}
      <button
        onClick={() => onNavigate('intro')}
        style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12 }}
      >
        <div style={{
          width: 36, height: 36, borderRadius: 10,
          background: 'linear-gradient(135deg, #A07828, #D4A843, #F5DFA0)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#0A0A0A', fontWeight: 800, fontSize: '.9rem', letterSpacing: '-.5px',
          boxShadow: '0 0 12px rgba(212,168,67,0.3)',
        }}>VW</div>
        <span style={{
          fontWeight: 700, fontSize: '1rem',
          background: 'linear-gradient(90deg, #D4A843, #F5DFA0)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '-.2px',
        }}>
          Vera Wen
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
                background: active ? 'rgba(212,168,67,0.12)' : 'none',
                border: active ? '1px solid rgba(212,168,67,0.25)' : '1px solid transparent',
                borderRadius: 100,
                padding: '8px 20px',
                fontSize: '.875rem',
                fontWeight: active ? 600 : 400,
                color: active ? '#D4A843' : '#6E6458',
                cursor: 'pointer',
                transition: 'all .2s',
                letterSpacing: '.01em',
              }}
              onMouseEnter={e => {
                if (!active) {
                  const el = e.currentTarget as HTMLButtonElement
                  el.style.color = '#D4A843'
                  el.style.background = 'rgba(212,168,67,0.06)'
                }
              }}
              onMouseLeave={e => {
                if (!active) {
                  const el = e.currentTarget as HTMLButtonElement
                  el.style.color = '#6E6458'
                  el.style.background = 'none'
                }
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
