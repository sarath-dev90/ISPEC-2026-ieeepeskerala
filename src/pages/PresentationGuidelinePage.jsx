import React from 'react';
import PageLayout from '../components/PageLayout';

const PresentationGuidelinePage = () => {
    return (
        <PageLayout title="Presentation Guidelines">
            <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 15px', paddingBottom: '60px' }}>

                <section style={{ marginBottom: '50px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '25px', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>
                        <i className="fas fa-tasks" style={{ fontSize: '1.8rem', color: '#00629b', marginRight: '15px' }}></i>
                        <h2 style={{ fontSize: '2rem', color: '#333', margin: 0 }}>Pre-Conference</h2>
                    </div>

                    <div className="guideline-card" style={{ background: '#fff', padding: '35px', borderRadius: '12px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', marginBottom: '20px', borderLeft: '4px solid #2e8b57' }}>
                        <ol style={{ paddingLeft: '20px', fontSize: '1.1rem', lineHeight: '1.7', color: '#555', margin: 0 }}>
                            <li style={{ marginBottom: '20px' }}>
                                Please declare <strong>‘Presenter’</strong> in Microsoft CMT. To do this, after logging into the submission portal, navigate to your paper, and add or change the presenter from the listed authors accordingly.
                            </li>
                            <li style={{ marginBottom: '20px' }}>
                                Presenters are required to prepare a maximum of <strong>10 minutes</strong> of presentation slides in PowerPoint Format (.ppt/.pptx) and upload the slides through the portal (deadline <strong>15 November 2026</strong>). Presenters will present the slides uploaded and opened through the portal during the conference day.
                            </li>
                            <li style={{ marginBottom: '20px' }}>
                                Please use the official iSPEC 2026 conference PowerPoint slide template.<br />
                                <a href="#" style={{ color: '#00629b', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', marginTop: '10px', textDecoration: 'none' }} className="template-download-link">
                                    <i className="fas fa-file-powerpoint" style={{ marginRight: '8px', fontSize: '1.2rem' }}></i>
                                    Download PowerPoint Slide Template
                                </a>
                            </li>
                            <li style={{ marginBottom: '20px' }}>
                                Your presentation should be named as <strong>PAPER NUMBER</strong>, followed by the <strong>PRESENTER NAME</strong> <em>(Example: 1570123456 NUR ASHIDA SALIM)</em>.
                            </li>
                            <li>
                                To upload your PowerPoint slides, follow the instructions provided in your author notification email or within your submission entry on the portal.
                            </li>
                        </ol>
                    </div>
                </section>

                <section style={{ marginBottom: '50px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '25px', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>
                        <i className="fas fa-calendar-day" style={{ fontSize: '1.8rem', color: '#00629b', marginRight: '15px' }}></i>
                        <h2 style={{ fontSize: '2rem', color: '#333', margin: 0 }}>Conference Day (4TH – 6TH DECEMBER 2026)</h2>
                    </div>

                    <div className="guideline-card" style={{ background: '#fff', padding: '35px', borderRadius: '12px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', borderLeft: '4px solid #2e8b57' }}>
                        <ol style={{ paddingLeft: '20px', fontSize: '1.1rem', lineHeight: '1.7', color: '#555', margin: 0 }}>
                            <li style={{ marginBottom: '20px' }}>
                                Please ensure that the presenter enters the correct conference room for the session. No special request for change of session is allowed during the conference days – any request must be done in advance, as soon as the needs arise.
                            </li>
                            <li style={{ marginBottom: '20px' }}>
                                All presenters should be ready in the room allocated for the session, <strong>10 minutes</strong> before the session starts.
                            </li>
                            <li style={{ marginBottom: '20px' }}>
                                Presentation should be done within a maximum of <strong>10 minutes</strong>. A <strong>5 minutes</strong> Question & Answer session will follow after the presentation is done or the 15 minutes allocated for the presenter has lapsed.
                            </li>
                            <li style={{ marginBottom: '20px' }}>
                                All presenters must present <strong>LIVE</strong> according to the allocated slot as specified in the session timetable. <strong style={{ color: '#d9534f' }}>NO RECORDED VIDEO is allowed.</strong>
                            </li>
                            <li style={{ marginBottom: '20px' }}>
                                Each session will be hosted by a Session Chair and assisted by a Session Vice-Chair.
                            </li>
                            <li>
                                All presenters must remain seated in the conference room throughout the session.
                            </li>
                        </ol>
                    </div>
                </section>

                <section style={{ textAlign: 'center', marginTop: '60px' }}>
                    <div style={{ background: 'linear-gradient(135deg, #004a7c 0%, #002845 100%)', padding: '40px', borderRadius: '16px', color: '#fff', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '15px', color: '#fff', fontWeight: 'bold' }}>Need Further Assistance?</h3>
                        <p style={{ fontSize: '1.1rem', marginBottom: '25px', opacity: 0.9, maxWidth: '600px', margin: '0 auto 25px auto', lineHeight: '1.5' }}>
                            Do contact us if there is any further information or clarification you may need regarding your presentation.
                        </p>
                        <a href="mailto:contact@ispec2026.org" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            background: '#2e8b57',
                            color: '#fff',
                            padding: '12px 30px',

                            borderRadius: '50px',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            fontSize: '1.1rem',
                            transition: 'transform 0.2s, background 0.2s'
                        }} className="btn-guideline-contact">
                            <i className="fas fa-envelope" style={{ marginRight: '10px' }}></i>
                            contact@ispec2026.org
                        </a>
                    </div>
                </section>

                <style>{`
                    .template-download-link:hover {
                        color: #2e8b57 !important;
                        text-decoration: underline !important;
                    }
                    .btn-guideline-contact:hover {
                        background: #0d8a26 !important;
                        transform: translateY(-2px);
                    }
                    .guideline-card {
                        transition: transform 0.3s ease;
                    }
                    .guideline-card:hover {
                        transform: translateY(-3px);
                    }
                `}</style>

            </div>
        </PageLayout>
    );
};

export default PresentationGuidelinePage;
