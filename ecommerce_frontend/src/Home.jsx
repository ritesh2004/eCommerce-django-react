import React from "react";
import Img from "./Images/Img.jpg"
import About from "./About";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "./Contact";
import { useNavigate } from "react-router";


const Home = () =>{

    const  navigate = useNavigate();
    
    return(
        <>
            <div className="home">
                <img src={Img} alt="Home" className="home-cover" />
                <div className="home-info">
                    <span className="home-info-title">Online Shopping</span>
                    <br />
                    <div className="home-info-details">
                    <span style={{fontSize:'large',color:'white'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati quo animi dolores. Ut voluptas illo saepe excepturi nisi quisquam eum porro tempora iste, minima, id exercitationem reiciendis quam fugit mollitia sint repudiandae. Facere, temporibus? Eum eaque, vero quibusdam ex soluta rem vitae, delectus laborum maxime repellendus doloribus blanditiis omnis quam?</span>
                    </div>
                    <br />
                    <button className="shop-now" onClick={()=>{navigate('/allproducts')}}>Shop Now</button>
                </div>
                <About />
                <Contact />
            </div>
        </>
    );
}

export default Home;