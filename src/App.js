import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Views/About';
import Contact from './Views/Contact';
import Home from './Views/Home';
import ErrorPage from './Views/ErrorPage';
import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
        <div className="App container-fluid py-2">
            <h1 className='fw-bold'>App.js</h1>
            <Router>
                <Navbar />
                {/* <nav className='d-flex gap-2 justify-content-center'>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </nav> */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/*" element={<ErrorPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;

