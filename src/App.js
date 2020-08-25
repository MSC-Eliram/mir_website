import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './custom-theme.scss'

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomePage from './components/Home/HomePage';
import FromTheCEO from './components/About_Us/FromTheCEO';



function App() {
    return (
        <div>
            <Navbar />
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/home" exact component={HomePage} />
                    <Route path="/from-the-ceo" exact component={FromTheCEO} />
                </div>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
