import type { Page } from '../App'

const INTERESTS = [
  '⚕️ Health Tech', '🤖 AI / ML', '📱 Mobile Dev', '🌐 Full-Stack',
  '🎨 Creative Coding', '🔬 Research', '☁️ Cloud / DevOps',
]

const CONTACTS = [
  {
    label: 'GitHub',
    href: 'https://github.com/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
    color: '#24292e',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    color: '#0077b5',
  },
  {
    label: 'Email',
    href: 'mailto:your@email.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    color: '#7c3aed',
  },
  {
    label: 'Resume',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    color: '#f59e0b',
  },
]

interface Props { onNavigate: (p: Page) => void }

export default function Introduction({ onNavigate }: Props) {
  return (
    <div className="section" style={{ paddingTop: 80 }}>

      {/* ── Hero ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 340px',
        gap: 60,
        alignItems: 'center',
        marginBottom: 64,
      }}>

        {/* Left: text */}
        <div>
          <div className="tag tag-green" style={{ marginBottom: 16 }}>
            <span>👋</span> Available for opportunities
          </div>

          <h1 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-.03em',
            marginBottom: 8,
            color: 'var(--text)',
          }}>
            Hi, I'm{' '}
            <span style={{
              background: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Wenyuan</span>
          </h1>

          <p style={{
            fontSize: '1.15rem',
            color: 'var(--muted)',
            fontWeight: 500,
            marginBottom: 24,
            letterSpacing: '-.01em',
          }}>
            Software Engineer · Health Tech Enthusiast · Creative
          </p>

          <p style={{
            fontSize: '1rem',
            lineHeight: 1.8,
            color: '#374151',
            maxWidth: 560,
            marginBottom: 32,
          }}>
            I'm a passionate software engineer with a deep interest in building technology that
            makes a real difference in people's lives — especially at the intersection of
            healthcare and AI. I thrive on crafting intuitive user experiences and scalable
            systems, and I love bringing creativity into everything I build.
          </p>

          {/* CTA buttons */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={() => onNavigate('projects')}>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
              View My Projects
            </button>
            <button className="btn btn-outline" onClick={() => onNavigate('experience')}>
              My Experience
            </button>
          </div>
        </div>

        {/* Right: headshot */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          {/* Photo circle — replace src with your actual headshot */}
          <div style={{
            width: 280, height: 280,
            borderRadius: '40% 60% 55% 45% / 45% 45% 55% 55%',
            background: 'linear-gradient(135deg, #ede9fe 0%, #c4b5fd 50%, #a78bfa 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '5rem',
            boxShadow: '0 20px 60px rgba(124,58,237,0.22)',
            position: 'relative',
            overflow: 'hidden',
            flexShrink: 0,
          }}>
            {/* ↓ Swap this emoji/div for: <img src="/headshot.jpg" style={{width:'100%',height:'100%',objectFit:'cover'}} alt="Wenyuan" /> */}
            <span style={{ userSelect: 'none' }}>🧑‍💻</span>
            {/* Decorative ring */}
            <div style={{
              position: 'absolute', inset: -6,
              borderRadius: 'inherit',
              border: '3px dashed #c4b5fd',
              opacity: .5,
              animation: 'spin 20s linear infinite',
            }}/>
          </div>

          {/* Contact links */}
          <div style={{ display: 'flex', gap: 10 }}>
            {CONTACTS.map(c => (
              <a
                key={c.label}
                href={c.href}
                title={c.label}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 42, height: 42,
                  borderRadius: '50%',
                  border: '1.5px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: c.color,
                  background: '#fff',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all .18s',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.transform = 'translateY(-3px)'
                  el.style.boxShadow = '0 6px 20px rgba(0,0,0,0.12)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.transform = ''
                  el.style.boxShadow = 'var(--shadow-sm)'
                }}
              >
                {c.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Coding interests ── */}
      <div style={{
        background: 'var(--surface)',
        borderRadius: 'var(--radius-lg)',
        padding: '32px 36px',
        marginBottom: 32,
      }}>
        <p style={{ fontSize: '.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--muted)', marginBottom: 16 }}>
          Coding Interests
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {INTERESTS.map(interest => (
            <span key={interest} className="tag" style={{ fontSize: '.85rem', padding: '7px 16px' }}>
              {interest}
            </span>
          ))}
        </div>
      </div>

      {/* ── Open to work banner ── */}
      <div className="open-banner">
        <div className="open-dot" />
        <div>
          <p style={{ fontWeight: 700, color: '#065f46', fontSize: '.95rem' }}>
            Open to new opportunities
          </p>
          <p style={{ fontSize: '.85rem', color: '#047857', marginTop: 2 }}>
            Actively looking for full-time SWE / Health Tech roles — let's connect and build something meaningful together!
          </p>
        </div>
        <a href="mailto:your@email.com" className="btn btn-primary" style={{ marginLeft: 'auto', flexShrink: 0, background: '#059669' }}>
          Get in touch
        </a>
      </div>

      {/* Spin keyframe injected locally */}
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}
