import { useState, useEffect, useCallback } from 'react'

const BASE = '/VeraWen_Portfolio'

type Category = 'Dance' | 'Painting' | 'Sculpture' | 'Sports'

interface HobbyData {
  label: Category
  emoji: string
  color: string
  accent: string
  images: string[]
  passion: string
  tags: string[]
}

const HOBBIES: HobbyData[] = [
  {
    label: 'Dance',
    emoji: '💃',
    color: '#D4A843',
    accent: 'rgba(212,168,67,0.06)',
    images: ['dance1.jpeg', 'dance2.jpeg', 'dance3.jpeg', 'dance4.jpeg'].map(f => `${BASE}/hobby/dance/${f}`),
    passion: `Dance has been one of my deepest passions since I was seven, when I began training in Latin and ballroom. Throughout my teenage years, I developed as a semi-professional dancer, competing in numerous international, national, and local competitions. In college, I expanded into hip-hop, jazz, and contemporary styles, further broadening my range. Dance has always been my way to relieve stress, and choreography is how I express myself creatively. It has also allowed me to connect with new people, making it a core part of who I am.`,
    tags: ['#latin', '#hiphop', '#freestyle', '#performance'],
  },
  {
    label: 'Painting',
    emoji: '🎨',
    color: '#F5DFA0',
    accent: 'rgba(245,223,160,0.06)',
    images: ['painting1.jpeg', 'painting2.jpeg', 'painting3.jpeg', 'painting4.jpeg'].map(f => `${BASE}/hobby/painting/${f}`),
    passion: `The pictures above show oil paintings I created and displayed on the wall of my dorm. The first three are my favorites—each one captures the emotions and stories I experienced at the moment of painting. I approach painting intuitively, using it as a channel to record and express my feelings; colors and shapes come naturally to me. The process of translating abstract thoughts into a clear, tangible form closely mirrors how I approach problem-solving in technical work. At the core of both is the same motivation—I’m drawn to creating things that are both meaningful and beautiful.`,
    tags: ['#illustration', '#botanicalart', '#expressionism'],
  },
  {
    label: 'Sculpture',
    emoji: '🏺',
    color: '#A07828',
    accent: 'rgba(160,120,40,0.08)',
    images: ['sculpture1.jpeg','sculpture2.jpeg','sculpture3.jpeg','sculpture4.jpeg','sculpture5.jpeg','sculpture6.jpeg','sculpture7.jpeg'].map(f => `${BASE}/hobby/sculpture/${f}`),
    passion: `Sculpture is an unexpected passion I discovered through an introductory course at Emory. Compared to painting, it feels more tangible—I enjoy working with physical materials like plaster, wood, and found objects from everyday life. The critique sessions in this course, where I presented my work to classmates, pushed me to think more deeply about what I was trying to express. It challenged me to articulate the intent behind my creations, not just make them. At the same time, I found a strong sense of satisfaction in seeing my work displayed, knowing it carried both a physical presence and a clear idea behind it.`,
    tags: ['#ceramics', '#clay', '#3dart', '#handbuilt'],
  },
  {
    label: 'Sports',
    emoji: '🏃‍♀️',
    color: '#C8A050',
    accent: 'rgba(200,160,80,0.06)',
    images: ['sport1.jpeg','sport2.jpeg','sport3.jpeg','sport4.jpeg','sport5.jpeg','sport6.jpeg','sport7.jpeg'].map(f => `${BASE}/hobby/sports/${f}`),
    passion: `Sports are another core part of my identity. I draw a lot of inspiration not just from watching games, but from learning the behind-the-scenes stories of different athletes—their discipline, mindset, and journeys. The pictures above capture games I attended in person, including NBA matchups featuring the Lakers, Thunder, and Hawks, as well as NFL Falcons and MLB Yankees games in Atlanta. Beyond being a spectator, I also enjoy playing tennis and golf, which give me a more personal connection to the discipline and focus that sports require.`,
    tags: ['#athletics', '#teamwork', '#active', '#mindandbody'],
  },
]

export default function AboutMe() {
  const [active, setActive] = useState<Category>('Dance')
  const [lightbox, setLightbox] = useState<number | null>(null)
  const [avatarZoomed, setAvatarZoomed] = useState(false)
  const hobby = HOBBIES.find(h => h.label === active)!

  function switchCat(cat: Category) {
    if (cat === active) return
    setActive(cat)
  }

  // Keyboard nav for lightbox
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (lightbox === null) return
    if (e.key === 'ArrowRight') setLightbox(i => Math.min((i ?? 0) + 1, hobby.images.length - 1))
    if (e.key === 'ArrowLeft')  setLightbox(i => Math.max((i ?? 0) - 1, 0))
    if (e.key === 'Escape')     setLightbox(null)
  }, [lightbox, hobby.images.length])

  useEffect(() => {
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [handleKey])

  // Close lightbox when category changes
  useEffect(() => { setLightbox(null) }, [active])

  return (
    <div style={{ maxWidth: 860, margin: '0 auto', padding: '72px 16px 100px' }}>

      {/* ── Profile header ── */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 40, marginBottom: 48, padding: '0 8px' }}>
        <div
          onClick={() => setAvatarZoomed(true)}
          style={{
            width: 100, height: 100, borderRadius: '50%', flexShrink: 0,
            background: 'linear-gradient(135deg, #7c3aed, #f9a8d4, #f59e0b)',
            padding: 3, cursor: 'zoom-in',
            transition: 'transform .2s, box-shadow .2s',
            boxShadow: '0 4px 20px rgba(212,168,67,0.25)',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.07)'
            ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 32px rgba(124,58,237,0.4)'
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)'
            ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 20px rgba(212,168,67,0.25)'
          }}
        >
          <img
            src={`${BASE}/aboutMe/aboutmeprofile.jpeg`}
            alt="Vera Wen"
            style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', display: 'block' }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 10 }}>vera.wen</h2>
          <p style={{ fontSize: '.9rem', lineHeight: 1.75, color: '#B0A898', maxWidth: 480 }}>
            I'm really passionate about art and being creative in other forms, getting inspiration from people connection and life exploration. I like to learn from art and sport — two very different types of inspiration — and I also love interacting with people for another kind of spark.
          </p>
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--border)', marginBottom: 36 }} />

      {/* ── Category tabs ── */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 32, flexWrap: 'wrap' }}>
        {HOBBIES.map(h => {
          const isActive = active === h.label
          return (
            <button
              key={h.label}
              onClick={() => switchCat(h.label)}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '10px 22px', borderRadius: 100,
                fontSize: '.875rem', fontWeight: 600, cursor: 'pointer',
                background: isActive ? 'rgba(212,168,67,0.12)' : '#1a1a1a',
                color: isActive ? h.color : '#6E6458',
                border: `2px solid ${isActive ? h.color : 'transparent'}`,
                transition: 'all .2s',
                boxShadow: isActive ? `0 4px 16px ${h.color}40` : 'none',
                transform: isActive ? 'translateY(-1px)' : 'none',
              }}
            >
              <span style={{ fontSize: '1rem' }}>{h.emoji}</span>
              {h.label}
            </button>
          )
        })}
      </div>

      {/* ── Gallery ── */}
      <div key={active} style={{ animation: 'fadeUp .35s ease both' }}>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 6,
          borderRadius: 16,
          overflow: 'hidden',
          marginBottom: 0,
        }}>
          {hobby.images.map((src, i) => (
            <div
              key={src}
              onClick={() => setLightbox(i)}
              style={{
                position: 'relative',
                aspectRatio: '1',
                overflow: 'hidden',
                cursor: 'zoom-in',
                background: '#111',
              }}
            >
              <img
                src={src}
                alt={`${hobby.label} ${i + 1}`}
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', display: 'block',
                  transition: 'transform .35s',
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.07)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              />
              {/* Hover overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: `${hobby.color}55`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                opacity: 0, transition: 'opacity .25s',
              }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0')}
              >
                <svg width="28" height="28" fill="none" stroke="#fff" strokeWidth="2.5" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                </svg>
              </div>
              {/* Index pill */}
              <div style={{
                position: 'absolute', bottom: 8, right: 8,
                background: 'rgba(0,0,0,.45)', color: '#fff',
                fontSize: '.65rem', fontWeight: 700,
                padding: '2px 7px', borderRadius: 100,
              }}>
                {i + 1}/{hobby.images.length}
              </div>
            </div>
          ))}
        </div>

        {/* ── Passion description box ── */}
        <div style={{
          marginTop: 24,
          background: hobby.accent,
          border: `1.5px solid ${hobby.color}30`,
          borderRadius: 16,
          padding: '28px 32px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <span style={{ fontSize: '1.5rem' }}>{hobby.emoji}</span>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: hobby.color }}>{hobby.label}</h3>
          </div>
          <p style={{ fontSize: '.92rem', lineHeight: 1.8, color: '#D6CFC4', marginBottom: 16 }}>
            {hobby.passion}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {hobby.tags.map(t => (
              <span key={t} style={{
                fontSize: '.75rem', fontWeight: 600,
                padding: '4px 12px', borderRadius: 100,
                background: `${hobby.color}18`, color: hobby.color,
                border: `1px solid ${hobby.color}30`,
              }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Avatar zoom modal ── */}
      {avatarZoomed && (
        <div
          onClick={() => setAvatarZoomed(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            background: 'rgba(0,0,0,.85)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            animation: 'fadeIn .2s ease', cursor: 'zoom-out',
          }}
        >
          <img
            src={`${BASE}/aboutMe/aboutmeprofile.jpeg`}
            alt="Vera Wen"
            style={{
              width: 'min(420px, 85vw)', height: 'min(420px, 85vw)',
              borderRadius: '50%', objectFit: 'cover',
              border: '4px solid rgba(255,255,255,.2)',
              boxShadow: '0 32px 100px rgba(0,0,0,.7)',
              animation: 'fadeUp .25s ease',
            }}
          />
          <button
            onClick={() => setAvatarZoomed(false)}
            style={{
              position: 'fixed', top: 20, right: 20,
              width: 40, height: 40, borderRadius: '50%',
              background: 'rgba(255,255,255,.15)', border: 'none',
              color: '#fff', cursor: 'pointer', fontSize: '1.1rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >✕</button>
        </div>
      )}

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            background: 'rgba(0,0,0,.88)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            animation: 'fadeIn .2s ease',
          }}
        >
          {/* Prev */}
          <button
            onClick={e => { e.stopPropagation(); setLightbox(i => Math.max((i ?? 0) - 1, 0)) }}
            disabled={lightbox === 0}
            style={{
              position: 'fixed', left: 24, top: '50%', transform: 'translateY(-50%)',
              width: 48, height: 48, borderRadius: '50%',
              background: lightbox === 0 ? 'rgba(255,255,255,.1)' : 'rgba(255,255,255,.2)',
              border: 'none', color: '#fff', cursor: lightbox === 0 ? 'default' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.3rem', transition: 'background .15s',
            }}
          >‹</button>

          {/* Image + caption */}
          <div
            onClick={e => e.stopPropagation()}
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              maxWidth: '80vw', maxHeight: '90vh', gap: 20,
            }}
          >
            <img
              key={lightbox}
              src={hobby.images[lightbox]}
              alt={`${hobby.label} ${lightbox + 1}`}
              style={{
                maxWidth: '100%', maxHeight: '72vh',
                objectFit: 'contain', borderRadius: 12,
                boxShadow: '0 24px 80px rgba(0,0,0,.6)',
                animation: 'fadeIn .2s ease',
              }}
            />
            {/* Caption strip */}
            <div style={{
              background: 'rgba(255,255,255,.08)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,.15)',
              borderRadius: 12, padding: '14px 24px',
              display: 'flex', alignItems: 'center', gap: 12,
              color: '#fff',
            }}>
              <span style={{ fontSize: '1.2rem' }}>{hobby.emoji}</span>
              <div>
                <div style={{ fontWeight: 600, fontSize: '.9rem' }}>{hobby.label} — {lightbox + 1} of {hobby.images.length}</div>
                <div style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.6)', marginTop: 2 }}>
                  Press ← → to navigate · ESC to close
                </div>
              </div>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={e => { e.stopPropagation(); setLightbox(i => Math.min((i ?? 0) + 1, hobby.images.length - 1)) }}
            disabled={lightbox === hobby.images.length - 1}
            style={{
              position: 'fixed', right: 24, top: '50%', transform: 'translateY(-50%)',
              width: 48, height: 48, borderRadius: '50%',
              background: lightbox === hobby.images.length - 1 ? 'rgba(255,255,255,.1)' : 'rgba(255,255,255,.2)',
              border: 'none', color: '#fff', cursor: lightbox === hobby.images.length - 1 ? 'default' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.3rem', transition: 'background .15s',
            }}
          >›</button>

          {/* Close */}
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: 'fixed', top: 20, right: 20,
              width: 40, height: 40, borderRadius: '50%',
              background: 'rgba(255,255,255,.15)', border: 'none',
              color: '#fff', cursor: 'pointer', fontSize: '1.1rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >✕</button>

          {/* Dot indicators */}
          <div style={{
            position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)',
            display: 'flex', gap: 6,
          }}>
            {hobby.images.map((_, i) => (
              <div
                key={i}
                onClick={e => { e.stopPropagation(); setLightbox(i) }}
                style={{
                  width: i === lightbox ? 20 : 8,
                  height: 8, borderRadius: 4,
                  background: i === lightbox ? '#fff' : 'rgba(255,255,255,.35)',
                  cursor: 'pointer',
                  transition: 'all .2s',
                }}
              />
            ))}
          </div>
        </div>
      )}

      <style>{`@keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:none; } } @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }`}</style>
    </div>
  )
}
