import type { Page } from '../App'

const INTERESTS = [
  '🤖 AI / ML',
  '🧠 LLM Integration',
  '🌐 Full-Stack Systems',
  '📱 Mobile Development',
  '☁️ Cloud / DevOps',
  '⚙️ System Design',
  '🎨 Creative Coding',
]

const CONTACTS = [
  {
    label: 'GitHub',
    href: 'https://github.com/wenyuanhuizi',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vera-wen-0524wyhz/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:wenyuanhuizi@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
]

interface Props { onNavigate: (p: Page) => void }

export default function Introduction({ onNavigate }: Props) {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>

      {/* ── Dark hero background ── */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 80% 60% at 70% 40%, rgba(212,168,67,0.07) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 20% 80%, rgba(212,168,67,0.04) 0%, transparent 60%), #0A0A0A',
        zIndex: 0,
      }} />

      {/* Animated orb top-right */}
      <div style={{
        position: 'absolute', top: -120, right: -80,
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,168,67,0.10) 0%, transparent 70%)',
        animation: 'orb 12s ease-in-out infinite',
        zIndex: 0, pointerEvents: 'none',
      }} />

      {/* Animated orb bottom-left */}
      <div style={{
        position: 'absolute', bottom: -100, left: -60,
        width: 360, height: 360, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,168,67,0.06) 0%, transparent 70%)',
        animation: 'orb 16s ease-in-out infinite reverse',
        zIndex: 0, pointerEvents: 'none',
      }} />

      {/* Thin gold horizontal line accent */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: 2,
        background: 'linear-gradient(90deg, transparent, #D4A843, #F5DFA0, #D4A843, transparent)',
        zIndex: 1,
      }} />

      {/* ── Main content ── */}
      <div className="section" style={{ paddingTop: 100, position: 'relative', zIndex: 2 }}>

        {/* ── Hero grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 320px',
          gap: 72,
          alignItems: 'center',
          marginBottom: 80,
        }}>

          {/* Left: text */}
          <div>
            {/* Available tag */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 16px', borderRadius: 100,
              background: 'rgba(60,180,100,0.08)',
              border: '1px solid rgba(60,180,100,0.25)',
              marginBottom: 24,
              animation: 'fadeUp .5s .1s ease both',
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: '50%',
                background: '#3cb464',
                boxShadow: '0 0 8px rgba(60,180,100,0.7)',
                animation: 'pulse 1.8s ease-in-out infinite',
                display: 'inline-block',
              }} />
              <span style={{ fontSize: '.8rem', fontWeight: 500, color: '#7ee8a2' }}>
                Available for opportunities
              </span>
            </div>

            {/* Name */}
            <h1 style={{
              fontSize: 'clamp(2.4rem, 5.5vw, 3.8rem)',
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: '-.04em',
              marginBottom: 12,
              animation: 'fadeUp .5s .2s ease both',
              color: '#F0EAD6',
            }}>
              Hi, I'm{' '}
              <span className="gold-shimmer">Vera Wen</span>
            </h1>

            {/* Subtitle */}
            <p style={{
              fontSize: '1.1rem',
              color: '#6E6458',
              fontWeight: 400,
              marginBottom: 28,
              letterSpacing: '.02em',
              animation: 'fadeUp .5s .3s ease both',
            }}>
              Software Engineer · Creative
            </p>

            {/* Bio */}
            <p style={{
              fontSize: '1rem',
              lineHeight: 1.85,
              color: '#B0A898',
              maxWidth: 540,
              marginBottom: 40,
              animation: 'fadeUp .5s .4s ease both',
            }}>
              I build products that solve real-world problems, with a focus on integrating AI to create more intelligent and useful user experiences. As a full-stack developer, I enjoy designing intuitive interfaces and architecting scalable systems. I've led and built multiple products from scratch, adapting quickly to user needs and iterating based on real-world feedback.
            </p>

            {/* CTA */}
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', animation: 'fadeUp .5s .5s ease both' }}>
              <button className="btn btn-primary" onClick={() => onNavigate('projects')}>
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                View My Projects
              </button>
              <button className="btn btn-outline" onClick={() => onNavigate('about')}>
                About Me
              </button>
            </div>
          </div>

          {/* Right: headshot */}
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20,
            animation: 'fadeUp .5s .25s ease both',
          }}>
            {/* Outer glow ring */}
            <div style={{
              position: 'relative',
              width: 280, height: 280,
              flexShrink: 0,
              animation: 'floatY 6s ease-in-out infinite',
            }}>
              {/* Spinning dashed ring */}
              <div style={{
                position: 'absolute', inset: -12,
                borderRadius: '50%',
                border: '1.5px dashed rgba(212,168,67,0.35)',
                animation: 'spin 18s linear infinite',
              }} />
              {/* Second spinning ring opposite */}
              <div style={{
                position: 'absolute', inset: -22,
                borderRadius: '50%',
                border: '1px dashed rgba(212,168,67,0.15)',
                animation: 'spin 28s linear infinite reverse',
              }} />
              {/* Glow halo */}
              <div style={{
                position: 'absolute', inset: 0,
                borderRadius: '50%',
                boxShadow: '0 0 60px rgba(212,168,67,0.18), 0 0 120px rgba(212,168,67,0.08)',
              }} />
              {/* Photo */}
              <div style={{
                width: 280, height: 280,
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2.5px solid rgba(212,168,67,0.35)',
                position: 'relative', zIndex: 1,
              }}>
                <img
                  src="/VeraWen_Portfolio/headshot.jpeg"
                  alt="Vera Wen"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>

            {/* Contact icons */}
            <div style={{ display: 'flex', gap: 12 }}>
              {CONTACTS.map(c => (
                <a
                  key={c.label}
                  href={c.href}
                  title={c.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 44, height: 44,
                    borderRadius: '50%',
                    border: '1px solid rgba(212,168,67,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#D4A843',
                    background: 'rgba(212,168,67,0.06)',
                    transition: 'all .2s',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.background = 'rgba(212,168,67,0.15)'
                    el.style.borderColor = '#D4A843'
                    el.style.transform = 'translateY(-3px)'
                    el.style.boxShadow = '0 0 16px rgba(212,168,67,0.3)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.background = 'rgba(212,168,67,0.06)'
                    el.style.borderColor = 'rgba(212,168,67,0.25)'
                    el.style.transform = ''
                    el.style.boxShadow = ''
                  }}
                >
                  {c.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Gold divider line */}
        <div className="divider" />

        {/* ── Coding interests ── */}
        <div style={{
          background: 'rgba(212,168,67,0.04)',
          border: '1px solid rgba(212,168,67,0.12)',
          borderRadius: 'var(--radius-lg)',
          padding: '32px 36px',
          marginBottom: 28,
          marginTop: 28,
        }}>
          <p style={{
            fontSize: '.7rem', fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '2px',
            color: '#D4A843', marginBottom: 18,
          }}>
            Coding Interests
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {INTERESTS.map((interest, i) => (
              <span
                key={interest}
                className="tag"
                style={{
                  fontSize: '.85rem', padding: '7px 16px',
                  animation: `fadeUp .4s ${.1 + i * .05}s ease both`,
                }}
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        {/* ── Open to work banner ── */}
        <div className="open-banner">
          <div className="open-dot" />
          <div>
            <p style={{ fontWeight: 700, color: '#7ee8a2', fontSize: '.95rem' }}>
              Open to new opportunities
            </p>
            <p style={{ fontSize: '.85rem', color: '#5ab87a', marginTop: 2 }}>
              Actively looking for full-time SWE roles — let's connect and build something meaningful together!
            </p>
          </div>
          <a
            href="mailto:wenyuanhuizi@gmail.com"
            className="btn btn-primary"
            style={{ marginLeft: 'auto', flexShrink: 0 }}
          >
            Get in touch
          </a>
        </div>

      </div>
    </div>
  )
}
