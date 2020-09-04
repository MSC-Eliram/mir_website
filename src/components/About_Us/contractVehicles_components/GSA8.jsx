import React from 'react';

import './GSA8.css';

const GSA8 = () => {
    return ( 
        <div>
            <div className="gsa-8 row align-items-center">
                <div className="col-sm">
                    <h2>GSA 8(A) STARS II</h2>
                    <h3 className="text-primary" style={{ fontWeight: 100 }}>CONTRACT NUMBER: <strong>GS00Q17GWD2088</strong></h3>
                </div>
                <div className="col-sm text-md-right text-lg-center">
                    <img src="https://romanykconsulting.com/wp-content/uploads/2015/07/stars_II_final@1x.png" alt="vehicle-logo" />
                </div>
            </div>
            {/* Text */}
            <br />
            
            <div className="scope">
                <h3 style={{ fontWeight: 100 }}>SCOPE:</h3>
                <p> The 8(a) STARS II GWAC promotes small business opportunities when purchasing information technology (IT)
                    services or IT services-based solutions for the federal government. The program is reserved exclusively for qualifying
                    certified 8(a) small business concerns as the prime contractors. MirLogic is eligible to compete for contracts in
                    Functional Areas 1, 2, 3, and 4 for Constellation I.
                </p>
            </div>
            
            <br />
            <br />

            <div className="section">
                <h6>FUNCTIONAL AREA 1 â€“ NAICS 541511 â€“ CUSTOM COMPUTER PROGRAMMING SERVICES</h6>
                
                <br />

                <p>This U.S. industry comprises establishments primarily engaged in writing, modifying, testing, and supporting software to meet the needs of a customer.</p>
                <ul>
                    <li><span>Custom computer applications software programming services</span></li>
                    <li><span>Custom computer program or software developmen</span></li>
                    <li><span>Custom computer programming services</span></li>
                    <li><span>Custom computer software analysis and design services</span></li>
                    <li><span>Custom computer software programming services</span></li>
                    <li><span>Custom computer software support services</span></li>
                    <li><span>Web (i.e., Internet) page design services, custom</span></li>
                </ul>

                <br />
                <br />
            </div>
            <div className="section">
                <h6>FUNCTIONAL AREA 2 â€“ NAICS 541512 â€“ COMPUTER SYSTEMS DESIGN SERVICES</h6>

                <br />

                <p>This U.S. industry comprises establishments primarily engaged in planning and designing computer systems that integrate
                    computer hardware, software, and communication technologies. The hardware and software components of the system may
                    be provided by this establishment or company as part of integrated services or may be provided by third parties or vendors.
                    These establishments often install the system and train and support users of the system.
                </p>
                <ul>
                    <li><span>CAD (computer-aided design) systems integration design services</span></li>
                    <li><span>CAE (computer-aided engineering) systems integration design</span></li>
                    <li><span>CAM (computer-aided manufacturing) systems integration design</span></li>
                    <li><span>Computer hardware consulting services or consultants</span></li>
                    <li><span>Computer software consulting services or consultants</span></li>
                    <li><span>Computer systems integration analysis and design services</span></li>
                    <li><span>Computer systems integration design consulting services</span></li>
                    <li><span>Computer integrator services</span></li>
                    <li><span>Information management computer systems integration design services;</span></li>
                    <li><span>Local Area Network (LAN) computer systems integration design services</span></li>
                    <li><span>Computer network systems design services</span></li>
                    <li><span>Office automation computer systems integration design services</span></li>
                </ul>

                <br />
                <br />
            </div>
            <div className="section">
                <h6>FUNCTIONAL AREA 3 â€“ NAICS 541513 â€“ COMPUTER FACILITIES MANAGEMENT SERVICES</h6>

                <br />

                <p>This U.S. industry comprises establishments primarily engaged in providing on-site management and operation of the
                clientâ€™s computer systems and/or data processing facilities. Establishments providing computer systems or data
                processing facilities support services are included in this industry.
                        </p>
                <ul>
                    <li><span>Computer systems facilities management and operation services;</span></li>
                    <li><span>Data processing facilities management and operation services;</span></li>
                    <li><span>Computer systems or data processing facilities management and operation services</span></li>
                    <li><span>Computer systems or data process facilities support services</span></li>
                </ul>

                <br />
                <br />
            </div>
            <div className="section">
                <h6>FUNCTIONAL AREA 4 â€“ NAICS 541519 â€“ OTHER COMPUTER RELATED SERVICES</h6>

                <br />

                <p>This U.S. industry comprises establishments primarily engaged in providing computer-related
                services (except custom programming, systems integration design, and facilities management services).
                Establishments providing computer disaster recovery services or software installation services are included in this industry
                            </p>
                <ul>
                    <li><span>Computer disaster recovery services</span></li>
                    <li><span>Computer software installation services</span></li>
                </ul>

                <br />
                <br />
            </div>
        </div>
    );
}
 
export default GSA8;