import { useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import BrandVibes from './components/BrandVibes'
import Works from './components/Works'
import Contact from './components/Contact'

function App() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 80
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth',
          })
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <BrandVibes />
      <Works />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-brand-dark text-white py-8 text-center">
        <p className="text-brand-light-pink/80">
          © 2024 Quirky Portfolio. Made with 💖 and lots of energy!
        </p>
      </footer>
    </div>
  )
}

export default App

