import React, { useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import { FiUser, FiKey, FiEye, FiEyeOff, FiEdit } from 'react-icons/fi';
import Avatar from 'react-avatar';
import './ProfileCard.css'; // Import custom styles for ProfileCard

const ProfileCard = ({ name = 'dharani', company = 'Winvinaya', email, phone, password }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [editedPassword, setEditedPassword] = useState(password);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const toggleEditMode = () => {
        setIsEditMode(!isEditMode);
    };

    const handleSavePassword = () => {
        // Here you can implement the logic to save the edited password
        console.log("Edited password:", editedPassword);
        // After saving, exit edit mode
        toggleEditMode();
    };

    return (
        <Card className="profile-card shadow" style={{ width: '90%' }}>
            <div className="d-flex flex-column flex-md-row">
                <div className="p-3">
                    <Avatar name={name} round size="64" />
                </div>
                <div className="flex-grow-1 p-3">
                    <Card.Body className="text-center">
                        <Card.Title className="mb-4">{name}</Card.Title>
                        <div className="profile-info">
                            <div className="info-item">
                                <FiUser className="info-icon" />
                                <span style={{ marginRight: '10px' }} className="info-label">Company: </span>
                                <span>{company}</span>
                            </div>
                            <div className="info-item">
                                <FiUser className="info-icon" />
                                <span style={{ marginRight: '10px' }} className="info-label">Email:</span>
                                <span>{email}</span>
                            </div>
                            <div className="info-item">
                                <FiUser className="info-icon" />
                                <span style={{ marginRight: '10px' }} className="info-label">Phone:</span>
                                <span>{phone}</span>
                            </div>
                            <div className="info-item">
                                <FiKey className="info-icon" />
                                <span style={{ marginRight: '10px' }} className="info-label">Password:</span>
                                {isEditMode ? (
                                    <>
                                        <Form.Control
                                            type={isPasswordVisible ? "text" : "password"}
                                            value={editedPassword}
                                            onChange={(e) => setEditedPassword(e.target.value)}
                                            className="border-0" // Remove the border
                                        />
                                        <FiEdit className="edit-icon" size={24} onClick={handleSavePassword} />
                                    </>
                                ) : (
                                    <>
                                        <Form.Control
                                            type={isPasswordVisible ? "text" : "password"}
                                            value={password}
                                            readOnly
                                            className="border-0" // Remove the border
                                        />
                                        <FiEdit className="edit-icon" onClick={toggleEditMode} />
                                    </>
                                )}
                                <span className="view-password-icon" onClick={togglePasswordVisibility} style={{ marginLeft: '5px' }}>
                                    {isPasswordVisible ? <FiEyeOff /> : <FiEye />}
                                </span>
                            </div>
                        </div>
                    </Card.Body>
                </div>
            </div>
        </Card>
    );
};

export default ProfileCard;
