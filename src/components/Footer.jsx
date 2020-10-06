import React, { Component } from 'react';

import './Footer.css';
import logo from '../logo.png'

class Footer extends Component {
    constructor(props) {
        super();
        this.state = { 
            year: new Date()
        }
    }
    
    render() { 
        // const ColoredLine = ({ color }) => (
        //     <hr
        //         style={{
        //             color: color,
        //             backgroundColor: color,
        //             height: 2,
        //             marginBottom: "3rem"
        //         }}
        //     />
        // )
        return (  
            <div className="main_footer pt-5">
                {/* <ColoredLine color="#93111e" /> */}
                <footer>
                    <div className="container">
                        <div className="row mb-3 mt-4">
                            <div className="media col-sm-12 col-md-12 mb-1">
                                <img className="d-block mx-auto mx-md-0 mr-3" src={logo} alt="logo" style={{ width: 120 }} />
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-sm-12 col-md-4 lead font-weight-normal mb-2" style={{ fontSize: 17 }}>
                                Success through Dedication & Execution
                                <div>
                                    <a>
                                        <button className="btn btn-outline-dark mb-3 mt-3 btn-sm text-sm-center">
                                            Learn more
                                        </button>
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-2 lead mb-2 " style={{ fontSize: 15 }}>
                                <ul className="list-unstyled">
                                    <a href="/from-the-ceo" className="list-item">
                                        <li className="mb-2">ABOUT</li>
                                    </a>
                                    <a href="/join-us/#current-openings" className="list-item">
                                        <li>CAREERS</li>
                                    </a>
                                    <a href="/services/#program-support" className="list-item">
                                        <li className="mt-2">SERVICES</li>
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

                        <hr style={{ borderColor: '#93121E' }} />

                        <div className="row pb-4">
                            <div className="col-sm-12 col-md-8 text-muted align-text-top my-1" style={{ fontSize: 12.5 }}>
                                {`All rights reserved © ${this.state.year.getFullYear()} MirLogic Solutions Corporation.`}
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
}
 
export default Footer;

