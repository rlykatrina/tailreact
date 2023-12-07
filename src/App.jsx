import { BrowserRouter } from "react-router-dom"

import { About, Experience, Hero, Navbar, StarsCanvas, Slider, Sign } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Sign />
          <Hero />
        </div>
        <div className="black-gradient">
          <About />
        </div>
        <div className="relative z-0">
          <Experience />
          <Slider />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
