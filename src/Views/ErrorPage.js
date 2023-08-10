import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const backToHomepage = useNavigate();
    const navigate = useNavigate();
    return (<>
        <h2>404 - Pagina non trovata.</h2>
        <button onClick={()=> navigate(-1)}
            className='btn btn-success me-1'>Torna indietro</button>
        <button onClick={() => backToHomepage("/")}
            className='btn btn-primary'>Torna alla homepage</button>
    </>)
}

export default ErrorPage;

