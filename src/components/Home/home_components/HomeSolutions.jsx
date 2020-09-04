import React from 'react'

import './HomeSolutions.css';

const HomeSolutions = () => {
    return (
        <div>
            <div className="HomeSolutions py-4 bg-primary">
                <div className="HS-container container py-4">
                    <div className="d-flex align-items-center row text-primary py-4">
                        <div className="py-4 px-4 item text-white text-center" style={{ margin: "0 auto" }}>
                            <h1 className="py-4 display-4" style={{ letterSpacing: 3 }}>TOMORROW'S SOLUTIONS TODAY</h1>
                            <button className="btn btn-outline-light btn-primary btn-sm-sm btn-lg-lg px-4">LEARN MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        <div className="wave" style={{ height: "15vh", marginTop: -1 }}></div>
        </div>
    )
}

export default HomeSolutions;
