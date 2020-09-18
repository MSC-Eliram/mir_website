import React from 'react';
import ContactInfo from './ContactInfo';

const ContactUsPage = () => {
    return (  
        <div>
            <div className="fromTheCEO" style={{ height: "26rem" }}></div>
            <div className="container mt-4">
                <div className="d-flex row mt-4">
                    <div className="py-4 px-4 item"> 
                        <ContactInfo />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ContactUsPage;