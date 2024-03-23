import { useEffect, useState } from 'react';
import { getLoggedinUser } from '../httputility';

const useProfile = () => {
    const userProfileSession = getLoggedinUser();
    const token = userProfileSession && userProfileSession['accessToken'];
    const [loading, setLoading] = useState(userProfileSession ? false : true);
    const [userProfile, setUserProfile] = useState(
        userProfileSession ? userProfileSession : null
    );

    useEffect(() => {
        const userSession = getLoggedinUser();
        const userToken = userSession && userSession['accessToken'];
        setUserProfile(userSession ? userSession : null);
        setLoading(userToken ? false : true);
    }, []);

    return { userProfile, loading, token };
};

export { useProfile };
