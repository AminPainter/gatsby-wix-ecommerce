import dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

/**
 * @type {import('gatsby').GatsbyConfig}
 */
export default {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
  },
  plugins: ['gatsby-plugin-root-import'],
};
