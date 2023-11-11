import React, { useEffect, useState } from 'react';
import { Stack, Typography, useMediaQuery, useTheme } from '@mui/material';

import ProductSlider from './product-slider';
import ProductGallery from './product-gallery';
import ProductBreadcrumbs from './product-breadcrumbs';
import ProductInfo from './product-info';
import ProductCTA from './product-cta';
import ProductHeader from './product-header';
import ProductOptions from './product-options';
import { Counter, Grid, Section } from 'ui';
import { getVariantIdBySelectedChoices, isProductInCart } from 'utils/helpers';
import { useCart } from 'hooks';

const ProductDetails = ({ product }) => {
  const theme = useTheme();
  const isMobileDevice = useMediaQuery(theme.breakpoints.down('md'));

  const [quantity, setQuantity] = useState(1);

  const { cart } = useCart();
  const [productChoices, setProductChoices] = useState(() => {
    const initialChoices = {};

    product.productOptions.forEach(productOption => {
      initialChoices[productOption.name] = productOption.choices[0]?.description;
    });

    return initialChoices;
  });

  const selectedVariantId = getVariantIdBySelectedChoices(product.variants, productChoices);
  const productInCart = isProductInCart(cart, product._id, selectedVariantId);

  const handleProductChoiceChange = key => e =>
    setProductChoices(prevChoices => ({
      ...prevChoices,
      [key]: e.target.value,
    }));

  useEffect(() => {
    setQuantity(productInCart?.quantity || 1);
  }, [productInCart]);

  return (
    <Section maxWidth='lg'>
      <ProductBreadcrumbs product={product} />

      {isMobileDevice && <ProductSlider mediaItems={product.media.items} />}

      <Grid
        columns={['8rem', 1, 1]}
        sx={{ gridAutoRows: { md: '78vh' }, marginTop: { xs: 2, md: 0 } }}>
        {!isMobileDevice && <ProductGallery mediaItems={product.media.items} />}

        <Stack gap={3} paddingLeft='1rem' paddingRight='1rem'>
          <ProductHeader product={product} />

          {product.productOptions.map(productOptionsSet => (
            <Stack gap={1} key={productOptionsSet.name}>
              <Typography>{productOptionsSet.name}</Typography>
              <ProductOptions
                productOptionsSet={productOptionsSet}
                productChoices={productChoices}
                handleProductChoiceChange={handleProductChoiceChange}
              />
            </Stack>
          ))}
          <Stack gap={1}>
            <Typography>Quantity</Typography>

            <Counter
              count={quantity}
              minCount={1}
              disabled={!!productInCart}
              disabledText={!!productInCart && 'Quantity can be updated from the cart'}
              handleChange={newQuantity => setQuantity(newQuantity)}
            />
          </Stack>
          <ProductCTA
            product={product}
            variantId={selectedVariantId}
            productInCart={productInCart}
            quantity={quantity}
          />
        </Stack>
      </Grid>

      <ProductInfo product={product} />
    </Section>
  );
};
export default ProductDetails;
