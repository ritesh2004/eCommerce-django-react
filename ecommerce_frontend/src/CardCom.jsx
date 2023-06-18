import React from "react";
import { useNavigate } from "react-router";

const CardCom = (props) =>{

    const navigate = useNavigate();

    return (
        <>
            <div className="card-com">
                <div className="image">
                    <img src={props.image} alt="product image" style={{height:'250px', width:'auto', maxWidth:'300px', minWidth:'300px'}} />
                </div>
                <div className="pro-short">
                    <span className="pro-name" onClick={()=>{navigate(`/${props.id}/`)}}>{props.name}</span>
                    <br />
                    <span style={{fontSize:'xx-large', fontWeight:'400'}}>{props.price}/-</span>

                </div>
            </div>
        </>
    );
}



export default CardCom;