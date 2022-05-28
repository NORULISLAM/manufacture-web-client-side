import React, { useEffect, useState } from 'react';
import coverImg from '../../tools-img/bg.png'
import people1 from '../../tools-img/people1.png'
import people2 from '../../tools-img/people2.png'
import people3 from '../../tools-img/people3.png'
import Reviews from './Reviews';
const Review = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://glacial-eyrie-28106.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])
    return (
        <div className='mb-60'>
            <section className="min-h-screen h-50" style={{ background: `url(${coverImg})`, backgroundSize: 'cover' }}>
                <div className='text-4xl uppercase text-white p-20'>
                    WHAT OUR COSTOMER SAY?
                </div>

            </section>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:mt-[-150px] mt-[-300px]'>
                {
                    product.map(review => <Reviews
                        key={review._id}
                        review={review}
                    ></Reviews>)
                }
            </div>
        </div>
    );
};

export default Review;