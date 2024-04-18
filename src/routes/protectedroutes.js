import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setAuthorization } from '../helpers/httputility';
import { useProfile } from '../helpers/hooks/userhooks';
import { updateUser, logoutUser } from '../stores/thunk';

const AuthProtected = ({ children, roles }) => {
    const dispatch = useDispatch();
    const { userProfile, loading, token } = useProfile();

    useEffect(() => {
        if (userProfile) {
            dispatch(updateUser(userProfile));
        }

        if (userProfile && !loading && token) {
            setAuthorization(token);
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

    return <>{children}</>;
};

export default AuthProtected;