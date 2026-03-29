import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ieeeLogo from '../assets/ieee-logo.png';
import navBg from '../assets/mnavbg.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
        setOpenDropdown(null);
    }, [location.pathname]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (isMenuOpen) setOpenDropdown(null);
    };

    const toggleDropdown = (name) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setOpenDropdown(null);
    };

    return (
        <header className="main-header">
            <div className="ieee-topbar">
                <div className="ieee-topbar-container">
                    <a href="https://www.ieee.org" target="_blank" rel="noreferrer">IEEE.org</a>
                    <span className="dot-separator"></span>
                    <a href="https://ieeexplore.ieee.org" target="_blank" rel="noreferrer">IEEE Xplore Digital Library</a>
                    <span className="dot-separator"></span>
                    <a href="https://standards.ieee.org" target="_blank" rel="noreferrer">IEEE Standards</a>
                    <span className="dot-separator"></span>
                    <a href="https://spectrum.ieee.org" target="_blank" rel="noreferrer">IEEE Spectrum Online</a>
                    <span className="dot-separator"></span>
                    <a href="https://www.ieee.org/sitemap.html" target="_blank" rel="noreferrer">More IEEE Sites</a>
                </div>
            </div>
            
            <div 
                className="ieee-middle-bar" 
                style={{ backgroundImage: `url(${navBg})` }}
            >
                <div className="conference-title">
                    2026 IEEE Sustainable Power and Energy Conference
                </div>
                <div className="nav-right">
                    <div className="ieee-logo">
                        <img src={ieeeLogo} alt="IEEE Logo" />
                    </div>
                </div>
            </div>
            <nav id="main-nav" className={scrolled ? 'scrolled' : ''}>
                <div className="container-fluid nav-container">
                    <div className="logo">
                        <Link to="/" className="nav-brand" onClick={closeMenu} style={{ gap: '8px' }}>
                            <span className="brand-name" style={{
                                color: '#1a1a2e',
                                fontWeight: '800',
                                letterSpacing: '-1px',
                                fontSize: '2rem'
                            }}>
                                iSPEC
                            </span>
                            <span className="brand-year" style={{
                                background: 'linear-gradient(135deg, #00a859, #00629b)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontWeight: '800',
                                letterSpacing: '-1px',
                                paddingRight: '2px',
                                fontSize: '2rem'
                            }}>
                                2026
                            </span>
                        </Link>
                    </div>
                    <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        <li><Link to="/" onClick={closeMenu}>HOME</Link></li>
                        <li><Link to="/about" onClick={closeMenu}>ABOUT</Link></li>
                        <li className="dropdown">
                            <span className="dropdown-toggle" onClick={() => toggleDropdown('authors')}>
                                FOR AUTHORS <i className="fas fa-chevron-down"></i>
                            </span>
                            <ul className={`dropdown-menu ${openDropdown === 'authors' ? 'show' : ''}`}>
                                <li><Link to="/call-for-papers" onClick={closeMenu}>Call for Papers</Link></li>
                                <li><Link to="/special-sessions" onClick={closeMenu}>Special Sessions</Link></li>
                                {/* <li><Link to="/presentation-guideline" onClick={closeMenu}>Presentation Guideline</Link></li>
                                <li><Link to="/student-support" onClick={closeMenu}>Student Support Fund</Link></li> */}
                                <li><Link to="/important-dates" onClick={closeMenu}>Important Dates</Link></li>
                                <li><Link to="/submission" onClick={closeMenu}>Paper Submission</Link></li>
                            </ul>
                        </li>
                        {/* <li className="dropdown">
                            <span className="dropdown-toggle" onClick={() => toggleDropdown('program')}>
                                PROGRAM <i className="fas fa-chevron-down"></i>
                            </span>
                            <ul className={`dropdown-menu ${openDropdown === 'program' ? 'show' : ''}`}>
                                <li><Link to="/special-sessions" onClick={closeMenu}>Special Sessions</Link></li>
                                <li><a href="#" onClick={closeMenu}>Keynote Speakers</a></li>
                                <li><a href="#" onClick={closeMenu}>Tutorial</a></li>
                            </ul>
                        </li> */}
                        <li><Link to="/registration" onClick={closeMenu}>REGISTRATION</Link></li>
                        <li><Link to="/sponsorship" onClick={closeMenu}>SPONSORSHIP</Link></li>
                        <li><Link to="/committee" onClick={closeMenu}>COMMITTEE</Link></li>
                        <li className="dropdown">
                            <span className="dropdown-toggle" onClick={() => toggleDropdown('venue')}>
                                VENUE <i className="fas fa-chevron-down"></i>
                            </span>
                            <ul className={`dropdown-menu ${openDropdown === 'venue' ? 'show' : ''}`}>
                                <li><Link to="/#" onClick={closeMenu}> Thiruvananthapuram</Link></li>
                                <li><Link to="#" onClick={closeMenu}>Travel to Thiruvananthapuram</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/contact" onClick={closeMenu}>CONTACT</Link></li>
                    </ul>
                    <div className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;