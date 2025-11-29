'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="
        relative min-h-screen flex items-center overflow-hidden 
        bg-[#f9fafb] dark:bg-[#0c111c] 
        pt-20 sm:pt-24
      "
    >
      {/* Subtle animated gradient background */}
      <div
        className="
          absolute inset-0 
          bg-gradient-to-br from-white via-gray-100 to-white 
          dark:from-[#0c111c] dark:via-[#101722] dark:to-[#0c111c] 
          animate-pulse-slow
        "
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8 flex items-center h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

          {/* Left Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              className="text-xs tracking-[0.25em] text-blue-600 dark:text-blue-400 font-medium uppercase"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              WELCOME TO MY PORTFOLIO
            </motion.p>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <span className="block text-gray-900 dark:text-white">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 dark:from-blue-400 dark:via-blue-500 dark:to-blue-600 bg-clip-text text-transparent">
                Sumit Kumar Yadav
              </span>
            </motion.h1>

            <motion.div
              className="space-y-1"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <p className="text-xl md:text-[1.55rem] font-semibold text-gray-900 dark:text-white drop-shadow">
                Full Stack Developer
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg">
                Building scalable web applications with modern technologies
              </p>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-xs sm:text-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Bhubaneswar, Odisha</span>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {[ 
                { icon: <Github />, link: "https://github.com/Yadavsk07" },
                { icon: <Linkedin />, link: "https://www.linkedin.com/in/sumit-kumar-yadav-18a920250/" },
                { icon: <Mail />, link: "mailto:yadav.sk0709@gmail.com" },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    p-2.5 rounded-xl backdrop-blur 
                    bg-gray-200/60 border border-gray-300/60 text-gray-900 hover:bg-gray-300/60
                    dark:bg-gray-800/30 dark:border-gray-700/30 dark:text-white dark:hover:bg-gray-800/60
                    transition-all duration-300 shadow-lg
                  "
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap items-center gap-4 pt-2"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.button
                onClick={scrollToProjects}
                className="px-6 py-2.5 rounded-lg font-semibold text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/30 shadow-md hover:shadow-blue-600/50 transition-all duration-300 flex items-center gap-2 group relative overflow-hidden"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                View My Work
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform duration-300" />
              </motion.button>

              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-2.5 bg-gray-300 hover:bg-gray-200 text-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white rounded-lg font-semibold text-sm transition-all duration-300 shadow hover:shadow-gray-900 flex items-center gap-2"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Section – Profile Visual */}
          <motion.div
            className="
              relative z-10 mx-auto w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden
              border-[3px] border-blue-400/40 dark:border-blue-500/40
              shadow-[0_0_40px_rgba(0,110,255,0.35)] dark:shadow-[0_0_45px_rgba(0,90,255,0.55)]
              backdrop-blur-xl
              bg-gradient-to-br from-blue-300/15 to-blue-500/25
              dark:from-blue-700/20 dark:to-blue-900/30
            "
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.35 }}
          >
            <img
              src="/profile-picture.jpg"
              alt="Sumit Kumar Yadav"
              className="w-full h-full object-cover"
            />

            {/* Glass gloss highlight */}
            <div
              className="
                pointer-events-none absolute inset-0 
                bg-gradient-to-t from-transparent via-white/20 to-white/40 opacity-20
                dark:via-white/10 dark:to-white/25 dark:opacity-25
                rotate-[17deg]
              "
            />

            {/* Internal floating glow */}
            <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-2xl animate-pulse dark:bg-blue-400/10" />
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-700 dark:text-gray-400 text-xs flex flex-col items-center gap-1 cursor-pointer"
        onClick={scrollToProjects}
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      >
        <span>Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </motion.div>
    </section>
  )
}
