import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Button from 'react-bootstrap/Button';
import Authcontext from './context/Authcontext';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Showproducts = () =>{

    const {id} = useParams();


    const [product, setProduct] = useState([]);
    const [added, setAdded] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [Id, setId] = useState()
    const [total, setTotal] = useState();

    const {user} = useContext(Authcontext);

    const getProduct = async () =>{
        let res = await axios.get(`http://127.0.0.1:8000/api/${id}`);
        // console.log(id);
        // console.log(res.data);
        setProduct(res.data);
    }

    const isAdded = async () =>{
        let res = await axios.get(`http://127.0.0.1:8000/added/${user['username']}/`);
        for (let index = 0; index < res.data.length; index++) {
            // console.log(res.data[0].name)
            if (res.data[index].name === product.name) {
                // console.log("Already added")
                setQuantity(res.data[index].quantity)
                setAdded(true)
                setId(res.data[index].id)
            }
            else{
                setAdded(false)
            }
        }
    }

    const removeFromCart = ()=>{
        try {
            console.log(Id)
            axios.delete(`http://127.0.0.1:8000/carts/${Id}/`)
        } catch (error) {
            console.log(error)
            alert("Something went wrong!")
        }
    }

    useEffect(()=>{
        getProduct()
    });

    useEffect(()=>{
        isAdded()
    });

    let navigate = useNavigate();

    // const deleteProduct = () =>{
    //     axios.delete(`http://127.0.0.1:8000/api/${id}/`);
    //     navigate('/products');
    // }

    

    const addToCart = async () =>{
        let formfield = new FormData();
        formfield.append('user', user['username']);
        formfield.append('name', product.name);
        formfield.append('price', product.price);
        formfield.append('specification', product.specification);
        formfield.append('category', product.category);
        formfield.append('image',product.image);
        if (quantity > 0) {
            formfield.append('quantity',quantity)
        }else{
            alert('Invalid Input!')
        }

        try {
            await axios({
                method: "post",
                url: "http://127.0.0.1:8000/carts/",
                data: formfield
            }).then((res)=>{
                console.log(res.status);
                if(res.status === 201){
                    console.log("cartAdded")
                    setAdded(true);
                    // console.log(cartAdded)
                }        
            })
        } catch (error) {
            console.log(error)
        }
    }


    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement('script')
            script.src = src

            script.onload = () => {
                resolve(true)
            }

            script.onerror = () => {
                resolve(false)
            }

            document.body.appendChild(script)
        })
    }

    const makePayment = async () => {
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")

        if (!res) {
            alert("You are offline! Failed to load...")
        }

        var options = {
            "key": "rzp_test_h2zT2LYD0DiE3S", // Enter the Key ID generated from the Dashboard
            "amount": product.price * quantity * 100,
            "currency": "INR",
            "name":"E-commerce",
            "description": "Thanks For Your Purchase",
            "image": "https://s3.amazonaws.com/rzp-mobile/images/rzp.jpg",
            "prefill":
            {
                "email": "ritesh@gmail.com",
                "contact": +919900000000,
            },
            
            "handler": function (response) {
                alert(response.razorpay_payment_id);
            },
            
        }
        const rzp1 = new window.Razorpay(options)
        rzp1.open()
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
                    <hr />
                    <br />
                    <label style={{fontSize:'x-large', fontWeight:'600'}}>Quantity: </label>

                    <button style={{marginLeft:'10px', marginRight:'10px', borderRadius:'7px', backgroundColor:'#ffff5b', border:'solid 1px yellow'}} onClick={()=>{setQuantity(quantity-1)}}>  <RemoveIcon /> </button>


                    <input type="number" name="quantity" value={quantity} onChange={(e)=>{setQuantity(e.target.value)}} style={{width:'30px', overflow:'none'}}/>


                    <button style={{marginLeft:'10px', marginRight:'10px', borderRadius:'7px', backgroundColor:'#ffff5b', border:'solid 1px yellow'}} onClick={()=>{setQuantity(quantity+1)}}> <AddIcon /> </button>

                    <div className="button-group">
                    {added?(<Button variant="warning" onClick={removeFromCart}>Remove from cart</Button>):(<Button variant="warning" onClick={addToCart}>Add to cart</Button>)}
                    <Button variant="primary" onClick={makePayment} >Buy Now</Button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}


export default Showproducts;