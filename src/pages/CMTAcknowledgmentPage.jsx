import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const CMTAcknowledgmentPage = () => {
    return (
        <PageLayout title="CMT Acknowledgment">
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
                <div className="section-content" style={{ paddingBottom: '60px' }}>

                    <div style={{
                        background: '#f8f9fa',
                        border: '1px solid #e0e0e0',
                        borderRadius: '10px',
                        padding: '40px',
                        marginBottom: '40px',
                        fontSize: '1.1rem',
                        lineHeight: '1.8',
                        color: '#333'
                    }}>
                        <p>
                            The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
                        </p>
                    </div>

                    <div style={{ fontSize: '1rem', color: '#666', lineHeight: '1.6' }}>
                        <p>
                            <strong>About Microsoft CMT:</strong> The Conference Management Toolkit (CMT) is a free scholarly paper management service from Microsoft Research, widely used by top-tier academic conferences for paper submission and peer review management.
                        </p>
                        <p style={{ marginTop: '15px' }}>
                            For more information, visit <a href="https://cmt3.research.microsoft.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#00629b' }}>Microsoft CMT</a>.
                        </p>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default CMTAcknowledgmentPage;
