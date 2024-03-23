import React from "react";
import { Navigate } from "react-router-dom";

import DashboardPage from '../pages/dashboard';
import Login from "../pages/login";

const authProtectedRoutes = [
    { path: '/dashboard', component: <DashboardPage /> },

    // this route must be at the end
    { path: '/', exact: true, component: <Navigate to='/dashboard' /> },
    { path: '*', component: <Navigate to='/dashboard' /> }
]

const publicRoutes = [
    { path: '/login', component: <Login /> },

]

export { authProtectedRoutes, publicRoutes };