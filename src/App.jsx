import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import FeaturedProjects from './components/FeaturedProjects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="">
      <Navbar />
      <div className='w-10/12 mx-auto'>
        <Hero />
        <About />
        <Services />
        <FeaturedProjects />
        <Testimonials />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App
