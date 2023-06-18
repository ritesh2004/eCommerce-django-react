import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Button from 'react-bootstrap/Button';

const Details = () =>{

    const { id } = useParams();

    const [product, setProduct] = useState([]);

    const getProduct = async () =>{
        let res = await axios.get(`http://127.0.0.1:8000/api/${id}`);
        console.log(id);
        console.log(res.data);
        setProduct(res.data);
    }

    useEffect(()=>{
        getProduct()
    }, []);

    let navigate = useNavigate();

    const deleteProduct = () =>{
        axios.delete(`http://127.0.0.1:8000/api/${id}/`);
        navigate('/products');
    }

    return (
        <>
        <div className="detail-con">
            <div className="details">
                <div className="images">
                    <img src={product.image} alt="Product Image" style={{height:'400px', width:'400px'}} />
                </div>
                <div className="info">
                    <h2>{product.name}</h2>
                    <hr />
                    <span className="span-price">{product.price}/-</span>
                    <hr />
                    <label htmlFor="category" style={{fontSize:'x-large', fontWeight:'600'}}>Category: </label>
                    <span style={{fontSize:'larger', fontWeight:'bold'}}> {product.category}</span>
                    <br />
                    <hr />
                    <label style={{fontSize:'x-large', fontWeight:'600'}}>Specification: </label>
                    <br />
                    <span>{product.specification}</span>
                    <div className="button-group">
                    <Button variant="warning" onClick={()=>{navigate(`/${id}/update`)}}>Update</Button>
                    <Button variant="danger" onClick={deleteProduct}>Delete</Button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}


export default Details;