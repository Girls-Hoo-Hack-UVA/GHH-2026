import React, { useEffect, useState } from 'react';
import "../../styles/Navbar.css";
import GHHlogo from "./assets/GHHlogo.png";
import girlshoohack from "./assets/girlshoohack.svg";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar-content ${scrolled ? "scrolled" : ""}`}>
            {/* <img src={GHHlogo} alt="GHH Logo" className="logo" /> */}
            {/* <img src={girlshoohack} alt="Girls Hoo Hack" className="ghh-text" /> */}

            <a
                href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white"
                target="_blank"
                rel="noopener noreferrer"
                className="mlh-badge"
            >
                <img
                    src="https://logged-assets.s3.amazonaws.com/trust-badge/2027/mlh-trust-badge-2027-white.svg" 
                    alt="Major League Hacking Trust Badge"
                />
            </a>

            <div className="nav-links">
                <a href="#home">home</a>
                <a href="#what-is-ghh">about</a>
                <a href="#schedule">schedule</a>
                <a href="#faq">faq</a>
                <a href="#sponsors">sponsors</a>
                <a href="#contact">contact</a>
            </div>

            <button className="register-button">register</button>
        </nav>
    );
}

export default Navbar;