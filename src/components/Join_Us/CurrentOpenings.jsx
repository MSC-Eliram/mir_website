import React, { Component } from 'react';

import CreateOpeningForm from './CreateOpeningForm';

class CurrentOpenings extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h1 className="display-4 text-primary aboutUs-sections" id="current-openings">CURRENT OPENINGS</h1>

                <br />

                {/* Modal to create a new position */}
                <CreateOpeningForm />

                <br />
                <br />

                <p>
                    Become a part of the solution and empower others to greater success when you become a member of the team at MirLogic 
                    Solutions Corporation. Diversity matters in this business, and our leadership is focused on finding individuals who 
                    are motivated and prepared to see the world from another perspective. Review our current openings for IT jobs in Washington, DC.
                </p>

                <br />

                <p>
                    <span><strong><a href="/">Our clients</a></strong></span> are representative of the nation as a whole, so we go the extra 
                    mile to hire people based on their ability to help the client. Diversity is not just a buzzword for the people that make 
                    our corporation a leader in this field. We are dedicated to maintaining equal employment opportunities for everyone.
                </p>

                <br />
                <br />

                <h1 className="display-4">JOIN OUR TEAM OF SPECIALISTS</h1>

                <br />

                <p>
                    <span><strong><a href="/">Apply for a position</a></strong></span> and help others develop solutions that help us all. 
                    We make all of our employment positions without any regard to race, color, religion, sex, national origin, age, disability, 
                    or genetic information. That commitment helps us find people that are focused on helping people succeed. We are in this together, 
                    so we do everything we can to find people that share our values. We are proud of the talented and diverse group of employees
                    we have assembled, and we look forward to working with you.
                </p>

                <br />
                <br />
            </div>
        );
    }
}
 
export default CurrentOpenings;