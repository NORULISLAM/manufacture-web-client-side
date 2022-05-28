import React, { useEffect, useState } from 'react';
const BackProfile = () => {
    const [toolses, setToolses] = useState([]);
    useEffect(() => {
        fetch('https://glacial-eyrie-28106.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setToolses(data));
    }, [])
    console.log(toolses);
    return (

        <div>
            <h1 className='text-2xl'>Our Company Magazne</h1>
            <h1 className='text-2xl'>More know details About Our company</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10'>
                <div className="card lg:max-w-lg w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={toolses?.img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{toolses.name}</h2>
                        <p>Minimum Order Quantity:{toolses.manimum}pcs</p>
                        <p>Available Quantity:{toolses.qantity}pcs</p>
                        <p>Per Unit Price:${toolses.price}</p>
                        <p>Descrition:{toolses.descrition}</p>
                        <button className="btn btn-accent">More Details</button>
                    </div>
                </div>
                <div className="card lg:max-w-lg w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={toolses?.img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{toolses.name}</h2>
                        <p>Minimum Order Quantity:{toolses.manimum}pcs</p>
                        <p>Available Quantity:{toolses.qantity}pcs</p>
                        <p>Per Unit Price:${toolses.price}</p>
                        <p>Descrition:{toolses.descrition}</p>
                        <button className="btn btn-accent">More Details</button>
                    </div>
                </div>
                <div className="card lg:max-w-lg w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={toolses?.img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{toolses.name}</h2>
                        <p>Minimum Order Quantity:{toolses.manimum}pcs</p>
                        <p>Available Quantity:{toolses.qantity}pcs</p>
                        <p>Per Unit Price:${toolses.price}</p>
                        <p>Descrition:{toolses.descrition}</p>
                        <button className="btn btn-accent">More Details</button>
                    </div>
                </div>
            </div>

        </div>

        ///

    );
};

export default BackProfile;