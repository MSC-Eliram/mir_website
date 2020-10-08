import React from 'react';

import './SEAPORTE.css';

const SEAPORTE = () => {
    return ( 
        <div>
            <div className="seaporte row align-items-center">
                <div className="col-sm">
                    <h2>GSA IT SCHEDULE 70</h2>
                    <h3 className="text-primary" style={{ fontWeight: 100 }}>CONTRACT NUMBER: <strong>N00178-16-D-8893</strong></h3>
                </div>
                <div className="col-sm text-md-right text-lg-center">
                    <img src="https://www.teksynap.com/wp-content/uploads/2018/05/seaport-e-logo-official.png" alt="vehicle-logo" />
                </div>
            </div>
            {/* Text */}
            <br />

            <div className="scope">
                <h3 style={{ fontWeight: 100 }}>SCOPE:</h3>
                <p> The Seaport Enhanced (SeaPort-e) Multiple Award Contract (MAC) vehicle is the Navy's electronic acquisition platform 
                    for support services in 22 Functional Task Areas including Configuration Management, Software Programming, Information 
                    Technology support, and Program Management. SeaPort-e utilizes a web-based procurement portal to facilitate its performance-based 
                    service acquisitions to ensure efficiency, quality, and reduce cycle time. All task orders are competitively solicited, awarded 
                    and managed using the SeaPort-e platform. It was established by the NAVSEA Warfare Centers to increase efficiency and meet 
                    the objectives of Sea Power 21, a U.S. Navy transformation initiative created in 2002 by the Chief of Naval Operations (CNO), 
                    Admiral Vernon E. Clark. In 2004, the Virtual SYSCOM Commanders expanded the ordering community of Seaport-e to incorporate all 
                    Virtual SYSCOM activities. Currently, the Navy Systems Commands, the Office of Naval Research, Military Sealift Command, and the 
                    United States Marine Corps compete their service requirements among the 2400+ SeaPort-e IDIQ multiple award contract holders
                </p>
            </div>

            <br />
            <br />

            <div className="section1">
                <p>MirLogic Solutions is qualified for SeaPort-e Zones 1, 2, 3, 4, 5 and 6.</p>

                <br />
                <br />
            </div>
        </div>
    );
}
 
export default SEAPORTE;