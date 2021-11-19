
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
    details,
    stack,
    id
}) {
    console.log(stack)
    return (
        <div className="project">
            <GatsbyImage
                alt={title}
                image={image}
                className="project-img" />
            <div className="project-info">
                <h3>{title}</h3>
                <p>{description}</p>
                <ul>{details.map(d => <li key={d.id}>→ {d.item_name}</li>)}</ul>
                <div className="project-links">
                    <a href={github}>
                        <FaGithub /> GitHub
                    </a>
                    {demo && <a href={demo}>
                        <FaYoutube /> Demo Video
                    </a>}
                    {deployURL && <a href={deployURL}>
                        <FaRocket /> Deployed App
                    </a>}
                </div>
                <div className="project-stack">
                    {stack.map(item => <span key={item.id} className="project-stack">{item.item_name}</span>)}
                </div>
            </div>
        </div>
    )
}

export default Project;
