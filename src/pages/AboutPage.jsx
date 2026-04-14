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
                            <strong>iSPEC 2026</strong> — the 7th edition of the <strong>IEEE Sustainable Power and Energy Conference</strong> series, by <strong>IEEE Power and Energy Society</strong> brings together researchers, industry professionals, utilities, policymakers, and educators from across the globe to showcase the latest advancements in power and energy systems. Themed around <strong>"Integrated Pathways in Sustainable Power and Energy for Carbon Neutrality,"</strong> this edition places a strong focus on renewable integration, electrification of heavy industries, resiliency, digitalization and systems innovations — driving the conversation forward on building a cleaner, smarter, and more sustainable energy future for all.
                        </p>

                        <h2>Past ISPEC Conferences</h2>
                        <ul>
                            <li><strong>IEEE ISPEC 2024</strong>: 24 - 27 November 2024, Sarawak, Malaysia</li>
                            <li><strong>IEEE iSPEC 2023</strong>: Chongqing, China | 29 - 30 November 2023</li>
                            <li><strong>IEEE iSPEC 2022</strong>: Perth, Australia | 4 - 7 December 2022</li>
                            <li><strong>IEEE iSPEC 2021</strong>: Nanjing, China | 25 - 27 November 2021</li>
                            <li><strong>IEEE iSPEC 2020</strong>: Chengdu, China | 23 - 25 November 2020</li>
                            <li><strong>IEEE iSPEC 2019</strong>: Beijing, China | 21 - 23 November 2019</li>
                        </ul>

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
