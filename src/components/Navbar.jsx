import React, { Component } from 'react'

import logo from '../logo.png'
import './Navbar.css';
import Login from './About_Us/Login';
// import { addUrlProps, UrlQueryParamTypes } from 'react-url-query';


// function useQuery() {
//     let thisAddress = new URLSearchParams(useLocation().search);
//     console.log(thisAddress);
//     return thisAddress;
//   }

class Navbar extends Component {
    state = {
        isTop: true,
        loggedIn: false,
        selected: 'home',
        search: '---' 
    };

    componentDidMount() {
        let currentURL = window.location.pathname;

        currentURL = currentURL.slice(1);
        if (currentURL.charAt(currentURL.length - 1) == '/') {
            currentURL = currentURL.slice(0, -1);
        }
        if (currentURL == '') {
            currentURL = 'home';
        }

        this.setState({search: currentURL},()=>{
            let next = document.getElementById(this.state.search);
            next.classList.add("active");
        });

        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if (isTop !== this.state.isTop) {
                this.setState({ isTop })
            } 
        });
        // this.clickBold();
    }

    // changeActive = (e) => {
    //     console.log(e);
    //     this.setState({selected: e}, this.clickBold);
    // }
         
    // clickBold = () => {
    //     var current = document.getElementsByClassName("active");
    //     console.log(current);
    //     if(current.length >= 1) {
    //         current[0].className = current[0].className.replace(" active", "");
    //     }

    //     console.log(this.state);
    //     // var next = document.getElementById(this.state.selected);
    //     // next.classList.add("active");
    // }

    render() {
        // console.log(this.state.search);
        // console.log("loading");
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
                                <li className="nav-item" id="home">
                                    <a className="nav-link" href="/home">HOME<span className="sr-only">(current)</span></a>
                                </li>
                                
                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="#" id="about-us" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        ABOUT US
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="about-us" style={{ borderColor: "#f7f7f7" }}>
                                        <li><a className="dropdown-item" href="/about-us/#fromTheCEO-section">From the CEO</a></li>
                                        <li><a className="dropdown-item" href="/about-us/#clients">Clients</a></li>
                                        <li><a className="dropdown-item" href="/about-us/#partners">Partners</a></li>
                                        <li><a className="dropdown-item" href="/about-us/#contractVehicles">Contract Vehicles</a></li>
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
                                    <a className="nav-link" id="services" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        SERVICES
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="services" style={{ borderColor: "#f7f7f7" }}>    
                                        <li><a className="dropdown-item" href="/services/#program-support">Program Support</a></li>
                                        <li><a className="dropdown-item" href="/services/#engineering">Engineering</a></li>
                                        <li><a className="dropdown-item" href="/services/#business-intelligence">Business Intelligence</a></li>
                                    </ul>
                                </li>
                                
                                {/* <li className="nav-item dropdown">
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
                                </li> */}
                                
                                <li className="nav-item dropdown">
                                    <a className="nav-link" id="join-us" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        JOIN US
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="join-us" style={{ borderColor: "#f7f7f7" }}>
                                        <a className="dropdown-item" href="/join-us/#we-are-together">We are together</a>
                                        <a className="dropdown-item" href="/join-us/#benefits">Benefits</a>
                                        <a className="dropdown-item" href="/join-us/#current-openings">Current Openings</a>
                                        <a className="dropdown-item" href="https://mirlogic.bamboohr.com/jobs/" target="_blank">Apply</a>
                                    </ul>
                                </li>
                                
                                <li className="nav-item dropdown">
                                    <a className="nav-link" id="contact-us" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        CONTACT US
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="contact-us" style={{ borderColor: "#f7f7f7" }}>
                                        <a className="dropdown-item" href="/contact-us">Contact Us</a>
                                    </ul>
                                </li>

                                {/* <li className="nav-item">
                            <a className="nav-link" href="/about-us/#loginModal" data-toggle="modal" data-target="#loginModal" style= {{ color: "#93111e"}}>{this.state.loggedIn ? "LOGOUT" : "LOGIN"}</a>
                                </li> */}
    
                            </ul>
                            {/*  Login button */}
                            <form className="form-inline my-2 my-lg-0">
                                <a className="nav-link" href="https://netorgft998771.sharepoint.com/SitePages/Home.aspx " target="_blank" style={{ color: "#93111e"}}>LOGIN</a>
                                {/* <a className="nav-link" href="/about-us/#loginModal" data-toggle="modal" data-target="#loginModal" style= {{ color: "#93111e"}}>{this.state.loggedIn ? "LOGOUT" : "LOGIN"}</a> */}
                            </form>
                        </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
