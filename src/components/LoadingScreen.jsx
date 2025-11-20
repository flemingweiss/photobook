import { motion } from 'framer-motion'
import './LoadingScreen.css'

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <motion.div
        className="loading-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="suitcase"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🧳
        </motion.div>

        <h2 className="loading-text handwriting">Packe Koffer...</h2>

        <div className="progress-bar-container">
          <motion.div
            className="progress-bar"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2.5,
              ease: "easeInOut"
            }}
          />
        </div>

        <motion.p
          className="loading-subtext"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Bereite deine Erinnerungen vor...
        </motion.p>
      </motion.div>
    </div>
  )
}

export default LoadingScreen
