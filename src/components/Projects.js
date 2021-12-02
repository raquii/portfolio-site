import React from 'react';
import { Link } from 'gatsby';

import Project from "./Project";

function Projects({ projects, title, showLink }) {

    return (
        <section className="projects">
            <h2 className="section-header">{title}</h2>
            <div className="projects-container">
                {projects.map(project => {
                    return <Project key={project.id}
                        title={project.title}
                        description={project.description}
                        github={project.github}
                        demo={project.demo}
                        deployURL={project.deployURL}
                        image={project.image.localFile.childImageSharp.gatsbyImageData}
                        stack={project.stack}
                        slug={project.Slug}
                    />

                })}
            </div>
            {showLink &&
                <Link to="/projects" className="btn">
                    See All Projects
                </Link>
            }
        </section>
    )
};

export default Projects;
