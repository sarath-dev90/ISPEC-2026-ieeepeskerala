import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer-isdt-style" style={{ backgroundColor: '#002845', color: '#fff', paddingTop: '60px', paddingBottom: '20px', marginTop: '50px' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>

                {/* 4 Column Top Section */}
                <div className="row" style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '40px', margin: '0 -15px' }}>

                    {/* Column 1: Organization & Address */}
                    <div className="col-md-3" style={{ flex: '0 0 25%', maxWidth: '25%', padding: '0 15px' }}>
                        <div style={{ background: '#fff', display: 'inline-block', padding: '10px 15px', borderRadius: '8px', marginBottom: '20px' }}>
                            <h2 style={{ color: '#00629b', margin: 0, fontSize: '1.8rem', fontWeight: 'bold' }}>iSPEC 2026</h2>
                        </div>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '15px', color: '#fff' }}>Organized By</h3>
                        <p style={{ fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '15px', opacity: 0.9 }}>
                            <strong>IEEE PES Kerala Chapter</strong><br />
                            &amp; IEEE Kerala Section<br /><br />
                            <strong>Venue:</strong><br />
                            Hyatt Regency Trivandrum,<br />
                            Kerala, India
                        </p>
                    </div>

                    {/* Column 2: Contact Details */}
                    <div className="col-md-3" style={{ flex: '0 0 25%', maxWidth: '25%', padding: '0 15px' }}>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '20px', color: '#fff' }}>Contact Us</h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.95rem', lineHeight: '2.2', opacity: 0.9 }}>
                            <li>
                                <i className="fas fa-envelope" style={{ width: '25px', color: '#2e8b57' }}></i>
                                <a href="mailto:contact@ispec2026.org" style={{ color: '#fff', textDecoration: 'none' }} className="footer-link">contact@ispec2026.org</a>
                            </li>
                            <li>
                                <i className="fas fa-globe" style={{ width: '25px', color: '#2e8b57' }}></i>
                                <a href="https://www.ispec2026.org" style={{ color: '#fff', textDecoration: 'none' }} className="footer-link">www.ispec2026.org</a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Quick Links */}
                    <div className="col-md-3" style={{ flex: '0 0 25%', maxWidth: '25%', padding: '0 15px' }}>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '20px', color: '#fff' }}>Quick Links</h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.95rem', lineHeight: '2.2', opacity: 0.9 }}>
                            <li><i className="fas fa-chevron-right" style={{ fontSize: '0.7rem', marginRight: '8px', color: '#2e8b57' }}></i> <Link to="/" style={{ color: '#fff', textDecoration: 'none' }} className="footer-link">Home</Link></li>
                            <li><i className="fas fa-chevron-right" style={{ fontSize: '0.7rem', marginRight: '8px', color: '#2e8b57' }}></i> <Link to="/call-for-papers" style={{ color: '#fff', textDecoration: 'none' }} className="footer-link">Call for Papers</Link></li>
                            <li><i className="fas fa-chevron-right" style={{ fontSize: '0.7rem', marginRight: '8px', color: '#2e8b57' }}></i> <Link to="/registration" style={{ color: '#fff', textDecoration: 'none' }} className="footer-link">Registration</Link></li>
                            <li><i className="fas fa-chevron-right" style={{ fontSize: '0.7rem', marginRight: '8px', color: '#2e8b57' }}></i> <Link to="/sponsorship" style={{ color: '#fff', textDecoration: 'none' }} className="footer-link">Sponsorship & Exhibition</Link></li>
                            <li><i className="fas fa-chevron-right" style={{ fontSize: '0.7rem', marginRight: '8px', color: '#2e8b57' }}></i> <Link to="/cmt-acknowledgment" style={{ color: '#fff', textDecoration: 'none' }} className="footer-link">CMT Acknowledgment</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: IEEE Policies & Follow Us */}
                    <div className="col-md-3" style={{ flex: '0 0 25%', maxWidth: '25%', padding: '0 15px' }}>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '20px', color: '#fff' }}>IEEE Policies</h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 25px 0', fontSize: '0.95rem', lineHeight: '2.2', opacity: 0.9 }}>
                            <li><i className="fas fa-chevron-right" style={{ fontSize: '0.7rem', marginRight: '8px', color: '#2e8b57' }}></i> <a target="_blank" rel="noopener noreferrer" href="http://www.ieee.org/site_terms_conditions.html" style={{ color: '#fff', textDecoration: 'none' }} className="footer-link">Terms and Conditions</a></li>
                            <li><i className="fas fa-chevron-right" style={{ fontSize: '0.7rem', marginRight: '8px', color: '#2e8b57' }}></i> <a target="_blank" rel="noopener noreferrer" href="https://www.ieee.org/security_privacy.html" style={{ color: '#fff', textDecoration: 'none' }} className="footer-link">Privacy Policy</a></li>
                            <li><i className="fas fa-chevron-right" style={{ fontSize: '0.7rem', marginRight: '8px', color: '#2e8b57' }}></i> <a target="_blank" rel="noopener noreferrer" href="https://www.ieee.org/accessibility-statement.html" style={{ color: '#fff', textDecoration: 'none' }} className="footer-link">Accessibility</a></li>
                            <li><i className="fas fa-chevron-right" style={{ fontSize: '0.7rem', marginRight: '8px', color: '#2e8b57' }}></i> <a target="_blank" rel="noopener noreferrer" href="https://www.ieee.org/about/corporate/governance/p9-26.html" style={{ color: '#fff', textDecoration: 'none' }} className="footer-link">Nondiscrimination Policy</a></li>
                            <li><i className="fas fa-chevron-right" style={{ fontSize: '0.7rem', marginRight: '8px', color: '#2e8b57' }}></i> <a target="_blank" rel="noopener noreferrer" href="https://secure.ethicspoint.com/domain/media/en/gui/20410/index.html" style={{ color: '#fff', textDecoration: 'none' }} className="footer-link">Ethics Reporting</a></li>
                        </ul>

                        <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '15px', color: '#fff' }}>Follow Us</h3>
                        <div className="social-links" style={{ display: 'flex', gap: '15px' }}>
                            <a href="https://www.facebook.com/IEEE.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', background: 'rgba(255,255,255,0.1)', width: '35px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', transition: 'background 0.3s' }} className="social-icon"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://twitter.com/IEEEorg" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', background: 'rgba(255,255,255,0.1)', width: '35px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', transition: 'background 0.3s' }} className="social-icon"><i className="fab fa-twitter"></i></a>
                            <a href="https://www.linkedin.com/company/ieee" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', background: 'rgba(255,255,255,0.1)', width: '35px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', transition: 'background 0.3s' }} className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                            <a href="https://www.instagram.com/ieeeorg/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', background: 'rgba(255,255,255,0.1)', width: '35px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', transition: 'background 0.3s' }} className="social-icon"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright bar */}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', flexWrap: 'wrap', gap: '15px' }}>
                    <div style={{ opacity: 0.8, lineHeight: '1.6' }}>
                        &copy; 2026 IEEE – All rights reserved.<br />
                        A public charity, IEEE is the world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity.
                    </div>
                </div>
            </div>

            <style>{`
                .footer-link:hover { color: #2e8b57 !important; }
                .social-icon:hover { background: #2e8b57 !important; color: #fff !important; transform: translateY(-2px); }
                
                @media (max-width: 991px) {
                    .footer-isdt-style .col-md-3 {
                        flex: 0 0 50% !important;
                        max-width: 50% !important;
                        margin-bottom: 40px;
                    }
                }
                @media (max-width: 767px) {
                    .footer-isdt-style .col-md-3 {
                        flex: 0 0 100% !important;
                        max-width: 100% !important;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
