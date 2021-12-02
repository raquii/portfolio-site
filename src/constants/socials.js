import React from "react";
import {
    FaGithubSquare,
    FaLinkedin,
    FaDev,
    FaTwitterSquare,
    FaEnvelopeSquare
} from "react-icons/fa";
import { SiReplit } from "react-icons/si"

const data = [
    {
        id: 1,
        icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
        url: "https://www.github.com/raquii",
    },
    {
        id: 2,
        icon: <FaLinkedin className="social-icon"></FaLinkedin>,
        url: "https://www.linkedin.com/in/raquel-roman-rodriguez/",
    },
    {
        id: 3,
        icon: <SiReplit className="social-icon"></SiReplit>,
        url: "https://replit.com/@raquii",
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
    {
        id: 6,
        icon: <FaEnvelopeSquare className="social-icon"></FaEnvelopeSquare>,
        url: "mailto:raquelanaroman@gmail.com",
    },
];

const SocialLinks = () => {
    return (
        <div className="social-links">
            {data.map(link => {
                return (
                    <a href={link.url} key={link.id} className="social-link">
                        {link.icon}
                    </a>
                )
            })}
        </div>)
}

export default SocialLinks;