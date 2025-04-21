import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const Main = () => {
    const location = useLocation()
    const runningLocation = location.pathname === "/login"

    return (
        <div>
            {runningLocation || <Navbar></Navbar>}
            <Outlet></Outlet>
            {runningLocation || <Footer></Footer>}

        </div>
    );
};

export default Main;