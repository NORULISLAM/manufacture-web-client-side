import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    // useEffect(() => {
    //     const url = `https://mighty-plateau-24695.herokuapp.com/service/${serviceId}`;
    //     console.log(url)
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setService(data));
    // }, [])
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl m-16">
            {/* <figure><img src={} alt="Album" /></figure> */}
            <div className="card-body m-10">
                <h2 className="card-title">Name: Norul Islam Jewel</h2>


            </div>
        </div>
    );
};

export default Purchase;