import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter

import AuthProtected from './protectedroutes';

import { authProtectedRoutes, publicRoutes } from './allroutes';

const Index = () => {
    return (
        <Router> {/* Wrap everything in Router component */}
            <Routes>
                <Route>
                    {publicRoutes.map((route, idx) => (
                        <Route
                            path={route.path}
                            element={route.component}
                            key={idx}
                        />
                    ))}
                </Route>

                <Route>
                    {authProtectedRoutes.map((route, idx) => (
                        <Route
                            path={route.path}
                            element={
                                <AuthProtected>
                                    {route.component}
                                </AuthProtected>
                            }
                            key={idx}
                        />
                    ))}
                </Route>
            </Routes>
        </Router>
    );
};

export default Index;
