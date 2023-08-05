import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './Components/Navbar';
import { routes } from './Routes/routes';
import { BrowserRouter, useRoutes } from 'react-router-dom';
function Routes() {
  let element = useRoutes(routes);
  return element;
}
function App() {
    return (
        <BrowserRouter>
            <div className="App container-fluid py-2">
                <h1 className='fw-bold'>App.js</h1>
                <Navbar/>
                <Routes />
            </div>
        </BrowserRouter>
    );
}
export default App;


