import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => (
    <section id="home" className="hero-new">

        {/* Diffusion background effect */}
        <div className="hero-diffusion glow-1"></div>
        <div className="hero-diffusion glow-2"></div>

        {/* Sustainability Background Elements */}
        <div className="hero-sustainability-bg">
            {/* Green Architectural Art Element */}
            <div className="eco-element temple-art"></div>

            {/* Abstract Leaf */}
            <svg className="eco-element leaf-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 95C50 95 10 70 10 40C10 20 25 5 45 5C60 5 70 15 80 15C90 15 95 5 95 5C95 5 90 40 70 60C50 80 50 95 50 95Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M50 95C50 95 50 50 80 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            {/* Abstract Wind/Energy Waves */}
            <svg className="eco-element wind-waves" viewBox="0 0 300 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-20 80C40 80 60 20 150 20C240 20 260 60 320 60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M-20 60C30 60 50 40 120 40C190 40 230 80 320 80" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
                <path d="M20 95C80 95 100 50 180 50C260 50 280 80 320 80" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
            </svg>

            {/* Glowing Sun/Energy Core */}
            <div className="eco-element energy-sun"></div>
        </div>

        {/* ── Main content (Centered) ── */}
        <div className="container hero-container">
            <div className="hero-main-content centered-hero">

                {/* Eyebrow */}

                {/* Huge Typography */}
                <h1 className="hero-title">
                    iSPEC<br />
                    <span className="hero-title-accent">2026</span>
                </h1>

                {/* Subtitle */}
                <h2 className="hero-subtitle">
                    A premier international forum advancing power systems, energy technologies, and sustainable solutions.
                </h2>

                {/* Info pills */}
                <div className="hero-top-info centered-info">
                    <span className="info-pill">
                        <i className="fas fa-calendar-alt"></i>
                        Dec 4 – 6, 2026
                    </span>
                    <span className="info-pill">
                        <i className="fas fa-map-marker-alt"></i>
                        Hyatt Regency Trivandrum, Kerala
                    </span>
                </div>

                {/* High-end CTA */}
                <div className="hero-actions-new centered-actions">
                    <Link to="/call-for-papers" className="btn-pill">
                        Call for Papers &nbsp;<i className="fas fa-arrow-right" style={{ fontSize: '0.9em' }}></i>
                    </Link>
                    <Link to="/about" className="btn-outline">
                        Discover More
                    </Link>
                </div>

            </div>
        </div>
    </section>
);

export default Hero;
