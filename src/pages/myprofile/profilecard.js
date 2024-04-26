import React, { useState } from 'react';
import { Button, Card, Container, Form, Modal } from 'react-bootstrap';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { MdOutlinePhone, MdOutlineMailOutline } from "react-icons/md";
import { GrOrganization } from "react-icons/gr";
import Avatar from 'react-avatar';

const ProfileCard = ({ profile, onPasswordChange }) => {
    const [isOldPasswordVisible, setIsOldPasswordVisible] = useState(false);
    const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const toggleOldPasswordVisibility = () => setIsOldPasswordVisible(!isOldPasswordVisible);
    const toggleNewPasswordVisibility = () => setIsNewPasswordVisible(!isNewPasswordVisible);
    const toggleModal = () => setShowModal(!showModal);

    return (
        <Card className="profile-card shadow" style={{ width: '90%' }}>
            <Card.Body>
                <div className='greetings'>
                    <h3>Welcome Back !</h3>
                </div>
                <Container className="d-flex align-items-center">
                    <Avatar name={profile.name} round size="50" className="mr-2" />
                    <h3 className="profile-username">{profile.name}</h3>
                </Container>
                <Container className="mt-4">
                    <div className="profile-info">
                        <div className="info-item">
                            <GrOrganization className="info-icon" />
                            {profile.company}
                        </div>
                        <div className="info-item">
                            <MdOutlineMailOutline className="info-icon" />
                            {profile.email}
                        </div>
                        <div className="info-item">
                            <MdOutlinePhone className="info-icon" />
                            {profile.phone}
                        </div>
                        <Button className='change-btn' variant="primary" onClick={toggleModal}>Change Password</Button>
                    </div>
                </Container>
            </Card.Body>

            {/* Change Password Modal */}
            <Modal show={showModal} onHide={toggleModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Change Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={toggleModal}>Close</Button>
                    <Button variant="success" onClick={() => {
                        onPasswordChange(oldPassword, newPassword);
                        toggleModal();
                    }}>Change Password</Button>
                </Modal.Footer>
            </Modal>
        </Card>
    );
};

export default ProfileCard;
