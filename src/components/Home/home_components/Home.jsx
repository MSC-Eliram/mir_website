import React from 'react'

import './Home.css';

const Home = () => {
    return (
        <div className="Home d-flex align-items-center">
            <div className="textCenterBox py-2 px-4 item text-center" style={{  backgroundColor: "rgba(255, 255, 255, 0.7", margin: "0 auto" }}>
                <span><h1 className="textCenter display-4 text-primary">SUCCESS THROUGH DEDICATION & EXECUTION</h1></span>
                <div>
                    <button className="btn btnn-lg btn-outline-primary mt-4">LEARN MORE</button>
                </div>
            </div>
        </div>
    )
}

export default Home;


// <div className="Home">
// <div className="row align-items-end" style={{ height: "100%", border: "1px #333 solid" }}>
//     <div className="col-sm bg-primary" style={{border:"1px solid #333"}}>Equal Width Stack</div>
//     <div className="col-sm bg-secondary" style={{border:"1px solid #333"}}>Equal Width Stack</div>
//     <div className="col-sm bg-info" style={{border:"1px solid #333"}}>Equal Width Stack</div>
//     <div className="col-sm bg-danger" style={{border:"1px solid #333"}}>Equal Width Stack</div>
//     <div className="col-sm bg-warning" style={{border:"1px solid #333"}}>Equal Width Stack</div>
// </div>
// </div>