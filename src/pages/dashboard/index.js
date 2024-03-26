import React, { useState } from 'react'; // Import React and useState
import DashBoardNavbar from '../../layouts/dbnavbar';
import FooterComponent from '../../layouts/footer';
import OutputPreview from './outputpreview';

const DashboardPage = () => {
  return (
    <>
      <DashBoardNavbar />
      <OutputPreview />
      <FooterComponent />
    </>
  );
};

export default DashboardPage;
