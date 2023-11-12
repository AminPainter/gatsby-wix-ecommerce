import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { theme } from 'ui';
import favicon from 'images/logo.png';

const SiteSeo = ({ title, description, children }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
          title
          description
          author
        }
      }
    }
  `);

  return (
    <>
      <title>
        {title} | {siteMetadata.title}
      </title>

      <link rel='shortcut icon' href={favicon} />

      <meta name='description' content={description || siteMetadata.description} />
      <meta name='author' content={siteMetadata.author} />
      <meta name='theme-color' content={theme.palette.primary.light} />

      <meta name='og:title' content={`${title} | ${siteMetadata.title}`} />
      <meta name='og:site_name' content={siteMetadata.title} />
      <meta name='og:url' content={siteMetadata.siteUrl} />
      <meta name='og:description' content={description || siteMetadata.description} />
      <meta name='og:type' content='website/' />
      <meta name='og:image' content={favicon} />

      {children}
    </>
  );
};

export default SiteSeo;
