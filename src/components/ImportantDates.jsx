import React from 'react';

const ImportantDates = () => {
    const dates = [
        { label: 'Full Paper Submission Deadline', date: '15 August 2026', status: 'active' },
        { label: 'Notification of Acceptance', date: '30 September 2026', status: 'future' },
        { label: 'Final Paper Submission', date: '15 October 2026', status: 'future' },
        { label: 'Registration Deadline', date: '1 November 2026', status: 'future' },
        { label: 'Conference Dates', date: '4 – 6 December 2026', status: 'future' },
    ];

    return (
        <section className="section bg-contrast important-dates-section" id="dates">
            <div className="container">
                <div className="section-header">
                    <h2>Important Dates</h2>
                    <p>All deadlines are 23:59 (Anywhere on Earth)</p>
                </div>
                <div className="dates-grid-cards">
                    {dates.map((item, index) => (
                        <div key={index} className="date-card">
                            <h3 className="date-value">{item.date}</h3>
                            <p className="date-label">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImportantDates;
