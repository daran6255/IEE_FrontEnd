import React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import DashBoardNavbar from '../../layouts/dbnavbar';
import AdminNavbar from '../../layouts/adminnav';
import FooterComponent from '../../layouts/footer';
import CustomerDashboard from './customer-dashboard';
import AdminDashboard from './admin-dashboard';

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
        <AdminNavbar />
        <AdminDashboard />
        <FooterComponent />
      </React.Fragment>

    ) : (
      <React.Fragment>
        <DashBoardNavbar />
        <CustomerDashboard />
        <FooterComponent />
      </React.Fragment>
    )
  );
};

export default DashboardPage;
