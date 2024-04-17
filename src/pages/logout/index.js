import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { createSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { logoutUser } from '../../stores/thunk';
import withRouter from '../../components/common/withRouter';

const Logout = () => {
    const dispatch = useDispatch();

    const userSelector = createSelector(
        (state) => state.Auth,
        (state) => ({
            user: state.user,
        })
    );
    const { user } = useSelector(userSelector);

    useEffect(() => {
        dispatch(logoutUser());
    }, [dispatch]);

    if (!user || Object.keys(user).length === 0) {
        return <Navigate to="/login" />;
    }

    return <></>;
};

Logout.propTypes = {
    history: PropTypes.object,
};

export default withRouter(Logout);
