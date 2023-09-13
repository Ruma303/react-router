import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MenuBar from './components/MenuBar';
import Home from './views/Home'
import Dashboard from './views/Dashboard'
import Products from './views/Products'
import Protected from './Protected/Protected'


export default function App() {
    const [isSignedIn, setIsSignedIn] = useState(false);
    console.log(isSignedIn);
    const signIn = () => setIsSignedIn(true);
    const signOut = () => setIsSignedIn(false);

    return (
        <div className="container mt-5">
            <h2 className="mb-5 text-center">React Protected Routes Example</h2>
            <BrowserRouter>
                <MenuBar />
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/dashboard"
                        element={
                            <Protected isSignedIn={isSignedIn}>
                                <Dashboard />
                            </Protected>
                        }
                    />
                    <Route path="/products"
                        element={
                            <Protected isSignedIn={isSignedIn}>
                                <Products />
                            </Protected>
                        }
                    />
                </Routes>

                {isSignedIn ? (
                    <div className="d-grid mt-5">
                        <button className="btn btn-danger" onClick={signOut}>
                            Sign out
                        </button>
                    </div>
                ) : (
                    <div className="d-grid mt-5">
                        <button className="btn btn-success" onClick={signIn}>
                            Sign in
                        </button>
                    </div>
                )}
            </BrowserRouter>
        </div>
    )
}