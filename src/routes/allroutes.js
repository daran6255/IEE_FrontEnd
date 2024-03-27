import React from "react";
import { Navigate } from "react-router-dom";

import HomePage from '../pages/home';
import DashboardPage from '../pages/dashboard';
import Login from "../pages/login";
import Signup from "../pages/signup";
import UserProfile from "../pages/userprofile";

const authProtectedRoutes = [
    { path: '/dashboard', component: <DashboardPage /> },

    // this route must be at the end
    { path: '/', exact: true, component: <Navigate to='/dashboard' /> },
    { path: '*', component: <Navigate to='/dashboard' /> }
]

const publicRoutes = [
    { path: '/login', component: <Login /> },
    { path: '/home', component: <HomePage /> },
    { path: '/signup', component: <Signup /> },
    { path: '/dashboard', component: <DashboardPage /> },
    { path: '/userprofile', component: <UserProfile /> },

]

export { authProtectedRoutes, publicRoutes };