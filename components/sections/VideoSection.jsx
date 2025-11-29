'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Play } from 'lucide-react'

export default function VideoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      id="video"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Why Should You Hire Me?
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A 1-2 minute introduction showcasing my strengths, mindset, and what makes me a great hire
        </motion.p>

        <motion.div
          className="relative bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden shadow-2xl aspect-video"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Placeholder for video - Replace with your actual video */}
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
            <div className="text-center">
              <motion.div
                className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Play className="w-10 h-10 text-blue-600 ml-1" fill="currentColor" />
              </motion.div>
              <p className="text-white text-lg font-semibold">
                Upload your video here
              </p>
              <p className="text-white/80 text-sm mt-2">
                Replace this placeholder with your introduction video
              </p>
            </div>
          </div>

          {/* Uncomment and use this when you have your video ready */}
          {/* 
          <video
            className="w-full h-full object-cover"
            controls
            poster="/video-poster.jpg"
          >
            <source src="/your-intro-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          */}
        </motion.div>

        <motion.p
          className="text-center text-gray-500 dark:text-gray-500 mt-6 text-sm italic"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          💡 Tip: Record a clear, confident 1-2 minute video introducing yourself, your passion for development, and what makes you unique.
        </motion.p>
      </div>
    </section>
  )
}

