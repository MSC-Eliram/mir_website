import React, { Component } from 'react'
import CreateOpeningForm from './CreateOpeningForm';
import TodoList from './TodoList';
import JobOpen from './JobOpen';

class OpeningsList extends Component {
    constructor(props) {
        super();
        this.state = { 
            openings: []
        }
    }

    createNewOpening = (newOpening) => {
        this.setState({ 
            openings: [...this.state.openings, newOpening] 
        })
    }


    render() { 

        const openings = this.state.openings.map(opening => {
            return( <JobOpen key={opening.id}
                             id={opening.id}
                             title={opening.title}
                             location={opening.location}
                             type={opening.type}
                             link={opening.link}
                             full_description={opening.full_description}
                    />
                );
        });

        return ( 
            <div>
                {Array.isArray(this.state.openings) && this.state.openings.length === 0 ? "NO OPENINGS AT THIS TIME" : <ul>{openings}</ul>}
                <br />
                <br />
                <CreateOpeningForm createOpening={this.createNewOpening} />
                </div>
        );
    }
}
 
export default OpeningsList;