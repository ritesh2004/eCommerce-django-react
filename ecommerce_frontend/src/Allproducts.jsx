import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";
import CarouselCom from "./CarouselCom";
import CardCom from "./CardCom";

const Allproducts = () => {

    const [products, setProduct] = useState([]);
    const [feature, setFeature] = useState([]);

    const getProduct = async () => {
        const res = await axios.get('http://127.0.0.1:8000/api/');
        console.log(res.data);
        setProduct(res.data);
        setFeature(
            res.data.filter((newPdts, index)=>{
                return (index === 1 || index === 2 || index === 3);
            })
        );
    }
    useEffect(() => {
        getProduct()
    }, [])
    return (
        <>
        <div className="allproducts">
            <CarouselCom />
            <div className="all-pdt-con">
                <div className="products">
                    {
                        products.map((product, index) => {
                            return (
                                <CardCom
                                    name={product.name}
                                    image={product.image}
                                    price={product.price}
                                    id={product.id}
                                />);
                        })
                    }
                </div>
            </div>
            <h2 className="text-center" id="top-rated">Top Rated</h2>
            <div className="feature-pdts">
                <div className="more-pdts">
                    {
                        feature.map((feature, index) => {
                            return (
                                <Cards
                                    name={feature.name}
                                    image={feature.image}
                                    price={feature.price}
                                    id={feature.id}
                                />
                            );
                        })
                    }
                </div>
            </div>
            </div>
        </>
    );
}


export default Allproducts;