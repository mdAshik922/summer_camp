import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const AdminRoute  = ({children, ...rest}) => {
    let location = useLocation();
    const { user, admin,  isLoading } = useAuth();
    if (isLoading) { return <Spinner /> };
    if((user.email || user.displayName) && admin){
        return children;
    };

    return <Navigate to="/" state={{from: location}} />
};

export default AdminRoute;