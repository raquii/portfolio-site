import React, { useState } from "react";
import { Link } from "gatsby";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const links = [
    {
        id: 1,
        text: "home",
        url: "/",
    },
    {
        id: 2,
        text: "about",
        url: "/about",
    },
    {
        id: 3,
        text: "projects",
        url: "/projects",
    },
    {
        id: 4,
        text: "contact",
        url: "/contact",
    },
];

const voiceLinks = [
    {
        id: "v1",
        text: "about",
        url: "/voice",
    },
    {
        id: "v2",
        text: "lessons",
        url: "/voice/lessons",
    },
    {
        id: "v3",
        text: "students",
        url: "/voice/students",
    },
];

const NavLinks = ({ setShow }) => {
    const [open, setOpen] = useState(false);

    function handleKeyDown(e) {
        if (e.keyCode === 40) {
            setOpen(true);
        } else if (e.keyCode === 38) {
            setOpen(false);
        }
    };

    return (
        <ul className="nav-ul">
            {links.map(link => {
                return (
                    <li key={link.id}>
                        <Link to={link.url} className="nav-link" activeClassName="active-link" onClick={() => setShow(false)}>{link.text}</Link>
                    </li>
                );
            })}
            <li className="voice-li"
                onClick={() => setOpen(!open)}
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                onKeyDown={handleKeyDown}
                role="presentation"
                tabIndex="0"
            >
                <div className="voice-link-div nav-link">
                    <p aria-haspopup="true" aria-expanded={open ? "true" : "false"}>voice</p> {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
                <div className={open ? "voice-nav open-popup" : "voice-nav"}>
                    <ul>
                        {voiceLinks.map(link => {
                            return (
                                <li key={link.id}>
                                    <Link to={link.url} className="voice-link" activeClassName="active-link" onClick={() => setShow(false)}>{link.text}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </li>
        </ul>
    )
};

export default NavLinks;