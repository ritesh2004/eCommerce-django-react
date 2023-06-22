import React, { useEffect, useState } from "react";
import Img from "./Images/Img.jpg"
import About from "./About";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "./Contact";
import { useNavigate } from "react-router";
import SmallCards from "./SmallCards";
import axios from "axios";
import Footer from "./Footer";


const Home = () =>{

    const  navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [features, setFeature] = useState([]);
    const [deal, setDeal] = useState([]);

    const getProduct = async ()=>{
        try {
            let res = await axios.get('http://127.0.0.1:8000/api/');
            console.log(res.data)
            setProducts(
                res.data.filter((popPro,index)=>{
                    return (index === 2 || index === 3 || index === 4 || index === 5 || index === 6)
                })
            )
        } catch (error) {
            alert("Check Your Network Connectivity")
            console.log(error)
        }
    }


    const getFeature = async ()=>{
        try {
            let res = await axios.get('http://127.0.0.1:8000/api/');
            console.log(res.data)
            setFeature(
                res.data.filter((popPro,index)=>{
                    return (index === 4 || index === 5 || index === 3 || index === 6 || index === 7)
                })
            )
        } catch (error) {
            alert("Check Your Network Connectivity")
            console.log(error)
        }
    }

    const getDeal = async ()=>{
        try {
            let res = await axios.get('http://127.0.0.1:8000/api/');
            console.log(res.data)
            setDeal(
                res.data.filter((popPro,index)=>{
                    return (index === 2 || index === 7 || index === 4 || index === 5)
                })
            )
        } catch (error) {
            alert("Check Your Network Connectivity")
            console.log(error)
        }
    }

    useEffect(()=>{
        getProduct()
        getFeature()
        getDeal()
    },[])
    
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
                <span> </span>
                <br />
                <span className="popular-text">POPULAR PRODUCTS</span>
                <div className="popular">
                {products.map((product,index)=>{
                    return (
                        <SmallCards
                            image = {product.image}
                            name = {product.name}
                            price = {product.price}
                        />
                    )
                })}
                </div>
                <span className="feature-title">FEATURED PRODUCTS</span>
                <div className="feature">
                {features.map((feature,index)=>{
                    return (
                        <SmallCards
                            image = {feature.image}
                            name = {feature.name}
                            price = {feature.price}
                        />
                    )
                })}
                </div>
                <div className="dealofday">
                    <span className="deal-text">Deals of <br /> the Day</span>
                    {deal.map((deal,index)=>{
                    return (
                        <SmallCards
                            image = {deal.image}
                            name = {deal.name}
                            price = {deal.price}
                        />
                    )
                })}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;