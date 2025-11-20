import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSwipeable } from 'react-swipeable'
import './AlbumPages.css'
import Polaroid from './Polaroid'
import TapedImage from './TapedImage'
import PageNavigation from './PageNavigation'
import { pages } from '../data/pages'

function AlbumPages() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0)
  const [direction, setDirection] = useState(0) // -1 for left, 1 for right
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  const totalPages = pages.length

  // Track window resize for mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleNextPage = () => {
    const step = isMobile ? 1 : 2
    const maxIndex = isMobile ? totalPages - 1 : totalPages - 2

    if (currentPageIndex < maxIndex) {
      setDirection(1)
      setCurrentPageIndex(currentPageIndex + step)
    }
  }

  const handlePrevPage = () => {
    const step = isMobile ? 1 : 2

    if (currentPageIndex > 0) {
      setDirection(-1)
      setCurrentPageIndex(currentPageIndex - step)
    }
  }

  // Swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNextPage,
    onSwipedRight: handlePrevPage,
    preventScrollOnSwipe: true,
    trackMouse: true
  })

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrevPage()
      if (e.key === 'ArrowRight') handleNextPage()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentPageIndex])

  const leftPage = pages[currentPageIndex]
  const rightPage = pages[currentPageIndex + 1]
  const currentPage = pages[currentPageIndex]

  const pageVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction > 0 ? -90 : 90
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      rotateY: direction > 0 ? 90 : -90
    })
  }

  const renderPageContent = (page) => {
    if (!page) return null

    return (
      <div className="page-content">
        {page.polaroids?.map((polaroid, index) => (
          <div
            key={index}
            className="polaroid-wrapper"
            style={polaroid.position}
          >
            <Polaroid
              image={polaroid.image}
              caption={polaroid.caption}
              rotation={polaroid.rotation}
              size={polaroid.size}
              tapeVariant={polaroid.tapeVariant}
            />
          </div>
        ))}

        {page.tapedImages?.map((tapedImage, index) => (
          <div
            key={`taped-${index}`}
            className="polaroid-wrapper"
            style={tapedImage.position}
          >
            <TapedImage
              image={tapedImage.image}
              rotation={tapedImage.rotation}
              width={tapedImage.width}
              tapeVariant={tapedImage.tapeVariant}
            />
          </div>
        ))}

        {page.text && (
          <div className="page-text handwriting" style={page.textPosition}>
            {page.text}
          </div>
        )}

        {page.decoration && (
          <div className="page-decoration" style={page.decorationPosition}>
            {page.decoration}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="album-pages-container" {...swipeHandlers}>
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentPageIndex}
          custom={direction}
          variants={pageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
            rotateY: { duration: 0.6 }
          }}
          className="album-double-page"
        >
          {isMobile ? (
            // Mobile: Single page view
            <div className="album-page single-page">
              {renderPageContent(currentPage)}
            </div>
          ) : (
            // Desktop: Double page view
            <>
              {/* Left Page */}
              <div className="album-page left-page">
                {renderPageContent(leftPage)}
              </div>

              {/* Spine/Binding */}
              <div className="album-spine"></div>

              {/* Right Page */}
              <div className="album-page right-page">
                {renderPageContent(rightPage)}
              </div>
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <PageNavigation
        currentPage={currentPageIndex}
        totalPages={totalPages}
        onNext={handleNextPage}
        onPrev={handlePrevPage}
      />
    </div>
  )
}

export default AlbumPages
