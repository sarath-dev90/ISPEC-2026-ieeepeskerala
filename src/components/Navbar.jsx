import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
        <header>
            <div className="top-bar">
                <div className="container-fluid">
                    <div className="ieee-links">
                        <a href="https://www.ieee.org" target="_blank" rel="noopener noreferrer">IEEE.org</a>
                        <a href="https://ieeexplore.ieee.org" target="_blank" rel="noopener noreferrer">IEEE Xplore Digital Library</a>
                        <a href="https://standards.ieee.org" target="_blank" rel="noopener noreferrer">IEEE Standards</a>
                        <a href="https://spectrum.ieee.org" target="_blank" rel="noopener noreferrer">IEEE Spectrum</a>
                    </div>
                </div>
            </div>
            <nav id="main-nav" className={scrolled ? 'scrolled' : ''}>
                <div className="container-fluid nav-container">
                    <div className="logo">
                        <Link to="/" className="nav-brand" onClick={closeMenu}>
                            <span className="brand-name">
                                <span className="brand-i">i</span>SPEC
                            </span>
                            <span className="brand-year">2026</span>
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
                                <li><Link to="/presentation-guideline" onClick={closeMenu}>Presentation Guideline</Link></li>
                                <li><Link to="/student-support" onClick={closeMenu}>Student Support Fund</Link></li>
                                <li><Link to="/important-dates" onClick={closeMenu}>Important Dates</Link></li>
                                <li><Link to="/submission" onClick={closeMenu}>Paper Submission</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <span className="dropdown-toggle" onClick={() => toggleDropdown('program')}>
                                PROGRAM <i className="fas fa-chevron-down"></i>
                            </span>
                            <ul className={`dropdown-menu ${openDropdown === 'program' ? 'show' : ''}`}>
                                <li><Link to="/special-sessions" onClick={closeMenu}>Special Sessions</Link></li>
                                <li><a href="#" onClick={closeMenu}>Keynote Speakers</a></li>
                                <li><a href="#" onClick={closeMenu}>Tutorial</a></li>
                            </ul>
                        </li>
                        <li><Link to="/registration" onClick={closeMenu}>REGISTRATION</Link></li>
                        <li><Link to="/sponsorship" onClick={closeMenu}>SPONSORSHIP</Link></li>
                        <li><Link to="/committee" onClick={closeMenu}>COMMITTEE</Link></li>
                        <li className="dropdown">
                            <span className="dropdown-toggle" onClick={() => toggleDropdown('venue')}>
                                VENUE <i className="fas fa-chevron-down"></i>
                            </span>
                            <ul className={`dropdown-menu ${openDropdown === 'venue' ? 'show' : ''}`}>
                                <li><Link to="/venue" onClick={closeMenu}>Hyatt Regency Trivandrum</Link></li>
                                <li><Link to="/travel" onClick={closeMenu}>Travel to Trivandrum</Link></li>
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
