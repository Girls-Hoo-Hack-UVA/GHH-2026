import Logo from './assets/GHHLogo.png';
import Textlogo from './assets/icon-1.svg';
import "./Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    return (
        <footer className="footer" id="footer">
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

                <div className='cio-statement'>
                    <p>Girls Who Code at UVA is compliant provided that we do not discriminate in membership or participation in events on the basis of "age, color, disability, gender identity or expression, marital status, military status (including active-duty service members, reserve service members, and dependents), national or ethnic origin, political affiliation, pregnancy, race, religion, sex, sexual orientation, veteran status, and family medical or genetic information.</p>
                </div>


                <div className="footer-contact">
                    <p>questions?</p>
                    <a href="mailto:girlshoohack@gmail.com">
                        girlshoohack@gmail.com
                    </a>
                    <InstagramIcon className='insta-icon' onClick={() => window.open("https://www.instagram.com/girlshoohack/", "_blank")}/>
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