import React from 'react';

import GSA8 from './contractVehicles_components/GSA8';
import GSA70 from './contractVehicles_components/GSA70';
import SEAPORTE from './contractVehicles_components/SEAPORTE';

import './contractVehicles_components/GSA8.css';

const ContractVehicles = () => {
    return (
        <div>
            <div className="contractVehicles" style={{ height: "26rem" }}></div>
                <div className="container mt-4">
                    <div className="d-flex align-items-start row mt-4">
                        <div className="py-4 px-4 item" style={{ height: "100%" }}>
                            <h1 className="display-4 text-primary">CONTRACT VEHICLES</h1>
                        <br />    
                            <GSA8 />
                            <GSA70 />
                            <SEAPORTE />
                    </div>
                </div>
            </div>
        </div>
    
    );
}
 
export default ContractVehicles;