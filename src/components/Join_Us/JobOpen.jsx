import React, { Component } from 'react';

// import './Todo.css';

class JobOpen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        }
    }

    // handleUpdate = (evt) => {
    //     evt.preventDefault();
    //     // Take the updated task data as a new task to the parent (TodoList)
    //     this.props.editTodo(this.props.id, this.state.task); // Passing task's id and the current task from the form
    //     this.toggleForm();
    // }

    // handleChange = (evt) => {
    //     this.setState({
    //         task: evt.target.value
    //     });
    // }
 
    // toggleForm = () => {
    //     this.setState({
    //         isEditing: !this.state.isEditing
    //     }); 
    // }

    // handleToggleCompletion = (evt) => {
    //     this.props.toggleTodo(this.props.id);
    // }

    fixJobLink = () => {
        console.log("fixing job link");
        let link = this.props.link;
        console.log(link);
    }

    render() { 
        return (
            <div className = "jobOpen">
                {/* <p id={"job_" + this.props.id} style={{width: "500px"}}>
                    <strong><a href={this.props.link} target="_blank">{this.props.title}</a></strong><br />
                    <em>{this.props.location} - {this.props.type}</em><br />
                    {this.props.full_description}
                </p> */}

                {/* style={{ border: "1px #333 solid" }}> */}
                <div className="row align-items-center mt-4" >
                    <div className="col-sm-10 col-md-9">
                        <h5>{this.props.title}</h5>
                        <em>{this.props.location} | {this.props.location2}</em><br />
                        <a href={this.props.link} target="_blank"><p className="">Full Description</p></a>
                        <p className="type">{this.props.type} - {this.props.type2}</p>
                    </div>
                    <div className="col-sm-10 col-md-3 text-md-right text-sm-left">
                        <a href={this.props.link} target="_blank">
                            <button type="button" className="btn btn-primary w-50">Apply</button>
                        </a>
                    </div>
                </div>
                <hr />
            </div>  
        )
    }
}
 
export default JobOpen;