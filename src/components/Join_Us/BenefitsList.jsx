import React, { Component } from 'react';

class BenefitsList extends Component {
    static defaultProps = {
        benefits: [
            {
                id: 0,
                img: "https://www.flaticon.com/svg/static/icons/svg/3126/3126507.svg",
                title: "PAID TIME OFF",
                text: "We offer competitive PTO based on experience that starts at two weeks per year."
            },
            {
                id: 1,
                img: "https://www.flaticon.com/svg/static/icons/svg/2693/2693507.svg",
                title: "HOLIDAYS",
                text: "We provide our employees with all 10 federal holidays."
            },
            {
                id: 2,
                img: "https://www.flaticon.com/svg/static/icons/svg/2937/2937390.svg",
                title: "MEDICAL AND DENTAL",
                text: "We pay 70% of the premium for our employees and their families."
            },
            {
                id: 3,
                img: "https://www.flaticon.com/svg/static/icons/svg/2210/2210743.svg",
                title: "SHORT-TERM AND LONG-TERM DISABILITY",
                text: "We pay 100% for our employees."
            },
            {
                id: 4,
                img: "https://www.flaticon.com/svg/static/icons/svg/1042/1042307.svg",
                title: "COMMUTER EXPENSE",
                text: "We provide each employee with a metro card and cover up to $120 per month to get to the client site or corporate office."
            },
            {
                id: 5,
                img: "https://www.flaticon.com/svg/static/icons/svg/1518/1518634.svg",
                title: "LIFE INSURANCE",
                text: "We pay 100% for our employees."
            },
            {
                id: 6,
                img: "https://www.flaticon.com/svg/static/icons/svg/784/784713.svg",
                title: "401K",
                text: "We provide 401 access, usage and creation."
            }
        ]
    }

    render() { 
        const benefitsDisplay = this.props.benefits.map(benefit => (
            <div className="card px-2 mb-2 border-0" style={{width: "15rem",  margin: "0 auto"}} key={benefit.id}>
                <img src={benefit.img} className="card-img-top" alt="benefit image" style={{ width: "50%", margin: "0 auto" }} />
                    <div className="card-body text-center">
                        <h5 className="card-title mx-2">{benefit.title}</h5>
                        <p className="card-text">{benefit.text}</p>
                    </div>
            </div>  
        ));

        return (  
            <div>
                <div className="row">
                    <div className="row align-items-top mt-4">
                        {benefitsDisplay}
                    </div>
                    
                </div>
                
            </div>
        );
    }
}
 
export default BenefitsList;