import React from 'react';
import { useParams } from 'react-router-dom';
const Profile = () => {
    const params = useParams();
    const { profileId } = useParams();
    console.log(params);
    return (
        <h1>Sono l'utente: { profileId }</h1>
    )
}
export default Profile;

