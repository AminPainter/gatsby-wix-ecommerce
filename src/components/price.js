import React from 'react';
import { Stack, Typography } from '@mui/material';

const Price = ({ product }) => (
  <>
    {product.price.formatted.discountedPrice}

    {product.discount.type.toLowerCase() !== 'none' && (
      <Stack
        component='span'
        direction='row'
        gap={1}
        display='inline-flex'
        ml={1}
        alignItems='baseline'>
        <s>{product.price.formatted.price}</s>
        <Typography component='span' color='neutral.green' fontWeight={600}>
          {product.discount.value}
          {product.discount.type.toLowerCase() === 'percent'
            ? '%'
            : ` ${product.price.currency}`}{' '}
          Off
        </Typography>
      </Stack>
    )}
  </>
);

export default Price;
