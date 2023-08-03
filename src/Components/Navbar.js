import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/" exact>
                                    Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="about">
                                    About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="contact" exact>
                                    Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="dashboard/login" exact>
                                    Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="dashboard/register" exact>
                                    Register</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;