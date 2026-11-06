import CodeBackground from './components/CodeBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <>
      <CodeBackground />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        {/* Alternate sections sit on a tinted band so each one stands apart */}
        <div className="band">
          <About />
        </div>
        <Skills />
        <div className="band">
          <Experience />
        </div>
        <Projects />
        <div className="band">
          <Contact />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
