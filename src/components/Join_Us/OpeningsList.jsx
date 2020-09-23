import React, { Component } from 'react'
import CreateOpeningForm from './CreateOpeningForm';
import TodoList from './TodoList';

class OpeningsList extends Component {
    constructor(props) {
        super();
        this.state = { 
            openings: []
        }
    }

    createNewOpening = () => {
        this.setState({ ...this.state.openings });
    }


    render() { 
        // const openings = this.state.openings.map(opening => {
        //     return (<div 
        //         key={opening.id}
        //         id={opening.id}
        //         // opening={opening.}

        //     />);
        // });

        return ( 
            <div>
            {/* The Section Below (ending with the </p>) should be added in every time the "create" button is clicked */}
                <br />
                <br />
                <h2>List</h2>
                {Array.isArray(this.state.openings) && this.state.openings.length === 0 ? "NO OPENINGS THIS TIME" : <ul></ul>}
                <CreateOpeningForm createOpening={this.createNewOpening} />
                <TodoList />
                {/* <p id={"job" + CreateOpeningForm.state.title[word1] + "_" + CreateOpeningForm.state.title[word2]} style= {{ width: "500px"}}>
                    <strong><a href={CurrentOpeningForm.state.link}>{CurrentOpeningForm.state.title}</a></strong><br />
                    <em>{CurrentOpeningForm.state.location} + " - " + {CurrentOpeningForm.state.type}</em><br />
                    {CurrentOpeningForm.state.full_description}
                </p> */}
                {/* End Section */} 
                </div>
        );
    }
}
 
export default OpeningsList;