import React from 'react';
import { toast } from 'react-toastify';

const ManageProductRow = ({ product, index, refetch, setDeletingProduct }) => {
    const { name, price, img, email } = product;


    const handleDelete = email => {
        fetch(`http://localhost:5000/product/${email}`, {
            method: 'DELETE',
            headers: {
                // authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Product: ${name} is deleted.`)
                    setDeletingProduct(null);
                    refetch();
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-8 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{price}</td>
            <td>

                <label onClick={() => setDeletingProduct(product)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default ManageProductRow;