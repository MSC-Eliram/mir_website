import React from 'react'

import logo from '../logo.png'
import './Navbar.css';


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-none pr-md-4 pl-md-4 fixed-top">
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
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                ABOUT US
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/from-the-ceo/#bio-section">From the CEO</a></li>
                                    <li><a className="dropdown-item" href="/from-the-ceo">Clients</a></li>
                                    <li><a className="dropdown-item" href="/partners">Partners</a></li>
                                    <li><a className="dropdown-item" href="/contract-vehicles">Contract Vehicles</a></li>
                                    <li><a className="dropdown-item" href="/clients">Login</a></li>
                                </ul>
                            </li>
                            
                            <li className="nav-item dropdown">
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
                            </li>
                            
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    TRAINING
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">    
                                    <a className="dropdown-item" href="/assessment-training">Assessment Training</a>
                                    <a className="dropdown-item" href="/customer-training">Customer Training</a>
                                </ul>
                            </li>
                        
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Resources
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    JOIN US
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="/we-are-together">We are together</a>
                                    <a className="dropdown-item" href="/benefits">Benefits</a>
                                    <a className="dropdown-item" href="/current-openings">Current Openings</a>
                                    <a className="dropdown-item" href="/we-are-together">Apply?</a>
                                </ul>
                            </li>
                            
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Contact Us
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            
                        </ul>
                    </div>
            </nav>
        </div>
    )
}

export default Navbar;
