import Hack from "./assets/hack.svg"
import Tothe from "./assets/tothe.svg"
import Moon from "./assets/moon.svg"
import "../../styles/Home.css";

function Home() {
  return (
    <section className="section" id="home">

      <div className="home-container">
        <div className="image-row">
          <img src={Hack} className="hack-text" alt="Hack" />
          <img src={Tothe} className="tothe-text" alt="to the" />
          <img src={Moon} className="moon-text" alt="Moon" />
        </div>
      </div>

       <div className="text-row">
          <p className="GHH2026-text">Girls Hoo Hack 2026</p>
            <div className="right-text">
              <p className ="seventh-text">Girls Who Code at UVA's 7th</p>
              <p className="annual-text">annual hackathon</p>
            </div>
      </div>
      
    </section>
  )
}

export default Home
