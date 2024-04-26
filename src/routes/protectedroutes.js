import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setAuthorization } from '../helpers/httputility';
import { useProfile } from '../helpers/hooks/userhooks';
import { updateUser, logoutUser } from '../stores/thunk';
import { Spinner } from 'react-bootstrap';

const AuthProtected = ({ children, roles }) => {
    const dispatch = useDispatch();
    const { userProfile, loading, token } = useProfile();

    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        if (userProfile && !loading && token) {
            setAuthorization(token);
            dispatch(updateUser(userProfile));
            setIsAuthorized(true);
        } else if (!userProfile && loading) {
            dispatch(logoutUser());
        }
    }, [token, userProfile, loading, dispatch]);

    /*
    Navigate is un-auth access protected routes via url
    */

    if (!userProfile && loading) {
        return (
            <React.Fragment>
                <Navigate to={{ pathname: '/home' }} />
            </React.Fragment>
        );
    }

    if (roles && !roles.includes(userProfile.role)) {
        return <Navigate to={{ pathname: '/page-not-found' }} />;
    }

    if (!isAuthorized) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>
        );
    }

    return <>{children}</>;
};

export default AuthProtected;