import React, { Component, useState, useEffect } from 'react'
import JobOpen from './JobOpen';
import uuid from 'react-uuid';

class OpeningsList extends Component {
    constructor(props) {
        super();
        this.state = { 
            openings: [],
            // listing: [],
            // link: [],
            // place1: [],
            // type1: []
         }
    }

    fun1 = () => {
        console.log(this.state.openings);
    }

    componentDidMount() {
        fetch('http://127.0.0.1:5000/job_postings').then(res => res.json()).then(data => {
            console.log(data);
            this.setState({
                openings: Object.values(data)[0],
                // listing: Object.values(data)[0][0].LISTING,
                // link: Object.values(data)[0][0].LINK,
                // place1: Object.values(data)[0][0].PLACE_1,
                // type1: Object.values(data)[0][0].TYPE_1
            })
            this.fun1();
        })
    }
        
    render() { 
        const openings = this.state.openings.map(opening => {
            return ( 
                <JobOpen key={uuid()}
                         title={opening.LISTING}
                         location={opening.PLACE_1}
                         type={opening.TYPE_1}
                         link={opening.LINK}
                         location2={opening.PLACE_2}
                         type2={opening.TYPE_2}
                />
            );
        });
        return ( 
            <div  style={{ backgroundColor: "#f7f7f7", padding: "20px", borderRadius: "10px" }}>
                {Array.isArray(this.state.openings) && this.state.openings.length === 0 ? "NO OPENINGS AT THIS TIME" : <span>{openings}</span>}
                <div id="BambooHR">
                    <script src="https://mirlogic.bamboohr.com/js/jobs2.php" type="text/javascript">
                    </script>
                    
                    <div className="lead text-right" style={{ margin: "-5px 0.08rem 0 0 ", fontSize: "0.8rem", }} 
                         id="BambooHR-Footer">Powered by
                            <a href="http://www.bamboohr.com" 
                               target="_blank" 
                               rel="noopener external nofollow noreferrer">
                                   <img src="https://resources.bamboohr.com/images/footer-logo.png" alt="BambooHR - HR software"/>
                            </a>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default OpeningsList;