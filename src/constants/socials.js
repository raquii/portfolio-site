import React from "react";
import {
    FaGithubSquare,
    FaLinkedin,
    FaDev,
    FaTwitterSquare,
    SiReplit,
} from "react-icons/fa";

const data = [
    {
        id: 1,
        icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
        url: "https://www.github.com/raquii",
    },
    {
        id: 2,
        icon: <FaLinkedin className="social-icon"></FaLinkedin>,
        url: "https://www.linked.com/in/raquelromanrodri",
    },
    {
        id: 3,
        icon: <SiReplit className="social-icon"></SiReplit>,
        url: "https://replit.com/@raquiitw",
    },
    {
        id: 4,
        icon: <FaDev className="social-icon"></FaDev>,
        url: "https://www.dev.to/raquii",
    },
    {
        id: 5,
        icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
        url: "https://twitter.com/raquelitaroman",
    },
];

const links = data.map(link => {
    return (
        <li key={link.id}>
            <a href={link.url} className="social-link">
                {link.icon}
            </a>
        </li>
    )
});

export default () => {
    return (
        <ul className='social-links'>{links}</ul>
    )
};