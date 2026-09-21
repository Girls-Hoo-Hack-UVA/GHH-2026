import React, { useEffect, useState } from "react";
import "../../styles/Navbar.css";

const MOBILE_NAV_QUERY = "(max-width: 960px)";
const REGISTER_URL = "https://forms.gle/tE3B1rNGGu2qV4Pm9";

function Navbar() {
    const [hidden, setHidden] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollDifference = currentScrollY - lastScrollY;
            const isMobile = window.matchMedia(MOBILE_NAV_QUERY).matches;

            if (isMobile || menuOpen) {
                setHidden(false);
                lastScrollY = currentScrollY;
                return;
            }

            if (currentScrollY <= 10) {
                setHidden(false);
            } else if (scrollDifference > 5) {
                setHidden(true);
            } else if (scrollDifference < -5) {
                setHidden(false);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [menuOpen]);

    useEffect(() => {
        const mediaQuery = window.matchMedia(MOBILE_NAV_QUERY);

        const handleBreakpointChange = (event) => {
            if (!event.matches) {
                setMenuOpen(false);
            }
        };

        mediaQuery.addEventListener("change", handleBreakpointChange);

        return () => {
            mediaQuery.removeEventListener("change", handleBreakpointChange);
        };
    }, []);

    useEffect(() => {
        if (!menuOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setMenuOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [menuOpen]);

    const handleMouseEnter = () => {
        if (window.matchMedia(MOBILE_NAV_QUERY).matches) return;

        setHidden(false);
    };

    const handleMouseLeave = () => {
        if (window.matchMedia(MOBILE_NAV_QUERY).matches) return;

        if (window.scrollY > 10) {
            setHidden(true);
        }
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const handleRegister = () => {
        setMenuOpen(false);
        window.open(REGISTER_URL, "_blank", "noopener,noreferrer");
    };

    return (
        <>
            <div
                className="navbar-hover-zone"
                onMouseEnter={handleMouseEnter}
            />

            <nav
                className={`navbar-content ${hidden ? "hidden" : ""} ${
                    menuOpen ? "menu-open" : ""
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <a
                    href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mlh-badge"
                    aria-label="Major League Hacking"
                >
                    <img
                        src="https://logged-assets.s3.amazonaws.com/trust-badge/2027/mlh-trust-badge-2027-white.svg"
                        alt="Major League Hacking Trust Badge"
                    />
                </a>

                <div className="nav-links desktop-nav">
                    <a href="#home">home</a>
                    <a href="#what-is-ghh">about</a>
                    <a href="#holder">schedule</a>
                    <a href="#faq">faq</a>
                    <a href="#holder">sponsors</a>
                    <a href="#footer">contact</a>
                </div>

                <button
                    type="button"
                    className="register-button desktop-register"
                    onClick={handleRegister}
                >
                    register
                </button>

                <button
                    type="button"
                    className={`menu-toggle ${menuOpen ? "open" : ""}`}
                    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-navigation"
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    <span />
                    <span />
                    <span />
                </button>

                <div
                    id="mobile-navigation"
                    className={`mobile-menu ${menuOpen ? "open" : ""}`}
                >
                    <div className="mobile-nav-links">
                        <a href="#home" onClick={closeMenu}>
                            home
                        </a>

                        <a href="#what-is-ghh" onClick={closeMenu}>
                            about
                        </a>

                        <a href="#holder" onClick={closeMenu}>
                            schedule
                        </a>

                        <a href="#faq" onClick={closeMenu}>
                            faq
                        </a>

                        <a href="#holder" onClick={closeMenu}>
                            sponsors
                        </a>

                        <a href="#footer" onClick={closeMenu}>
                            contact
                        </a>
                    </div>

                    <button
                        type="button"
                        className="register-button mobile-register"
                        onClick={handleRegister}
                    >
                        register
                    </button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;