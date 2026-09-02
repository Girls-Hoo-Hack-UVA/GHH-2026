import Home from './sections/Home/Home'
import WhatIsGHH from './sections/WhatIsGHH/WhatIsGHH'
import Schedule from './sections/Schedule/Schedule'
import FAQ from './sections/FAQ/FAQ'
import Statistics from './sections/Statistics/Statistics'
import Sponsors from './sections/Sponsors/Sponsors'
import Team from './sections/Team/Team'
import Contact from './sections/Contact/Contact'
import Background from './sections/Background'
import Footer from './sections/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Holder from './sections/Holder/Holder'

function App() {
  return (
    <div className="page-shell">
      <Navbar />
      <Background />
      <div className="content">
        <Home />
        <WhatIsGHH />
        {/* <Schedule /> */}
        <FAQ />
        <Holder />
        {/* <Statistics /> */}
        {/* <Sponsors /> */}
        {/* <Team /> */}
        {/* <Contact /> */}
        <Footer />
      </div>
    </div>
  )
}

export default App
