import React, { Component } from 'react'

class Opening extends Component {
    constructor(props) {
        super();
        this.state = { 
            isEditing: false,
            opening: this.props.opening
        }
    }
    render() { 
        let condition;
        if (this.state.isEditing) {
            condition( <div>editing...</div> )
        }
        else {
            condition( <div>
                <li>{this.props.opening}</li>
            </div>)
        }

        return ( 
            condition
        );
    }
}
 
export default Opening;