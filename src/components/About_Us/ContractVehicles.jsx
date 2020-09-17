import React from 'react';

import GSA8 from './contractVehicles_components/GSA8';
import GSA70 from './contractVehicles_components/GSA70';
import SEAPORTE from './contractVehicles_components/SEAPORTE';

import './contractVehicles_components/GSA8.css';

const ContractVehicles = () => {
    return (
        <div>
            <h1 className="display-4 text-primary aboutUs-sections" id="contractVehicles">CONTRACT VEHICLES</h1>
            <br />    
                <GSA8 />
                <GSA70 />
                <SEAPORTE />
        </div>
    );
}
 
export default ContractVehicles;