import React from 'react';

import { Hero, NewArrivals, FeaturedCollection } from 'components/home-page';
import SiteSeo from 'components/seo';

const IndexPage = () => (
  <>
    <Hero />
    <NewArrivals />
    <FeaturedCollection />
    <NewArrivals />
  </>
);

export default IndexPage;

export const Head = () => <SiteSeo title='Home' />;
