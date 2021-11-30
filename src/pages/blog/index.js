import { graphql } from 'gatsby';
import React from 'react';

import Layout from "../../components/Layout";

function BlogPage({ data }) {
  return (
    <Layout>
      <main className="main">
        <h2 className="pg-header">Blog</h2>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allDevArticles {
      nodes {
        article {
          body_html
          title
          description
          cover_image
          published_at(formatString: "MMM DD, YYYY")
        }
      }
    }
  }
`

export default BlogPage;
