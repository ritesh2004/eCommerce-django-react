import React from "react";


const SmallCards = (props) =>{
    return (
        <>
            <div className="small-cards">
                <img src={props.image} alt="product" />
                <span className="p-3 text-primary">{props.name}</span>
                <span className="text-success">{props.price}/-</span>
            </div>
        </>
    )
}



export default SmallCards;