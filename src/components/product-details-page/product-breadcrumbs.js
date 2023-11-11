import React from 'react';
import { Link } from 'gatsby';
import { Breadcrumbs } from '@mui/material';

import { useCategories } from 'hooks';

const ProductBreadcrumbs = ({ product }) => {
  const [productCategoryId] = product.collectionIds;
  const { categories } = useCategories();
  const productCategory = categories?.find(cat => cat._id === productCategoryId);

  return (
    <Breadcrumbs separator='›' aria-label='breadcrumb' mb={2}>
      <Link to='/'>Home</Link>
      <Link to={productCategory ? `/products/category/${productCategory.slug}` : '/shop'}>
        {productCategory?.name.toLowerCase() === 'all products' ? 'shop' : productCategory?.name}
      </Link>
      <Link to={`/products/${product.slug}`}>{product.name}</Link>
    </Breadcrumbs>
  );
};

export default ProductBreadcrumbs;
