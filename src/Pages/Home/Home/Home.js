import React from 'react';
import Banner from '../Banner/Banner';
import OurRatings from '../OurRatings/OurRatings';
import ProductCategory from '../ProductCategory/ProductCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* advertise section */}
            <ProductCategory></ProductCategory>
            <OurRatings></OurRatings>
        </div>
    );
};

export default Home;