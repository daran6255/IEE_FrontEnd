import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import DashBoardNavbar from '../../layouts/dbnavbar';
import AdminNavbar from '../../layouts/adminnav';
import FooterComponent from '../../layouts/footer';

import CustomerDashboard from '../dashboard/customer';
import AdminDashboard from './admin';
import { getCustomerData } from '../../stores/thunk';

const DashboardPage = () => {
  const dispatch = useDispatch();

  const authData = createSelector(
    (state) => state.Auth,
    (state) => ({
      user: state.user
    })
  );
  const customerData = createSelector(
    (state) => state.Customer,
    (state) => ({
      userData: state.userData
    })
  );

  const { user } = useSelector(authData);
  const { userData } = useSelector(customerData);

  useEffect(() => {
    if (user.role && user.role === 'customer') {
      dispatch(getCustomerData());
    }
  }, [dispatch, user.role]);


  return (
    user.role && user.role === 'admin' ? (
      <React.Fragment>
        <AdminNavbar userName={user.name} />
        <AdminDashboard />
        <FooterComponent />
      </React.Fragment>

    ) : (
      <React.Fragment>
        <DashBoardNavbar userName={user.name} credits={userData.availableCredits} />
        <CustomerDashboard />
        <FooterComponent />
      </React.Fragment>
    )
  );
};

export default DashboardPage;
