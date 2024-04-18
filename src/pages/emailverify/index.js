import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { createSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faSpinner } from '@fortawesome/free-solid-svg-icons';

import { verifyUser } from '../../stores/thunk';

const VerificationPage = () => {
    let { token } = useParams();
    const dispatch = useDispatch();
    const userSelector = createSelector(
        (state) => state.Auth,
        (state) => ({
            verified: state.verified,
        })
    );
    const { verified } = useSelector(userSelector);

    useEffect(() => {
        if (token) {
            dispatch(verifyUser(token));
        }
    }, [dispatch, token]);

    return verified ? (
        <div className="verification-page-container">
            <div className="tick-mark">
                <FontAwesomeIcon icon={faCheckCircle} className="tick-icon" />
            </div>
            <p className="verification-message">Your email has been verified. Please click <Link to="/login" className="login-link">here</Link> to login.</p>
        </div>
    ) : (
        <div className="verification-page-container">
            <div className="tick-mark">
                <FontAwesomeIcon icon={faSpinner} className="tick-icon" spin />
            </div>
            <p className="verification-message">Your email verification is in progress...</p>
        </div>
    )
};

export default VerificationPage;
