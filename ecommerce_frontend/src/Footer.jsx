import React from "react";
import { useNavigate } from "react-router";

const Footer = () =>{

	const navigate = useNavigate()

	let year = new Date().getFullYear()

	return (
		<>
			<footer className="static-bottom">
				<span style={{color:'white', fontWeight:'500', fontSize:'larger'}}>© Copyright {year}</span>
			</footer>
		</>
	);
}

export default Footer;