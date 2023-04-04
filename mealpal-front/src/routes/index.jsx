import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, useRoutes,createBrowserRouter,redirect } from 'react-router-dom';
import Home from '../views/Home';
import Login from '../views/Login';
import { useSessionStorageState } from 'ahooks';
const Routes = () => {
    const [loginInfo, setLoginInfo] = useSessionStorageState("isLoginInfo")
    let element = createBrowserRouter([
        {
            path: '/', 
            element: <Home />,
        },
        {
            path: '/login', 
            element: <Login />,
            
        },
    ])
    return element;
}

export default Routes;