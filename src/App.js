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
import AnalysisServices from './components/Consulting/AnalysisServices';
import SupportServices from './components/Consulting/SupportServices';
import DevelopmentServices from './components/Consulting/DevelopmentServices';
import CyberActivity from './components/Consulting/CyberActivity';
import AssessmentTraining from './components/Training/AssessmentTraining';
import CustomerTraining from './components/Training/CustomerTraning';
import WeAreToghther from './components/Join_Us/WeAreTogether';
import CurrentOpenings from './components/Join_Us/CurrentOpenings/CurrentOpenings';
import Benefits from './components/Join_Us/benefits/Benefits';



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
                    <Route path="/strategic-analysis-services" exact component={AnalysisServices} />
                    <Route path="/program-support-services" exact component={SupportServices} />
                    <Route path="/solution-development-services" exact component={DevelopmentServices} />
                    <Route path="/cyber-assessment-activity" exact component={CyberActivity} />
                    <Route path="/assessment-training" exact component={AssessmentTraining} />
                    <Route path="/customer-training" exact component={CustomerTraining} />

                    <Route path="/we-are-together" exact component={WeAreToghther} />
                    <Route path="/benefits" exact component={Benefits} />
                    <Route path="/current-openings" exact component={CurrentOpenings} />
                </div>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
