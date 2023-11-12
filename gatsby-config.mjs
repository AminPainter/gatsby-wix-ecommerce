import dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const siteUrl = 'https://www.yourdomain.tld';

/**
 * @type {import('gatsby').GatsbyConfig}
 */
export default {
  siteMetadata: {
    siteUrl,
    title: 'Wix Ecommerce',
    description: 'dummy description',
    author: 'Mohammed Amin Painter',
  },
  plugins: ['gatsby-plugin-root-import'],
};
