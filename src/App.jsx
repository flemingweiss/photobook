import { useState, useEffect } from 'react'
import './App.css'
import { ThemeProvider } from './context/ThemeContext'
import LoadingScreen from './components/LoadingScreen'
import AlbumCover from './components/AlbumCover'
import AlbumPages from './components/AlbumPages'
import ThemeToggle from './components/ThemeToggle'

function App() {
  const [loading, setLoading] = useState(true)
  const [albumOpen, setAlbumOpen] = useState(false)

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleOpenAlbum = () => {
    setAlbumOpen(true)
  }

  return (
    <ThemeProvider>
      <div className="app">
        {!loading && <ThemeToggle />}
        {loading ? (
          <LoadingScreen />
        ) : !albumOpen ? (
          <AlbumCover onOpen={handleOpenAlbum} />
        ) : (
          <AlbumPages />
        )}
      </div>
    </ThemeProvider>
  )
}

export default App
