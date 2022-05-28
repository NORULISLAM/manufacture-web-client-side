import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Toolses = ({ toolses }) => {
    const { _id } = toolses;


    const navigate = useNavigate();
    const navigateToAddItem = id => {
        navigate(`/Purchase/${id}`);
    }
    return (
        <div className="card lg:max-w-lg w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={toolses.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{toolses.name}</h2>
                <p>Minimum Order Quantity:{toolses.manimum}pcs</p>
                <p>Available Quantity:{toolses.qantity}pcs</p>
                <p>Per Unit Price:${toolses.price}</p>
                <p>Descrition:{toolses.descrition}</p>
                <button onClick={() => navigateToAddItem(_id)} className="btn btn-accent">Purchase</button>
            </div>
        </div>
    );
};

export default Toolses;