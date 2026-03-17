import { useState } from 'react'

type Category = 'All' | 'Art' | 'Dance' | 'Life'

interface Post {
  id: number
  category: Category
  emoji: string
  caption: string
  gradient: string
  likes: number
  tag: string
}

const POSTS: Post[] = [
  {
    id: 1, category: 'Art', emoji: '🎨',
    caption: 'Watercolour experiments — playing with negative space and soft washes.',
    gradient: 'linear-gradient(135deg, #fce7f3, #fbcfe8, #f9a8d4)',
    likes: 142, tag: '#watercolour',
  },
  {
    id: 2, category: 'Dance', emoji: '💃',
    caption: "Contemporary piece from last semester's showcase — movement as emotion.",
    gradient: 'linear-gradient(135deg, #ede9fe, #c4b5fd, #a78bfa)',
    likes: 218, tag: '#contemporary',
  },
  {
    id: 3, category: 'Life', emoji: '☕',
    caption: 'Sunday mornings: coffee, lo-fi beats, and a blank sketchbook.',
    gradient: 'linear-gradient(135deg, #fef3c7, #fde68a, #fbbf24)',
    likes: 97, tag: '#sundayvibes',
  },
  {
    id: 4, category: 'Art', emoji: '✏️',
    caption: 'Portrait sketching series — capturing quiet moments in line work.',
    gradient: 'linear-gradient(135deg, #d1fae5, #a7f3d0, #6ee7b7)',
    likes: 183, tag: '#portraitart',
  },
  {
    id: 5, category: 'Dance', emoji: '🕺',
    caption: 'Freestyle session after a long coding sprint. Nothing clears the head like movement.',
    gradient: 'linear-gradient(135deg, #dbeafe, #bfdbfe, #93c5fd)',
    likes: 264, tag: '#freestyle',
  },
  {
    id: 6, category: 'Life', emoji: '🌿',
    caption: 'My little plant corner — green friends make the best debugging companions.',
    gradient: 'linear-gradient(135deg, #f0fdf4, #bbf7d0, #86efac)',
    likes: 79, tag: '#plantlife',
  },
  {
    id: 7, category: 'Art', emoji: '🖼️',
    caption: 'Digital illustration — exploring the aesthetic of quiet city nights.',
    gradient: 'linear-gradient(135deg, #1e1b4b, #312e81, #4338ca)',
    likes: 310, tag: '#digitalart',
  },
  {
    id: 8, category: 'Dance', emoji: '🎵',
    caption: 'Dance rehearsal clip — hip-hop choreography we performed at the cultural showcase.',
    gradient: 'linear-gradient(135deg, #fdf2f8, #fce7f3, #f9a8d4)',
    likes: 195, tag: '#hiphop',
  },
  {
    id: 9, category: 'Life', emoji: '📚',
    caption: 'Reading stack this month: design thinking, AI ethics, and a bit of poetry.',
    gradient: 'linear-gradient(135deg, #fff7ed, #fed7aa, #fb923c)',
    likes: 112, tag: '#bookclub',
  },
  {
    id: 10, category: 'Art', emoji: '🌸',
    caption: 'Botanical illustration — finding meditative calm in detailed ink work.',
    gradient: 'linear-gradient(135deg, #fdf4ff, #f0abfc, #e879f9)',
    likes: 227, tag: '#illustration',
  },
  {
    id: 11, category: 'Dance', emoji: '🌟',
    caption: 'Year-end performance — Korean traditional dance with modern flair.',
    gradient: 'linear-gradient(135deg, #fffbeb, #fde68a, #f59e0b)',
    likes: 341, tag: '#performance',
  },
  {
    id: 12, category: 'Life', emoji: '🎮',
    caption: 'Game night with the crew — competitive Mahjong and terrible decisions.',
    gradient: 'linear-gradient(135deg, #ecfdf5, #a7f3d0, #34d399)',
    likes: 88, tag: '#gamenights',
  },
]

const CATS: Category[] = ['All', 'Art', 'Dance', 'Life']
const CAT_COLORS: Record<Category, string> = {
  All: '#7c3aed', Art: '#ec4899', Dance: '#8b5cf6', Life: '#f59e0b',
}

function HeartIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  )
}

export default function AboutMe() {
  const [active, setActive] = useState<Category>('All')

  const filtered = active === 'All' ? POSTS : POSTS.filter(p => p.category === active)

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '72px 16px 80px' }}>

      {/* ── Profile header ── */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 48,
        marginBottom: 40,
        padding: '0 8px',
      }}>
        {/* Avatar */}
        <div style={{
          width: 96, height: 96, borderRadius: '50%', flexShrink: 0,
          background: 'linear-gradient(135deg, #7c3aed, #f9a8d4, #f59e0b)',
          padding: 3,
        }}>
          <div style={{
            width: '100%', height: '100%', borderRadius: '50%',
            background: 'linear-gradient(135deg, #ede9fe, #c4b5fd)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '2.2rem',
          }}>
            🌸
          </div>
        </div>

        {/* Stats */}
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 14 }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700 }}>wenyuan.v</h2>
          </div>
          <div style={{ display: 'flex', gap: 32, marginBottom: 14 }}>
            {[['12', 'posts'], ['847', 'followers'], ['312', 'following']].map(([n, l]) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: 700, fontSize: '1rem' }}>{n}</div>
                <div style={{ fontSize: '.78rem', color: 'var(--muted)' }}>{l}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '.875rem', lineHeight: 1.6, color: '#374151', maxWidth: 340 }}>
            <strong>Wenyuan ✨</strong><br/>
            Coder · Artist · Dancer<br/>
            Finding beauty in every form — digital and analog<br/>
            <span style={{ color: 'var(--primary)' }}>#artlife #techlife #dancelife</span>
          </p>
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid var(--border)', marginBottom: 20 }} />

      {/* ── Passion blurbs ── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 36 }}>
        {[
          { icon: '🎨', title: 'Art', desc: 'Watercolour, illustration & digital art — I love getting lost in colour and form.' },
          { icon: '💃', title: 'Dance', desc: 'Contemporary, hip-hop, and traditional — movement is my favourite language.' },
          { icon: '🌏', title: 'Life', desc: 'Plants, books, food adventures, and game nights with the people I love.' },
        ].map(b => (
          <div key={b.title} style={{
            background: 'var(--surface)',
            borderRadius: 'var(--radius)',
            padding: '20px',
            textAlign: 'center',
            border: '1px solid var(--border)',
          }}>
            <div style={{ fontSize: '1.8rem', marginBottom: 8 }}>{b.icon}</div>
            <div style={{ fontWeight: 700, fontSize: '.95rem', marginBottom: 6 }}>{b.title}</div>
            <div style={{ fontSize: '.8rem', color: 'var(--muted)', lineHeight: 1.5 }}>{b.desc}</div>
          </div>
        ))}
      </div>

      {/* ── Category filter ── */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 4 }}>
        {CATS.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            style={{
              padding: '7px 18px', borderRadius: 100,
              fontSize: '.8rem', fontWeight: 600, cursor: 'pointer',
              background: active === cat ? CAT_COLORS[cat] : 'var(--surface)',
              color: active === cat ? '#fff' : 'var(--muted)',
              border: `1.5px solid ${active === cat ? CAT_COLORS[cat] : 'var(--border)'}`,
              transition: 'all .18s',
            }}
          >
            {cat === 'Art' ? '🎨 ' : cat === 'Dance' ? '💃 ' : cat === 'Life' ? '🌿 ' : ''}
            {cat}
          </button>
        ))}
      </div>

      {/* ── Grid ── */}
      <div style={{ marginTop: 12 }}>
        <div className="ig-grid">
          {filtered.map(post => (
            <div key={post.id} className="ig-post">
              {/* Placeholder — swap for <img src={post.imageUrl} ... /> */}
              <div className="ig-placeholder" style={{ background: post.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>
                {post.emoji}
              </div>
              <div className="ig-overlay">
                <span style={{ fontWeight: 700, fontSize: '.85rem' }}>{post.tag}</span>
                <span>{post.caption}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 4, fontWeight: 700 }}>
                  <HeartIcon /> {post.likes}
                </div>
              </div>
              {/* Category pill */}
              <div style={{
                position: 'absolute', top: 8, left: 8,
                background: 'rgba(255,255,255,0.9)',
                borderRadius: 100,
                padding: '2px 8px',
                fontSize: '.65rem', fontWeight: 700,
                color: CAT_COLORS[post.category],
              }}>
                {post.category}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Footer note ── */}
      <div style={{ textAlign: 'center', marginTop: 40, color: 'var(--muted)', fontSize: '.85rem' }}>
        <p>📸 Replace the gradient placeholders with your actual photos — drop them in <code>public/</code> and update each post's image src.</p>
      </div>
    </div>
  )
}
