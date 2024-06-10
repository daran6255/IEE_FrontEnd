import React from "react";
import { Navigate } from "react-router-dom";

import HomePage from '../pages/home';
import DashboardPage from '../pages/dashboard';
import Login from "../pages/login";
import Signup from "../pages/signup";
import Logout from "../pages/logout";
import BuyCredits from "../pages/buycredits";
import UserProfile from "../pages/myprofile";
import VerifyEmail from "../pages/emailverify";
import Results from "../pages/comparision";
import PageNotFound from '../pages/others/errors/PageNotFound';

const authProtectedRoutes = [
    { path: '/dashboard', component: <DashboardPage />, roles: ['admin', 'customer'] },
    { path: '/my-profile', component: <UserProfile />, roles: ['customer'] },


    // this route must be at the end
    { path: '/', exact: true, component: <Navigate to='/dashboard' />, roles: ['admin', 'customer'] },
    { path: '*', component: <Navigate to='/dashboard' />, roles: ['admin', 'customer'] }
]

const publicRoutes = [
    { path: '/home', component: <HomePage /> },
    { path: '/login', component: <Login /> },
    { path: '/signup', component: <Signup /> },
    { path: '/logout', component: <Logout /> },
    { path: '/verify-email/:token', component: <VerifyEmail /> },
    { path: '/buy-credits', component: <BuyCredits />, roles: ['customer'] },
    // Other routes
    { path: '/page-not-found', component: <PageNotFound /> },
    { path: '/results', component: <Results /> },
    { path: '/dashboard', component: <DashboardPage />, roles: ['admin', 'customer'] },
]

export { authProtectedRoutes, publicRoutes };