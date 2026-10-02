import PureButtonsLogo from './Pure-Buttons-Blue-Gradient-Logo-RGB.png'
import './Sponsors.css'

function Sponsors() {
  return (
    <section className="section" id="sponsors">
      <h1>Sponsors</h1>

      <div className="sponsors-special-thanks">
        <h2>Special Thanks</h2>
        <a
          className="sponsor-logo-link"
          href="https://mlh.link/MLH-PureButtons-hackathons"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={PureButtonsLogo} alt="Pure Buttons" />
        </a>
      </div>
    </section>
  )
}

export default Sponsors
