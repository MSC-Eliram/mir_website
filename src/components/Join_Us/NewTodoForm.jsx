import React, { Component } from 'react';

import uuid from 'react-uuid'; 
// import './NewTodoForm.css';

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            task: ''
        }
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        // Calling the create(), method that passed down to here that add the new task in the state to the TodoList 
        this.props.createTodo({...this.state, id: uuid(), completed: false});
        this.setState({task: ''});
    }

    render() { 
        return ( 
            <div className="newTodoForm">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="task">New Task: </label>
                    <input type="text"
                        name="task"
                        placeholder="Add new task"
                        id="task"
                        value={this.state.task}
                        onChange={this.handleChange}
                    />
                    <button>+ Add</button>
                </form>
            </div>
        );
    }
}
 
export default NewTodoForm;