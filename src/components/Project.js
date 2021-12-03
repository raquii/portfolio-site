
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FaGithub, FaYoutube, FaRocket } from "react-icons/fa"
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from 'gatsby';


function Project({
    title,
    description,
    github,
    demo,
    deployURL,
    image,
    details,
    stack,
    slug,
    className = "project-shell"
}) {

    return (
        <Link to={`/projects/${slug}`} className={className}>
            <div className="project" >
                <GatsbyImage
                    alt={title}
                    image={image}
                    className={className !== "project-shell" ? "project-img project-img-pg" : "project-img"}
                />
                <div className="project-info">
                    <h3>{title}</h3>
                    <p>{description}</p>

                    {className === "project-pg" &&
                        <ul className="project-ul">
                            {details.map(d => <li key={d.id} className="project-li"><IoIosArrowDroprightCircle /> {d.item_name}</li>)}
                        </ul>
                    }
                    <div className="project-links">
                        <a className="project-link" href={github}>
                            <FaGithub /> GitHub
                        </a>
                        {demo && <a className="project-link" href={demo}>
                            <FaYoutube /> Demo Video
                        </a>}
                        {deployURL && <a className="project-link" href={deployURL}>
                            <FaRocket /> Deployed App
                        </a>}
                    </div>
                    <div className="project-stack">
                        {stack.map(item => <span key={item.id} className="project-stack">{item.item_name}</span>)}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Project;
