import { motion } from 'framer-motion'
import './AlbumCover.css'

function AlbumCover({ onOpen }) {
  return (
    <motion.div
      className="album-cover-container"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="album-cover"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onOpen}
      >
        <div className="album-cover-content">
          <motion.h1
            className="album-title handwriting"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Wochenendtrip 2026
          </motion.h1>

          <motion.div
            className="album-subtitle-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <p className="album-subtitle handwriting"></p>
            <div className="date-stamp">30.01. - 01.02.2026</div>
          </motion.div>

          <motion.div
            className="album-decoration"
            initial={{ opacity: 0, rotate: -5 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <span className="polaroid-icon">📸</span>
          </motion.div>

          <motion.p
            className="click-hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Klick zum Öffnen
          </motion.p>
        </div>

        {/* Corner decorations */}
        <div className="corner-decoration top-left"></div>
        <div className="corner-decoration top-right"></div>
        <div className="corner-decoration bottom-left"></div>
        <div className="corner-decoration bottom-right"></div>
      </motion.div>
    </motion.div>
  )
}

export default AlbumCover
