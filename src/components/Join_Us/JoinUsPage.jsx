import React from 'react';
import WeAreTogether from './WeAreTogether';
import Benefits from './Benefits';
import CurrentOpenings from './CurrentOpenings'

const JoinUsPage = () => {
    return (  
        <div>
            <div className="fromTheCEO" style={{ height: "26rem" }}></div>
            <div className="container mt-4">
                <div className="d-flex row mt-4">
                    <div className="py-4 px-4 item"> 
                        <WeAreTogether />
                        <br />
                        <br />
                        <Benefits />
                        <br />
                        <br />
                        <CurrentOpenings />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default JoinUsPage;