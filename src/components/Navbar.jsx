import React, { Component } from 'react'
import { render } from 'react-dom'

import logo from '../logo.png'
import './Navbar.css';
import Login from './About_Us/Login';


class Navbar extends Component {
    state = {
        isTop: true,
        loggedIn: false,
        selected: 'home' 
    };

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if (isTop !== this.state.isTop) {
                this.setState({ isTop })
            }
        });
    }

    clickBold = (e) =>
    {
        console.log(e);
        var current = document.getElementsByClassName("active");
        this.setState({selected: e});
        console.log(this.state.selected);
        console.log(current);
        if(current != []) {
            current[0].className = current[0].className.replace(" active", "");
        }

        var next = document.getElementById(e);
        next.classList.add("active");
        
    }

    render() {
        return (
            <div>
                <Login />
                <nav className={this.state.isTop ? 'navbar navbar-expand-lg navbar-light bg-none pr-md-4 pl-md-4 fixed-top original'
                                                 : 'navbar navbar-expand-lg navbar-light bg-none pr-md-4 pl-md-4 fixed-top colored-nav'}>
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
    
                        <div className="collapse navbar-collapse ml-md-4" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/home">HOME<span className="sr-only">(current)</span></a>
                                </li>
                                
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="aboutUs" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        ABOUT US
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="aboutUs">
                                        <li><a className="dropdown-item" href="/about-us/#fromTheCEO-section" onClick={() => this.clickBold('aboutUs')}>From the CEO</a></li>
                                        <li><a className="dropdown-item" href="/about-us/#clients" onClick={() => this.clickBold('aboutUs')}>Clients</a></li>
                                        <li><a className="dropdown-item" href="/about-us/#partners" onClick={() => this.clickBold('aboutUs')}>Partners</a></li>
                                        <li><a className="dropdown-item" href="/about-us/#contractVehicles" onClick={() => this.clickBold('aboutUs')}>Contract Vehicles</a></li>
                                        {/* <li><a className="dropdown-item" href="/about-us/#loginModal" data-toggle="modal" data-target="#loginModal">Login</a></li> */}
                                    </ul>
                                </li>
                                
                                {/* <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        CONSULTING
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">    
                                        <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle">Services</a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="/strategic-analysis-services">Strategic Analysis Services</a></li>
                                                <li><a className="dropdown-item" href="/program-support-services">Program Support Services</a></li>
                                                <li><a className="dropdown-item" href="/solution-development-services">Solution Development Services</a></li>
                                            </ul>
                                        </li>
                                        <li><a className="dropdown-item" href="/cyber-assessment-activity">Cyber Assessment Activity</a></li>
                                    </ul>
                                </li> */}

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" id="services" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        SERVICES
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="services">    
                                        <li><a className="dropdown-item" href="/services/#program-support" onClick={() => this.clickBold('services')}>Program Support</a></li>
                                        <li><a className="dropdown-item" href="/services/#engineering" onClick={() => this.clickBold('services')}>Engineering</a></li>
                                        <li><a className="dropdown-item" href="/services/#business-intelligence" onClick={() => this.clickBold('services')}>Business Intelligence</a></li>
                                    </ul>
                                </li>
                                
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" id="training" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        TRAINING
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="training">    
                                        <a className="dropdown-item" href="/training/#assessment-training">Assessment Training</a>
                                        <a className="dropdown-item" href="/training/#customer-training">Customer Training</a>
                                    </ul>
                                </li>
                            
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="resources" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Resources
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="resources">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                                
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" id="joinUs" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        JOIN US
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="joinUs">
                                        <a className="dropdown-item" href="/join-us/#we-are-together">We are together</a>
                                        <a className="dropdown-item" href="/join-us/#benefits">Benefits</a>
                                        <a className="dropdown-item" href="/join-us/#current-openings">Current Openings</a>
                                        <a className="dropdown-item" href="/join-us/#">Apply</a>
                                    </ul>
                                </li>
                                
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" id="contactUs" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        CONTACT US
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="contactUs">
                                        <a className="dropdown-item" href="/contact-us">Contact Us</a>
                                    </ul>
                                </li>

                                <li className="nav-item">
                            <a className="nav-link" href="/about-us/#loginModal" data-toggle="modal" data-target="#loginModal" style= {{ color: "#93111e"}}>{this.state.loggedIn ? "LOGOUT" : "LOGIN"}</a>
                                </li>
    
                            </ul>
                        </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
