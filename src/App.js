import React from 'react';
import './App.css';
import './custom-theme.scss'

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomePage from './components/Home/HomePage';


function App() {
    return (
        <div>
            <Navbar />
            <HomePage />
            <Footer />
        </div>
    );
}

export default App;
