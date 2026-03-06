import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';

const AboutPage = () => {
    return (
        <div className="page-wrapper">
            <Navbar />
            <PageHeader title="About" breadcrumb="About" />

            <main className="page-content">
                <div className="container">
                    <section className="about-section">
                        <p>
                            The <strong>2026 IEEE Sustainable Power and Energy Conference (iSPEC)</strong> is a leading international conference dedicated to sustainable energy technologies, smart grids, and resilient power systems. It brings together researchers, industry experts, and policymakers to exchange ideas and advancements in the field of power and energy.
                        </p>
                        <p>
                            iSPEC 2026 is technically co-sponsored by the IEEE Power & Energy Society (PES), ensuring high-quality technical content and global recognition. The conference will be held in the historic and vibrant city of Trivandrum, Kerala, India, offering a unique blend of technical excellence and cultural richness.
                        </p>
                        <p>
                            The conference will include keynote speeches, technical sessions, tutorials, workshops, and panel discussions covering a wide range of topics in sustainable power and energy.
                        </p>

                        <h2>About IEEE</h2>
                        <p>
                            The IEEE (Institute of Electrical and Electronics Engineers, Inc.) is the world’s largest technical professional society. Through its more than 400,000 members in 150 countries, the organization is a leading authority on a wide variety of areas ranging from aerospace systems, computers and telecommunications to biomedical engineering, electric power, and consumer electronics.
                        </p>
                        <p>
                            Dedicated to the advancement of technology, the IEEE publishes 30 percent of the world’s literature in the electrical and electronics engineering and computer science fields, and has developed nearly 900 active industry standards. The organization annually sponsors more than 850 conferences worldwide.
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default AboutPage;
