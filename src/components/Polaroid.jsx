import { motion } from 'framer-motion'
import './Polaroid.css'

function Polaroid({ image, caption, rotation = 0, size = 'medium', tapeVariant = 1 }) {
  // Random rotation between -5 and +5 degrees if not specified
  const randomRotation = rotation || (Math.random() * 10 - 5)

  // Tape positions based on variant
  const tapePositions = {
    1: { top: '-10px', left: '20%', rotation: -5 },
    2: { top: '-10px', right: '20%', rotation: 5 },
    3: { top: '-10px', left: '50%', transform: 'translateX(-50%)', rotation: 0 }
  }

  const tapePos = tapePositions[tapeVariant] || tapePositions[1]

  // Size configurations
  const sizeClasses = {
    small: 'polaroid-small',
    medium: 'polaroid-medium',
    large: 'polaroid-large'
  }

  return (
    <motion.div
      className={`polaroid-container ${sizeClasses[size]}`}
      style={{
        rotate: randomRotation,
      }}
      initial={{ opacity: 0, y: 20, rotate: randomRotation + 10 }}
      animate={{ opacity: 1, y: 0, rotate: randomRotation }}
      transition={{ duration: 0.6 }}
      whileHover={{
        y: -10,
        rotate: 0,
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
    >
      {/* Tape decoration - only show if tapeVariant is not 0 */}
      {tapeVariant !== 0 && (
        <img
          src={`/assets/tape-${tapeVariant}.svg`}
          className="polaroid-tape"
          style={{
            ...tapePos,
            rotate: tapePos.rotation
          }}
          alt=""
        />
      )}

      <div className="polaroid">
        <div className="polaroid-image">
          <img src={image} alt="" />
        </div>

        {caption && (
          <div className="polaroid-caption">
            <p className="handwriting">{caption}</p>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default Polaroid
