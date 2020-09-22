import React, { Component } from 'react';

import shield from '../../shield.png'

class Login extends Component {
    constructor(props) {
        super();
        this.state = {
            username: "",
            password: "",
            type: "",
            full_description: ""
        }
    }

    // Update the job info in the state
    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    closeModal = () => {
        this.setState({
            modalIsOpen: false
        }, () => {
            this.props.resetInputData();
        });
    }

    render() {
        return (
            <div>
                {/* <button type="button" className="btn btn-primary lead" data-toggle="modal" data-target="#exampleModal">Login</button> */}

                {/* <!-- Modal --> */}
                <div className="modal fade " id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <img src={shield} alt="" width="10%" />
                                <h3 className="modal-title" id="exampleModalLabel">Login</h3>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        {/* User name */}
                                        <label htmlFor="username">Username</label>
                                        <input className="form-control mb-3"
                                            type="text"
                                            value={this.state.username}
                                            name="username"
                                            onChange={this.handleChange}
                                        />

                                        {/* Password */}
                                        <label htmlFor="password">Password</label>
                                        <input className="form-control mb-3"
                                            type="password"
                                            value={this.state.password}
                                            name="password"
                                            onChange={this.handleChange}
                                        />


                                        {/* Location & Type */}
                                        {/* <div className="form-row">
                                            <div className="col mb-3">
                                                <label htmlFor="location">Location</label>
                                                <input className="form-control"
                                                    type="text"
                                                    value={this.state.location}
                                                    name="location"
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                            <div className="col">
                                                <label htmlFor="type">Type</label>
                                                <input className="form-control"
                                                    type="text"
                                                    value={this.state.type}
                                                    name="type"
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                        </div> */}
                                    </div>

                                    {/* Buttons */}
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                        <button type="button" className="btn btn-primary">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;