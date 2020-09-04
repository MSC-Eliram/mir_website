import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './custom-theme.scss'

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomePage from './components/Home/HomePage';
import FromTheCEO from './components/About_Us/FromTheCEO';
import Clients from './components/About_Us/Clients';
import Partners from './components/About_Us/Partners';
import ContractVehicles from './components/About_Us/ContractVehicles';



function App() {
    return (
        <div>
            <Navbar />
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/home" exact component={HomePage} />
                    <Route path="/from-the-ceo" exact component={FromTheCEO} />
                    <Route path="/clients" exact component={Clients} />
                    <Route path="/partners" exact component={Partners} />
                    <Route path="/contract-vehicles" exact component={ContractVehicles} />

                </div>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
