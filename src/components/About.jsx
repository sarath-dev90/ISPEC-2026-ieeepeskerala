import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Ispeclogo from '../assets/Ispeclogo.png';

const About = () => {
    return (
        <section id="about" className="section no-padding-bottom">
            <div className="container">
                <div className="welcome-grid">
                    <div className="welcome-image">
                        <img src={Ispeclogo} alt="iSPEC 2026 Sustainable Power Conference" style={{ width: '100%', borderRadius: '15px', boxShadow: 'var(--shadow)' }} />
                    </div>
                    <div className="welcome-text">
                        <h2 className="section-title">About iSPEC 2026</h2>
                        <div className="divider-line"></div>
                        <p>
                            The <strong>IEEE Sustainable Power and Energy Conference (iSPEC) 2026</strong> is a premier international forum that brings together researchers, engineers, policymakers, and industry leaders from across the globe to present and discuss the latest advances in power systems, energy technologies, and sustainable solutions.
                        </p>
                        <p>
                            Hosted at the iconic <strong>Hyatt Regency Trivandrum, Kerala</strong>, and organized by the <strong>IEEE Power &amp; Energy Society (PES) Kerala Chapter</strong> in association with <strong>IEEE Kerala Section</strong>, iSPEC 2026 promises to be a landmark event in the energy sector.
                        </p>
                        <p>
                            The conference will feature high-quality technical paper presentations, keynote addresses by distinguished researchers and industry experts, panel discussions on emerging energy challenges, workshops, tutorials, and a vibrant exhibition floor. All accepted papers will be submitted for inclusion in <strong>IEEE Xplore Digital Library</strong>.
                        </p>

                        <div className="welcome-actions">
                            <Link to="/call-for-papers" className="btn btn-primary">Download CFP</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
