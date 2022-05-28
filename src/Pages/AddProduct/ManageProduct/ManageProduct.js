import React, { useState } from 'react';
import Loading from '../../Loading/Loading';
import { useQuery } from 'react-query';
import ManageProductRow from './ManageProductRow';
import DeleteConfirmModal from './DeleteConfirmModal';



const ManageProduct = () => {

    const [deletingProduct, setDeletingProduct] = useState(null);

    const { data, isLoading, refetch } = useQuery('products', () => fetch('https://glacial-eyrie-28106.herokuapp.com/product', {
        headers: {
            // authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h1 className='text-4xl text-center m-10'>Manage Product: {data?.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
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

                        {
                            data?.map((product, index) => <ManageProductRow
                                key={product._key}
                                product={product}
                                index={index}
                                refetch={refetch}
                                setDeletingProduct={setDeletingProduct}
                            ></ManageProductRow>)

                        }

                    </tbody>
                </table>
            </div>
            {deletingProduct && <DeleteConfirmModal
                deletingProduct={deletingProduct}
                refetch={refetch}
                setDeletingProduct={setDeletingProduct}
            ></DeleteConfirmModal>}
        </div>

    );
};

export default ManageProduct;