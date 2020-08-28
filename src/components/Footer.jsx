import React from 'react'

import logo from '../logo.png'

const Footer = () => {
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 2,
                marginBottom: "3rem"
            }}
        />
    )
    return (
        <div>
            <ColoredLine color="#93111e" />
                <footer>
                    <div className="container">
                        <div className="row mb-2">
                            <div className="media col-sm-12 col-md-12 mb-1">
                                <img className="mr-3" src={logo} alt="logo" style={{ width: 120 }}/>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-sm-12 col-md-4 lead font-weight-normal mb-2" style={{ fontSize: 17 }}>
                                Success through Dedication & Execution
                                <div>
                                    <a>
                                        <button className="btn btn-outline-dark mb-3 mt-3 btn-sm">
                                            Learn more
                                        </button>
                                    </a>
                                </div>
                            </div> 
                            <div className="col-sm-12 col-md-2 lead mb-2" style={{ fontSize: 15 }}>
                                <ul className="list-unstyled mb-3 ">    
                                    <a href="#" className="list-item">
                                        <li className="mb-2">About</li>
                                    </a>
                                    <a href="#" className="list-item">
                                        <li>Careers</li>
                                    </a>
                                    <a href="#" className="list-item">
                                        <li className="mt-2">Blog</li>
                                    </a>
                                </ul>
                            </div> 
                            <div className="col-sm-12 col-md-6 lead" style={{ fontSize: 15 }}>
                                <p><i className="fas fa-map-marker-alt" style={{ color: '#93121E' }}></i> 
                                    <span className="ml-2">2560 Huntington Ave. Ste 305, Alexandria, VA 22303</span>
                                </p>
                                <p><i className="fas fa-phone" style={{ color: "#93121E" }}></i>
                                    <span className="ml-2">{`+1 (703) 901-5440`}</span>
                                </p>
                                <p><i className="fas fa-envelope" style={{ color: '#93121E' }}></i>
                                    <span className="ml-2"> info@mirlogic.com</span>
                                </p>
                            </div> 
                        </div>

                    <hr style={{ borderColor:'#93121E' }} />

                        <div className="row mb-2">
                            <div className="col-sm-12 col-md-8 text-muted align-text-top my-1" style={{ fontSize: 12.5 }}>
                                All rights reserved © 2020 MirLogic Solutions Corporation. 
                            </div> 
                            <div className="col-sm-12 col-md-4 text-md-right mt-0">
                                    <a href="#">
                                        <span className="text-primary" style={{ fontSize: 12.5 }}>SITEMAP </span>
                                    </a>
                                    | 
                                    <a href="https://www.linkedin.com/company/mirlogic-solutions-corp/">
                                        <i className="fab fa-linkedin-in ml-1" style={{ color: "#646464" }}></i>
                                    </a>
                            </div> 
                        </div>  
                    </div>    
                </footer>
        </div>
    );
}

export default Footer;
