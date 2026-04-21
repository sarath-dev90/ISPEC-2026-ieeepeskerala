import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const SpecialSessionPage = () => {
    return (
        <PageLayout title="Special Session">
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
                <div className="section-content" style={{ paddingBottom: '60px' }}>

                    <div style={{ marginBottom: '40px' }}>
                        <div style={{ fontSize: '1.05rem', lineHeight: '1.6', color: '#444' }}>
                            Special Sessions are intended to provide focused forums on timely and impactful topics that complement the main technical tracks of iSPEC 2026. Proposals may emphasize novel theories, advanced technologies, system-level integration, real-world deployment, or industry-relevant challenges. Contributions that bridge academia and industry, or that highlight practical insights from demonstrations and field applications, are particularly encouraged.
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '30px 0' }}>
                            <div style={{ flex: 1, height: '3px', background: '#ccc' }}></div>
                            <div style={{ width: '50px', height: '3px', background: '#00629b', margin: '0 10px' }}></div>
                            <div style={{ flex: 1, height: '3px', background: '#ccc' }}></div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', margin: '0 -15px' }}>
                        {/* Left Column (Main Content) */}
                        <div style={{ flex: '0 0 100%', maxWidth: '100%', padding: '0 15px', marginBottom: '40px' }} className="col-lg-8 col-md-12">
                            <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#333' }}><span>Scope of Special Session</span></h2>
                            <div style={{ fontSize: '1.05rem', lineHeight: '1.6', color: '#444', marginBottom: '30px' }}>
                                <p>Special Session topics may include, but are not limited to:</p>
                                <ul style={{ marginLeft: '20px', marginBottom: '20px' }}>
                                    <li>Future power network architectures and grid modernization</li>
                                    <li>Microgrids, distributed energy resources, and grid-edge intelligence</li>
                                    <li>Energy storage systems, flexibility, and market participation</li>
                                    <li>Protection, control, and automation for modern power systems</li>
                                    <li>Power electronics, grid-forming inverters, and hybrid AC/DC systems</li>
                                    <li>Digitalization, digital twins, and data-driven power system operation</li>
                                    <li>Cyber-physical security and interoperability of power systems</li>
                                    <li>Electrification, sustainability, and resilient energy infrastructure</li>
                                </ul>
                            </div>

                            <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#333', marginTop: '20px' }}><span>Proposal Requirements</span></h2>
                            <div style={{ fontSize: '1.05rem', lineHeight: '1.6', color: '#444' }}>
                                <p>A Special Session proposal should include:</p>
                                <ol style={{ marginLeft: '20px', marginBottom: '20px' }}>
                                    <li>Proposed Special Session title</li>
                                    <li>Brief description of the session (objectives, relevance, and scope)</li>
                                    <li>List of key topics to be covered</li>
                                    <li>Names and affiliations of the organizer(s)</li>
                                    <li>List of potential contributors (or indicative paper titles, one session is suggested to contain 8 papers in total)</li>
                                    <li>List of potential reviewers</li>
                                </ol>
                            </div>
                        </div>

                        {/* Right Column (Sidebar) */}
                        <div style={{ flex: '0 0 100%', maxWidth: '100%', padding: '0 15px' }} className="col-lg-4 col-md-12">
                            <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#333' }}><span>Important Dates</span></h2>
                            <div style={{ fontSize: '1.05rem', lineHeight: '1.6', color: '#444' }}>
                               
                                <p style={{ marginBottom: '15px' }}>
                                    <strong>Special Sessions</strong><br />
                                    • Proposal Deadline: 30 April 2026<br />
                                    • Decision Notification: 10 May 2026<br />
                                </p>

                            </div>
                        </div>
                    </div>

                    {/* Bottom Full Width Content */}
                    <div style={{ marginTop: '30px' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#333' }}><span>Proposal Submission</span></h2>
                        <div style={{ fontSize: '1.05rem', lineHeight: '1.6', color: '#444' }}>
                            <p>
                                Please use <a href="#" style={{ color: '#00629b' }}><em><strong>the template</strong></em></a> provided for filling up the proposal.<br />
                                <a href="#" style={{ color: '#00629b' }}>Special_Session_Proposal_Template.docx</a><br />
                                All Special Sessions will follow the standard iSPEC peer-review process. Accepted papers will be published in the confeence proceedings.<br />
                                Special Session proposals should be submitted to <strong>special session chair</strong> via email.<br />
                                For proposal submission details and enquiries, please contact:<br />
                                <strong>Special Session Chair: </strong>Dr.Boby Philip <a href="mailto:boby.philip@ieee.org" style={{ color: '#00629b' }}>boby.philip@ieee.org</a>
                            </p>
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

export default SpecialSessionPage;
