import React from 'react';
import AssessmentTraining from './AssessmentTraining';
import CustomerTraining from './CustomerTraining';

const TrainingPage = () => {
    return (  
        <div>
            <div className="fromTheCEO" style={{ height: "26rem" }}></div>
            <div className="container mt-4">
                <div className="d-flex row mt-4">
                    <div className="py-4 px-4 item"> 
                        <AssessmentTraining />
                        <br />
                        <br />
                        <CustomerTraining />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default TrainingPage;