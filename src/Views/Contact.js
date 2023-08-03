import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function ContactForm() {
    const location = useLocation();
    console.log(location.pathname);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Name: ${name}, Message: ${message}`);
        // Qui potresti ad esempio inviare i dati del form al tuo server
    }

    return (
        <div className="container mt-4">
            <h1>Contact us</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Your name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>
                <div className="form-group">
                    <label>Your message</label>
                    <textarea
                        className="form-control"
                        value={message}
                        onChange={handleMessageChange}
                    />
                </div>
                <button type='submit' className="btn btn-primary mt-2">Contact us!</button>
            </form>
        </div>
    );
}

export default ContactForm;