import React, { useState } from 'react';
import Loading from '../../Loading/Loading';
import { useQuery } from 'react-query';
const ManageProduct = () => {

    const [deletingProduct, setDeletingProduct] = useState(null);

    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('http://localhost:5000/product', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h1 className='text-4xl text-center m-10'>Manage Product: {products.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>....</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProduct;