import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Name:{user.displayName}</h2>
                <p>Email address:{user.email}</p>
            </div>
        </div>
    );
};

export default MyProfile;