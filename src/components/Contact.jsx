import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic here
    alert('메시지가 전송되었습니다! (Placeholder)')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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

  const socialLinks = [
    { name: 'Email', icon: '📧', href: 'mailto:example@email.com', color: 'bg-brand-pink' },
    { name: 'GitHub', icon: '💻', href: '#', color: 'bg-brand-yellow' },
    { name: 'LinkedIn', icon: '💼', href: '#', color: 'bg-brand-cyan' },
    { name: 'Instagram', icon: '📸', href: '#', color: 'bg-brand-light-pink' },
  ]

  return (
    <section id="contact" ref={ref} className="py-20 md:py-32 bg-gradient-to-b from-brand-cyan/10 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-brand-pink/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-40 h-40 bg-brand-yellow/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 8,
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
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-gradient">Contact</span>
            </motion.h2>
            <p className="text-xl text-brand-dark/70 max-w-2xl mx-auto">
              프로젝트나 협업에 관심이 있으시다면 언제든지 연락주세요!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-3xl shadow-xl space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-brand-dark font-semibold mb-2">
                    이름
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-3 border-2 border-brand-light-pink/30 rounded-2xl focus:border-brand-pink focus:outline-none transition-colors"
                    placeholder="이름을 입력해주세요"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-brand-dark font-semibold mb-2">
                    이메일
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-3 border-2 border-brand-light-pink/30 rounded-2xl focus:border-brand-pink focus:outline-none transition-colors"
                    placeholder="이메일을 입력해주세요"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-brand-dark font-semibold mb-2">
                    메시지
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-3 border-2 border-brand-light-pink/30 rounded-2xl focus:border-brand-pink focus:outline-none transition-colors resize-none"
                    placeholder="메시지를 입력해주세요"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-brand-pink to-brand-yellow text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  메시지 보내기 🚀
                </motion.button>
              </form>
            </motion.div>

            {/* Social Links & Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-brand-dark mb-6">
                  다른 방법으로 연락하기
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`${social.color} p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all text-center group`}
                    >
                      <motion.div
                        className="text-4xl mb-2"
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
                        {social.icon}
                      </motion.div>
                      <p className="text-white font-bold">{social.name}</p>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Fun Element */}
              <motion.div
                className="bg-gradient-to-br from-brand-pink to-brand-yellow p-8 rounded-3xl shadow-lg text-center"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="text-6xl mb-4"
                  animate={{
                    rotate: [0, 20, -20, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  💌
                </motion.div>
                <p className="text-white font-bold text-lg">
                  언제든지 편하게 연락주세요!<br />
                  빠르게 답변드리겠습니다 ✨
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

