import { graphql } from 'gatsby';
import React from 'react';
import Blog from '../../components/Blog';

import Layout from "../../components/Layout";

function BlogPage({ data }) {
  const { allDevArticles: { nodes } } = data;

  return (
    <Layout>
      <main className="main">
        <h2 className="pg-header">Blog</h2>
        <div>
          {nodes.map(obj => {
            return <Blog title={obj.article.title} slug={obj.article.slug} description={obj.article.description} img={obj.article.cover_image} date={obj.article.published_at} />
          })}
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allDevArticles {
      nodes {
        article {
          title
          description
          cover_image
          published_at(formatString: "MMM DD, YYYY")
          slug
        }
      }
    }
  }
`

export default BlogPage;
