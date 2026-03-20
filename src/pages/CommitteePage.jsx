import React from 'react';
import PageLayout from '../components/PageLayout';

const committeeData = [
    {
        category: "Patrons",
        borderColor: '#6a1b9a',
        members: [
            { name: 'Sameer S M', role: 'Director, IEEE Region 10' },
            { name: 'B. S. Manoj', role: 'Chair, IEEE Kerala Section' },
            { name: 'Mohammed Kasim', role: 'Past Chair, IEEE Kerala Section' },
            { name: 'Suhair A', role: 'Past Chair IEEE PES Kerala Chapter' },
        ]
    },
    {
        category: "General Chairs",
        borderColor: '#00629b',
        members: [
            { name: 'Ajith Gopi', role: 'Immediate Past Chair, IEEE PES Kerala Chapter' },
            { name: 'Boby Philip', role: 'Chair, IEEE PES Kerala Chapter' },
        ]
    },
    {
        category: "Technical Program Chairs",
        borderColor: '#2e8b57',
        members: [
            { name: 'Kumaravel S', role: 'Professor, Electrical Eng. Dept. NIT Calicut' },
            { name: 'Jaison Mathew', role: 'Professor & Head, Electrical Engg. Dept. GEC Thrissur' },
            { name: 'Sobha Manakkal', role: 'Professor & Head, Electrical Engg. Dept, NCERC' },
        ]
    },
    {
        category: "Publication Chairs",
        borderColor: '#4527a0',
        members: [
            { name: 'Rahul Satheesh', role: 'Secretary IEEE PES Kerala Chapter, Assistant Professor Amrita Viswa Vidhyapeetham' },
            { name: 'Harikumar R', role: 'Associate Professor, Electrical Engg Dept., College of Engineering Trivandrum' },
        ]
    },
    {
        category: "Publicity Chairs",
        borderColor: '#e65100',
        members: [
            { name: 'Nandan S', role: 'Secretary IEEE Kerala Section' },
            { name: 'Vishnu S', role: 'Treasurer IEEE PES Kerala Chapter' },
            { name: 'Biju S S', role: 'Retd. Deputy CE KSEB, Grant Thornton Bharat, India' },
        ]
    },
    {
        category: "Finance Chairs",
        borderColor: '#c62828',
        members: [
            { name: 'Harikumar K P', role: 'Vice Chair, IEEE PES Kerala Chapter' },
            { name: 'Sabiq P V', role: 'Treasurer, IEEE Kerala Section' },
        ]
    },
    {
        category: "International Advisory Board",
        borderColor: '#1b5e20',
        members: [
            { name: 'Bikash C Pal', role: 'President Elect, IEEE Power and Energy Society' },
            { name: 'Dean Sharafi', role: 'Treasurer, IEEE Power and Energy Society' },
            { name: 'Nirmal Nair', role: 'Assoc. Professor, University of Auckland, New Zealand' },
            { name: 'C.Y. Chung', role: 'President, IEEE Power and Energy Society' },
            { name: 'Shay Bahramirad', role: 'Past President, IEEE Power and Energy Society' },
            { name: 'Jovica V. Milanović', role: 'Vice President, Publications' },
            { name: 'Mythili Chaganti', role: 'Vice President, Chapters & Membership' },
            { name: 'Suhair A', role: 'Past Chair IEEE PES Kerala Chapter' },
            { name: 'P S Chandramohanan', role: 'Past Chair IEEE PES Kerala Chapter' },
            { name: 'Bijuna Kunju K', role: 'Past Chair IEEE PES Kerala Chapter' },
            { name: 'Soonee Sushil Kumar', role: 'Founder CEO POSOCO (Grid India Controller)' },
            { name: 'Vinod John', role: 'IISC Bangalore' },
            { name: 'Gurunath Gurrala', role: 'IISC Bangalore' },
            { name: 'Sarasij Das', role: 'IISC Bangalore' },
            { name: 'Avik Bhattacharya', role: 'IIT Roorkee' },
            { name: 'Sanjib Ganguly', role: 'IIT Guwahati' },
            { name: 'Sudhakar Kumarasamy', role: 'UMPSA Malaysia' },
            { name: 'Mohammad Rihan', role: 'Director General, National Institute of Solar Energy' },
            { name: 'Mini Shaji Thomas', role: 'Jamia Milia Islamia' },
            { name: 'Nilesh Modi', role: 'AEMO' },
        ]
    }
];

const CommitteePage = () => {
    // Generate initials for the avatar placeholder.
    const getInitials = (name) => {
        const parts = name.split(' ');
        if (parts.length > 1) {
            return (parts[0][0] + parts[1][0]).toUpperCase();
        }
        return name.slice(0, 2).toUpperCase();
    };

    return (
        <PageLayout title="Organizing Committee">
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
                <div className="section-content" style={{ paddingBottom: '80px' }}>

                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <p style={{ fontSize: '1.1rem', color: '#555', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                            We extend our gratitude to our esteemed committee members whose expertise and dedication make iSPEC 2026 possible.
                        </p>
                    </div>

                    {committeeData.map((group, groupIndex) => (
                        <div key={groupIndex} style={{ marginBottom: '70px' }}>
                            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                                <h3 style={{
                                    fontSize: '1.8rem',
                                    color: '#1a1a2e',
                                    marginBottom: '15px',
                                    display: 'inline-block',
                                    borderBottom: `3px solid ${group.borderColor}`,
                                    paddingBottom: '8px'
                                }}>
                                    {group.category}
                                </h3>
                            </div>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                                gap: '30px',
                                alignItems: 'stretch'
                            }}>
                                {group.members.map((member, index) => (
                                    <div key={index} className="committee-card" style={{
                                        background: '#fff',
                                        borderRadius: '12px',
                                        padding: '30px',
                                        textAlign: 'center',
                                        border: '1px solid #eaeaea',
                                        borderTop: `4px solid ${group.borderColor}`,
                                        boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center'
                                    }}>
                                        <div style={{
                                            width: '80px',
                                            height: '80px',
                                            borderRadius: '50%',
                                            background: `${group.borderColor}15`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: group.borderColor,
                                            fontSize: '1.5rem',
                                            fontWeight: 'bold',
                                            marginBottom: '20px'
                                        }}>
                                            {getInitials(member.name)}
                                        </div>
                                        <div style={{ fontSize: '1.25rem', color: '#1a1a2e', fontWeight: '700', marginBottom: '10px' }}>
                                            {member.name}
                                        </div>
                                        <div style={{ fontSize: '1rem', color: '#555', lineHeight: '1.5' }}>
                                            {member.role}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            <style>{`
                .committee-card:hover { 
                    transform: translateY(-5px);
                    box-shadow: 0 12px 30px rgba(0,0,0,0.08) !important;
                }
            `}</style>
        </PageLayout>
    );
};

export default CommitteePage;
