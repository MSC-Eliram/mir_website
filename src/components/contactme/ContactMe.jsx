import React from 'react';

import ContactUSForm from './ContactUsForm';

const ContactMe = () => {
    return (
        <div>
            <div className="fromTheCEO" style={{ height: "26rem" }}></div>
            <div className="container mt-4">
                <div className="d-flex row mt-4">
                    <div className="py-4 px-4 item" style={{ margin: "0 auto" }}>
                        <div className="row align-items-center">
                            <div className="col-sm">
                                <h1 className="display-4 text-primary aboutUs-sections" id="fromTheCEO-section">CONTACT US</h1>
                                <br />

                                <h4 style={{ fontWeight: 100 }}><strong>Address</strong></h4>
                                <p>2560 Huntington Avenue, Suite 305, Alexandria, VA, 22303</p>

                                <br />
                                <br />

                                <h4 style={{ fontWeight: 100 }}><strong>Service Area</strong></h4>
                                <p>We proudly serve clients throughout Washington, DC, and surrounding communities.</p>

                                <br />
                                <br />

                                <h4 style={{ fontWeight: 100 }}><strong>Hours of Operation</strong></h4>
                                <p>Monday - Friday: 9:00 a.m. - 5:00 p.m.</p>

                                <br />
                                <br />

                                <h4 style={{ fontWeight: 100 }}><strong>Phone</strong></h4>
                                <p><i className="fas fa-phone" style={{ color: "#93121E" }}></i>
                                    <span className="ml-2">{`+1 (703) 901-5440`}</span>
                                </p>
                            </div>

                            <div className="col-sm text-right">
                                <img src="https://000oz92.rcomhost.com/miclogic/wp-content/uploads/2020/02/Building-400x300.jpg" alt="office_location" width="80%" style={{ borderRadius: "5px" }} />
                            </div>
                        </div>

                        <br />
                        <br />
                        
                        <div className="map p-2" style={{ backgroundColor: "#f7f7f7", borderRadius: "8px" }}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3109.515160869053!2d-77.07928135000067!3d38.79774777948592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b1bd2cc22bd7%3A0x943d5249a0cce180!2s2560%20Huntington%20Ave%2C%20Alexandria%2C%20VA%2022303!5e0!3m2!1sen!2sus!4v1600452484219!5m2!1sen!2sus" 
                                    width="100%" 
                                    height="400"
                                    style= {{ border: "#f7f7f7" }}
                            >
                            </iframe> 
                        </div>
                        
                    </div>
                    <ContactUSForm />
                </div>
            </div>
        </div>
    );
}
 
export default ContactMe;