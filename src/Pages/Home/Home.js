import React from 'react';
import BusinessSummary from './BusinessSummary';
import Banner from './Shared/Banner';
import Tools from './Tools';

const Home = () => {
    return (
        <div className='px-12'>

            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;