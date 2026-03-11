import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => (
    <section id="home" className="hero-new">

        {/* Background Gradient */}
        <div className="hero-bg-gradient"></div>

        {/* Sustainability Background Elements */}
        <div className="hero-sustainability-bg">
            {/* Left Architectural Art Element */}
            <div className="eco-element temple-art-new"></div>
            
            {/* Right Wind & Transmission Element (using SVG or CSS if available, otherwise just keeping the layout ready) */}
            <div className="eco-element power-art-new">
                 <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Simplified representation for the right side art */}
                    <path d="M120 180v-80" stroke="#004643" strokeWidth="1" opacity="0.6"/>
                    <path d="M120 100l-20-30m20 30l30-15m-30 15v-30" stroke="#004643" strokeWidth="1" opacity="0.6"/>
                    <path d="M160 180v-100" stroke="#004643" strokeWidth="1" opacity="0.6"/>
                    <path d="M160 80l-30-20m30 20l20-30m-20 30v-40" stroke="#004643" strokeWidth="1" opacity="0.6"/>
                    <path d="M40 180l20-120 20 120m-30-40h20m-25-30h30m-35-30h40" stroke="#004643" strokeWidth="1" opacity="0.6"/>
                 </svg>
            </div>
            
            <div className="hero-diffusion glow-bg-1"></div>
        </div>

        {/* ── Main content (Centered) ── */}
        <div className="container hero-container">
            <div className="hero-main-content centered-hero">

                {/* Typography */}
                <h1 className="hero-title">
                    <span className="ispec-text">
                        <span className="i-leaf-wrapper">
                            i
                            <svg className="i-leaf-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17 8C17 8 12.5 3 6 3C6 9.5 11 14.5 11 14.5C11 14.5 11.5 19 19 21C19 21 17 14.5 17 8Z" />
                            </svg>
                        </span>
                        SPEC
                    </span><br />
                    <span className="hero-year">2026</span>
                </h1>

                {/* Subtitle */}
                <h2 className="hero-subtitle">
                    A premier international forum advancing power systems, energy<br className="d-none d-md-block" /> technologies, and sustainable solutions.
                </h2>

                {/* Info pills */}
                <div className="hero-top-info centered-info">
                    <span className="info-pill-new">
                        <i className="fas fa-calendar-alt"></i>
                        Dec 4 – 6, 2026
                    </span>
                    <span className="info-pill-new">
                        <i className="fas fa-map-marker-alt"></i>
                        Hyatt Regency Trivandrum, Kerala
                    </span>
                </div>

                {/* High-end CTA */}
                <div className="hero-actions-new centered-actions">
                    <div className="cta-wrapper">
                        <Link to="/call-for-papers" className="btn-outline-hero">
                            Call for Papers &nbsp;<i className="fas fa-arrow-right" style={{ fontSize: '0.9em' }}></i>
                        </Link>
                        <div className="cta-subtext">Submission Deadline: Oct 1, 2026</div>
                    </div>
                    <div className="cta-wrapper">
                        <Link to="/about" className="btn-outline-hero">
                            Discover More
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    </section>
);

export default Hero;
