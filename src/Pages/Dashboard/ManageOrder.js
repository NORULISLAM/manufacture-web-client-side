import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import ManageOrderRaw from './ManageOrderRaw';


const ManageOrder = () => {
    const { data, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        // method: 'GET',
        // headers: {
        //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
        // }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div>
                <h2 className="text-2xl">All Users: {data.length}</h2>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>ID</th>
                                <th>Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(user => <ManageOrderRaw
                                    key={user._id}
                                    user={user}
                                ></ManageOrderRaw>)
                            }
                            {/* {
                                data.map(user =>

                                    <tr
                                        key={user._id}
                                    >
                                        <th>1</th>
                                        <td>{user.email}</td>
                                        <td><button className="btn btn-xs">Make Admin</button></td>
                                        <td><button className="btn btn-xs">Delete User</button></td>
                                    </tr>)
                            } */}


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageOrder;