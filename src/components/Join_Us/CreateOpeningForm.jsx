import React, { Component } from 'react';

class CreateOpeningForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: "",
            location: "",
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

    render() { 
        return (  
            <div>
                <button type="button" className="btn btn-outline-primary lead" data-toggle="modal" data-target="#opportunityModal">Add New Position +</button>

                {/* <!-- Modal --> */}
                <div className="modal fade " id="opportunityModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title" id="exampleModalLabel">Create new position</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        {/* Job description */}
                                        <label htmlFor="title">Job Title</label>
                                        <input className="form-control mb-3"
                                            type="text"
                                            value={this.state.title}
                                            name="title"
                                            onChange={this.handleChange}
                                        /> 

                                        {/* Location & Type */}
                                        <div className="form-row">
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
                                        </div>

                                        {/* Full description */}
                                        <label htmlFor="full_description">Job Description</label>
                                        <textarea className="form-control mb-3"
                                            id="full_description"
                                            rows="6"
                                            value={this.state.full_description}
                                            name="full_description"
                                            onChange={this.handleChange}
                                        />
                                    </div>
                               
                                    {/* Buttons */}
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                        <button type="button" className="btn btn-primary">Create</button>
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
 
export default CreateOpeningForm;