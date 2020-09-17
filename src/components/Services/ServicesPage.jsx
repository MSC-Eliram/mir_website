import React from 'react';
import ProgramSupport from './ProgramSupport';
import Engineering from './Engineering';
import BusinessIntelligence from './BusinessIntelligence';


const ServicesPage = () => {
    return (  
        <div>
            <div className="fromTheCEO" style={{ height: "26rem" }}></div>
            <div className="container mt-4">
                <div className="d-flex row mt-4">
                    <div className="py-4 px-4 item"> 
                        <ProgramSupport />
                        <br />
                        <br />
                        <Engineering />
                        <br />
                        <br />
                        <BusinessIntelligence />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ServicesPage;