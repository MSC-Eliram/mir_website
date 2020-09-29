import React, { Component, useState, useEffect } from 'react'
import CreateOpeningForm from './CreateOpeningForm';
import JobOpen from './JobOpen';

const OpeningsList = () => {
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/time', {mode: 'no-cors'}).then(res => res.json()).then(data => {setCurrentTime(data.time);});}, []);

    console.log(currentTime)
    return(
        <div>
            <p><strong>The current time is {currentTime}.</strong></p>
        </div>
    )
}

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