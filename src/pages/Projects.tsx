const PROJECTS = [
  {
    id: 'medease',
    name: 'MedEase',
    tagline: 'Simplifying healthcare, one interaction at a time.',
    description:
      'MedEase is a full-stack health-tech application designed to streamline patient–provider communication and reduce friction in the healthcare experience. It features an AI-assisted symptom triage system, appointment scheduling, real-time messaging, and a personalised health dashboard — all in a HIPAA-conscious architecture.',
    highlights: [
      'AI-driven symptom triage with GPT-based recommendations',
      'Real-time patient–provider chat with end-to-end encryption',
      'Dynamic appointment scheduling with calendar integration',
      'Personalised health dashboard with vitals tracking',
    ],
    tech: ['React Native', 'Node.js', 'PostgreSQL', 'OpenAI API', 'Socket.io', 'AWS'],
    color: '#7c3aed',
    gradient: 'linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)',
    accentGradient: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
    emoji: '⚕️',
    github: 'https://github.com/',
    demo: '#',
    status: 'In Development',
    statusColor: '#7c3aed',
  },
  {
    id: 'saikawa',
    name: 'Saikawa Lab App',
    tagline: 'Digitising environmental research workflows.',
    description:
      'A cross-platform mobile application built for the Saikawa Lab at Emory University to digitise and streamline environmental data collection in the field. The app replaces paper-based processes, enabling researchers to log air quality samples, GPS-tagged observations, and lab notes — all synced to a central database.',
    highlights: [
      'Offline-first architecture for remote field data collection',
      'GPS-tagged sample logging with map visualisation',
      'Firebase real-time sync for multi-researcher collaboration',
      'Custom data export pipeline for research analysis tools',
    ],
    tech: ['Flutter', 'Dart', 'Firebase', 'Google Maps API', 'Python', 'GIS'],
    color: '#0369a1',
    gradient: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)',
    accentGradient: 'linear-gradient(135deg, #0369a1, #38bdf8)',
    emoji: '🔬',
    github: 'https://github.com/',
    demo: '#',
    status: 'Deployed',
    statusColor: '#059669',
  },
]

function TechBadge({ label, color }: { label: string; color: string }) {
  return (
    <span style={{
      padding: '4px 12px',
      borderRadius: 100,
      fontSize: '.75rem',
      fontWeight: 600,
      background: `${color}18`,
      color,
      border: `1px solid ${color}30`,
    }}>
      {label}
    </span>
  )
}

export default function Projects() {
  return (
    <div className="section" style={{ paddingTop: 72 }}>

      {/* Header */}
      <div style={{ marginBottom: 56 }}>
        <p style={{ fontSize: '.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--muted)', marginBottom: 10 }}>
          Portfolio
        </p>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1.2 }}>
          Featured Projects
        </h2>
        <p style={{ color: 'var(--muted)', marginTop: 12, maxWidth: 520, fontSize: '1rem', lineHeight: 1.7 }}>
          Two projects that represent my passion for building technology with real-world impact — spanning healthcare and environmental science.
        </p>
      </div>

      {/* Project cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
        {PROJECTS.map((p, i) => (
          <div key={p.id} className="card" style={{ overflow: 'hidden' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: i % 2 === 0 ? '1fr 380px' : '380px 1fr',
              minHeight: 360,
            }}>

              {/* Visual panel */}
              {i % 2 === 1 && (
                <div style={{
                  background: p.gradient,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexDirection: 'column', gap: 16, padding: 40,
                  order: 0,
                }}>
                  <div style={{
                    width: 100, height: 100, borderRadius: 24,
                    background: p.accentGradient,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '3rem',
                    boxShadow: `0 16px 40px ${p.color}40`,
                  }}>
                    {p.emoji}
                  </div>
                  <span style={{
                    fontSize: '.75rem', fontWeight: 700, textTransform: 'uppercase',
                    letterSpacing: '1px', color: p.statusColor,
                    background: `${p.statusColor}18`, padding: '4px 12px', borderRadius: 100,
                    border: `1px solid ${p.statusColor}30`,
                  }}>
                    ● {p.status}
                  </span>
                </div>
              )}

              {/* Text panel */}
              <div style={{ padding: '40px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ fontSize: '1.7rem', fontWeight: 800, letterSpacing: '-.02em', marginBottom: 4 }}>
                  {p.name}
                </h3>
                <p style={{ color: p.color, fontWeight: 600, fontSize: '.9rem', marginBottom: 16 }}>
                  {p.tagline}
                </p>
                <p style={{ color: '#4b5563', lineHeight: 1.75, fontSize: '.93rem', marginBottom: 24 }}>
                  {p.description}
                </p>

                {/* Highlights */}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
                  {p.highlights.map(h => (
                    <li key={h} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '.875rem', color: '#374151' }}>
                      <span style={{
                        width: 18, height: 18, borderRadius: '50%',
                        background: p.accentGradient,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0, marginTop: 1,
                      }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
                  {p.tech.map(t => <TechBadge key={t} label={t} color={p.color} />)}
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: 12 }}>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline"
                    style={{ borderColor: p.color, color: p.color, fontSize: '.8rem', padding: '8px 18px' }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                    GitHub
                  </a>
                  {p.demo !== '#' && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary"
                      style={{ background: p.accentGradient, fontSize: '.8rem', padding: '8px 18px' }}>
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </div>

              {/* Visual panel (right side for even items) */}
              {i % 2 === 0 && (
                <div style={{
                  background: p.gradient,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexDirection: 'column', gap: 16, padding: 40,
                  order: 1,
                }}>
                  <div style={{
                    width: 100, height: 100, borderRadius: 24,
                    background: p.accentGradient,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '3rem',
                    boxShadow: `0 16px 40px ${p.color}40`,
                  }}>
                    {p.emoji}
                  </div>
                  <span style={{
                    fontSize: '.75rem', fontWeight: 700, textTransform: 'uppercase',
                    letterSpacing: '1px', color: p.statusColor,
                    background: `${p.statusColor}18`, padding: '4px 12px', borderRadius: 100,
                    border: `1px solid ${p.statusColor}30`,
                  }}>
                    ● {p.status}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* More coming soon */}
      <div style={{
        marginTop: 48, textAlign: 'center',
        padding: '36px 24px',
        background: 'var(--surface)',
        borderRadius: 'var(--radius-lg)',
        border: '1.5px dashed var(--border)',
      }}>
        <p style={{ fontSize: '1.3rem', marginBottom: 6 }}>🚀</p>
        <p style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text)', marginBottom: 4 }}>More projects in progress</p>
        <p style={{ color: 'var(--muted)', fontSize: '.875rem' }}>
          Always building. Check back soon or explore my GitHub for the latest.
        </p>
      </div>
    </div>
  )
}
