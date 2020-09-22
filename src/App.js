import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './custom-theme.scss'

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomePage from './components/Home/HomePage';
import AboutUsPage from './components/About_Us//AboutUsPage';
import ServicesPage from './components/Services/ServicesPage';
import TrainingPage from './components/Training/TrainingPage';
import JoinUsPage from './components/Join_Us/JoinUsPage';
import ContactMe from './components/contactme/ContactMe';



function App() {
    return (
        <div>
            <Navbar />
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/home" exact component={HomePage} />
                        <Route path="/about-us" exact component={AboutUsPage} />
                        <Route path="/services" exact component={ServicesPage} />
                        <Route path="/training" exact component={TrainingPage} />
                        <Route path="/join-us" exact component={JoinUsPage} />
                        <Route path="/contact-us" exact component={ContactMe} />
                    </Switch>
                </div>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
