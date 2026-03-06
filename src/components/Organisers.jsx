import React from 'react';

const Organisers = () => {
    const organisers = [
        {
            name: 'IEEE',
            logo: 'https://brand-experience.ieee.org/wp-content/uploads/2021/05/ieee-mb-blue-tag-png_1713x695.png',
            url: 'https://www.ieee.org'
        },
        {
            name: 'IEEE Kerala Section',
            logo: 'https://ieeekerala.org/wp-content/uploads/2020/01/IEEE-Kerala-Section-Logo.png',
            url: 'https://ieeekerala.org'
        },
        {
            name: 'IEEE PES Kerala Chapter',
            logo: 'https://ewh.ieee.org/r10/kerala/pes/images/logonew.png',
            url: 'https://ewh.ieee.org/r10/kerala/pes/'
        },
        {
            name: 'IEEE PES',
            logo: 'https://www.ieee-pes.org/wp-content/uploads/2023/02/ieee_pes_logo.svg',
            url: 'https://www.ieee-pes.org'
        }
    ];

    return (
        <section className="section organisers-section" style={{ background: '#fff', padding: '60px 0' }}>
            <div className="container">
                <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '2rem', color: '#333', marginBottom: '10px' }}>Organisers</h2>
                    <div style={{ width: '60px', height: '3px', background: 'var(--primary)', margin: '0 auto' }}></div>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '40px'
                }}>
                    {organisers.map((org, index) => (
                        <a
                            key={index}
                            href={org.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={org.name}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '15px 25px',
                                background: '#f8f9fa',
                                borderRadius: '10px',
                                transition: 'all 0.3s ease',
                                minWidth: '180px',
                                minHeight: '80px',
                                textDecoration: 'none'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <img
                                src={org.logo}
                                alt={org.name}
                                style={{
                                    maxHeight: '50px',
                                    maxWidth: '160px',
                                    objectFit: 'contain'
                                }}
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.innerHTML = `<span style="font-family: 'Outfit', sans-serif; font-weight: 600; color: #00629b; font-size: 0.9rem; text-align: center;">${org.name}</span>`;
                                }}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Organisers;
