import React, { useState } from 'react'; // Import React and useState
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import DashBoardNavbar from '../../layouts/dbnavbar';
import FooterComponent from '../../layouts/footer';
import OutputPreview from './outputpreview';

const DashboardPage = () => {
  const authData = createSelector(
    (state) => state.Auth,
    (state) => ({
      user: state.user
    })
  );

  const { user } = useSelector(authData);

  return (
    <>
      <DashBoardNavbar />
      <OutputPreview />
      <FooterComponent />
    </>
  );
};

export default DashboardPage;
