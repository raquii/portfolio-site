import { graphql } from "gatsby";
import * as React from "react";
import "@fontsource/poppins";
import "@fontsource/montserrat";

import Layout from "../components/Layout";
import Projects from "../components/Projects";

const IndexPage = ({ data }) => {
  const { allStrapiProjects: { nodes: projects } } = data;

  return (
    <Layout>
      <main className="main">
        <title>Home Page</title>
        <h1 className="home-header">
          Hello, I'm Raquel.
        </h1>
        <p className="home-text">
          I'm a full-stack software developer based in Cleveland, Ohio. I am passionate about UI/UX design, accessibility,
        </p>
        <p className="home-text">
          I'm also a professional singer and a former professor of music.
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
        Slug
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
