import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import './ThemeToggle.css'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <span className="theme-icon">🌙</span>
      ) : (
        <span className="theme-icon">☀️</span>
      )}
    </motion.button>
  )
}

export default ThemeToggle
