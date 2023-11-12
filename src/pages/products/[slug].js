import React, { useEffect } from 'react';
import { navigate } from 'gatsby';

import { useProductDetails } from 'hooks';
import { ProductDetails, ProductDetailsLoader } from 'components/product-details-page';
import SiteSeo from 'components/seo';

const ProductDetailPage = ({ params }) => {
  const { product, isLoading } = useProductDetails(params.slug);

  useEffect(() => {
    // Show 404 error page if the product with params.slug could not be found in the database
    if (!isLoading && !product) navigate('/404');
  }, [isLoading, product]);

  if (isLoading) return <ProductDetailsLoader />;

  if (!product) return <>Error</>;

  return <ProductDetails product={product} />;
};

export default ProductDetailPage;

export const Head = ({ params: { slug } }) => <SiteSeo title={slug} />;
