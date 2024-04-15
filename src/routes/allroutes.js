import React from "react";
import { Navigate } from "react-router-dom";

import HomePage from '../pages/home';
import DashboardPage from '../pages/dashboard';
import Login from "../pages/login";
import Signup from "../pages/signup";
import UserProfile from "../pages/myprofile";

const authProtectedRoutes = [
    { path: '/dashboard', component: <DashboardPage /> },

    // this route must be at the end
    { path: '/', exact: true, component: <Navigate to='/dashboard' /> },
    { path: '*', component: <Navigate to='/dashboard' /> }
]

const publicRoutes = [
    { path: '/home', component: <HomePage /> },
    { path: '/login', component: <Login /> },
    { path: '/signup', component: <Signup /> },
    { path: '/dashboard', component: <DashboardPage /> },
    { path: '/my-profile', component: <UserProfile /> },

]

export { authProtectedRoutes, publicRoutes };