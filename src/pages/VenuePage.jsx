import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';

const VenuePage = () => {
    return (
        <div className="page-wrapper">
            <Navbar />
            <PageHeader title="Conference Venue" breadcrumb="Venue" />

            <main className="page-content">
                <div className="container">
                    <section className="venue-section">
                        <div className="text-center mb-5">
                            <h2>Mar Baselios College of Engineering and Technology</h2>
                            <p style={{ fontSize: '1.2rem', color: '#555' }}>
                                Thiruvananthapuram, Keralam, India
                            </p>
                        </div>

                        <div className="venue-map" style={{
                            width: '100%',
                            height: '500px',
                            borderRadius: '15px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                            border: '5px solid white'
                        }}>
                            <iframe
                                src="https://maps.google.com/maps?q=Mar%20Baselios%20College%20of%20Engineering%20and%20Technology,%20Thiruvananthapuram&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>

                        <div className="mt-5 text-center">
                            <a href="https://maps.google.com/?q=Mar+Baselios+College+of+Engineering+and+Technology,+Thiruvananthapuram" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginRight: '20px' }}>Open in Google Maps</a>
                            <a href="/travel" className="btn" style={{ background: 'var(--secondary)', color: 'white' }}>Travel Information</a>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default VenuePage;
