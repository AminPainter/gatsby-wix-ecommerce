import React from 'react';

import { Hero, NewArrivals, LatestCollection, FeaturedCollection } from 'components/home-page';
import SiteSeo from 'components/seo';

const IndexPage = () => (
  <>
    <Hero />
    <NewArrivals />
    <LatestCollection />
    <FeaturedCollection />
    <NewArrivals />
  </>
);

export default IndexPage;

export const Head = () => <SiteSeo title='Home' />;
