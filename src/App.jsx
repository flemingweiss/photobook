import { useState, useEffect } from 'react'
import './App.css'
import LoadingScreen from './components/LoadingScreen'
import AlbumCover from './components/AlbumCover'
import AlbumPages from './components/AlbumPages'

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
    <div className="app">
      {loading ? (
        <LoadingScreen />
      ) : !albumOpen ? (
        <AlbumCover onOpen={handleOpenAlbum} />
      ) : (
        <AlbumPages />
      )}
    </div>
  )
}

export default App
