import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  }

  const skills = [
    { name: 'Creativity', emoji: '🎨', color: 'from-brand-pink to-brand-light-pink' },
    { name: 'Design', emoji: '✨', color: 'from-brand-yellow to-brand-pink' },
    { name: 'Development', emoji: '💻', color: 'from-brand-cyan to-brand-pink' },
    { name: 'Innovation', emoji: '🚀', color: 'from-brand-light-pink to-brand-yellow' },
  ]

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-white to-brand-light-pink/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-gradient">About Me</span>
            </motion.h2>
            <p className="text-xl text-brand-dark/70 max-w-2xl mx-auto">
              발랄하고 엉뚱하며 활발한 에너지로 가득한 크리에이터
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.p
                className="text-lg text-brand-dark/80 leading-relaxed"
                whileHover={{ x: 5 }}
              >
                안녕하세요! 저는 <span className="font-bold text-brand-pink">발랄하고 엉뚱하며 활발한</span> 에너지를 가진
                브랜딩 디자이너이자 웹 디자이너, 프론트엔드 개발자입니다.
              </motion.p>
              <motion.p
                className="text-lg text-brand-dark/80 leading-relaxed"
                whileHover={{ x: 5 }}
              >
                일상 속에서 발견하는 작은 재미와 예상치 못한 아이디어를 디자인과 개발에 녹여내는 것을 좋아합니다.
                유머러스하고 밝은 톤으로 사용자들에게 즐거운 경험을 선사하는 것이 제 목표입니다.
              </motion.p>
              <motion.p
                className="text-lg text-brand-dark/80 leading-relaxed"
                whileHover={{ x: 5 }}
              >
                예상치 못한 곳에서 영감을 얻고, 상큼하고 밝은 색감으로 세상을 더 즐겁게 만들어가고 있습니다.
              </motion.p>
            </motion.div>

            {/* Visual Element */}
            <motion.div
              variants={itemVariants}
              className="relative h-80 flex items-center justify-center"
            >
              <motion.div
                className="absolute w-64 h-64 bg-gradient-to-br from-brand-pink to-brand-yellow rounded-blob"
                animate={{
                  borderRadius: [
                    '60% 40% 30% 70% / 60% 30% 70% 40%',
                    '30% 60% 70% 40% / 50% 60% 30% 60%',
                    '40% 60% 30% 70% / 70% 30% 60% 40%',
                    '60% 40% 30% 70% / 60% 30% 70% 40%',
                  ],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute text-8xl"
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                😊
              </motion.div>
            </motion.div>
          </div>

          {/* Skills */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.1, y: -10 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all"
              >
                <motion.div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${skill.color} flex items-center justify-center text-3xl`}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: index * 0.5,
                  }}
                >
                  {skill.emoji}
                </motion.div>
                <h3 className="text-center font-bold text-brand-dark text-lg">
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

