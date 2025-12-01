import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-brand-pink/30 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-brand-yellow/30 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-brand-cyan/20 rounded-full blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <span className="text-gradient">안녕하세요!</span>
              <br />
              <span className="text-brand-dark">발랄하고 엉뚱한</span>
              <br />
              <span className="text-gradient">포트폴리오</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-brand-dark/70 mb-8 font-medium"
            >
              유머러스하고 밝은 에너지로 가득한<br />
              창의적인 작업들을 만나보세요 ✨
            </motion.p>
            <motion.div variants={itemVariants}>
              <motion.a
                href="#works"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-4 bg-gradient-to-r from-brand-pink to-brand-yellow text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                작업 보기 🚀
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Animated Blob Graphics */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 md:h-[500px] flex items-center justify-center"
            animate={{
              x: mousePosition.x,
              y: mousePosition.y,
            }}
            transition={{
              type: 'spring',
              stiffness: 50,
              damping: 20,
            }}
          >
            {/* Main Blob */}
            <motion.div
              className="absolute w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-brand-pink to-brand-light-pink rounded-blob"
              animate={{
                borderRadius: [
                  '60% 40% 30% 70% / 60% 30% 70% 40%',
                  '30% 60% 70% 40% / 50% 60% 30% 60%',
                  '40% 60% 30% 70% / 70% 30% 60% 40%',
                  '60% 40% 30% 70% / 60% 30% 70% 40%',
                ],
                rotate: [0, 90, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-brand-yellow to-brand-pink rounded-blob-2 -top-10 -right-10"
              animate={{
                borderRadius: [
                  '30% 60% 70% 40% / 50% 60% 30% 60%',
                  '60% 40% 30% 70% / 60% 30% 70% 40%',
                  '40% 60% 30% 70% / 70% 30% 60% 40%',
                  '30% 60% 70% 40% / 50% 60% 30% 60%',
                ],
                rotate: [360, 270, 180, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute w-40 h-40 md:w-56 md:h-56 bg-gradient-to-br from-brand-cyan to-brand-pink rounded-blob-3 -bottom-10 -left-10"
              animate={{
                borderRadius: [
                  '40% 60% 30% 70% / 70% 30% 60% 40%',
                  '60% 40% 30% 70% / 60% 30% 70% 40%',
                  '30% 60% 70% 40% / 50% 60% 30% 60%',
                  '40% 60% 30% 70% / 70% 30% 60% 40%',
                ],
                rotate: [0, -90, -180, -360],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            
            {/* Floating Elements */}
            <motion.div
              className="absolute top-0 right-0 w-16 h-16 bg-brand-yellow rounded-full"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-12 h-12 bg-brand-cyan rounded-full"
              animate={{
                y: [0, 15, 0],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero

