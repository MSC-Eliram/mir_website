import React from 'react';

const ContactMe = () => {
    return (
        <div>
            <div className="fromTheCEO" style={{ height: "26rem" }}></div>
            <div className="container mt-4">
                <div className="d-flex row mt-4">
                    <div className="py-4 px-4 item" style={{ margin: "0 auto" }}>
                        <div className="row align-items-center">
                            <div className="col-sm">
                                <h1 className="display-4 text-primary aboutUs-sections" id="fromTheCEO-section">CONTACT ME</h1>
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

                                <p><i className="fas fa-phone" style={{ color: "#93121E" }}></i>
                                    <span className="ml-2">{`+1 (703) 901-5440`}</span>
                                </p>
                            </div>

                            <div className="col-sm text-center">
                                <img src="https://000oz92.rcomhost.com/miclogic/wp-content/uploads/2020/02/Building-400x300.jpg" alt="office_location" width="80%" style={{ borderRadius: "5px" }} />
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ContactMe;