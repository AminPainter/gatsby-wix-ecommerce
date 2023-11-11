import { Box, Typography } from '@mui/material';
import React from 'react';

const ProductInfo = ({ product }) => (
  <>
    <Typography variant='h4' mt={5} mb={1}>
      Product descrpition
    </Typography>
    <p dangerouslySetInnerHTML={{ __html: product.description }} />

    {product.additionalInfoSections.map((infoSec, idx) => (
      <Box key={idx} mt={5}>
        <Typography variant='h4' mb={1}>
          {infoSec.title}
        </Typography>
        <p dangerouslySetInnerHTML={{ __html: infoSec.description }} />
      </Box>
    ))}
  </>
);

export default ProductInfo;
