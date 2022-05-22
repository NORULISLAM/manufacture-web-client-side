import React from 'react';
import BusinessSummary from './BusinessSummary';
import Review from './Review';
import Banner from './Shared/Banner';
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
        </div>
    );
};

export default Home;