import React from "react";
import { Link } from "gatsby";

const Navbar = () => {
	return (
		<nav id="navbar">
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/projects">Projects</Link>
			<Link to="/blog">Blog</Link>
			<Link to="/contact">Contact</Link>
			<Link to="/voice">Voice Lessons</Link>
		</nav>
	);
};

export default Navbar;
