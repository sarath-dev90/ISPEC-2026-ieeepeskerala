import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';

const SponsorshipPage = () => {
    const sponsorshipCategories = [
        {
            category: 'Title Sponsor',
            emoji: '🥇',
            amount: 'INR 10,00,000',
            color: '#1a1a1a',
            textColor: '#fff',
            stall: '5 m × 3 m',
            delegates: 10,
            benefits: [
                'Full-page advertisement in conference abstract book',
                'Company logo in conference abstract book',
                'Digital display advertising throughout the 3-day event',
            ]
        },
        {
            category: 'Platinum',
            emoji: '💎',
            amount: 'INR 5,00,000',
            color: '#e5e4e2',
            textColor: '#333',
            stall: '5 m × 2 m',
            delegates: 5,
            benefits: [
                'Full-page advertisement in conference abstract book',
                'Company logo in conference abstract book',
                'Digital display advertising throughout the 3-day event',
            ]
        },
        {
            category: 'Gold',
            emoji: '🥈',
            amount: 'INR 3,00,000',
            color: '#ffd700',
            textColor: '#333',
            stall: '4 m × 2 m',
            delegates: 3,
            benefits: [
                'Full-page advertisement in conference abstract book',
                'Company logo in conference abstract book',
                'Digital display advertising throughout the 3-day event',
            ]
        },
        {
            category: 'Silver',
            emoji: '🥉',
            amount: 'INR 2,00,000',
            color: '#c0c0c0',
            textColor: '#333',
            stall: '3 m × 2 m',
            delegates: 2,
            benefits: [
                'Full details at www.ispec2026.org',
            ]
        },
        {
            category: 'Bronze',
            emoji: '🏅',
            amount: 'INR 1,00,000',
            color: '#cd7f32',
            textColor: '#fff',
            stall: '2 m × 2 m',
            delegates: 2,
            benefits: [
                'Full details at www.ispec2026.org',
            ]
        },
        {
            category: 'Others',
            emoji: '🤝',
            amount: 'INR 50,000',
            color: '#00629b',
            textColor: '#fff',
            stall: '1.5 m × 1.5 m',
            delegates: 1,
            benefits: [
                'Full details at www.ispec2026.org',
            ]
        },
    ];

    const commonBenefits = [
        { icon: 'fa-globe', title: 'Brand Visibility', desc: 'Brand visibility to 500+ global power & energy professionals' },
        { icon: 'fa-handshake', title: 'Networking', desc: 'Networking with researchers, academicians, and industry experts' },
        { icon: 'fa-store', title: 'Exhibition Space', desc: 'Exhibition floor presence to showcase your solutions' },
        { icon: 'fa-book', title: 'Publication Exposure', desc: 'Publication exposure in IEEE abstract book and proceedings' },
        { icon: 'fa-desktop', title: 'Digital Presence', desc: 'On-site digital display advertising across the 3-day event' },
        { icon: 'fa-user-graduate', title: 'Recruitment', desc: 'Recruitment access to top engineering talent' },
    ];

    return (
        <div className="page-wrapper">
            <Navbar />
            <PageHeader title="Sponsorship & Exhibition" breadcrumb="Sponsorship" />

            <div style={{ background: '#f8f9fa', paddingBottom: '60px' }}>

                {/* Intro Section */}


                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 15px 0' }}>



                    {/* Sponsorship Categories Cards */}
                    <section style={{ marginBottom: '80px' }}>
                        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                            <h2 style={{ fontSize: '2.2rem', color: '#333', fontWeight: 'bold', position: 'relative', display: 'inline-block' }}>
                                Sponsorship Categories
                                <span style={{ position: 'absolute', bottom: '-10px', left: '50%', transform: 'translateX(-50%)', width: '50px', height: '3px', background: '#00629b' }}></span>
                            </h2>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
                            {sponsorshipCategories.map((tier, index) => (
                                <div key={index} className="hover-border" style={{
                                    background: '#fff',
                                    borderRadius: '15px',
                                    overflow: 'hidden',
                                    boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    position: 'relative',
                                    border: '2px solid transparent',
                                    transition: 'all 0.3s ease'
                                }}>
                                    {/* Card Header */}
                                    <div style={{
                                        background: tier.color,
                                        color: tier.textColor || '#fff',
                                        padding: '30px 20px',
                                        textAlign: 'center',
                                        borderBottom: '1px solid rgba(0,0,0,0.05)'
                                    }}>
                                        <div style={{ fontSize: '2rem', marginBottom: '6px' }}>{tier.emoji}</div>
                                        <h3 style={{ margin: '0 0 10px 0', fontSize: '1.8rem', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase' }}>{tier.category}</h3>
                                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', opacity: 0.9 }}>{tier.amount}*</div>
                                    </div>

                                    {/* Card Body */}
                                    <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '25px', paddingBottom: '20px', borderBottom: '1px solid #eee' }}>
                                            <div style={{ textAlign: 'center' }}>
                                                <i className="fas fa-store" style={{ color: '#00629b', fontSize: '1.5rem', marginBottom: '8px', display: 'block' }}></i>
                                                <div style={{ fontSize: '0.85rem', color: '#666', textTransform: 'uppercase', fontWeight: 'bold' }}>Stall Size</div>
                                                <div style={{ fontSize: '1.1rem', color: '#333', fontWeight: 'bold' }}>{tier.stall}</div>
                                            </div>
                                            <div style={{ textAlign: 'center' }}>
                                                <i className="fas fa-users" style={{ color: '#2e8b57', fontSize: '1.5rem', marginBottom: '8px', display: 'block' }}></i>
                                                <div style={{ fontSize: '0.85rem', color: '#666', textTransform: 'uppercase', fontWeight: 'bold' }}>Delegates</div>
                                                <div style={{ fontSize: '1.1rem', color: '#333', fontWeight: 'bold' }}>{tier.delegates}</div>
                                            </div>
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <h5 style={{ fontSize: '1rem', color: '#333', marginBottom: '15px', fontWeight: 'bold' }}>Additional Benefits:</h5>
                                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                                {tier.benefits.map((benefit, i) => (
                                                    <li key={i} style={{ marginBottom: '12px', color: '#555', display: 'flex', alignItems: 'flex-start', fontSize: '0.95rem', lineHeight: '1.5' }}>
                                                        <i className="fas fa-check-circle" style={{ color: '#2e8b57', marginTop: '4px', marginRight: '10px', flexShrink: 0 }}></i>
                                                        {benefit}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '40px', color: '#777', fontStyle: 'italic', fontSize: '0.95rem' }}>
                            * All amounts are exclusive of applicable taxes. Sponsorship slots are limited — early registration is strongly encouraged to secure your preferred category.
                        </div>
                    </section>
                    {/* Common Benefits Section */}
                    <section style={{ marginBottom: '60px' }}>
                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <h2 style={{ fontSize: '1.8rem', color: '#333', fontWeight: 'bold', position: 'relative', display: 'inline-block' }}>
                                Common Benefits Across All Tiers
                                <span style={{ position: 'absolute', bottom: '-8px', left: '50%', transform: 'translateX(-50%)', width: '40px', height: '3px', background: '#00629b' }}></span>
                            </h2>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                            {commonBenefits.map((item, i) => (
                                <div key={i} className="hover-border" style={{
                                    background: '#fff',
                                    padding: '15px 20px',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '15px',
                                    boxShadow: '0 3px 10px rgba(0,0,0,0.03)',
                                    border: '2px solid transparent',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <div style={{
                                        minWidth: '45px', height: '45px', background: '#f0f7fb', borderRadius: '50%',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00629b', fontSize: '1.2rem'
                                    }}>
                                        <i className={`fas ${item.icon}`}></i>
                                    </div>
                                    <div style={{ textAlign: 'left' }}>
                                        <h4 style={{ color: '#333', marginBottom: '3px', fontWeight: 'bold', fontSize: '1.05rem' }}>{item.title}</h4>
                                        <p style={{ margin: 0, color: '#666', lineHeight: '1.3', fontSize: '0.9rem' }}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                    {/* Secure & Contact Section */}
                    <section style={{ marginBottom: '60px' }}>
                        <div style={{
                            background: 'linear-gradient(135deg, #00629b 0%, #004b79 100%)',
                            padding: '40px 30px',
                            borderRadius: '16px',
                            color: '#fff',
                            boxShadow: '0 10px 30px rgba(0, 98, 155, 0.2)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            marginBottom: '30px'
                        }}>
                            <h2 style={{ marginBottom: '15px', color: '#fff', fontSize: '2rem', fontWeight: 'bold' }}>Secure Your Sponsorship Today!</h2>
                            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)', lineHeight: '1.6', maxWidth: '700px', marginBottom: '25px' }}>
                                Sponsorship slots are limited. Contact us today to reserve your preferred category and be part of iSPEC 2026.
                            </p>
                            <a href="mailto:contact@ispec2026.org" className="btn-sponsor-contact" style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                background: '#2e8b57',
                                color: '#ffffff',
                                padding: '14px 35px',
                                borderRadius: '50px',
                                fontWeight: 'bold',
                                textDecoration: 'none',
                                fontSize: '1.1rem',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 15px rgba(46, 139, 87, 0.4)'
                            }}>
                                <i className="fas fa-envelope" style={{ marginRight: '10px' }}></i>
                                Contact Organizing Committee
                            </a>
                        </div>

                        <div style={{
                            background: '#fff',
                            padding: '30px',
                            borderRadius: '16px',
                            boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                            border: '1px solid #eee'
                        }}>
                            <h3 style={{ fontSize: '1.5rem', color: '#00629b', marginBottom: '20px', fontWeight: 'bold', textAlign: 'center', textTransform: 'uppercase' }}>Contact Information</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                                <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px', textAlign: 'center', borderTop: '4px solid #2e8b57' }}>
                                    <div style={{ color: '#00629b', fontWeight: 'bold', marginBottom: '8px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Chair</div>
                                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#333', marginBottom: '5px' }}>Dr. Ajith Gopi</div>
                                    <a href="mailto:ajithgopi@ieee.org" style={{ color: '#2e8b57', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                        <i className="fas fa-envelope"></i> ajithgopi@ieee.org
                                    </a>
                                </div>
                                <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px', textAlign: 'center', borderTop: '4px solid #2e8b57' }}>
                                    <div style={{ color: '#00629b', fontWeight: 'bold', marginBottom: '8px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Co-Chair</div>
                                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#333', marginBottom: '5px' }}>Dr. Boby Philip</div>
                                    <a href="mailto:boby.philip@ieee.org" style={{ color: '#2e8b57', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                        <i className="fas fa-envelope"></i> boby.philip@ieee.org
                                    </a>
                                </div>
                                <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px', textAlign: 'center', borderTop: '4px solid #00629b' }}>
                                    <div style={{ color: '#00629b', fontWeight: 'bold', marginBottom: '8px', textTransform: 'uppercase', fontSize: '0.9rem' }}>General Enquiries</div>
                                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#333', marginBottom: '5px' }}>iSPEC 2026</div>
                                    <a href="mailto:contact@ispec2026.org" style={{ color: '#2e8b57', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                        <i className="fas fa-envelope"></i> contact@ispec2026.org
                                    </a>
                                </div>
                            </div>
                            <p style={{ fontSize: '1.1rem', color: '#555', fontWeight: '500', fontStyle: 'italic', textAlign: 'center', marginTop: '30px', marginBottom: 0 }}>
                                We look forward to welcoming you to iSPEC 2026 at Hyatt Regency Trivandrum.
                            </p>
                        </div>
                    </section>

                </div>
            </div>

            <style>{`
                .hover-border {
                    border: 2px solid transparent !important;
                    transition: all 0.3s ease !important;
                }
                .hover-border:hover {
                    transform: translateY(-5px);
                    border-color: #2e8b57 !important;
                    box-shadow: 0 15px 30px rgba(46, 139, 87, 0.1) !important;
                }
                .btn-sponsor-contact:hover {
                    background: #246e45 !important;
                    transform: translateY(-3px);
                }
            `}</style>

            <Footer />
        </div>
    );
};

export default SponsorshipPage;
