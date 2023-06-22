import React, { useContext, useEffect, useState } from "react";
import CartCom from "./CartCom";
import Authcontext from "./context/Authcontext";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';



const Carts = () => {


    const [products, setProducts] = useState([]);
    const [item, setItem] = useState();
    const [total, setTotal] = useState();
    let { user } = useContext(Authcontext);

    const getAdded = async () => {
        try {
            const res = await axios.get(`http://127.0.0.1:8000/added/${user['username']}/`)

            setProducts(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAdded()
        setPriceDetails()
    }, [])

    const setPriceDetails = async () => {
        let total = 0;
        let item = 0;
        try {
            const res = await axios.get(`http://127.0.0.1:8000/added/${user['username']}/`)
            for (let i = 0; i < res.data.length; i++) {
                total += (res.data[i].price * res.data[i].quantity)
                item += (res.data[i].quantity)
            }
            setItem(item)
            setTotal(total)
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
            "amount": total*100,
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
                <div className="carts">
                    <div className="added">
                        {products.map((pro, index) => {
                            return (
                                <CartCom
                                    name={pro.name}
                                    image={pro.image}
                                    price={pro.price}
                                    quantity={pro.quantity}
                                />
                            )
                        })}
                    </div>
                    <div className="bill-pay">
                        <span id="price-details">PRICE DETAILS</span>
                        <hr />
                        <Table striped bordered hover>
                            <tbody>
                                <tr>
                                    <td>Price ({item} items)</td>
                                    <td>{total}/-</td>
                                </tr>
                                <tr>
                                    <td>Delivery Charges</td>
                                    <td className="text-success">Free</td>
                                </tr>
                                <tr>
                                    <th>Total Amount</th>
                                    <th>{total}/-</th>
                                </tr>
                            </tbody>
                        </Table>
                        <Button variant="primary" onClick={makePayment}>Pay with card</Button>
                        <span>  </span>
                        <Button variant="warning">Cash on delivery</Button>

                    </div>
                </div>
            </>
        )
}




    export default Carts;