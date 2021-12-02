import React from 'react';
import { graphql } from 'gatsby';
import Project from '../../components/Project';
import Layout from '../../components/Layout';


function ProjectPage({ data }) {
  const { strapiProjects } = data;
  return (
    <Layout>
      <main className="main">
        <Project title={strapiProjects.title}
          description={strapiProjects.description}
          github={strapiProjects.github}
          demo={strapiProjects.demo}
          deployURL={strapiProjects.deployURL}
          details={strapiProjects.project_details}
          image={strapiProjects.image.localFile.childImageSharp.gatsbyImageData}
          stack={strapiProjects.stack}
          className="project-pg"
          slug={strapiProjects.Slug}
        />
      </main>
    </Layout>
  )
}

export const query = graphql`
query projectQuery($id: String) {
    strapiProjects(id: {eq: $id}) {
      title
      description
      deployURL
      demo
      github
      Slug
      image {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      project_details {
        id
        item_name
      }
      stack {
        id
        item_name
      }
      id
    }
  }
`
export default ProjectPage;