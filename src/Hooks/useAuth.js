import React, { useContext } from 'react';
import { AuthContex } from '../Components/Context/AuthProvider';

const useAuth = () => {
    return useContext(AuthContex);
};

export default useAuth;