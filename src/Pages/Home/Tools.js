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
            descrition: '',
            img: Headlight
        },
        {
            _id: 2,
            name: 'Engine Parts',
            descrition: '',
            img: Cylinder
        },
        {
            _id: 3,
            name: 'Starter Motor',
            descrition: '',
            img: Starter
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