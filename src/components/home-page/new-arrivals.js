import React from 'react';

import ProductList from 'components/product-list';
import { Section } from 'ui';
import { useProducts } from 'hooks';

const NewArrivals = () => {
  const { products, isLoading } = useProducts();

  return (
    <Section chip='summer collection' title='new arrivals'>
      <ProductList isLoading={isLoading} products={products} />
    </Section>
  );
};
export default NewArrivals;
