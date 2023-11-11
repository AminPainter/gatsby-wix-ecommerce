import React from 'react';
import { Divider, Typography } from '@mui/material';

import Price from 'components/price';

const ProductHeader = ({ product }) => (
  <>
    <Typography variant='h3'>{product.name}</Typography>
    <div>
      <Typography>
        <Price product={product} />
      </Typography>
      <Typography variant='body2'>Price is inclusive of shipping and all other taxes!🥳</Typography>
    </div>

    <Divider />
  </>
);

export default ProductHeader;
