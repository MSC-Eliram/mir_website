import React, { Component } from 'react';

import Todo from './Todo'
import NewTodoForm from './NewTodoForm';
// import './TodoList.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            todos: [] 
        }
    }

    create = (newTodo) => { // The newTodo is a new task coming from NewTodoForm
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    } 

    remove = (id) => { // Filtring out the task with the macthing id, by making new array without the item with the same id
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
    }

    update = (id, updatedTask) => { // id -> to find the item & updatedTask -> as comes as a new task
        const updateTodos = this.state.todos.map(todo => { // New array with with the updated task. 
            if (todo.id === id) {
                return {...todo, task: updatedTask} // ...todo -> to keep the id & update the task key in the object
            }
            return todo; // Otherwise, return the todo as is.
        });
        this.setState({todos: updateTodos}); // At the end, update the state with the new array of tasks objects.
    }

    toggleCompletion = (id) => {
        const updateTodos = this.state.todos.map(todo => { 
            if (todo.id === id) {
                return {...todo, completed: !todo.completed} // ...todo -> to keep the id & change the completed current status to the opposite.
            }
            return todo; 
        });
        this.setState({todos: updateTodos}); 
    }

    render() { 
        const todos = this.state.todos.map(todo => {
            return( <Todo key={todo.id}
                         id={todo.id}
                         task={todo.task} 
                         completed={todo.completed}
                         removeTodo={() => this.remove(todo.id)}
                         editTodo={this.update}
                         toggleTodo={this.toggleCompletion}
                    />
            );        
        });

        return ( 
            <div className="todoList">
                <h2>
                    Todo List<span> A Simple React Todo List App</span>
                </h2>
                {Array.isArray(this.state.todos) && this.state.todos.length === 0 ? 
                                                      "Do something lazy butt!" : 
                                                      <ul>{todos}</ul>
                }
                <NewTodoForm createTodo={this.create} />
            </div>
        );
    }
}
 
export default TodoList;