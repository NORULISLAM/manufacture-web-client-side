import React from 'react';
import Toolses from './Toolses';
import Headlight from '../../tools-img/Headlight-for-Lexus-RX350-SCH31.png'
import Cylinder from '../../tools-img/Cylinder-Piston-Kit-for-Honda-ATC70-CRF70-CT70-C70-SMCK08.png'
import Starter from '../../tools-img/Starter-motor.png'





const Tools = () => {
    const toolses = [
        {
            _id: 1,
            name: 'Car Light',
            descrition: 'Sunway Autoparts is an industry-leading aftermarket automotive lights manufacturer and distributor ',
            img: Headlight,
            minimumOrderQuantity: 500,
            availableQuantity: 2000,
            perUnitPrice: 12000,
        },
        {
            _id: 2,
            name: 'Engine Parts',
            descrition: 'Are you looking for quality, durable, high-performing auto engine parts?',
            img: Cylinder,
            minimumOrderQuantity: 700,
            availableQuantity: 6000,
            perUnitPrice: 11000,
        },
        {
            _id: 3,
            name: 'Starter Motor',
            descrition: 'high-performing auto engine parts? Then Sunway Autoparts is the right partner for you. ',
            img: Starter,
            minimumOrderQuantity: 500,
            availableQuantity: 3000,
            perUnitPrice: 9000,
        },
    ];
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold uppercase'>Parts B2B Supplier
                </h3>
                <h1 className='text-4xl'>Auto Parts</h1>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10'>
                {
                    toolses.map(toolses => <Toolses
                        key={toolses._id}
                        toolses={toolses}
                    ></Toolses>)
                }
            </div>

        </div>
    );
};

export default Tools;