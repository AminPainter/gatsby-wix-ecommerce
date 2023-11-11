import React from 'react';

import ProductCard from 'components/product-card';
import { Grid } from 'ui';
import { CatalogLoader } from 'components/loaders';

const ProductList = ({ isLoading, products }) =>
  isLoading ? (
    <CatalogLoader />
  ) : (
    <Grid columns={3}>
      {products.map(product => (
        <ProductCard key={product._id} product={product} />
      ))}
    </Grid>
  );

export default ProductList;
