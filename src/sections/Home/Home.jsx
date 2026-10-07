import HackToMoon from "./assets/fulltext.svg"
import MobileText from "./assets/mobiletext.svg"
import MoonPic from "./assets/moonpic.svg"
import Hand from "./assets/hand.svg"
import "../../styles/Home.css";

function Home() {
  return (
    <section className="section" id="home">
      <p className="date-text">October 17-18, 2026 · Charlottesville, VA</p>

      <div className="hack-to-moon">
        <img src={HackToMoon} alt="Hack to the Moon" className="hack-to-moon-desktop" />
        <img src={MobileText} alt="Hack to the Moon" className="hack-to-moon-mobile" />
      </div>

       <div className="text-row">
          <p className="GHH2026-text">Girls Hoo Hack 2026</p>
            <div className="right-text">
              <p className ="seventh-text">Girls Who Code at UVA's 7th</p>
              <p className="annual-text">annual hackathon</p>
            </div>
      </div>
      <img src={MoonPic} alt="Moon-Picture" className="moon-picture" />
        <img src={Hand} alt="Hand" className="hand-picture" />
      
    </section>
  )
}

export default Home
