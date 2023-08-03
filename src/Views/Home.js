import React from 'react'
import { useLocation } from 'react-router-dom';

const Home = () => {
    const location = useLocation();
    console.log(location, location.pathname);
    return (
        <>
            <h1>Home</h1>
            <h3>Welcome to my personal site!</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quod ipsam, dolorum nisi similique corporis. Enim animi facilis temporibus modi, reiciendis harum nostrum omnis laborum consequuntur quibusdam dolores sit quo!
            </p>
        </>
    )
}

export default Home;