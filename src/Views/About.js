import React from 'react';
import { useLocation } from 'react-router-dom';

const About = () => {
    const location = useLocation();
    console.log(location.pathname);
    return (
        <>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quod ipsam, dolorum nisi similique corporis. Enim animi facilis temporibus modi, reiciendis harum nostrum omnis laborum consequuntur quibusdam dolores sit quo!
            </p>
        </>
    )
}

export default About;
