import React from "react";




const CartCom = (props) =>{


    return (
        <>
            <div className="cartcom">
                <div className="cart-image">
                    <img src={props.image} alt="" />
                </div>
                <div className="pro-de">
                    <span id="pro-name">{props.name}</span>
                    <br />
                    <span id="pro-price">{props.price}/-</span>
                    <span className="ms-5 text-success">Free Delivery</span>
                    <br />
                    <span>Qty: {props.quantity}</span>
                </div>
            </div>
        </>
    )
}





export default CartCom;