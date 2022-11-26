import React from 'react';
import Banner from '../Banner/Banner';
import ProductCategory from '../ProductCategory/ProductCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* advertise section */}
            <ProductCategory></ProductCategory>
        </div>
    );
};

export default Home;