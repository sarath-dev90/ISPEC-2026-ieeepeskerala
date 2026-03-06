import React from 'react';
import PageLayout from '../components/PageLayout';
import ImportantDates from '../components/ImportantDates';

const ImportantDatesPage = () => {
    return (
        <PageLayout title="Important Dates">
            <div className="container" style={{ paddingBottom: '60px' }}>
                <ImportantDates />
            </div>
        </PageLayout>
    );
};

export default ImportantDatesPage;
