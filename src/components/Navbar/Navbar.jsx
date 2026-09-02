import React, { useEffect, useState } from 'react';
import "../../styles/Navbar.css";
import GHHlogo from "./assets/GHHlogo.png";
import girlshoohack from "./assets/girlshoohack.svg";

function Navbar() {
    const [hidden, setHidden] = useState(false);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollDifference = currentScrollY - lastScrollY;

            if (currentScrollY <= 10) {
                setHidden(false);
            }

            else if (scrollDifference > 5) {
                setHidden(true);
            }

            else if (scrollDifference < -5) {
                setHidden(false);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleMouseEnter = () => {
        setHovered(true);
        setHidden(false);
    };

    const handleMouseLeave = () => {
        setHovered(false); // If we're scrolled down, allow navbar to hide again 
        if (window.scrollY > 10) {
            setHidden(true);
        }
    };

    return (
        <>
            {/* Invisible area at the top that reveals the navbar */}
            <div
                className="navbar-hover-zone"
                onMouseEnter={handleMouseEnter}
            />

            <nav
                className={`navbar-content ${hidden ? "hidden" : ""}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
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
                    <a href="#holder">schedule</a>
                    <a href="#faq">faq</a>
                    <a href="#holder">sponsors</a>
                    <a href="#footer">contact</a>
                </div>

                <button
                    className="register-button"
                    onClick={() => window.open("https://forms.gle/tE3B1rNGGu2qV4Pm9", "_blank")}
                >
                    register
                </button>
            </nav>
        </>
    );
}

export default Navbar;



