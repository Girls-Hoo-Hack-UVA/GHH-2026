import PureButtonsLogo from './Pure-Buttons-Blue-Gradient-Logo-RGB.png'
import OTTOLogo from './Otto_Primary_Maroon_300ppi.png'
import UVABookstoreLogo from './UVA_BOOKSTORE_LOGO.png'
import MLLogo from './ml_at_uva.png'
import TingLogo from './ting.png'
import SustainableITLogo from './sustainableIT-logo-rectangle-500px.png'
import SimonComputingLogo from './simoncomputing_logo.png'
import SailyLogo from './saily_logo.png'
import NordVPNLogo from './nordvpn_logo.png'
import NordPassLogo from './nordpass_logo.webp'
import IncogniLogo from './incogni_logo.png'
import CoveronLogo from './coveron_logo.png'
import CoStarLogo from './costar_logo.png'
import './Sponsors.css'

function Sponsors() {
  return (
    <section className="section" id="sponsors">
      <h1>Sponsors</h1>


    <div className="sponsors-bronze">
      <h2>Bronze Sponsors</h2>

      <div className="sponsors-bronze-logos">
        <a
            className="ting-link"
            href="https://mlh.link/MLH-PureButtons-hackathons"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={TingLogo} alt="Ting" />
          </a>

        <a
            className="simon-computing-link"
            href="https://mlh.link/MLH-PureButtons-hackathons"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={SimonComputingLogo} alt="SimonComputing" />
          </a>

        <a
            className="costar-link"
            href="https://mlh.link/MLH-PureButtons-hackathons"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={CoStarLogo} alt="CoStar Group" />
          </a>

        <a
            className="nord-vpn-link"
            href="https://mlh.link/MLH-PureButtons-hackathons"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={NordVPNLogo} alt="NordVPN" />
          </a>

        <a
            className="nord-pass-link"
            href="https://mlh.link/MLH-PureButtons-hackathons"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={NordPassLogo} alt="NordPass" />
          </a>

        <a
            className="coveron-link"
            href="https://mlh.link/MLH-PureButtons-hackathons"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={CoveronLogo} alt="Coveron" />
          </a>

        <a
            className="incogni-link"
            href="https://mlh.link/MLH-PureButtons-hackathons"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={IncogniLogo} alt="Incogni" />
          </a>

        <a
            className="saily-link"
            href="https://mlh.link/MLH-PureButtons-hackathons"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={SailyLogo} alt="Saily" />
          </a>

        <a
            className="sustainable-it-link"
            href="https://mlh.link/MLH-PureButtons-hackathons"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={SustainableITLogo} alt="UVA Sustainable IT" />
          </a>

      </div>

    </div>



      <div className="sponsors-special-thanks">
        <h2>Special Thanks</h2>

        <div className="sponsors-special-thanks-logos">
          <a
            className="pure-buttons-logo-link"
            href="https://mlh.link/MLH-PureButtons-hackathons"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={PureButtonsLogo} alt="Pure Buttons" />
          </a>

          <a
            className="otto-logo-link"
            href="https://dineotto.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={OTTOLogo} alt="OTTO" />
          </a>

          <a
            className="bookstore-logo-link"
            href="https://www.uvabookstores.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={UVABookstoreLogo} alt="UVA Bookstore" />
          </a>

          <a
            className="ml-logo-link"
            href="https://www.mlatuva.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={MLLogo} alt="ML @ UVA" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Sponsors
