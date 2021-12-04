import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { useLocation } from "@reach/router"

const Head = ({ title, description }) => {
    const { pathname } = useLocation();

    const { site } = useStaticQuery(
        graphql`
        query {
            site {
                siteMetadata {
                    defaultTitle: title
                    defaultDescription: description
                    siteUrl
                    image
                    twitterUsername
                }
            }
        }
    `,
    );

    const {
        defaultTitle,
        defaultDescription,
        siteUrl,
        image,
        twitterUsername,
    } = site.siteMetadata;

    const metaData = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image}`,
        url: `${siteUrl}${pathname}`,
    };

    return (
        <Helmet title={title} defaultTitle={metaData.title} titleTemplate={`%s | ${defaultTitle}`}>
            <html lang="en" />

            <meta name="description" content={metaData.description} />
            <meta name="image" content={metaData.image} />

            <meta property="og:title" content={metaData.title} />
            <meta property="og:description" content={metaData.description} />
            <meta property="og:image" content={metaData.image} />
            <meta property="og:url" content={metaData.url} />
            <meta property="og:type" content="website" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={twitterUsername} />
            <meta name="twitter:title" content={metaData.title} />
            <meta name="twitter:description" content={metaData.description} />
            <meta name="twitter:image" content={metaData.image} />

            <meta name="google-site-verification" content="szT0AEj0n1e4YpRW3ZnE7acfqAsClKFNSdiNX7ofVSU" />
        </Helmet>
    );
};

export default Head;
