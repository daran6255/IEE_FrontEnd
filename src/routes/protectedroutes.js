import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const AuthProtected = (props) => {
    const { userProfile, loading } = { userProfile: null, loading: true };

    // useEffect(() => {
    //     if (userProfile && !loading) {

    //     } else if (!userProfile && loading) {
    //         logoutUser();
    //     }
    // }, [token, userProfile, loading]);

    /*
    Navigate is un-auth access protected routes via url
    */

    if (!userProfile && loading) {
        return (
            <React.Fragment>
                <Navigate to={{ pathname: '/login' }} />
            </React.Fragment>
        );
    }

    return <>{props.children}</>;
};

export default AuthProtected;