import Logo from './assets/GHHLogo.png';
import Textlogo from './assets/GHHTextLogo.svg';
import "../../styles/Footer.css";


function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={Textlogo} alt="GHHTextLogo" className="footer-text-logo" />
                    <img src={Logo} alt="GHHLogo" className="footer-logo-image" />

                </div>
            </div>
        </footer>
    )
}

export default Footer;