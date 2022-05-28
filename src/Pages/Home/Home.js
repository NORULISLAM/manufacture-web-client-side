import React from 'react';
import BusinessSummary from './BusinessSummary';
import Review from './Review';
import BackProfile from './Shared/BackProfile';
import Banner from './Shared/Banner';
import StockSummary from './Shared/StockSummary';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <div className='px-12'>

                <Banner></Banner>
                <Tools></Tools>
                <BusinessSummary></BusinessSummary>
            </div>
            <Review></Review>
            <BackProfile></BackProfile>
            <StockSummary></StockSummary>

        </div>
    );
};

export default Home;