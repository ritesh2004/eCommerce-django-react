import React from "react";
import { useNavigate } from "react-router";

const Footer = () =>{

	const navigate = useNavigate()

	return (
		<>
			<footer>
				<h2 className="text-center" style={{width:'100%', backgroundColor:'#02343C'}} onClick={()=>{navigate('/products/')}}>Footer</h2>
			</footer>
		</>
	);
}

export default Footer;