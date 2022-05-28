import React from 'react';
import { toast } from 'react-toastify';


const ManageOrderRaw = ({ user, refetch }) => {

    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://glacial-eyrie-28106.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .then(res => {
                if (res?.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res?.json()
            })
            .then(data => {
                if (data?.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }
    const handleDelete = email => {
        fetch(`https://glacial-eyrie-28106.herokuapp.com/users/${email}`, {
            method: 'DELETE',
            headers: {
                // authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`User:  is deleted.`)

                    refetch();
                }
            })
    }
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</td>
            <td><button onClick={() => handleDelete(email)} for="delete-confirm-modal" className="btn btn-xs btn-error">Delete User</button></td>

        </tr>

    );
};

export default ManageOrderRaw;