import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const ContactPage = () => {
    const contacts = [
        { icon: 'fa-envelope', label: 'General Enquiries', name: 'iSPEC 2026', email: 'contact@ispec2026.org', accent: '#2e8b57' },
        { icon: 'fa-user-tie', label: 'General Chair', name: 'Dr. Ajith Gopi', email: 'ajithgopi@ieee.org', accent: '#00629b' },
        { icon: 'fa-user-tie', label: 'General Co-Chair', name: 'Dr. Boby Philip', email: 'boby.philip@ieee.org', accent: '#00629b' },
        { icon: 'fa-map-marker-alt', label: 'Venue', name: 'Hyatt Regency Trivandrum', email: null, accent: '#e65100', extra: 'Kerala, India' },
    ];

    return (
        <PageLayout title="Contact Us">
            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '30px 15px 60px' }}>

                {/* Two-column layout */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '24px', alignItems: 'start' }}>

                    {/* Left — compact info cards */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {contacts.map((c, i) => (
                            <div key={i} style={{
                                background: '#fff',
                                borderRadius: '10px',
                                padding: '14px 18px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '14px',
                                boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                                borderLeft: `4px solid ${c.accent}`
                            }}>
                                <i className={`fas ${c.icon}`} style={{ fontSize: '1.3rem', color: c.accent, minWidth: '22px', textAlign: 'center' }}></i>
                                <div>
                                    <div style={{ fontSize: '0.78rem', color: '#888', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '2px' }}>{c.label}</div>
                                    <div style={{ fontWeight: 'bold', color: '#333', fontSize: '0.95rem' }}>{c.name}</div>
                                    {c.email && (
                                        <a href={`mailto:${c.email}`} style={{ color: c.accent, fontSize: '0.88rem', textDecoration: 'none' }}>{c.email}</a>
                                    )}
                                    {c.extra && (
                                        <div style={{ color: '#666', fontSize: '0.88rem' }}>{c.extra}</div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right — compact form */}
                    <div style={{
                        background: '#fff',
                        borderRadius: '12px',
                        padding: '28px',
                        boxShadow: '0 2px 15px rgba(0,0,0,0.06)'
                    }}>
                        <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#333', marginBottom: '20px', paddingBottom: '12px', borderBottom: '2px solid #f0f0f0' }}>
                            Send Us a Message
                        </h3>
                        <form action="https://formsubmit.co/contact@ispec2026.org" method="POST">
                            {/* Name + Email side by side */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#555', fontSize: '0.85rem' }}>Your Name</label>
                                    <input type="text" name="name" placeholder="Full name" required style={{
                                        width: '100%', padding: '9px 12px', borderRadius: '7px', border: '1px solid #ddd', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box'
                                    }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#555', fontSize: '0.85rem' }}>Email Address</label>
                                    <input type="email" name="email" placeholder="Your email" required style={{
                                        width: '100%', padding: '9px 12px', borderRadius: '7px', border: '1px solid #ddd', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box'
                                    }} />
                                </div>
                            </div>

                            <div style={{ marginBottom: '12px' }}>
                                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#555', fontSize: '0.85rem' }}>Subject</label>
                                <input type="text" name="subject" placeholder="Subject of your message" required style={{
                                    width: '100%', padding: '9px 12px', borderRadius: '7px', border: '1px solid #ddd', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box'
                                }} />
                            </div>

                            <div style={{ marginBottom: '16px' }}>
                                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', color: '#555', fontSize: '0.85rem' }}>Message</label>
                                <textarea name="message" rows="5" placeholder="Type your message here..." required style={{
                                    width: '100%', padding: '9px 12px', borderRadius: '7px', border: '1px solid #ddd', fontSize: '0.95rem', outline: 'none', resize: 'vertical', boxSizing: 'border-box'
                                }}></textarea>
                            </div>

                            <div style={{ textAlign: 'right' }}>
                                <button type="submit" style={{
                                    background: '#00629b', color: '#fff', border: 'none', padding: '10px 26px', borderRadius: '7px',
                                    fontSize: '0.95rem', fontWeight: 'bold', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px', transition: 'background 0.3s'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.background = '#004a7c'}
                                    onMouseLeave={(e) => e.currentTarget.style.background = '#00629b'}>
                                    <i className="fas fa-paper-plane"></i>
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .contact-grid { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </PageLayout>
    );
};

export default ContactPage;
