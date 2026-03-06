import React from 'react';
import PageLayout from '../components/PageLayout';

const TravelPage = () => (
    <PageLayout title="Travel Information">
        <div style={{ maxWidth: '950px', margin: '0 auto', padding: '0 15px 70px' }}>

            {/* ── Intro ── */}
            <p style={{ fontSize: '1.08rem', color: '#444', lineHeight: '1.8', marginBottom: '40px' }}>
                Trivandrum (Thiruvananthapuram), the capital city of Kerala, is known for its rich cultural heritage,
                beautiful beaches, and historical landmarks. The conference venue,{' '}
                <strong>Hyatt Regency Trivandrum</strong>, is centrally located and easily accessible from major
                transport hubs.
            </p>

            {/* ── By Air ── */}
            <Section icon="fa-plane-arrival" title="By Air" accent="#00629b">
                <HubRow label="Trivandrum International Airport (TRV)" distance="~5 km from venue" mapUrl="https://www.google.com/maps/place/Trivandrum+International+Airport" />
                <OptionList items={[
                    { label: 'Prepaid Taxi', desc: 'Available at the arrival terminal. Estimated fare: ₹300 – ₹500.' },
                    { label: 'Ride-Hailing Apps', desc: 'Uber and Ola are widely available.' },
                    { label: 'Travel Time', desc: 'Approximately 15–20 minutes depending on traffic.' },
                ]} />
            </Section>

            {/* ── By Train ── */}
            <Section icon="fa-train" title="By Train" accent="#2e8b57">
                <HubRow label="Trivandrum Central Railway Station (TVC)" distance="~3 km from venue" mapUrl="https://www.google.com/maps/place/Thiruvananthapuram+Central+Railway+Station" />
                <OptionList items={[
                    { label: 'Prepaid Auto / Taxi', desc: 'Stands available outside the station.' },
                    { label: 'Ride-Hailing Apps', desc: 'Uber and Ola pickup points are near the entrance.' },
                    { label: 'Travel Time', desc: 'Approximately 10–15 minutes.' },
                ]} />
            </Section>

            {/* ── Local Transport ── */}
            <Section icon="fa-city" title="Local Transport" accent="#00629b">
                <p style={{ color: '#555', marginBottom: '16px', fontSize: '1rem' }}>
                    Getting around Trivandrum is convenient with several options:
                </p>
                <OptionList items={[
                    { label: 'Auto Rickshaws', desc: 'A popular and affordable way to travel short distances. Ask for the meter or negotiate a fare.' },
                    { label: 'Ride-Hailing (Uber / Ola)', desc: 'Reliable and convenient for city travel.' },
                    { label: 'KSRTC Buses', desc: 'State-run bus network connecting all parts of the city.' },
                ]} />
            </Section>

            {/* ── Maps CTA ── */}
            <div style={{ marginTop: '48px', textAlign: 'center' }}>
                <a
                    href="https://maps.app.goo.gl/BdjXJGPBDBMivSgf8"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-flex', alignItems: 'center', gap: '10px',
                        background: '#00629b', color: '#fff',
                        padding: '12px 28px', borderRadius: '6px',
                        fontWeight: 700, fontSize: '1rem',
                        textDecoration: 'none',
                        transition: 'background 0.2s'
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = '#004a7c'}
                    onMouseLeave={e => e.currentTarget.style.background = '#00629b'}
                >
                    <i className="fas fa-map-marker-alt"></i>
                    View Venue on Google Maps
                </a>
                <p style={{ marginTop: '10px', color: '#888', fontSize: '0.9rem' }}>
                    Hyatt Regency Trivandrum · NH Bypass, Chakka, Thiruvananthapuram, Kerala 695024
                </p>
            </div>

        </div>
    </PageLayout>
);

/* ── Reusable sub-components ── */

const Section = ({ icon, title, accent, children }) => (
    <div style={{
        background: '#fff',
        border: '1px solid #e5e7eb',
        borderRadius: '10px',
        marginBottom: '28px',
        overflow: 'hidden'
    }}>
        {/* Section header */}
        <div style={{
            display: 'flex', alignItems: 'center', gap: '14px',
            padding: '16px 24px',
            borderBottom: '1px solid #e5e7eb',
            background: '#f9fafb'
        }}>
            <span style={{
                width: '38px', height: '38px',
                borderRadius: '8px',
                background: accent + '1a',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: accent, fontSize: '1.1rem', flexShrink: 0
            }}>
                <i className={`fas ${icon}`}></i>
            </span>
            <h3 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 700, color: '#1a1a2e' }}>
                {title}
            </h3>
        </div>
        {/* Section body */}
        <div style={{ padding: '22px 24px' }}>
            {children}
        </div>
    </div>
);

const HubRow = ({ label, distance, mapUrl }) => (
    <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '8px',
        background: '#f0f7ff',
        borderRadius: '7px',
        padding: '12px 16px',
        marginBottom: '18px'
    }}>
        <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontWeight: 600, color: '#00629b', fontSize: '0.97rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
            onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
            onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
        >
            <i className="fas fa-building" style={{ opacity: 0.7 }}></i>
            {label}
            <i className="fas fa-external-link-alt" style={{ fontSize: '0.72rem', opacity: 0.55 }}></i>
        </a>
        <span style={{
            background: '#00629b', color: '#fff',
            borderRadius: '20px', padding: '3px 12px',
            fontSize: '0.82rem', fontWeight: 700
        }}>
            <i className="fas fa-route" style={{ marginRight: '5px' }}></i>
            {distance}
        </span>
    </div>
);

const OptionList = ({ items }) => (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {items.map((item, i) => (
            <li key={i} style={{
                display: 'flex', gap: '12px', alignItems: 'flex-start',
                padding: '10px 14px',
                borderRadius: '7px',
                background: i % 2 === 0 ? '#fafafa' : '#fff',
                border: '1px solid #f0f0f0'
            }}>
                <i className="fas fa-check" style={{
                    color: '#2e8b57', marginTop: '3px', flexShrink: 0, fontSize: '0.85rem'
                }}></i>
                <span style={{ fontSize: '0.97rem', color: '#444', lineHeight: '1.6' }}>
                    <strong style={{ color: '#222' }}>{item.label}:</strong>{' '}{item.desc}
                </span>
            </li>
        ))}
    </ul>
);

export default TravelPage;
