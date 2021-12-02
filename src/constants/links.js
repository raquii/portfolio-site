import React from "react";
import { Link } from "gatsby";

const data = [
    {
        id: 1,
        text: "home",
        url: "/",
    },
    {
        id: 2,
        text: "about",
        url: "/about/",
    },
    {
        id: 3,
        text: "projects",
        url: "/projects/",
    },
    {
        id: 4,
        text: "contact",
        url: "/contact/",
    },
    {
        id: 5,
        text: "voice",
        url: "/voice/",
    },
];

const NavLinks = ({ setShow }) => {
    return (
        <ul className="nav-ul">{data.map(link => {
            return (
                <li key={link.id}>
                    <Link to={link.url} className="nav-link" activeClassName="active-link" onClick={() => setShow(false)}>{link.text}</Link>
                </li>
            )
        })}</ul>
    )
};

export default NavLinks;