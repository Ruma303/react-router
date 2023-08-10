import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
        <div className="App container-fluid py-2">
            <h1 className='fw-bold'>Protected Routes</h1>
            <Navigation />
            <Routes>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="admin" element={<Admin />} />
                <Route path="*" element={<p>404 - La pagina non esiste!</p>} />
            </Routes>
        </div>
    );
}

const Navigation = () => (
    <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/admin">Admin</Link>
    </nav>
);

export default App;

