
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
        <div className={className}>
            <div className="project" >
                <GatsbyImage
                    alt={title}
                    image={image}
                    className="project-img"
                />
                <div className="project-info">
                    <Link to={`/projects/${slug}`} className={className !== "project-shell" ? "project-pg-link disabled" : "project-pg-link"}><h3>{title}</h3></Link>

                    <div className="project-links">
                        <a title="GitHub" className="project-link" href={github}>
                            <FaGithub /> GitHub
                        </a>
                        {demo && <a title="Demo Video" className="project-link" href={demo}>
                            <FaYoutube /> Demo
                        </a>}
                        {deployURL && <a title="Deployed App" className="project-link" href={deployURL}>
                            <FaRocket /> App Site
                        </a>}
                    </div>

                    <p>{description}</p>

                    {className === "project-pg" &&
                        <ul className="project-ul">
                            {details.map(d => <li key={d.id} className="project-li"><IoIosArrowDroprightCircle /> {d.item_name}</li>)}
                        </ul>
                    }
                    <div className="project-stack">
                        {stack.map(item => <span key={item.id} className="project-stack">{item.item_name}</span>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;
