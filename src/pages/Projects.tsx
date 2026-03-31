/// <reference types="vite/client" />
import { useState } from 'react'

const SAIKAWA_IMAGES = [
  'display1.png',
  'display2.png',
  'display3.png',
  'display4.png',
  'display5.png',
]

function SaikawaGallery({ color, statusColor, status }: { color: string; statusColor: string; status: string }) {
  const [idx, setIdx] = useState(0)
  const base = import.meta.env.BASE_URL

  const prev = () => setIdx(i => (i - 1 + SAIKAWA_IMAGES.length) % SAIKAWA_IMAGES.length)
  const next = () => setIdx(i => (i + 1) % SAIKAWA_IMAGES.length)

  return (
    <div style={{
      background: 'linear-gradient(135deg, #0f0f0f 0%, #181510 100%)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      gap: 14, padding: '32px 24px', position: 'relative', overflow: 'hidden',
    }}>
      {/* Image */}
      <div style={{
        width: '100%', maxWidth: 300,
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: `0 16px 40px ${color}40`,
        background: '#111',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <img
          src={`${base}saikawa/${SAIKAWA_IMAGES[idx]}`}
          alt={`Saikawa screenshot ${idx + 1}`}
          style={{ width: '100%', height: 'auto', objectFit: 'contain', display: 'block' }}
        />
      </div>

      {/* Prev / Next */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <button onClick={prev} style={{
          width: 32, height: 32, borderRadius: '50%', border: `1.5px solid ${color}40`,
          background: '#1a1a1a', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          color, boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
        </button>

        {/* Dots */}
        <div style={{ display: 'flex', gap: 6 }}>
          {SAIKAWA_IMAGES.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} style={{
              width: i === idx ? 18 : 6, height: 6, borderRadius: 100,
              background: i === idx ? color : `${color}40`,
              border: 'none', cursor: 'pointer', padding: 0,
              transition: 'all .2s',
            }}/>
          ))}
        </div>

        <button onClick={next} style={{
          width: 32, height: 32, borderRadius: '50%', border: `1.5px solid ${color}40`,
          background: '#1a1a1a', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          color, boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>

      {/* Status badge */}
      <span style={{
        fontSize: '.75rem', fontWeight: 700, textTransform: 'uppercase',
        letterSpacing: '1px', color: statusColor,
        background: `${statusColor}18`, padding: '4px 12px', borderRadius: 100,
        border: `1px solid ${statusColor}30`,
      }}>
        ● {status}
      </span>
    </div>
  )
}

const PROJECTS = [
   {
    id: 'saikawa',
    name: 'Saikawa Lab App',
    tagline: 'A full-stack platform for environmental data and lab engagement.',
    description:
      'Independently designed and built a full-stack iOS application for Emory University’s largest environmental science research group. The platform centralizes real-time air quality data, lab communications, and user engagement into a single mobile experience, replacing fragmented web and manual workflows.',
    highlights: [
      'Built end-to-end system with React Native frontend and Express.js backend',
      'Real-time air quality data visualization with integrated bias-correction models',
      'Event feed and calendar system with push notification support',
      'User reporting and admin dashboard for managing data and community input',
      'Deployed backend services on AWS and Google Cloud with production monitoring',
      'Translated research needs into scalable product features through direct collaboration with non-technical stakeholders',
    ],
    tech: [
      'React Native',
      'Express.js',
      'Node.js',
      'AWS (RDS)',
      'Google Cloud App Engine',
      'MySQL',
      'Swagger/OpenAPI'
    ],
    color: '#D4A843',
    gradient: 'linear-gradient(135deg, #141414 0%, #1a1a1a 100%)',
    accentGradient: 'linear-gradient(135deg, #A07828, #D4A843, #F5DFA0)',
    demo: 'https://drive.google.com/file/d/1cK4vOXYUMuMfadp8ABI2ZVHiUX6xDLVj/view?usp=sharing',
    status: 'In Apple Store Review Process',
    statusColor: '#D4A843',
  },

  {
    id: 'medease',
    name: 'MedEase',
    tagline: 'An AI-powered aftercare agent for patient support and coordination.',
    description:
      'MedEase is an AI-driven platform designed to simplify post-treatment care by helping patients understand medical information and manage next steps. I founded and led the development of the system, designing end-to-end architecture and building backend services that integrate LLMs, real-time communication, and external healthcare workflows.',
    highlights: [
      'Designed and implemented backend architecture using FastAPI with 40+ RESTful APIs',
      'Built AI pipelines for medical report simplification using GPT-4o, T5-Large, and DeepSeek',
      'Developed real-time medication assistance agent with WebSocket-based interaction',
      'Integrated external services (Google Calendar, Maps, Gmail) via OAuth 2.0',
      'Orchestrated multi-service workflows to support patient aftercare coordination',
      'Led a team of 3 engineers, managing agile sprints and iterative product delivery',
    ],
    tech: [
      'FastAPI',
      'Python',
      'MongoDB',
      'AWS S3',
      'WebSockets',
      'OAuth 2.0',
      'OpenAI (GPT-4o, GPT-4o mini)',
      'T5-Large',
      'DeepSeek'
    ],
    impact:
      'Combined AI agent architecture with full-stack system design to build a scalable healthcare platform focused on real-world patient support.',
    color: '#D4A843',
    gradient: 'linear-gradient(135deg, #141414 0%, #1c1a14 100%)',
    accentGradient: 'linear-gradient(135deg, #A07828, #D4A843, #F5DFA0)',
    emoji: '⚕️',
    github: 'https://github.com/',
    demo: '#',
    status: 'In Development',
    statusColor: '#A07828',
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
                    <li key={h} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '.875rem', color: '#B0A898' }}>
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
                p.id === 'saikawa'
                  ? <SaikawaGallery color={p.color} statusColor={p.statusColor} status={p.status} />
                  : <div style={{
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
