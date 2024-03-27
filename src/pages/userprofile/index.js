import React, { useState } from 'react'; // Import React and useState
import DashBoardNavbar from '../../layouts/dbnavbar';
import FooterComponent from '../../layouts/footer';
import ProfileCard from '../../layouts/profilecard';
import CreditsCardCard from '../../layouts/creditscard';

const DashboardPage = () => {
    return (
        <>
            <DashBoardNavbar />
            <ProfileCard />
            <CreditsCardCard />
            <FooterComponent />
        </>
    );
};

export default DashboardPage;
