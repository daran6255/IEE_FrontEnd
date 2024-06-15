import React from 'react';
import { Spinner } from 'react-bootstrap';

function CenteredSpinner() {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}><Spinner animation="border" /> </div>
    );
}

export default CenteredSpinner;
