import React from 'react';

import Project from "./Project";

function Projects({ projects, title }) {

    return (
        <section className="projects">
            <div className="header-container">
                <h2 className="section-header">{title}</h2>
            </div>
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
        </section>
    )
};

export default Projects;
