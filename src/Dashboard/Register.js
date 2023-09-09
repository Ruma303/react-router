import React from 'react'

const Register = () => {
    return (
        <div className="container mt-4">
            <h1>Register</h1>
            <form >
                <div className="form-group">
                    <label>Your name</label>
                    <input
                        type="text"
                        className="form-control"

                    />
                </div>
                <div className="form-group">
                    <label>email</label>
                    <input
                        className="form-control"
                        type="email"
                    />
                </div>
                <button type='submit' className="btn btn-primary mt-2">Contact us!</button>
            </form>
        </div>
    )
}

export default Register;