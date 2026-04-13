import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const tracks = [
    {
        id: 'track1',
        title: 'Track 1: Renewable Energy & Sustainable Technologies',
        topics: [
            'Advanced solar PV modeling, forecasting, and performance optimization',
            'Wind energy conversion systems',
            'hybrid energy systems',
            'renewable integration',
            'Green hydrogen and fuel cells',
            'Biomass, waste-to-energy, and circular energy systems',
            'Sustainability assessment, carbon neutrality, and life cycle analysis'
        ]
    },
    {
        id: 'track2',
        title: 'Track 2: Grid Infrastructure & Resilience',
        topics: [
            'Modern transmission and distribution system planning',
            'Microgrids and resilient distributed energy architectures',
            'Grid hardening strategies against extreme weather events',
            'Black start capability and system restoration techniques',
            'Wide-area monitoring systems (WAMS) and synchrophasor applications',
            'Power quality issues and solutions'
        ]
    },
    {
        id: 'track3',
        title: 'Track 3: Protection, Control & Automation for Power Grid Operation',
        topics: [
            'Adaptive and AI-based protection schemes',
            'Wide-area protection and coordinated control',
            'Substation automation and IEC 61850 applications',
            'Fault detection, isolation, and service restoration (FDIR)',
            'HVDC and FACTS-based control strategies'
        ]
    },
    {
        id: 'track4',
        title: 'Track 4: Smart Grids, AI & Digitalization',
        topics: [
            'AI/ML applications in load forecasting and stability assessment',
            'Digital twins for power systems',
            'DER Integration and IoT-enabled smart energy management systems',
            'Cybersecurity in smart grid infrastructure',
            'Big data analytics and cloud computing in utilities',
            'HIL /SIL  based simulation systems'
        ]
    },
    {
        id: 'track5',
        title: 'Track 5: Transportation Electrification',
        topics: [
            'Electric vehicle (EV) charging infrastructure and standards',
            'Vehicle-to-Grid (V2G) and bidirectional charging technologies',
            'Battery management systems (BMS) and state estimation techniques',
            'Electrification of public and freight transportation',
            'Power electronics for EV propulsion systems'
        ]
    },
    {
        id: 'track6',
        title: 'Track 6: Energy Storage Systems',
        topics: [
            'Advanced battery technologies and solid-state batteries',
            'Supercapacitors and hybrid storage systems',
            'Grid-scale storage integration and control',
            'Thermal energy storage systems',
            'Degradation modeling and lifetime prediction of storage systems',
            'Design and siting of energy storage systems'
        ]
    },
    {
        id: 'track7',
        title: 'Track 7: Energy Markets, Policy & Governance',
        topics: [
            'Peer-to-Peer (P2P) Energy Trading and Decentralized Energy Markets',
            'Transactive Energy Systems and Blockchain Applications',
            'Regulatory and Policy Frameworks for Distributed Energy Resources and Energy Trading',
            'Market Design, Demand Response Programs, and Governance Models for Future Energy Systems'
        ]
    },
    {
        id:'track8',
        title:'Track 8: Advanced Power Converters and Electric Drives for Sustainable Energy Systems  ',
        topics:[
            'High-Efficient Power Converters for Renewable Integration',
            'Electric Drives for Sustainable Transportation and Industrial Electrification',
            'Grid-Interactive Power Electronics and Energy Storage Systems',
            'Advanced Modulation, Control, and AI-Based Optimization in Power Electronics'
        ]
    }
];

const CallForPapersPage = () => {
    const [openTrack, setOpenTrack] = useState(null);

    const toggleTrack = (trackId) => {
        setOpenTrack(openTrack === trackId ? null : trackId);
    };

    return (
        <PageLayout title="Call for Papers">
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
                <div className="section-content" style={{ paddingBottom: '60px' }}>

                    <div style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '1.5rem', color: '#00629b', marginBottom: '20px', lineHeight: '1.4' }}>
                            Theme: Integrated Pathways in Sustainable Power and Energy for Carbon Neutrality
                        </h2>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '30px 0' }}>
                            <div style={{ flex: 1, height: '3px', background: '#ccc' }}></div>
                            <div style={{ width: '50px', height: '3px', background: '#00629b', margin: '0 10px' }}></div>
                            <div style={{ flex: 1, height: '3px', background: '#ccc' }}></div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', margin: '0 -15px' }}>
                        {/* Left Column (Main Content) */}
                        <div style={{ flex: '0 0 100%', maxWidth: '100%', padding: '0 15px', marginBottom: '40px' }} className="col-lg-8 col-md-12">
                            <div style={{ marginBottom: '40px' }}>
                                <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#333' }}><span>Conference Overview</span></h2>
                                <div style={{ fontSize: '1.05rem', lineHeight: '1.6', color: '#444' }}>
                                    <p style={{ margin: '0 0 15px 0' }}>The IEEE Sustainable Power and Energy Conference (iSPEC) 2026 will be held at Hyatt Regency Trivandrum, Kerala under the theme "Integrated Pathways in Sustainable Power and Energy for Carbon Neutrality"</p>
                                    <p style={{ margin: '0 0 15px 0' }}>The conference brings together researchers, industry professionals, utilities, policymakers, and educators to exchange ideas and showcase advances in power and energy systems, with a focus on sustainability, digitalization, resilience, and system-level innovation.</p>
                                    <p style={{ margin: '0 0 15px 0' }}>The technical program will include keynote speeches, panel sessions, tutorials, and peer-reviewed paper and poster presentations, highlighting both research breakthroughs and practical applications. With seven technical tracks delivered over three days, iSPEC 2026 provides a dynamic platform for knowledge sharing, collaboration, and professional development.</p>
                                </div>
                            </div>

                            <div>
                                <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#333' }}>Conference Tracks</h2>
                                <div className="accordion" style={{ border: '1px solid #e0e0e0', borderRadius: '5px', overflow: 'hidden' }}>
                                    {tracks.map((track) => (
                                        <div key={track.id} style={{ borderBottom: '1px solid #e0e0e0' }}>
                                            <div
                                                onClick={() => toggleTrack(track.id)}
                                                style={{
                                                    padding: '15px 20px',
                                                    background: openTrack === track.id ? '#e8f4fc' : '#f8f9fa',
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    color: openTrack === track.id ? '#00629b' : '#333',
                                                    transition: 'background 0.2s ease'
                                                }}
                                            >
                                                <i className={`fa-solid ${openTrack === track.id ? 'fa-minus' : 'fa-plus'}`} style={{ marginRight: '15px', color: '#00629b', fontSize: '0.9rem' }}></i>
                                                <h3 style={{ margin: '0', fontSize: '1.1rem', fontWeight: '500' }}>{track.title}</h3>
                                            </div>
                                            {openTrack === track.id && (
                                                <div style={{ padding: '20px 20px 20px 50px', background: '#fff', fontSize: '1rem', color: '#555' }}>
                                                    <ul style={{ listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.8' }}>
                                                        {track.topics.map((topic, i) => (
                                                            <li key={i}>{topic}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div style={{ marginTop: '50px' }}>
                                <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#333' }}>
                                    <Link to="/submission" style={{ color: '#00629b', textDecoration: 'none' }}>Manuscript Submission</Link>
                                </h2>
                            </div>
                        </div>

                        {/* Right Column (Sidebar) */}
{/* Right Column (Sidebar) */}
<div style={{ flex: '0 0 100%', maxWidth: '100%', padding: '0 15px' }} className="col-lg-4 col-md-12">
    
    <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#333' }}><span>Important Dates</span></h2>
    
    <div style={{ fontSize: '1.05rem', lineHeight: '1.6', color: '#444' }}>
        <p style={{ marginBottom: '15px' }}>
            <strong>Paper Submission</strong><br />
            • Full Paper Deadline: 30 June 2026<br />
            • Acceptance Notification: 30 September 2026<br />
            • Final Paper Submission: 15 October 2026
        </p>
        <p style={{ marginBottom: '15px' }}>
            <strong>Registration</strong><br />
            • Registration Deadline: 1 November 2026
        </p>
        <p style={{ marginBottom: '15px' }}>
            <strong>Conference</strong><br />
            • Conference Dates: 4 – 6 December 2026
        </p>

        {/* ── INTEGRATED TICKER ── */}
        <div className="news-ticker-container" style={{ marginTop: '25px' }}>
            <div className="news-icon">
                <i className="fas fa-bullhorn"></i>
            </div>
            <div className="news-ticker-track">
                <div className="news-ticker-content">
                    <span>All accepted papers will be published in IEEE Xplore.</span>
                    <span>All accepted papers will be published in IEEE Xplore.</span>
                    <span>All accepted papers will be published in IEEE Xplore.</span>
                    <span>All accepted papers will be published in IEEE Xplore.</span>
                </div>
            </div>
        </div>

    </div>
</div>
                    </div>
                </div>
            </div>
            <style>{`
                @media (min-width: 992px) {
                    .col-lg-8 { flex: 0 0 66.666667% !important; max-width: 66.666667% !important; }
                    .col-lg-4 { flex: 0 0 33.333333% !important; max-width: 33.333333% !important; }
                }
            `}</style>
        </PageLayout>
    );
};

export default CallForPapersPage;
