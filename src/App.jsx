import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ThemeProvider } from './context/ThemeProvider'
import { BackgroundOrbs } from './components/BackgroundOrbs'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/sections/HeroSection'
import { StatsStrip } from './components/sections/StatsStrip'
import { AboutPreview } from './components/sections/AboutPreview'
import { TechStack } from './components/sections/TechStack'
import { FeaturedProjects } from './components/sections/FeaturedProjects'
import { Experience } from './components/sections/Experience'
import { Services } from './components/sections/Services'
import { Testimonials } from './components/sections/Testimonials'
import { CTA } from './components/sections/CTA'
import { Footer } from './components/sections/Footer'
import './styles/portfolio.css'

gsap.registerPlugin(ScrollTrigger)

function PageShell() {
  const mainRef = useRef(null)

  useLayoutEffect(() => {
    const main = mainRef.current
    if (!main) return undefined

    const ctx = gsap.context(() => {
      gsap.from(main, {
        opacity: 0,
        y: 12,
        filter: 'blur(6px)',
        duration: 0.9,
        ease: 'power3.out',
      })
    }, main)

    const t = requestAnimationFrame(() => ScrollTrigger.refresh())
    return () => {
      cancelAnimationFrame(t)
      ctx.revert()
    }
  }, [])

  return (
    <div className="page">
      <BackgroundOrbs />
      <Navbar />
      <main ref={mainRef} className="page-main">
        <HeroSection />
        <StatsStrip />
        <AboutPreview />
        <TechStack />
        <FeaturedProjects />
        <Experience />
        <Services />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <PageShell />
    </ThemeProvider>
  )
}
