import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const VerificationPage = () => {
    return (
        <div className="verification-page-container">
            <div className="tick-mark">
                <FontAwesomeIcon icon={faCheckCircle} className="tick-icon" />
            </div>
            <p className="verification-message">Your email has been verified. Please click <Link to="/login" className="login-link">here</Link> to login.</p>
        </div>
    );
};

export default VerificationPage;
