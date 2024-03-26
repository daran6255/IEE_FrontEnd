import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setAuthorization } from '../helpers/httputility';
import { useProfile } from '../helpers/hooks/userhooks';

const AuthProtected = (props) => {
    const dispatch = useDispatch();
    const { userProfile, loading, token } = useProfile();

    useEffect(() => {
        if (userProfile && !loading && token) {
            setAuthorization(token);
        } else if (!userProfile && loading) {
            // dispatch(logoutUser());
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

    return <>{props.children}</>;
};

export default AuthProtected;