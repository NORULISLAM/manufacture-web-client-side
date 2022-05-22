import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import bgimg from '../../tools-img/footer.png'
import { faEarthAfrica, faFeed, faHandPaper, faProjectDiagram, } from '@fortawesome/free-solid-svg-icons';

const BusinessSummary = () => {
    return (
        <div className='mt-20'>

            <div className="max-w-md text-center mx-auto lg:mb-[-50px]">
                <h1 className="text-2xl font-bold uppercase text-accent">Auto Parts Supply For Your Business</h1>
                <p className=" text-xl text-center">USERS EXPECTATION</p>

                <div className="mx-auto text-center w-full divider">
                    <p className="tab tab-bordered w-50"></p>
                    <p className="tab tab-bordered tab-active"></p>
                    <p className="tab tab-bordered"></p>
                </div>
            </div>
            <div className="hero min-h-screen lg:mt-[-150px]" style={{ background: `url(${bgimg})`, backgroundSize: 'cover' }}>


                <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-20 text-4xl'>

                    <div className='text-center'>
                        <FontAwesomeIcon className='text-accent' icon={faEarthAfrica} size="lg"></FontAwesomeIcon>
                        <h4 className='text-2xl font-bold'>32</h4>
                        <p className='text-accent'>Countries</p>
                    </div>
                    <div className='text-center'>
                        <FontAwesomeIcon className='text-accent' icon={faProjectDiagram} size="lg"></FontAwesomeIcon>
                        <h4 className='text-2xl font-bold'>300+</h4>
                        <p className='text-accent'>CompleteProjects</p>
                    </div>
                    <div className='text-center'>
                        <FontAwesomeIcon className='text-accent' icon={faHandPaper} size="lg"></FontAwesomeIcon>
                        <h4 className='text-2xl font-bold'>700+</h4>
                        <p className='text-accent'>HappyClients</p>
                    </div>
                    <div className='text-center'>
                        <FontAwesomeIcon className='text-accent' icon={faFeed} size="lg"></FontAwesomeIcon>

                        <h4 className='text-2xl font-bold'>200+</h4>
                        <p className='text-accent'>FeedBacks</p>
                    </div>

                </div>

            </div>
            <div tabIndex="0" className="collapse collapse-open border border-base-300 bg-base-100 rounded-box flex flex-row mb-20 p-5 mx-auto mt-[-150px]">
                <div className="collapse-title">
                    <p className='text-2xl font-bold uppercase text-accent'>GROW YOUR BUSINESS WITH SHOTEZ CAR SOLUTION?</p>

                    <p className='text-xl'>Feel free Contact Us</p>
                </div>
                <div className="collapse-content">
                    <button className="rounded-none py-2 px-4 bg-blue-500 text-white font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Request Your Parts</button>
                    <button className="btn btn-active m-10">Contact Us</button>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;