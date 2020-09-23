import React, { Component } from 'react';

// import './Todo.css';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isEditing: false,
            task: this.props.task // Showing the existing task that we want to update
        }
    }

    handleUpdate = (evt) => {
        evt.preventDefault();
        // Take the updated task data as a new task to the parent (TodoList)
        this.props.editTodo(this.props.id, this.state.task); // Passing task's id and the current task from the form
        this.toggleForm();
    }

    handleChange = (evt) => {
        this.setState({
            task: evt.target.value
        });
    }
 
    toggleForm = () => {
        this.setState({
            isEditing: !this.state.isEditing
        }); 
    }

    handleToggleCompletion = (evt) => {
        this.props.toggleTodo(this.props.id);
    }

    render() { 
        let condition;
        if (this.state.isEditing) {
            condition = (
                <div className="todo">
                    <form className="todoEditForm" onClick={this.handleUpdate}>
                        <input type="text" 
                               name="task"
                               value={this.state.task}
                               onChange={this.handleChange}
                        />
                        <button>Save</button>
                    </form>
                </div>
            );
        }
        else {
            condition = (
                <div className="todo">
                    <li className={this.props.completed ? "todoTask completed" : "todoTask"} onClick={this.handleToggleCompletion}>
                        {this.props.task}
                    </li>
                    <div className="todoButtons">  
                        <button onClick={this.toggleForm}><i className="fas fa-pencil-alt"></i></button>
                        <button onClick={this.props.removeTodo}><i className="fas fa-trash"></i></button>
                    </div>
                </div>
            )
        }

        return condition;
    }
}
 
export default Todo;