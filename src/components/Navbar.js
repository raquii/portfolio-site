import React, { useState } from "react";
import { Link } from "gatsby";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import NavLinks from "../constants/links"
import { StaticImage } from "gatsby-plugin-image";

const Navbar = () => {
	const [show, setShow] = useState(false);

	return (
		<nav id="navbar">
			<Link to="/" className="logo-link">
				<span id="logo-span">R³</span>
			</Link>

			<button className="nav-btn" onClick={() => setShow(!show)} >
				{show ? <MdClose /> : <FiMenu />}
			</button>

			<div className={show ? "nav-links show-links" : "nav-links"}>
				<NavLinks setShow={setShow} />
			</div>
		</nav >
	);
};

export default Navbar;
