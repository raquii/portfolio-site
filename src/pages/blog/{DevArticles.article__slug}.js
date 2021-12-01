import { graphql } from 'gatsby';
import React from 'react'
import { IoCalendarOutline } from 'react-icons/io5';
import Layout from '../../components/Layout';


function ArticleTemplate(props) {
    const { devArticles: { article: { body_html, cover_image, published_at, title } } } = props.data;

    return (
        <Layout>
            <main className="main">

                <article className="blog-container">
                    <header className="blog-header">
                        <div className="blog-image-container">
                            <img
                                alt={title}
                                src={cover_image}
                                className="blog-img" />
                        </div>
                        <h2 className="blog-title">{title}</h2>
                        <p className="blog-date">
                            <IoCalendarOutline /> {published_at}</p>
                    </header>
                    <section className="blog-body" dangerouslySetInnerHTML={{ __html: body_html }} />
                </article>
            </main>
        </Layout>
    )
}

export const query = graphql`
    query getBlogPost($title: String) {
        devArticles(article: {title: {eq: $title}}) {
            article {
              title
              cover_image
              body_html
              published_at(formatString: "MMM D, YYYY")
            }
        }
    }
  
`;


export default ArticleTemplate;
