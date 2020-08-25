import React, { Component } from 'react';

import axios from "axios";

import './HomeContact.css';

class HomeContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            firstName: "",
            lastName: "",
            message: "",
            sent: true
        }
    }

    // When the user puts their info 
    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    // After the user clicks submit
    handleSubmit = (evt) => {
        evt.preventDefault();
        console.log("Form submited");
        let data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            message: this.state.message
        }
        // send POST request to the "server" and fire the resetForm Function
        axios.post('/api/forma', data).then(res => {
            this.setState({ sent: true }, this.resetForm())
            // else...
        }).catch(() => {
            console.log("Something went worng!")
        })
    }

    // Second step is the reset the form, 
    resetForm = () => {
        this.setState({
            email: "",
            firstName: "",
            lastName: "",
            message: "",
        })

        //and a display  sent confirmation text of 3 seconds.
        setTimeout(() => {
            this.setState({ sent: false })
        }, 3000)
    }

    render() {
        return (
            <div className="HomeContact py-4" style={{ height: "100%", margin: "4rem auto" }}>
                <div className="container py-4">
                    <div className="row align-items-center">
                        <div className="col-sm col-md-5 col-lg-6 text-center align-items-center" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
                            <img src="https://image.flaticon.com/icons/svg/1034/1034146.svg" alt="email" style={{ width: "45%" }} />
                        </div>
                        <div className="col-sm col-md-7 col-lg-6">
                            <h3 className="pt-4 mb-4 text-center text-sm-left">Contact Us</h3>
                            <div className="col pt-4">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        {/* Email */}
                                        <label htmlFor="name">Email*</label>
                                        <input className="form-control mb-3"
                                            type="text"
                                            value={this.state.email}
                                            name="email"
                                            onChange={this.handleChange}
                                        />
                                        {/* First & Last name */}
                                        <div className="form-row">
                                            <div className="col mb-3">
                                                <label htmlFor="name">First Name*</label>
                                                <input className="form-control"
                                                    type="text"
                                                    value={this.state.firstName}
                                                    name="firstName"
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                            <div className="col">
                                                <label htmlFor="name">Last Name*</label>
                                                <input className="form-control"
                                                    type="text"
                                                    value={this.state.lastName}
                                                    name="lastName"
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                        </div>
                                        {/* Free text area */}
                                        <label htmlFor="message">Message</label>
                                        <textarea className="form-control mb-3"
                                            id="message"
                                            rows="3"
                                            value={this.state.message}
                                            name="message"
                                            onChange={this.handleChange}
                                        />

                                        {/* File input */}
                                        <div className="form-group">
                                            <label htmlFor="file">Upload File</label>
                                            <input type="file" id="file" className="form-control-file" />
                                            <small className="form-text from-muted" id="fileHelp">Max 3mb size</small>

                                        </div>
                                    </div>
                                    <div className={this.state.sent === false ? "conformation text-center text-primary" : "conformationAppear text-center text-primary"}>
                                        Thanks! Your email has been sent
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
}

export default HomeContact;