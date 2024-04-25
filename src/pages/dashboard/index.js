import React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import DashBoardNavbar from '../../layouts/dbnavbar';
import AdminNavbar from '../../layouts/adminnav';
import FooterComponent from '../../layouts/footer';

import CustomerDashboard from './customer';
import AdminDashboard from './admin';

const DashboardPage = () => {
  const authData = createSelector(
    (state) => state.Auth,
    (state) => ({
      user: state.user
    })
  );

  const { user } = useSelector(authData);

  return (
    user.role && user.role === 'admin' ? (
      <React.Fragment>
        <AdminNavbar userName={user.name} />
        <AdminDashboard />
        <FooterComponent />
      </React.Fragment>

    ) : (
      <React.Fragment>
        <DashBoardNavbar userName={user.name} credits={user.creditsavailable} />
        <CustomerDashboard />
        <FooterComponent />
      </React.Fragment>
    )
  );
};

export default DashboardPage;
