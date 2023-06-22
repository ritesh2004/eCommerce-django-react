import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Img1 from "./Images/Img1.jpg";
import Img2 from "./Images/Img2.jpg";
import Img3 from "./Images/Img3.jpg";

const CarouselCom = () => {
    return (
        <>
            <div className="carousal">
                <div className="carousal-con">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Img1}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3 style={{textShadow:'0px 2px 5px rgba(0,0,0,0.5)'}}>First slide label</h3>
                                <p style={{textShadow:'0px 2px 5px rgba(0,0,0,0.5)'}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Img2}
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3 style={{textShadow:'0px 2px 5px rgba(0,0,0,0.5)'}}>Second slide label</h3>
                                <p style={{textShadow:'0px 2px 5px rgba(0,0,0,0.5)'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Img3}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3 style={{textShadow:'0px 2px 5px rgba(0,0,0,0.5)'}}>Third slide label</h3>
                                <p style={{textShadow:'0px 2px 5px rgba(0,0,0,0.5)'}}>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </>
    );
}

export default CarouselCom;