import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const MyOrder = () => {
    const [order, setOrder] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/service?availableQuantity=${user.availableQuantity}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => setOrder(data));
        }
    }, [user])
    return (
        <div>
            <h2>My Order:  {order.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>minimum Qantity:</th>
                            <th>availableQuantity:</th>
                            <th>per Unit price:</th>
                            <th>..</th>
                            <th>..</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            order.map((o, index) => <tr
                                key={o._id}
                            >
                                <th>{index + 1}</th>
                                <td>{o.name}</td>
                                <td>{o.minimumOrderQantity}</td>
                                <td>{o.availableQuantity}</td>
                                <td>{o.perUnitPrice}</td>
                                <td>{(o.perUnitPrice && !o.paid) && <Link to={`/dashboard/payment/${o._id}`}><button className='btn btn-xs btn-info'>Pay</button></Link>}</td>
                                <td>{(o.perUnitPrice && !o.paid) && <Link to={``}><button className='btn btn-xs btn-success'>Paid</button></Link>}</td>

                            </tr>)

                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;