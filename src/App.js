import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './custom-theme.scss'

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomePage from './components/Home/HomePage';
// import FromTheCEO from './components/About_Us/FromTheCEO';
// import Clients from './components/About_Us/Clients';
// import Partners from './components/About_Us/Partners';
// import ContractVehicles from './components/About_Us/ContractVehicles';
// import AnalysisServices from './components/Consulting/AnalysisServices';
// import SupportServices from './components/Consulting/SupportServices';
// import DevelopmentServices from './components/Consulting/DevelopmentServices';
// import CyberActivity from './components/Consulting/CyberActivity';
// import AssessmentTraining from './components/Training/AssessmentTraining';
// import CustomerTraining from './components/Training/CustomerTraning';
// import WeAreToghther from './components/Join_Us/WeAreTogether';
// import CurrentOpenings from './components/Join_Us/CurrentOpenings/CurrentOpenings';
// import Benefits from './components/Join_Us/benefits/Benefits';
import AboutUsPage from './components/About_Us//AboutUsPage';
import ServicesPage from './components/Services/ServicesPage';
import TrainingPage from './components/Training/TrainingPage';
import JoinUsPage from './components/Join_Us/JoinUsPage';



function App() {
    return (
        <div>
            <Navbar />
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/home" exact component={HomePage} />
                    <Route path="/about-us" exact component={AboutUsPage} />
                    <Route path="/services" exact component={ServicesPage} />
                    <Route path="/training" exact component={TrainingPage} />
                    <Route path="/join-us" exact component={JoinUsPage} />
                    {/* <Route path="/we-are-together" exact component={WeAreToghther} />
                    <Route path="/benefits" exact component={Benefits} />
                    <Route path="/current-openings" exact component={CurrentOpenings} /> */}
                </div>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
