import React from "react";
import { Navigate } from "react-router-dom";

import HomePage from '../pages/home';
import DashboardPage from '../pages/dashboard';
import Login from "../pages/login";
import Signup from "../pages/signup";
import Logout from "../pages/logout";
import BuyCredits from "../pages/buycredits";
import UserProfile from "../pages/myprofile";
import AdminProfile from "../pages/adminprofile";
import VerifyEmail from "../pages/emailverify";

const authProtectedRoutes = [
    { path: '/dashboard', component: <DashboardPage /> },
    { path: '/my-profile', component: <UserProfile /> },
    { path: '/admin-profile', component: <AdminProfile /> },
    { path: '/buy-credits', component: <BuyCredits /> },

    // this route must be at the end
    { path: '/', exact: true, component: <Navigate to='/dashboard' /> },
    { path: '*', component: <Navigate to='/dashboard' /> }
]

const publicRoutes = [
    { path: '/home', component: <HomePage /> },
    { path: '/login', component: <Login /> },
    { path: '/signup', component: <Signup /> },
    { path: '/logout', component: <Logout /> },
    { path: '/verify-email/:token', component: <VerifyEmail /> },
]

export { authProtectedRoutes, publicRoutes };