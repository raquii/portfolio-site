import React, { useState } from "react";
import { Link } from "gatsby";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import logo from '../assets/images/logo.png'
import NavLinks from "../constants/links"

const Navbar = () => {
	const [show, setShow] = useState(false);

	return (
		<nav id="navbar">
			<div className="nav-header">
				<Link to="/">
					<img src={logo} alt="raquel roman-rodriguez" className="logo-img" />
				</Link>
				<button className="nav-btn" onClick={() => setShow(!show)} >
					{show ? <MdClose /> : <FiMenu />}
				</button>
			</div>
			<div className={show ? "nav-links show-links" : "nav-links"}>
				<NavLinks setShow={setShow} />
			</div>
		</nav >
	);
};

export default Navbar;
