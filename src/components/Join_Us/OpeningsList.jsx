import React, { Component, useState, useEffect } from 'react'
import CreateOpeningForm from './CreateOpeningForm';
import JobOpen from './JobOpen';
import uuid from 'react-uuid';

class OpeningsList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            openings: [],
            listing: [],
            link: [],
            place1: [],
            type1: []
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
            <div>
                {Array.isArray(this.state.openings) && this.state.openings.length === 0 ? "NO OPENINGS AT THIS TIME" : <span>{openings}</span>}
                <br />
                <CreateOpeningForm createOpening={this.createNewOpening} />
            </div>
         );
    }
}

// const OpeningsList = () => {

//     const [openings, setOpenings] = useState(0);

//     // const [currentTime, setCurrentTime] = useState(0);

//     useEffect(() => {
//         // fetch('http://127.0.0.1:5000/time').then(res => res.json()).then(data => {setCurrentTime(data.time);});

//         fetch('http://127.0.0.1:5000/job_postings').then(res => res.json()).then(data => {
//             console.log(data);
//             setOpenings(Object.values(data));
//         });}, []);

//     // console.log(currentTime)

//        console.log(openings);
//     return(
//         <div>
//             <p><strong>The current time is Beer Thirty.</strong></p>
//         </div>
//     )
// }

// OpeningsList.defaultProps = {

// }

// class OpeningsList extends Component {
//     constructor(props) {
//         super();
//         this.state = { 
//             openings: []
//         }
//     }

//     App = () => {
//         const [currentTime, setCurrentTime] = useState(0);

//         // useEffect = () => {
//         //     fetch('/time').then(res => res.json()).then(data => {
//         //         setCurrentTime(data.time);
//         //     });
//         // }

//         useEffect(() => {
//             fetch('/time').then(res => res.json()).then(data => {
//                 setCurrentTime(data.time);
//             });
//         }, []);

//         return(
//             <p><strong>The current time is {currentTime}.</strong></p>
//         )
//     }

//     createNewOpening = (newOpening) => {
//         this.setState({ 
//             openings: [...this.state.openings, newOpening] 
//         })
//     }

//     render() { 
//         {this.App()}
//         const openings = this.state.openings.map(opening => {
//             return ( 
//                 <JobOpen key={opening.id}
//                          id={opening.id}
//                          title={opening.title}
//                          location={opening.location}
//                          type={opening.type}
//                          link={opening.link}
//                          full_description={opening.full_description}
//                    />
//             );
//         });

//         return (
//             <div> 
//                 {Array.isArray(this.state.openings) && this.state.openings.length === 0 ? "NO OPENINGS AT THIS TIME" : <p>{openings}</p>}
//                 <br />
//                 <CreateOpeningForm createOpening={this.createNewOpening} />
//             </div>
//         );
//     }
// }
 
export default OpeningsList;