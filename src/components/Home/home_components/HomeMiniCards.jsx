import React, { Component } from 'react';
import './HomeMiniCards.css';

class HomeMiniCards extends Component {
    static defaultProps = {
        cards: [
            {
                id: 1, 
                img: "https://image.flaticon.com/icons/svg/2910/2910793.svg",
                text: "STATEGIC ANALYSIS SERVICES"
            }, 
            {
                id: 2, 
                img: "https://image.flaticon.com/icons/svg/850/850316.svg",
                text: "PROGRAM SUPPORT SERVICES" 
            }, 
            // {
            //     id: 3, 
            //     img: "https://image.flaticon.com/icons/svg/492/492619.svg",
            //     text: "CYBER ASSESSMENT SERVICES"
            // },
            {
                id: 4, 
                img: "https://image.flaticon.com/icons/svg/104/104941.svg",
                text: "SOLUTION DEVELOPMENT SERVICES"
            }
            // {
            //     id: 5, 
            //     img: "https://image.flaticon.com/icons/svg/2666/2666405.svg",
            //     text: "CERTIFICATION TRAINING"
            // }
        ]
    }

    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const list = this.props.cards.map(card => (
            <div className="col-sm mt-4" key={card.id}>
                <div className="text-dark text-center">
                    <p className="miniCardText text-primary">{card.text}</p>
                    <img src={card.img} alt="image" style={{ width: "20%", marginBottom: "0.7rem" }} />
                    <div>
                        <button className="btn btn-outline-primary align-items-center mb-2">
                            Explore
                        </button>
                    </div>
                </div>
                <hr />
            </div>
                   
        ))
        return ( 
            <div className="homeCards mb-4">
                <div className="container">
                    <div className="row align-items-center">
                        {list}
                    </div>
                </div>
            </div>
        );
    }
}
 
export default HomeMiniCards;