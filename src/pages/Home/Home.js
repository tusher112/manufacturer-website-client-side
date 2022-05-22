import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ContactUs from './ContactUs';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BusinessSummary></BusinessSummary>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;