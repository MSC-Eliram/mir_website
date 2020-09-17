import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './custom-theme.scss'

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomePage from './components/Home/HomePage';
import AssessmentTraining from './components/Training/AssessmentTraining';
import CustomerTraining from './components/Training/CustomerTraning';
import WeAreToghther from './components/Join_Us/WeAreTogether';
import CurrentOpenings from './components/Join_Us/CurrentOpenings/CurrentOpenings';
import Benefits from './components/Join_Us/benefits/Benefits';
import AboutUsPage from './components/About_Us/AboutUsPage';
import ServicesPage from './components/Services/ServicesPage';



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

                    {/* <Route path="/about-us" exact component={FromTheCEO} /> */}
                    {/* <Route path="/clients" exact component={Clients} /> */}
                    {/* <Route path="/partners" exact component={Partners} />
                    <Route path="/contract-vehicles" exact component={ContractVehicles} /> */}
                    {/* <Route path="/strategic-analysis-services" exact component={AnalysisServices} />
                    <Route path="/program-support-services" exact component={SupportServices} />
                    <Route path="/solution-development-services" exact component={DevelopmentServices} />
                    <Route path="/cyber-assessment-activity" exact component={CyberActivity} /> */}
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
