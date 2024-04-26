import React, { useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { FiKey, FiEye, FiEyeOff } from 'react-icons/fi';
import { MdOutlinePhone, MdOutlineMailOutline } from "react-icons/md";
import { GrOrganization } from "react-icons/gr";
import Avatar from 'react-avatar';

import './ProfileCard.css'; // Import custom styles for ProfileCard

const ProfileCard = ({ name, company, email, phone, onPasswordChange }) => {
    const [isOldPasswordVisible, setIsOldPasswordVisible] = useState(false);
    const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const toggleOldPasswordVisibility = () => {
        setIsOldPasswordVisible(!isOldPasswordVisible);
    };
    const toggleNewPasswordVisibility = () => {
        setIsNewPasswordVisible(!isNewPasswordVisible);
    };

    return (
        <Card className="profile-card shadow" style={{ width: '90%' }}>
            <div className="d-flex flex-column flex-md-row align-items-center">
                <div className="p-3 text-center">
                    <Avatar name={name} round size="64" />
                    <Card.Title className="mb-2 user-name">{name}</Card.Title>
                </div>
                <div className="flex-grow-1 p-3">
                    <Card.Body className="text-center">

                        <div className="profile-info">
                            <div className="info-item">
                                <GrOrganization className="info-icon" />
                                <span style={{ marginRight: '10px' }} className="info-label">Company: </span>
                                <span>{company}</span>
                            </div>
                            <div className="info-item">
                                <MdOutlineMailOutline className="info-icon" />
                                <span style={{ marginRight: '10px' }} className="info-label">Email:</span>
                                <span>{email}</span>
                            </div>
                            <div className="info-item">
                                <MdOutlinePhone className="info-icon" />
                                <span style={{ marginRight: '10px' }} className="info-label">Phone:</span>
                                <span>{phone}</span>
                            </div>
                            <div className="info-item">
                                <FiKey className="info-icon" />
                                <span className="info-label">Change Password:</span>
                            </div>
                            <Container className='passContainer'>
                                <div className="info-item">
                                    <span className="info-label" style={{ marginRight: '10px' }} >Old Password:</span>
                                    <Form.Control
                                        style={{ marginRight: '10px' }}
                                        type={isOldPasswordVisible ? "text" : "password"}
                                        value={oldPassword}
                                        onChange={(e) => setOldPassword(e.target.value)}
                                    />
                                    <span className="view-password-icon" onClick={toggleOldPasswordVisibility} style={{ marginLeft: '5px' }}>
                                        {isOldPasswordVisible ? <FiEyeOff /> : <FiEye />}
                                    </span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label" style={{ marginRight: '10px' }} >New Password:</span>
                                    <Form.Control
                                        style={{ marginRight: '10px' }}
                                        type={isNewPasswordVisible ? "text" : "password"}
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                    />
                                    <span className="view-password-icon" onClick={toggleNewPasswordVisibility} style={{ marginLeft: '5px' }}>
                                        {isNewPasswordVisible ? <FiEyeOff /> : <FiEye />}
                                    </span>
                                </div>
                                <Button className="pass-update" onClick={() => onPasswordChange(oldPassword, newPassword)}>Update</Button>
                            </Container>
                        </div>
                    </Card.Body>
                </div>
            </div>
        </Card>
    );
};

export default ProfileCard;
