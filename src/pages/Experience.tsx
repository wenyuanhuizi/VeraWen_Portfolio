const INTERNSHIPS = [
  {
    role: 'Software Engineering Intern',
    company: 'Your Company A',
    period: 'Summer 2024',
    location: 'San Francisco, CA (Remote)',
    color: '#7c3aed',
    description:
      'Led development of an internal tooling feature used by 200+ engineers daily. Collaborated closely with the product team to ship a redesigned dashboard reducing load time by 40%. Gained deep exposure to large-scale distributed systems.',
    skills: ['React', 'TypeScript', 'GraphQL', 'Kubernetes'],
    impact: '40% faster load time · 200+ daily users',
  },
  {
    role: 'Research Software Developer',
    company: 'Saikawa Lab, Emory University',
    period: 'Jan 2024 – May 2024',
    location: 'Atlanta, GA',
    color: '#0369a1',
    description:
      'Built the Saikawa Lab mobile application from scratch to digitise field data collection for environmental researchers. Replaced a fully paper-based workflow, enabling real-time cloud sync and GPS-tagged data capture across six field sites.',
    skills: ['Flutter', 'Firebase', 'Dart', 'Google Maps API'],
    impact: '6 field sites onboarded · Paper workflow eliminated',
  },
  {
    role: 'Software Engineering Intern',
    company: 'Your Company B',
    period: 'Summer 2023',
    location: 'New York, NY',
    color: '#d97706',
    description:
      'Contributed to backend API development for a B2B SaaS platform serving healthcare providers. Designed and implemented a RESTful microservice for insurance verification, reducing manual processing time significantly.',
    skills: ['Node.js', 'PostgreSQL', 'Docker', 'AWS Lambda'],
    impact: 'Reduced manual processing by 60% · Launched to prod',
  },
  {
    role: 'Teaching Assistant — Data Structures',
    company: 'Your University',
    period: 'Sep 2022 – May 2023',
    location: 'On Campus',
    color: '#059669',
    description:
      'Supported 80+ students through weekly office hours, assignment grading, and exam prep sessions. Developed supplemental learning materials that were adopted by the department for future semesters.',
    skills: ['Java', 'Algorithms', 'Mentoring'],
    impact: '80+ students mentored · Materials adopted dept-wide',
  },
]

const SKILLS_GRID = [
  { category: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'Dart', 'Java', 'SQL'] },
  { category: 'Frontend', items: ['React', 'React Native', 'Flutter', 'HTML/CSS', 'Tailwind'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'FastAPI', 'GraphQL', 'REST'] },
  { category: 'Data & AI', items: ['OpenAI API', 'PostgreSQL', 'Firebase', 'Pandas', 'Scikit-learn'] },
  { category: 'DevOps & Cloud', items: ['AWS', 'Docker', 'GitHub Actions', 'Kubernetes', 'Vercel'] },
  { category: 'Tools', items: ['Git', 'Figma', 'Notion', 'Linear', 'Postman'] },
]

export default function Experience() {
  return (
    <div className="section" style={{ paddingTop: 72 }}>

      {/* Header */}
      <div style={{ marginBottom: 56 }}>
        <p style={{ fontSize: '.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--muted)', marginBottom: 10 }}>
          Career
        </p>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1.2 }}>
          Professional Experience
        </h2>
        <p style={{ color: 'var(--muted)', marginTop: 12, maxWidth: 600, fontSize: '1rem', lineHeight: 1.7 }}>
          Each role has shaped the engineer I'm becoming — from research labs to product companies, my path has always pointed toward technology that matters.
        </p>
      </div>

      {/* Timeline */}
      <div className="timeline" style={{ marginBottom: 72 }}>
        {INTERNSHIPS.map((exp, i) => (
          <div key={i} className="timeline-item">
            <div className="timeline-dot" style={{ background: exp.color }} />
            <div className="card" style={{ padding: '28px 32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, letterSpacing: '-.01em' }}>{exp.role}</h3>
                  <p style={{ color: exp.color, fontWeight: 600, fontSize: '.9rem', marginTop: 2 }}>{exp.company}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{
                    fontSize: '.78rem', fontWeight: 600, color: exp.color,
                    background: `${exp.color}15`, padding: '4px 12px',
                    borderRadius: 100, border: `1px solid ${exp.color}25`,
                    display: 'block', marginBottom: 4,
                  }}>
                    {exp.period}
                  </span>
                  <span style={{ fontSize: '.75rem', color: 'var(--muted)' }}>{exp.location}</span>
                </div>
              </div>

              <p style={{ color: '#4b5563', lineHeight: 1.75, fontSize: '.9rem', marginBottom: 16 }}>
                {exp.description}
              </p>

              {/* Impact badge */}
              <div style={{
                background: `${exp.color}0d`,
                border: `1px solid ${exp.color}25`,
                borderRadius: 8, padding: '8px 14px',
                fontSize: '.8rem', fontWeight: 600, color: exp.color,
                display: 'inline-block', marginBottom: 16,
              }}>
                🎯 {exp.impact}
              </div>

              {/* Skills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {exp.skills.map(s => (
                  <span key={s} style={{
                    padding: '4px 12px', borderRadius: 100,
                    fontSize: '.75rem', fontWeight: 600,
                    background: `${exp.color}12`, color: exp.color,
                    border: `1px solid ${exp.color}28`,
                  }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Career narrative ── */}
      <div style={{
        background: 'linear-gradient(135deg, #ede9fe 0%, #f5f3ff 100%)',
        borderRadius: 'var(--radius-lg)',
        padding: '44px 48px',
        marginBottom: 64,
        border: '1px solid #ddd6fe',
      }}>
        <p style={{ fontSize: '.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--primary)', marginBottom: 12 }}>
          My Journey
        </p>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-.02em', marginBottom: 20, color: 'var(--text)' }}>
          From curiosity to conviction
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, color: '#374151', lineHeight: 1.8, fontSize: '.95rem' }}>
          <p>
            My journey in tech started with a simple curiosity — what if code could help people in a tangible way? That question led me to computer science, and every experience since has deepened my belief that the most meaningful software sits at the intersection of technology and human wellbeing.
          </p>
          <p>
            Working at the Saikawa Lab opened my eyes to how digital tools can transform research workflows and accelerate scientific discovery. Building for scientists who were frustrated with paper forms, I realised that <em>empathy-driven engineering</em> — deeply understanding your users before writing a single line — is the most powerful design principle.
          </p>
          <p>
            My industry internships then gave me fluency in the full product lifecycle: from greenfield API design to shipping features used by thousands. I learned to move quickly, communicate clearly across disciplines, and always keep the end user front of mind.
          </p>
          <p>
            Now, I'm drawn to <strong>health tech</strong> — a space where software can genuinely improve outcomes, reduce suffering, and make care more equitable. My goal is to join a team working on problems that matter, where engineering rigour meets human impact.
          </p>
        </div>
      </div>

      {/* ── Skills grid ── */}
      <div>
        <h3 style={{ fontSize: '1.3rem', fontWeight: 800, letterSpacing: '-.02em', marginBottom: 24 }}>
          Technical Skills
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
          {SKILLS_GRID.map(group => (
            <div key={group.category} className="card" style={{ padding: '20px 24px' }}>
              <p style={{ fontSize: '.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.2px', color: 'var(--muted)', marginBottom: 12 }}>
                {group.category}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {group.items.map(item => (
                  <span key={item} className="tag tag-gray" style={{ fontSize: '.8rem' }}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
