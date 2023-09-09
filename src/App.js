import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import About from './Views/About';
import Contact from './Views/Contact';
import Home from './Views/Home';
import ErrorPage from './Views/ErrorPage';
import React from 'react';
import Navbar from './Components/Navbar';
import Dashboard from './Dashboard/Dashboard';
import Login from './Dashboard/Login';
import Register from './Dashboard/Register';
import Profile from './Profiles/Profile';
import UserList from './Users/UserList';
import User from './Users/User';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
        <div className="App container-fluid py-2">
            <h1 className='fw-bold'>App.js</h1>
            <Router>
                {/* <nav className='d-flex gap-2 justify-content-center'>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </nav> */}
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />

                    {/* <Route path="*" element={<ErrorPage />} /> */}

                    {/* Nested Routes */}
                    {/* <Route path="dashboard" element={<h1>Dashboard</h1>}>
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                    </Route> */}

                    {/* Nested Routes: Outlet */}
                    <Route path="dashboard" element={<Dashboard />}>
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                    </Route>


                    {/* Rotte con parametri */}
                    <Route path="profile">
                        <Route path=":profileId" element={<Profile />} />
                    </Route>

                    {/* http://localhost:3000/profile/Matteo */}

                    {/* Ricerca tramite slug */}
                    <Route path="/users" element={<UserList />} />
                    <Route path="/users/:userId/:par2" element={<User />} />

                    {/* Fallback Route */}
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;

