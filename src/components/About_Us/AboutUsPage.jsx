import React from 'react';
import Clients from './Clients';
import ContractVehicles from './ContractVehicles';
import FromTheCEO from './FromTheCEO';
import Partners from './Partners';
import Login from './Login';


const AboutUsPage = () => {
    return (  
        <div>
            <div className="fromTheCEO" style={{ height: "26rem" }}></div>
            <div className="container mt-4">
                <div className="d-flex row mt-4">
                    <div className="py-4 px-4 item"> 
                        <FromTheCEO />
                        <br />
                        <br />
                        <Clients />
                        <br />
                        <br />
                        <Partners />
                        <br />
                        <br />
                        <ContractVehicles />
                        <Login />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default AboutUsPage;