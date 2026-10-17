import Home from './sections/Home/Home'
import WhatIsGHH from './sections/WhatIsGHH/WhatIsGHH'
import Schedule from './sections/Schedule/Schedule'
import FAQ from './sections/FAQ/FAQ'
import Sponsors from './sections/Sponsors/Sponsors'
import Background from './sections/Background'
import Footer from './sections/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="page-shell">
      <Navbar />
      <Background />
      <div className="content">
        <Home />
        <WhatIsGHH />
        <Schedule />
        <FAQ />
        <Sponsors />
        <Footer />
      </div>
    </div>
  )
}

export default App
