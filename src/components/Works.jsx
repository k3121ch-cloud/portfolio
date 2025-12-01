import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Works = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const works = [
    {
      title: '프로젝트 제목 1',
      description: '발랄하고 엉뚱한 컨셉으로 제작한 웹 프로젝트입니다. 밝고 상큼한 색감과 재미있는 인터랙션으로 사용자 경험을 향상시켰습니다.',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      color: 'from-brand-pink to-brand-light-pink',
      emoji: '🎨',
    },
    {
      title: '프로젝트 제목 2',
      description: '예상치 못한 아이디어와 유머러스한 톤으로 디자인한 브랜딩 프로젝트입니다. 둥근 그래픽과 물방울 형태의 요소들이 특징입니다.',
      tags: ['Branding', 'UI/UX Design', 'Illustration'],
      color: 'from-brand-yellow to-brand-pink',
      emoji: '✨',
    },
    {
      title: '프로젝트 제목 3',
      description: '밝고 에너지 넘치는 모바일 애플리케이션입니다. 점프하고 흔들리는 귀여운 모션과 상큼한 색감이 조화를 이룹니다.',
      tags: ['React Native', 'Animation', 'Design System'],
      color: 'from-brand-cyan to-brand-pink',
      emoji: '🚀',
    },
    {
      title: '프로젝트 제목 4',
      description: 'Quirky하고 Playful한 컨셉의 웹사이트입니다. 예상치 못한 인터랙션과 밝은 에너지로 사용자들에게 즐거운 경험을 제공합니다.',
      tags: ['Next.js', 'TypeScript', 'Creative Design'],
      color: 'from-brand-light-pink to-brand-yellow',
      emoji: '💫',
    },
  ]

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

  return (
    <section id="works" ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-white to-brand-cyan/10">
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
              <span className="text-gradient">Works</span>
            </motion.h2>
            <p className="text-xl text-brand-dark/70 max-w-2xl mx-auto">
              발랄하고 엉뚱한 에너지로 만든 작업들
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {works.map((work, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transition-all group cursor-pointer"
              >
                {/* Project Header */}
                <div className={`h-48 bg-gradient-to-br ${work.color} relative overflow-hidden`}>
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.5,
                    }}
                  >
                    <span className="text-8xl">{work.emoji}</span>
                  </motion.div>
                  
                  {/* Animated Blob Background */}
                  <motion.div
                    className="absolute inset-0 opacity-20"
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
                      delay: index * 0.3,
                    }}
                  >
                    <div className="w-full h-full bg-white" />
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6 md:p-8">
                  <motion.h3
                    className="text-2xl font-bold text-brand-dark mb-3"
                    whileHover={{ x: 5 }}
                  >
                    {work.title}
                  </motion.h3>
                  <p className="text-brand-dark/70 mb-4 leading-relaxed">
                    {work.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {work.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="px-3 py-1 bg-brand-light-pink/30 text-brand-dark rounded-full text-sm font-semibold"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Link */}
                  <motion.a
                    href="#"
                    className="inline-flex items-center text-brand-pink font-bold hover:text-brand-yellow transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    자세히 보기
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      →
                    </motion.span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Works

