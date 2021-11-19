import { graphql } from 'gatsby';
import React from 'react';
import Projects from '../components/Projects';
import Layout from "../components/Layout";

function ProjectsPage({ data }) {
  const { allStrapiProjects: { nodes: projects } } = data;
  console.log(projects)
  return (
    <Layout>
      <main className="main">
        <Projects projects={projects} title="Projects" />
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(sort: {fields: id}) {
      nodes {
        id
        title
        description
        github
        demo
        deployURL
        stack {
          id
          item_name
        }
        project_details {
          id
          item_name
        }
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

export default ProjectsPage;
