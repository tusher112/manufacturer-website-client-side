import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ContactUs from './ContactUs';
import Footer from './Footer';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>

            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;