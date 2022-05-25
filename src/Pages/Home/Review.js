import React from 'react';
import coverImg from '../../tools-img/bg.png'
import people1 from '../../tools-img/people1.png'
import people2 from '../../tools-img/people2.png'
import people3 from '../../tools-img/people3.png'
import Reviews from './Reviews';
const Review = () => {
    const reviews = [
        {

            name: 'jonny abdin',
            review: 'We service, manufacture, and source aftermarket auto parts and vehicle accessory solutions of different autos in bulk.',
            img: people1,
            location: 'tokyo',
        },
        {

            name: 'kuddus mia',
            review: 'We supply an extensive selection of precise OEM automotive parts. Contact us if you cant find the brand on our list.',
            img: people2,
            location: 'tokyo',
        },
        {

            name: 'bodur ali',
            review: 'We are a classic car parts supplier of a diverse range of vintage autos dating as far back as 1920.',
            img: people3,
            location: 'tokyo',
        },
        {

            name: 'bodur ali',
            review: 'We can find you rare auto parts that are no longer in production through our long-standing partnerships with automotive parts suppliers.',
            img: people3,
            location: 'tokyo',
        },
    ]
    return (
        <div className='mb-60'>
            <section className="min-h-screen h-50" style={{ background: `url(${coverImg})`, backgroundSize: 'cover' }}>
                <div className='text-4xl uppercase text-white p-20'>
                    WHAT OUR COSTOMER SAY?
                </div>

            </section>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:mt-[-150px] mt-[-300px]'>
                {
                    reviews.map(review => <Reviews
                        key={review._id}
                        review={review}
                    ></Reviews>)
                }
            </div>
        </div>
    );
};

export default Review;