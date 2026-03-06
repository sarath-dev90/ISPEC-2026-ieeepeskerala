import React, { useRef, useLayoutEffect } from 'react';
import Hero from '../components/Hero';
import ImportantDates from '../components/ImportantDates';
import Organisers from '../components/Organisers';

const importantDates = [
    { date: '15 August 2026', label: 'Full Paper Submission Deadline', icon: 'fa-file-alt' },
    { date: '30 September 2026', label: 'Notification of Acceptance', icon: 'fa-bell' },
    { date: '15 October 2026', label: 'Camera Ready / Final Paper Deadline', icon: 'fa-check-circle' },
    { date: '1 November 2026', label: 'Registration Deadline', icon: 'fa-id-card' },
    { date: '4 – 6 December 2026', label: 'Conference Dates', icon: 'fa-calendar-check' },
];

const SectionTitle = ({ children }) => (
    <div style={{ marginBottom: '24px' }}>
        <h3 style={{
            fontSize: '1.35rem',
            fontWeight: '700',
            color: '#1a1a2e',
            letterSpacing: '-0.3px',
            margin: '0 0 8px 0',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
        }}>
            {children}
        </h3>
        <div style={{ width: '32px', height: '3px', background: '#2e8b57', borderRadius: '2px' }}></div>
    </div>
);

const HomePage = () => {
    const heroRef = useRef(null);

    // Smooth scroll parallax for the hero
    useLayoutEffect(() => {
        const handleScroll = () => {
            if (!heroRef.current) return;
            const scrollY = window.scrollY;
            // Cap the effect at 700px of scroll
            const progress = Math.min(scrollY / 700, 1);

            // Scale out, round corners, and fade out slightly
            heroRef.current.style.transform = `scale(${1 - progress * 0.04})`;
            heroRef.current.style.borderRadius = `${progress * 40}px`;
            heroRef.current.style.opacity = 1 - progress * 0.6;
            heroRef.current.style.filter = `blur(${progress * 4}px)`;
        };

        handleScroll(); // initialize
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="home-page" style={{ background: '#000' }}>

                {/* ── Sticky Hero Wrapper ── */}
                <div style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 0,
                }}>
                    <div ref={heroRef} style={{
                        width: '100%',
                        overflow: 'hidden',
                        transformOrigin: 'top center',
                        willChange: 'transform, opacity, border-radius, filter',
                    }}>
                        <Hero />
                    </div>
                </div>

                {/* ── Content overlapping the hero ── */}
                <div style={{
                    position: 'relative',
                    zIndex: 10,
                    background: '#fafafa',
                    borderRadius: '40px 40px 0 0', // rounded top corners sliding over
                    boxShadow: '0 -20px 50px rgba(0,0,0,0.6)',
                }}>
                    {/* ── About Section (Calm & Professional) ── */}
                    <div style={{ padding: '90px 15px 80px', borderBottom: '1px solid #eaeaea' }}>
                        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                            {/* Elegant Section Title */}
                            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                                <h2 style={{ fontSize: '2.4rem', color: '#1a1a2e', fontWeight: '800', marginBottom: '16px', letterSpacing: '-0.5px' }}>
                                    About iSPEC 2026
                                </h2>
                                <div style={{ width: '60px', height: '3px', background: '#2e8b57', margin: '0 auto', borderRadius: '2px' }}></div>
                            </div>

                            {/* Content Grid */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>

                                {/* Main Paragraphs */}
                                <div style={{
                                    background: '#fff',
                                    padding: '45px 50px',
                                    borderRadius: '12px',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                                    border: '1px solid #f0f0f0'
                                }}>
                                    <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#333', marginBottom: '24px', fontWeight: '400' }}>
                                        The <strong style={{ color: '#00629b' }}>IEEE Sustainable Power and Energy Conference (iSPEC) 2026</strong> is a premier international forum that brings together researchers, engineers, policymakers, and industry leaders from across the globe to present and discuss the latest advances in <strong>power systems</strong>, <strong>energy technologies</strong>, and <strong>sustainable solutions</strong>.
                                    </p>
                                    <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#333', margin: 0, fontWeight: '400' }}>
                                        In 2026, the IEEE iSPEC will be hosted at the iconic <strong>Hyatt Regency Trivandrum, Kerala</strong>. Organized by the <strong>IEEE Power &amp; Energy Society (PES) Kerala Chapter</strong> in association with <strong>IEEE Kerala Section</strong>, iSPEC 2026 promises to be a landmark event in the energy sector, offering a unique opportunity to deepen our understanding of sustainable energy through cross-disciplinary collaboration in an inspiring environment.
                                    </p>
                                </div>

                                {/* Diversity Statement */}
                                <div style={{
                                    background: 'transparent',
                                    padding: '0 20px',
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '20px'
                                }}>
                                    <div style={{
                                        width: '40px', height: '40px',
                                        borderRadius: '50%',
                                        background: '#e8fdf2',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: '#2e8b57', fontSize: '1.1rem', flexShrink: 0, marginTop: '5px'
                                    }}>
                                        <i className="fas fa-globe"></i>
                                    </div>
                                    <p style={{
                                        fontSize: '1rem', lineHeight: '1.7', color: '#666',
                                        fontStyle: 'italic', margin: 0
                                    }}>
                                        The IEEE Power &amp; Energy Society is committed to advancing diversity in Power and Energy, and to promoting an inclusive and equitable culture that welcomes, engages, and rewards all who contribute to the field, without regard to ethnicity, religion, gender, disability, age, national origin, sexual orientation, gender identity, or gender expression.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* ── Main Content Grid (Calm UI) ── */}
                    <div style={{ background: '#fff', padding: '80px 15px' }}>
                        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)', gap: '60px' }}>

                            {/* ── Left: Important Dates ── */}
                            <div>
                                <SectionTitle>Important Dates</SectionTitle>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    {importantDates.map((item, i) => (
                                        <div key={i} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            padding: '16px 20px',
                                            background: i === 4 ? '#f4fbf7' : '#fafafa',
                                            border: '1px solid',
                                            borderColor: i === 4 ? '#c8f0db' : '#eaeaea',
                                            borderRadius: '8px',
                                            transition: 'background-color 0.2s ease',
                                            cursor: 'default'
                                        }}
                                            onMouseEnter={e => e.currentTarget.style.backgroundColor = i === 4 ? '#edf9f2' : '#f5f5f5'}
                                            onMouseLeave={e => e.currentTarget.style.backgroundColor = i === 4 ? '#f4fbf7' : '#fafafa'}
                                        >
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                                <i className={`fas ${item.icon}`} style={{
                                                    color: i === 4 ? '#2e8b57' : '#666',
                                                    fontSize: '1.1rem',
                                                    width: '20px',
                                                    textAlign: 'center'
                                                }}></i>
                                                <span style={{ fontSize: '1.05rem', color: '#333', fontWeight: '500' }}>{item.label}</span>
                                            </div>
                                            <span style={{
                                                fontWeight: '600',
                                                fontSize: '1rem',
                                                color: i === 4 ? '#2e8b57' : '#1a1a2e',
                                                textAlign: 'right'
                                            }}>
                                                {item.date}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* ── Right: News + Sponsors + Supporters ── */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '45px' }}>

                                {/* News */}
                                <div>
                                    <SectionTitle>Latest News</SectionTitle>
                                    <div style={{
                                        background: '#fafafa', borderRadius: '8px', padding: '20px',
                                        border: '1px solid #eaeaea'
                                    }}>
                                        <a href="#" style={{
                                            color: '#1a1a2e', textDecoration: 'none', fontWeight: '600',
                                            fontSize: '1.05rem', display: 'block', marginBottom: '8px', lineHeight: '1.4',
                                            transition: 'color 0.2s ease'
                                        }}
                                            onMouseEnter={e => e.target.style.color = '#2e8b57'}
                                            onMouseLeave={e => e.target.style.color = '#1a1a2e'}>
                                            Website for IEEE iSPEC 2026 is Now Open!
                                        </a>
                                        <div style={{ fontSize: '0.85rem', color: '#777', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                            <i className="fas fa-calendar-alt"></i> 1st March 2026
                                        </div>
                                    </div>
                                </div>

                                {/* Sponsors */}
                                <div>
                                    <SectionTitle>Sponsors</SectionTitle>
                                    <div style={{
                                        display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center'
                                    }}>
                                        <a href="https://www.ieee.org" target="_blank" rel="noreferrer" style={{ transition: 'opacity 0.2s', opacity: 0.9 }} onMouseEnter={e => e.target.style.opacity = 1} onMouseLeave={e => e.target.style.opacity = 0.9}>
                                            <img src="https://brand-experience.ieee.org/wp-content/uploads/2021/05/ieee-mb-blue-tag-png_1713x695.png" alt="IEEE"
                                                style={{ height: '45px', width: 'auto', objectFit: 'contain' }} />
                                        </a>
                                        <a href="https://www.ieee-pes.org" target="_blank" rel="noreferrer" style={{ transition: 'opacity 0.2s', opacity: 0.9 }} onMouseEnter={e => e.target.style.opacity = 1} onMouseLeave={e => e.target.style.opacity = 0.9}>
                                            <img src="https://www.ieee-pes.org/wp-content/uploads/2023/02/ieee_pes_logo.svg" alt="IEEE PES"
                                                style={{ height: '45px', width: 'auto', objectFit: 'contain' }} />
                                        </a>
                                    </div>
                                </div>

                                {/* Supporters */}
                                <div>
                                    <SectionTitle>Supporters</SectionTitle>
                                    <div style={{
                                        display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'center'
                                    }}>
                                        <a href="https://ieeekerala.org" target="_blank" rel="noreferrer" style={{ transition: 'opacity 0.2s', opacity: 0.85 }} onMouseEnter={e => e.target.style.opacity = 1} onMouseLeave={e => e.target.style.opacity = 0.85}>
                                            <img src="https://ieeekerala.org/wp-content/uploads/2020/01/IEEE-Kerala-Section-Logo.png" alt="IEEE Kerala Section"
                                                style={{ height: '48px', width: 'auto', objectFit: 'contain' }} />
                                        </a>
                                        <a href="https://ewh.ieee.org/r10/kerala/pes/" target="_blank" rel="noreferrer" style={{ transition: 'opacity 0.2s', opacity: 0.85 }} onMouseEnter={e => e.target.style.opacity = 1} onMouseLeave={e => e.target.style.opacity = 0.85}>
                                            <img src="https://ewh.ieee.org/r10/kerala/pes/images/logonew.png" alt="IEEE PES Kerala Chapter"
                                                style={{ height: '52px', width: 'auto', objectFit: 'contain' }} />
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Recovered Sections */}
                    <ImportantDates />
                    <Organisers />

                    {/* Close the overlapping container */}
                </div>
            </div>
        </>
    );
};

export default HomePage;
