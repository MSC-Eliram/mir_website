import React from 'react';

import './HomeContact.css';

const HomeContact = () => {
    return (
        <div className="HomeContact py-4" style={{ height:"100%", margin: "4rem auto"}}>
            <div className="container py-4">
                <div className="row align-items-center">
                    <div className="col-sm col-md-5 col-lg-6 text-center align-items-center" style={{ paddingTop: "2rem", paddingBottom: "2rem"  }}>
                         <img src="https://image.flaticon.com/icons/svg/1034/1034146.svg" alt="email" style={{ width: "45%" }} />
                    </div>
                    <div className="col-sm col-md-7 col-lg-6">
                        <h3 className="pt-4 mb-4 text-center">Contact Us</h3>
                            <div className="col pt-4">
                            <form>
                                <div className="form-group">
                                    {/* Email */}
                                    <label htmlFor="name">Email*</label>
                                    <input className="form-control mb-3" type="text" />
                                    {/* First & Last name */}
                                    <div className="form-row">
                                        <div className="col mb-3">
                                            <label htmlFor="name">First Name*</label>
                                            <input className="form-control" type="text" />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="name">Last Name*</label>
                                            <input className="form-control" type="text" />
                                        </div>
                                    </div>
                                    {/* Free text area */}
                                    <label htmlFor="message">Message</label>
                                    <textarea className="form-control mb-3" id="message" rows="3" />
                                    
                                    {/* File input */}
                                    <div className="form-group">
                                        <label htmlFor="file">Upload File</label>
                                        <input type="file" id="file" className="form-control-file" />
                                        <small className="form-text from-muted" id="fileHelp">Max 3mb size</small>

                                    </div>
                                </div>
                                <button type="submit" className="btn btn-outline-info">Submit</button>
                                </form>
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default HomeContact;