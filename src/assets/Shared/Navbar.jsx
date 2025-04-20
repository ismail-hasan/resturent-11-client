import React from 'react';

const Navbar = () => {

    const links = (
        <>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </>
    );

    return (
        <div className="navbar fixed bg-black/50 text-white  z-10 max-w-7xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52 text-black text-base"
                    >
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Bisto Boss</a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-base">
                    {links}
                </ul>
            </div>

            <div className="navbar-end">
                <a className="btn">Get Started</a>
            </div>
        </div>
    );
};

export default Navbar;
