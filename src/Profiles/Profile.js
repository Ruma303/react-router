import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
    const params = useParams();
    console.log(params);


    const { profileId } = useParams();
    return (
        <h1>Sono l'utente: {profileId}</h1>
    )
}
export default Profile;

