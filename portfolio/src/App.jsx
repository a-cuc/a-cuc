import { useEffect, useState } from 'react'
import { DataPage } from './components/DataPage'
import { ExperiencePage } from './components/ExperiencePage'
import { MainPage } from './components/MainPage'
import './App.css'

function App() {
  const [page, setPage] = useState(() => window.location.hash.slice(1) || 'main')

  useEffect(() => {
    const handleHashChange = () => setPage(window.location.hash.slice(1) || 'main')
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  if (page === 'networks' || page === 'solar') return <ExperiencePage type={page} />
  if (page === 'data') return <DataPage />
  return <MainPage />
}

export default App
