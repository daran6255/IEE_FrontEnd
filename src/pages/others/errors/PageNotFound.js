import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

const PageNotFound = () => {
    return (
        < div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }
        }>
            <FaExclamationTriangle size={50} />
            <h1>404: Page Not Found</h1>
        </div >
    );
};

export default PageNotFound;