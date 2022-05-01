import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';

const RequireAuth = ({ children }) => {

    const [user, loading] = useAuthState(auth);

    const location = useLocation()

    if (loading) {
        // console.log("Loading")
        return <LoadingSpinner />
    }

    if (!user) {


        return <Navigate to="/login" state={{ from: location }} replace />;



    }
    else {
        return children;

    }


};

export default RequireAuth;