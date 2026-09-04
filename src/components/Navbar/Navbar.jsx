import React, { useEffect, useState } from 'react';
import "../../styles/Navbar.css";
import GHHlogo from "./assets/GHHlogo.png";
import girlshoohack from "./assets/girlshoohack.svg";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    function closeMenu() {
        setMenuOpen(false);
    }

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

            <button
                className={`nav-toggle ${menuOpen ? "open" : ""}`}
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((open) => !open)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                <a href="#home" onClick={closeMenu}>home</a>
                <a href="#what-is-ghh" onClick={closeMenu}>about</a>
                <a href="#schedule" onClick={closeMenu}>schedule</a>
                <a href="#faq" onClick={closeMenu}>faq</a>
                <a href="#sponsors" onClick={closeMenu}>sponsors</a>
                <a href="#contact" onClick={closeMenu}>contact</a>
            </div>

            <button className="register-button">register</button>
        </nav>
    );
}

export default Navbar;