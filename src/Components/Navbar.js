import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink onClick={() => navigate(-1)}
                                className='nav-link'>Indietro</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink onClick={() => navigate(1)}
                                className='nav-link'>Avanti</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">
                                Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active-link" : "nav-link"} exact>
                                About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about/ciao"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active-link" : "nav-link"}>
                                About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact"
                                style={({ isActive, isPending }) => {
                                    return {
                                        color: isPending ? "blue" : "black",
                                        fontWeight: isActive ? "bold" : "",
                                        fontSize: isActive ? "1.2em" : "",
                                        color: isActive ? "red" : "black",
                                    };
                                }}>Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="dashboard/login" exact>
                                Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="dashboard/register" exact>
                                Register</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="profile/:profileId">
                                User</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/users">
                                Users</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;