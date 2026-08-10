import { LanguageProvider } from './i18n/LanguageContext'
import TrajectoryRail from './components/TrajectoryRail'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import WebProjects from './components/WebProjects'
import Research from './components/Research'
import Journey from './components/Journey'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <LanguageProvider>
      <TrajectoryRail />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <WebProjects />
        <Research />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
