import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { verifyToken } from '../helpers/backend_helper';
import { updateUser, logoutUser } from '../stores/thunk';
import CenteredSpinner from '../components/common/centeredSpinner';

const AuthProtected = ({ children, roles }) => {
    const dispatch = useDispatch();
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [loading, setLoading] = useState(true);
    const [userProfile, setUserProfile] = useState(null);

    useEffect(() => {
        const verifyUser = async () => {
            try {
                const response = await verifyToken();
                const user = response.result;
                setUserProfile(user);
                dispatch(updateUser(user));
                setIsAuthorized(true);
            } catch (error) {
                dispatch(logoutUser());
            } finally {
                setLoading(false);
            }
        };

        verifyUser();
    }, [dispatch]);

    /*
    Navigate is un-auth access protected routes via url
    */

    if (loading) {
        return <CenteredSpinner />;
    }

    if (roles && !roles.includes(userProfile.role)) {
        return <Navigate to="/page-not-found" />;
    }

    if (!isAuthorized) {
        return <Navigate to="/home" />;
    }

    return <>{children}</>;
};

export default AuthProtected;