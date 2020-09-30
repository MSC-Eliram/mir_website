import React, { Component } from 'react';
import uuid from 'react-uuid';

class CreateOpeningForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: "",
            location: "",
            type: "",
            link: "",
            full_description: ""
        }
    }

    // Update the job info in the state
    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    // Cleaning form inputs after click X
    clearForm = () => {
        this.setState({title: "", location: "", type: "", link: "", full_description: ""});
    }

    // Submit the form 
    handleSubmit = (evt) => {
        evt.preventDefault();
        // Calling the createNewOpening form OpeningsList component (passed as props).
        this.props.createOpening({ ...this.state, id: uuid(), filled: false });
        this.setState({title: "", location: "", type: "", link: "", full_description: ""});
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
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.clearForm}>
                                    <span aria-hidden="true"><strong>&times;</strong></span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={this.handleSubmit}>
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

                                        {/* Link to bambooHR */}
                                        <label htmlFor="link">Link</label>
                                        <input className="form-control"
                                            type="text"
                                            value={this.state.link}
                                            name="link"
                                            onChange={this.handleChange}
                                        /> 
                                        {/* Link to bambooHR */}
                                        <label htmlFor="full_description">Brief Job Description</label>
                                        <textarea className="form-control" rows="3"
                                            type="text"
                                            value={this.state.full_description}
                                            name="full_description"
                                            onChange={this.handleChange}
                                        /> 
                                    </div>
                               
                                    {/* Buttons */}
                                    <div className="modal-footer">
                                        {/* <button type="button" className="btn btn-secondary" data-dismiss="modal" >Cancel</button> */}
                                        <button type="submit" className="btn btn-primary">Create</button>
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
// class NewTodoForm extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             task: ''
//         }
//     }

//     handleChange = (evt) => {
//         this.setState({
//             [evt.target.name]: evt.target.value
//         });
//     }

//     handleSubmit = (evt) => {
//         evt.preventDefault();
//         // Calling the create(), method that passed down to here that add the new task in the state to the TodoList 
//         this.props.createTodo({...this.state, id: uuid(), completed: false});
//         this.setState({task: ''});
//     }

//     render() { 
//         return ( 
//             <div className="newTodoForm">
//                 <form onSubmit={this.handleSubmit}>
//                     <label htmlFor="task">New Task: </label>
//                     <input type="text"
//                         name="task"
//                         placeholder="Add new task"
//                         id="task"
//                         value={this.state.task}
//                         onChange={this.handleChange}
//                     />
//                     <button>+ Add</button>
//                 </form>
//             </div>
//         );
//     }
// }