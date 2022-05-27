import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from './useAdmin';
import { signOut } from 'firebase/auth';
import Loading from '../Pages/Loading/Loading';
import auth from '../firebase.init';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const location = useLocation();
    if (loading || adminLoading) {
        return <Loading></Loading>
    }
    if (!user || !admin) {
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAdmin;