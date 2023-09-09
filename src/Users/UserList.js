import React from 'react';
import { Link } from 'react-router-dom';
import users from '../Database/database';

function UserList() {
    return (
        <div>
            <h1>User List</h1>
            {users.map((user) => (
                <div key={user.id}>
                    <Link to={`${user.id}`}>
                        {`${user.firstName} ${user.lastName}`}
                    </Link>
                </div>
            ))}
        </div>
    );
}
export default UserList;


