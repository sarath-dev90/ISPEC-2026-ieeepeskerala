import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const committeeMembers = [
    // General Chairs
    { title: 'Dr.', name: 'Ajith Gopi', role: 'General Chair', email: 'ajithgopi@ieee.org', linkedin: 'https://www.linkedin.com/', img: 'https://via.placeholder.com/150/e8f4fc/00629b?text=AG', borderColor: '#00629b' },
    { title: 'Dr.', name: 'Boby Philip', role: 'General Co-Chair', email: 'boby.philip@ieee.org', linkedin: 'https://www.linkedin.com/', img: 'https://via.placeholder.com/150/e8f4fc/00629b?text=BP', borderColor: '#00629b' },

    // Technical Program
    { title: 'Dr.', name: 'XXXXXXX XXXXXX', role: 'Technical Program Chair', email: 'contact@ispec2026.org', linkedin: 'https://www.linkedin.com/', img: 'https://via.placeholder.com/150/edfaf3/2e8b57?text=TP', borderColor: '#2e8b57' },
    { title: 'Dr.', name: 'XXXXXXX XXXXXX', role: 'Technical Program Co-Chair', email: 'contact@ispec2026.org', linkedin: 'https://www.linkedin.com/', img: 'https://via.placeholder.com/150/edfaf3/2e8b57?text=TP', borderColor: '#2e8b57' },
    { title: 'Dr.', name: 'XXXXXXX XXXXXX', role: 'Technical Program Co-Chair', email: 'contact@ispec2026.org', linkedin: 'https://www.linkedin.com/', img: 'https://via.placeholder.com/150/edfaf3/2e8b57?text=TP', borderColor: '#2e8b57' },

    // Sponsorship & Industry
    { title: 'Dr.', name: 'XXXXXXX XXXXXX', role: 'Sponsorship Chair', email: 'contact@ispec2026.org', linkedin: 'https://www.linkedin.com/', img: 'https://via.placeholder.com/150/fff3e0/e65100?text=SC', borderColor: '#e65100' },
    { title: 'Dr.', name: 'XXXXXXX XXXXXX', role: 'Sponsorship Co-Chair', email: 'contact@ispec2026.org', linkedin: 'https://www.linkedin.com/', img: 'https://via.placeholder.com/150/fff3e0/e65100?text=SC', borderColor: '#e65100' },
    { title: 'Mr.', name: 'XXXXXXX XXXXXX', role: 'Industry Co-Chair', email: 'contact@ispec2026.org', linkedin: 'https://www.linkedin.com/', img: 'https://via.placeholder.com/150/fff3e0/e65100?text=IC', borderColor: '#e65100' },

    // Finance
    { title: 'Dr.', name: 'XXXXXXX XXXXXX', role: 'Finance Chair', email: 'contact@ispec2026.org', linkedin: 'https://www.linkedin.com/', img: 'https://via.placeholder.com/150/fce4ec/c62828?text=FC', borderColor: '#c62828' },

    // Publications & Publicity
    { title: 'Dr.', name: 'XXXXXXX XXXXXX', role: 'Publications / Proceedings Chair', email: 'contact@ispec2026.org', linkedin: 'https://www.linkedin.com/', img: 'https://via.placeholder.com/150/ede7f6/4527a0?text=PC', borderColor: '#4527a0' },
    { title: 'Dr.', name: 'XXXXXXX XXXXXX', role: 'Publicity Co-Chair', email: 'contact@ispec2026.org', linkedin: 'https://www.linkedin.com/', img: 'https://via.placeholder.com/150/ede7f6/4527a0?text=PB', borderColor: '#4527a0' },

    // Special Sessions
    { title: 'Dr.', name: 'XXXXXXX XXXXXX', role: 'Special Sessions Chair', email: 'contact@ispec2026.org', linkedin: 'https://www.linkedin.com/', img: 'https://via.placeholder.com/150/e8f5e9/1b5e20?text=SS', borderColor: '#1b5e20' },

    // Registrations & Local Arrangements
    { title: 'Dr.', name: 'XXXXXXX XXXXXX', role: 'Registrations Chair', email: 'contact@ispec2026.org', linkedin: 'https://www.linkedin.com/', img: 'https://via.placeholder.com/150/e3f2fd/0d47a1?text=RC', borderColor: '#0d47a1' },
    { title: 'Dr.', name: 'XXXXXXX XXXXXX', role: 'Local Arrangements Chair', email: 'contact@ispec2026.org', linkedin: 'https://www.linkedin.com/', img: 'https://via.placeholder.com/150/e3f2fd/0d47a1?text=LA', borderColor: '#0d47a1' },

    // Website & Students
    { title: 'Dr.', name: 'XXXXXXX XXXXXX', role: 'Website Chair', email: 'contact@ispec2026.org', linkedin: 'https://www.linkedin.com/', img: 'https://via.placeholder.com/150/f3e5f5/6a1b9a?text=WC', borderColor: '#6a1b9a' },
    { title: 'Mr.', name: 'XXXXXXX XXXXXX', role: 'Students Activity Co-Chair', email: 'contact@ispec2026.org', linkedin: 'https://www.linkedin.com/', img: 'https://via.placeholder.com/150/f3e5f5/6a1b9a?text=SA', borderColor: '#6a1b9a' },
    { title: 'Ms.', name: 'XXXXXXX XXXXXX', role: 'Students Activity Co-Chair', email: 'contact@ispec2026.org', linkedin: 'https://www.linkedin.com/', img: 'https://via.placeholder.com/150/f3e5f5/6a1b9a?text=SA', borderColor: '#6a1b9a' },
];

const CommitteePage = () => {
    return (
        <PageLayout title="Committee Members">
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
                <div className="section-content" style={{ paddingBottom: '60px' }}>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px', marginTop: '40px' }}>
                        {committeeMembers.map((member, index) => (
                            <div key={index} style={{
                                position: 'relative',
                                background: '#f8f9fa',
                                borderRadius: '8px',
                                padding: '90px 20px 20px',
                                textAlign: 'center',
                                marginTop: '75px',
                                borderTop: `5px solid ${member.borderColor}`,
                                boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
                            }}>
                                {/* Floating Picture */}
                                <div style={{
                                    position: 'absolute',
                                    top: '-75px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '150px',
                                    height: '150px',
                                    borderRadius: '40px',
                                    border: '4px solid #fff',
                                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                                    backgroundImage: `url(${member.img})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundColor: '#ddd'
                                }}></div>

                                {/* Text Block */}
                                <div style={{ marginTop: '10px' }}>
                                    <div style={{ fontSize: '1.2rem', color: '#333', marginBottom: '5px' }}>
                                        <span style={{ fontWeight: 'normal' }}>{member.title}</span> <span style={{ fontWeight: 'bold' }}>{member.name}</span>
                                    </div>
                                    <div style={{ fontSize: '0.95rem', color: '#00629b', fontWeight: 'bold', marginBottom: '15px' }}>
                                        {member.role}
                                    </div>

                                    {/* Social Links */}
                                    <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
                                        {member.email && (
                                            <a href={`mailto:${member.email}`} title="Email" style={{ color: '#666', transition: 'color 0.3s' }}>
                                                <i className="fa-solid fa-envelope" style={{ fontSize: '1.2rem' }}></i>
                                            </a>
                                        )}
                                        {member.linkedin && (
                                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" style={{ color: '#0077b5', transition: 'color 0.3s' }}>
                                                <i className="fa-brands fa-linkedin" style={{ fontSize: '1.2rem' }}></i>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                .fa-envelope:hover { color: #00629b !important; }
                .fa-linkedin:hover { color: #004b79 !important; }
            `}</style>
        </PageLayout>
    );
};

export default CommitteePage;
