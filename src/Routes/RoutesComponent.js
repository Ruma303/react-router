import React from 'react'
import { routes } from './routes';
import { useRoutes } from 'react-router-dom'

const RoutesComponent = () => {
    return useRoutes(routes);
}

export default RoutesComponent;