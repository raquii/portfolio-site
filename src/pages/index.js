import { graphql } from "gatsby";
import * as React from "react";

import Layout from "../components/Layout";
import Projects from "../components/Projects";

const IndexPage = ({ data }) => {
  const { allStrapiProjects: { nodes: projects } } = data;

  return (
    <Layout>
      <main className="main">
        <title>Home Page</title>
        <h1>
          Hi, I'm Raquel.
        </h1>
        <p>
          I'm a software developer based in Cleveland, Ohio. I'm also a professional singer and a former-academic.
        </p>
        <Projects projects={projects} title="Featured Projects" showLink />
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
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

export default IndexPage;
