import { motion } from 'framer-motion'
import './TapedImage.css'

function TapedImage({ image, rotation = 0, width = '280px', tapeVariant = 1 }) {
  // Random rotation between -5 and +5 degrees if not specified
  const randomRotation = rotation || (Math.random() * 10 - 5)

  // Tape positions based on variant
  const tapePositions = {
    1: { top: '-10px', left: '20%', rotation: -5 },
    2: { top: '-10px', right: '20%', rotation: 5 },
    3: { top: '-10px', left: '50%', transform: 'translateX(-50%)', rotation: 0 }
  }

  const tapePos = tapePositions[tapeVariant] || tapePositions[1]

  return (
    <motion.div
      className="taped-image-container"
      style={{
        rotate: randomRotation,
        width: width
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
      {/* Tape decoration */}
      <img
        src={`/textures/tape-${tapeVariant}.svg`}
        className="taped-image-tape"
        style={{
          ...tapePos,
          rotate: tapePos.rotation
        }}
        alt=""
      />

      <div className="taped-image">
        <img src={image} alt="" />
      </div>
    </motion.div>
  )
}

export default TapedImage
