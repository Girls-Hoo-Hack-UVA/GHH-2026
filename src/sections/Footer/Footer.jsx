import Logo from './assets/GHHLogo.png';
import Textlogo from './assets/GHHTextLogo.svg';
import "../../styles/Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">

                <div className="footer-logo">
                    <img
                        src={Textlogo}
                        alt="Girls Hoo Hack"
                        className="footer-text-logo"
                    />

                    <img
                        src={Logo}
                        alt="Girls Hoo Hack Logo"
                        className="footer-logo-image"
                    />
                </div>


                <div className="footer-contact">
                    <p>questions?</p>
                    <a href="mailto:girlshoohack@gmail.com">
                        girlshoohack@gmail.com
                    </a>
                </div>

            </div>

            <div className="footer-bottom">
                <span>© 2026 Girls Hoo Hack</span>
                <a href="https://mlh.io/code-of-conduct">
                    MLH Code of Conduct
                </a>
            </div>
        </footer>
    );
}

export default Footer;