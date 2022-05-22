import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BusinessSummary></BusinessSummary>
            <Footer></Footer>
        </div>
    );
};

export default Home;