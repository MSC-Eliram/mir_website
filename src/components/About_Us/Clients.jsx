import React, { Component } from 'react';

import './Clients.css';

class Clients extends Component {
    static defaultProps = {
        agencies1: [
            {
                id: 0,
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/1024px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png",
                text: "FEDERAL BUREAU OF INVESTIGATION"
            },
            {
                id: 1,
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Seal_of_the_United_States_Coast_Guard.svg/1024px-Seal_of_the_United_States_Coast_Guard.svg.png",
                text: "U.S. COAST GUARD"
            },
            {
                id: 2,
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Mark_of_the_United_States_Air_Force.svg/1024px-Mark_of_the_United_States_Air_Force.svg.png",
                text: "U.S. AIR FORCE"
            },
            {
                id: 3,
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/US_CDC_logo.svg/1280px-US_CDC_logo.svg.png",
                text: "CENTER FOR DISEASE CONTROL"

            }
        ],
        agencies2: [
            {
                id: 4,
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Seal_of_the_United_States_Department_of_the_Navy.svg/1024px-Seal_of_the_United_States_Department_of_the_Navy.svg.png",
                text: "DEPARTMENT OF THE NAVY"
            },
            {
                id: 4,
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Seal_of_the_U.S._Defense_Intelligence_Agency.svg/1024px-Seal_of_the_U.S._Defense_Intelligence_Agency.svg.png",
                text: "DEFENSE INTELLIGENCE AGENCY"
            },
            {
                id: 4,
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Emblem_of_the_United_States_Department_of_the_Army.svg/1024px-Emblem_of_the_United_States_Department_of_the_Army.svg.png",
                text: "DEPARTMENT OF ARMY"
            },
            {
                id: 4,
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Seal_of_the_United_States_Department_of_the_Treasury.svg/1024px-Seal_of_the_United_States_Department_of_the_Treasury.svg.png",
                text: "DEPARTMENT OF TREASURY"
            }
        ]
    }
    
    render() { 
        const clients1 = this.props.agencies1.map(agency => (
            <div className="col-sm text-primary font-weight-bold">
                <div class="card-deck">
                    <div class="card">
                        <img src={agency.img} class="card-img-top" alt="agencyLogo" />
                    </div>
                </div>
            </div>
        ));

        const clients2 = this.props.agencies2.map(agency => (
            <div className="col-sm text-primary font-weight-bold">
                <div class="card-deck">
                    <div class="card">
                        <img src={agency.img} class="card-img-top" alt="agencyLogo" />
                    </div>
                </div>
            </div>
        ));

            
        return ( 
            <div>
                <div className="clients" style={{ height: "26rem" }}></div>
                <div className="container mt-4">
                    <div className="d-flex align-items-center row mt-4">
                        <div className="py-4 px-4 item" style={{ margin: "0 auto", height: "100%" }}>
                            <div>
                                <h1 className="display-4 text-primary">CLIENTS</h1>
                                <br />
                                <p>
                                    Large organizations with demanding stakeholders and constituencies need to be nimble in an ever-changing landscape.
                                    MirLogic Solutions Corporation demonstrates our ability to develop ideas and transform them into the driving factor in your success.
                                    MirLogic clients in Washington, DC, include the military branches and governmental agencies that set the policy landscape in the capital and beyond.
                            </p>
                                <br />
                                <p>
                                    Cabinet-level departments and intelligence agencies need an outside view of the landscape they inhabit to anticipate changes that could hamper their
                                    individual missions. They need a process that can move concepts and products to the developmental stage, and they need a management structure that
                                    is in line with the expectations of Congressional oversight.
                            </p>
                                <br />
                                <p>
                                    We meet and exceed our client expectations with a commitment to a set of principles and a management approach that is centered on solutions.
                                Our family of <span><strong><a href="/" className="bold">business partners</a></strong></span> support our efforts with training courses, construction management support services, and informative consulting.
                            </p>

                                <br />
                                <br />

                                <h1 className="display-4">THE EXAMPLE WE SET</h1>
                                <br />
                                <p>
                                    When you provide consulting for a local retail establishment, you have more room for error than a group that delivers
                                <span><strong><a href="/" className="bold"> certification trainings</a></strong></span> for a federal
                                department with a senate-confirmed secretary. Our team understands the complexities involved with governmental contracting and the security expectations
                                that you face with your IT infrastructure. Review our list of clients we serve, including:
                            </p>

                                <br />

                                <div className="row align-items-end text-center mt-4">
                                    {clients1}
                                </div>
                                <div className="row align-items-end text-center mt-4">
                                    {clients2}
                                </div>

                                <br />
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Clients;