import Home from './sections/Home/Home'
import WhatIsGHH from './sections/WhatIsGHH/WhatIsGHH'
import Schedule from './sections/Schedule/Schedule'
import FAQ from './sections/FAQ/FAQ'
import About from './sections/About/About'
import Mission from './sections/Mission/Mission'
import Statistics from './sections/Statistics/Statistics'
import Sponsors from './sections/Sponsors/Sponsors'
import Team from './sections/Team/Team'
import Contact from './sections/Contact/Contact'
import Background from './sections/Background'

function App() {
  return (
    <div className="page-shell">
      <Background />
      <div className="content">
        <Home />
        <WhatIsGHH />
        <Schedule />
        <FAQ />
        <About />
        <Mission />
        <Statistics />
        <Sponsors />
        <Team />
        <Contact />
      </div>
    </div>
  )
}

export default App
