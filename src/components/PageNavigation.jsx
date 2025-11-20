import { motion } from 'framer-motion'
import './PageNavigation.css'

function PageNavigation({ currentPage, totalPages, onNext, onPrev }) {
  const hasNext = currentPage < totalPages - 2
  const hasPrev = currentPage > 0

  // Calculate actual page numbers (1-indexed)
  const leftPageNum = currentPage + 1
  const rightPageNum = currentPage + 2

  return (
    <div className="page-navigation">
      {/* Previous button */}
      <motion.button
        className="nav-button prev-button"
        onClick={onPrev}
        disabled={!hasPrev}
        whileHover={hasPrev ? { scale: 1.1, x: -5 } : {}}
        whileTap={hasPrev ? { scale: 0.95 } : {}}
        animate={{
          opacity: hasPrev ? 1 : 0.3,
        }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="18" stroke="#f4e8d8" strokeWidth="2" fill="rgba(244, 232, 216, 0.2)" />
          <path
            d="M24 12L16 20L24 28"
            stroke="#f4e8d8"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>

      {/* Page indicator */}
      <motion.div
        className="page-indicator"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <span className="page-numbers">
          Seite {leftPageNum}{rightPageNum <= totalPages && `-${rightPageNum}`} 
        </span>
      </motion.div>

      {/* Next button */}
      <motion.button
        className="nav-button next-button"
        onClick={onNext}
        disabled={!hasNext}
        whileHover={hasNext ? { scale: 1.1, x: 5 } : {}}
        whileTap={hasNext ? { scale: 0.95 } : {}}
        animate={{
          opacity: hasNext ? 1 : 0.3,
        }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="18" stroke="#f4e8d8" strokeWidth="2" fill="rgba(244, 232, 216, 0.2)" />
          <path
            d="M16 12L24 20L16 28"
            stroke="#f4e8d8"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>

      {/* Swipe hint (only on mobile) */}
      <motion.div
        className="swipe-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span>← Wische zum Blättern →</span>
      </motion.div>
    </div>
  )
}

export default PageNavigation
