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
                <p id={"job_" + this.props.id} style={{width: "500px"}}>
                    <strong><a href={this.props.link} target="_blank">{this.props.title}</a></strong><br />
                    <em>{this.props.location} - {this.props.type}</em><br />
                    {this.props.full_description}
                </p>
            </div>
        )
    }
}
 
export default JobOpen;