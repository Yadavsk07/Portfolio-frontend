'use client'

import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Certifications from '@/components/sections/Certifications'
import Contact from '@/components/sections/Contact'
import VideoSection from '@/components/sections/VideoSection'
import Chatbot from '@/components/Chatbot'
import ThemeToggle from '@/components/ThemeToggle'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      <ThemeToggle />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      {/* <VideoSection /> */}
      <Contact />
      <Chatbot />
    </main>
  )
}

