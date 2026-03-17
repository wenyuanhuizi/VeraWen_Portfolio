import { useState } from 'react'
import Navbar from './components/Navbar'
import Introduction from './pages/Introduction'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import AboutMe from './pages/AboutMe'

export type Page = 'intro' | 'projects' | 'experience' | 'about'

export default function App() {
  const [page, setPage] = useState<Page>('intro')
  const [key, setKey] = useState(0)

  function navigate(p: Page) {
    setPage(p)
    setKey(k => k + 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <Navbar current={page} onNavigate={navigate} />
      <div key={key} className="page" style={{ paddingTop: 'var(--nav-h)' }}>
        {page === 'intro'      && <Introduction onNavigate={navigate} />}
        {page === 'projects'   && <Projects />}
        {page === 'experience' && <Experience />}
        {page === 'about'      && <AboutMe />}
      </div>
    </div>
  )
}
