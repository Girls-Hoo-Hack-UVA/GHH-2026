import { useEffect, useState } from 'react';
import "../../styles/Navbar.css";

function Navbar() {
    const [hidden, setHidden] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

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

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape") setMenuOpen(false);
        };

        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, []);

    const handleMouseEnter = () => {
        setHidden(false);
    };

    const handleMouseLeave = () => {
        if (!menuOpen && window.scrollY > 10) {
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
                className={`navbar-content ${hidden && !menuOpen ? "hidden" : ""}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
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
                    className="menu-toggle"
                    type="button"
                    aria-expanded={menuOpen}
                    aria-controls="primary-nav-links"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    onClick={() => { setMenuOpen((open) => !open); setHidden(false); }}
                >
                    <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
                </button>

                <div className={`nav-links ${menuOpen ? "open" : ""}`} id="primary-nav-links">
                    <a href="#home" onClick={() => setMenuOpen(false)}>home</a>
                    <a href="#what-is-ghh" onClick={() => setMenuOpen(false)}>about</a>
                    <a href="#schedule" onClick={() => setMenuOpen(false)}>schedule</a>
                    <a href="#faq" onClick={() => setMenuOpen(false)}>faq</a>
                    <a href="#sponsors" onClick={() => setMenuOpen(false)}>sponsors</a>
                    <a href="#footer" onClick={() => setMenuOpen(false)}>contact</a>
                    <a className="nav-mlh-link" href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>Major League Hacking</a>
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



