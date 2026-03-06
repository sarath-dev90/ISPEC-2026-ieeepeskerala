import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';

const StudentSupportPage = () => {
    return (
        <div className="page-wrapper">
            <Navbar />
            <PageHeader title="Student Support Fund" breadcrumb="Student Support" />

            <main className="page-content">
                <div className="container">
                    <section className="student-support-section">
                        <h2>General Information</h2>
                        <p>
                            iSPEC 2026 offers limited grants up to a maximum of <strong>USD 350</strong> per successful student applicant.
                            The selection is competitive and based on the quality of the paper.
                        </p>

                        <h2>Eligibility Criteria</h2>
                        <ul style={{ paddingLeft: '20px', lineHeight: '1.8', color: '#444' }}>
                            <li style={{ marginBottom: '10px' }}>
                                Must be a <strong>full-time undergraduate or postgraduate student</strong> (Masters or PhD) at the time of paper submission.
                            </li>
                            <li style={{ marginBottom: '10px' }}>
                                Must be an active <strong>IEEE PES student/graduate member</strong> with a valid membership number at the time of application.
                            </li>
                            <li style={{ marginBottom: '10px' }}>
                                Must be both the <strong>first author and the presenter</strong> of at least one accepted paper at iSPEC 2026.
                            </li>
                        </ul>

                        <h2>Application Process</h2>
                        <p>Applicants must fill out the application form and provide the following documents:</p>
                        <ul style={{ paddingLeft: '20px', lineHeight: '1.8', color: '#444' }}>
                            <li>A valid student card.</li>
                            <li>Evidence of IEEE PES membership.</li>
                        </ul>
                        <div className="mt-4">
                            <a href="#" className="btn btn-primary" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: 'var(--primary)', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>Apply Now (Form TBA)</a>
                        </div>

                        <h2 style={{ marginTop: '40px' }}>Evaluation</h2>
                        <p>
                            Applications are reviewed by a committee chaired by the General Chair of iSPEC 2026.
                            <strong>Priority</strong> is given to active IEEE PES Student Volunteers.
                        </p>

                        <h2 style={{ marginTop: '40px' }}>Important Dates</h2>
                        <ul style={{ paddingLeft: '20px', lineHeight: '1.8', color: '#444' }}>
                            <li><strong>Application Deadline:</strong> 1 October 2026 (Tentative)</li>
                            <li><strong>Result Notification:</strong> 15 October 2026 (Tentative)</li>
                        </ul>

                        <div style={{ marginTop: '40px', padding: '20px', background: '#f8f9fa', borderRadius: '10px' }}>
                            <p><strong>Inquiries:</strong> Please contact <a href="mailto:contact@ispec2026.org">contact@ispec2026.org</a> for any questions.</p>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default StudentSupportPage;
