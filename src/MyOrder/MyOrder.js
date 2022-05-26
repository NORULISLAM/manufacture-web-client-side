import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const MyOrder = () => {
    const [order, setOrder] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/service?availableQuantity=${user.availableQuantity}`)
                .then(res => res.json())
                .then(data => setOrder(data));
        }
    }, [user])
    return (
        <div>
            <h2>My Order:  {order.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>minimum Qantity:</th>
                            <th>availableQuantity:</th>
                            <th>per Unit price:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            order.map((o, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{o.name}</td>
                                <td>{o.minimumOrderQantity}</td>
                                <td>{o.availableQuantity}</td>
                                <td>{o.perUnitPrice}</td>
                            </tr>)

                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;