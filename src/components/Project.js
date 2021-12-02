
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FaGithub, FaYoutube, FaRocket } from "react-icons/fa"

function Project({
    title,
    description,
    github,
    demo,
    deployURL,
    image,
    stack,
    id
}) {
    return (
        <div className="project-shell">

            <div className="project">
                <GatsbyImage
                    alt={title}
                    image={image}
                    className="project-img" />
                <div className="project-info">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    {/* <ul className="project-details">{details.map(d => <li key={d.id}>→ {d.item_name}</li>)}</ul> */}
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
        </div>
    )
}

export default Project;
