'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="prose prose-lg dark:prose-invert max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
  I'm a Computer Science undergraduate specializing in <strong>full-stack development and software engineering</strong>, passionate about turning ideas into scalable and impactful digital products. I build applications that are not only functional, but intuitive, fast and optimized for real-world usage.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
  I have hands-on experience working with <strong>React.js, Spring Boot, Node.js, PostgreSQL/MySQL</strong>, and modern authentication systems like <strong>Auth0 and JWT</strong>, enabling me to deliver secure and reliable full-stack solutions. During internships and projects, I engineered applications that automated manual workflows, enhanced performance, and significantly improved user engagement.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
  I enjoy designing clean and responsive user interfaces, building scalable backend systems, and optimizing software for performance and maintainability. My development philosophy revolves around writing clean code, solving problems efficiently, and building products that make a difference for users.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
  Currently pursuing a <strong>B.Tech in Computer Science (CGPA: 8.39/10)</strong> at XIM University, I’m driven by continuous learning, collaboration, and translating complex challenges into simple, elegant engineering solutions. I’m eager to contribute to innovative products and teams that value creativity, ownership, and growth.
          </p>
          
        </motion.div>
      </div>
    </section>
  )
}

