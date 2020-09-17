import React from 'react';
import Clients from '../Clients';
import FromTheCEO from '../FromTheCEO';



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
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default AboutUsPage;