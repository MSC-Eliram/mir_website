import React from 'react';

import Hill from '../../../images/hill.jpg';

import './Carousel.css'

const Carousel = () => {
    return (  
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={Hill} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Hill} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Hill} alt="Third slide" />
                    </div>
                </div>
                
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <i className="fas fa-chevron-left text-secondary" style={{ fontSize: "35px" }}></i>
                    <span className="sr-only bg-primaty">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <i className="fas fa-chevron-right text-secondary" style={{ fontSize: "35px" }}></i>
                    <span className="sr-only">Next</span>
                </a>
        </div>
    );
}
 
export default Carousel;