import React from 'react';

const VenueMap = () => {
    return (
        <section className="venue-map-section" id="venue">
            <iframe
                src="https://maps.google.com/maps?q=Mar%20Baselios%20College%20of%20Engineering%20and%20Technology,%20Thiruvananthapuram&t=&z=13&ie=UTF8&iwloc=&output=embed"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mar Baselios College Location"
            ></iframe>
        </section>
    );
};

export default VenueMap;
