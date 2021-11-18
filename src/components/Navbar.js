import React, { useState } from "react";
import { Link } from "gatsby";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

import NavLinks from "../constants/links"

const Navbar = () => {
	const [show, setShow] = useState(false);

	return (
		<nav id="navbar">
			<div className="nav-div">
				<div className="nav-header">
					<Link to="/">
						<h1>Raquel</h1>
					</Link>
					<button className="nav-btn" onClick={() => setShow(!show)} >
						{show ? <MdClose /> : <FiMenu />}
					</button>
				</div>
				<div className={show ? "nav-menu show-links" : "nav-menu"}>
					<NavLinks setShow={setShow} />
				</div>
			</div>
		</nav >
	);
};

export default Navbar;
