
import Home from './pages/Home'
import Skills from './components/Skills'
import Navbar from './components/Navbar'
import About from './components/About'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CustomCursor from './utils/CursorAnimation'

export default function App() {
  return (
    <div className='overflow-x-hidden font-sora scroll-smooth'>
      <CustomCursor/>
      <Navbar />
      <Home />
      <Skills />
      <About />
      <Projects />
      <Contact />

      <Footer />
    </div>
  )
}
