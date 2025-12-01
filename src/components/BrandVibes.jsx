import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const BrandVibes = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const keywords = [
    { word: 'Quirky', emoji: '🤪', color: 'bg-brand-pink' },
    { word: 'Playful', emoji: '🎮', color: 'bg-brand-yellow' },
    { word: 'Energetic', emoji: '⚡', color: 'bg-brand-cyan' },
    { word: 'Unexpected', emoji: '🎭', color: 'bg-brand-light-pink' },
    { word: 'Bright', emoji: '☀️', color: 'bg-brand-yellow' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  }

  return (
    <section id="brand-vibes" ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-brand-light-pink/10 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-40 h-40 bg-brand-pink/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.5, 1],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-60 h-60 bg-brand-yellow/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-gradient">Brand Vibes</span>
            </motion.h2>
            <p className="text-xl text-brand-dark/70 max-w-2xl mx-auto">
              나를 표현하는 브랜드 키워드들
            </p>
          </motion.div>

          {/* Keywords Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
            {keywords.map((keyword, index) => (
              <motion.div
                key={keyword.word}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.15, 
                  rotate: [0, -10, 10, -10, 0],
                  y: -10,
                }}
                whileTap={{ scale: 0.9 }}
                className={`${keyword.color} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all cursor-pointer`}
              >
                <motion.div
                  className="text-5xl mb-4 text-center"
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.2,
                  }}
                >
                  {keyword.emoji}
                </motion.div>
                <h3 className="text-center font-bold text-white text-xl">
                  {keyword.word}
                </h3>
              </motion.div>
            ))}
          </div>

          {/* Color Palette */}
          <motion.div
            variants={itemVariants}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl"
          >
            <h3 className="text-3xl font-bold text-center mb-8 text-brand-dark">
              Color Palette
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[
                { name: 'Main Pink', color: '#FF85A1', code: '#FF85A1' },
                { name: 'Main Yellow', color: '#FFD646', code: '#FFD646' },
                { name: 'Cyan', color: '#79D9F2', code: '#79D9F2' },
                { name: 'Light Pink', color: '#FFB8E9', code: '#FFB8E9' },
                { name: 'Dark', color: '#333333', code: '#333333' },
              ].map((colorItem, index) => (
                <motion.div
                  key={colorItem.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="text-center"
                >
                  <motion.div
                    className="w-full h-32 rounded-2xl mb-4 shadow-md"
                    style={{ backgroundColor: colorItem.color }}
                    whileHover={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                  />
                  <p className="font-semibold text-brand-dark mb-1">
                    {colorItem.name}
                  </p>
                  <p className="text-sm text-brand-dark/60 font-mono">
                    {colorItem.code}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tone Description */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <motion.div
              className="inline-block p-8 bg-gradient-to-r from-brand-pink via-brand-yellow to-brand-cyan rounded-3xl shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-2xl md:text-3xl font-bold text-white mb-4">
                유머러스 · 발랄 · 밝고 상큼한 느낌
              </p>
              <p className="text-lg text-white/90">
                예상치 못한 재미와 밝은 에너지로 가득한 브랜드 톤
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default BrandVibes

