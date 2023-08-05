import React from 'react';
import { useNavigate } from 'react-router-dom';
const ErrorPage = () => {
    const backToHomepage = useNavigate();
    return (<>
        <h2>404 - Pagina non trovata.</h2>
        <button onClick={() => backToHomepage("/")}
            className='btn btn-primary'>
            Torna alla homepage</button>
    </>)
}

export default ErrorPage;

