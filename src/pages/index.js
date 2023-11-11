import React from 'react';

import { Hero, NewArrivals, FeaturedCollection } from 'components/home-page';

const IndexPage = () => (
  <>
    <Hero />
    <NewArrivals />
    <FeaturedCollection />
    <NewArrivals />
  </>
);

export default IndexPage;
