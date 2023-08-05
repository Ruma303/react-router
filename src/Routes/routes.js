import React from 'react';
import Home from '../Views/Home';
import About from '../Views/About';
import Contact from '../Views/Contact';
import ErrorPage from '../Views/ErrorPage';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Dashboard/Login';
import Register from '../Dashboard/Register';
import Profile from '../Profiles/Profile';

export const routes  = [
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/contact',
        element: <Contact/>
    },
    {
        path: '/dashboard',
        element: <Dashboard/>,
        children: [
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'register',
                element: <Register/>
            },
        ]
    },
    {
        path: '/profile',
        children: [
            {
                path: ':profileId',
                element: <Profile/>,
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage/>
    },
];
