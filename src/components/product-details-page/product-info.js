import React from 'react';
import { Box } from '@mui/material';

import { Heading } from 'ui';

const ProductInfo = ({ product }) => (
  <>
    <Heading variant='tertiary' mt={5} mb={1}>
      Product descrpition
    </Heading>
    <p dangerouslySetInnerHTML={{ __html: product.description }} />

    {product.additionalInfoSections.map((infoSec, idx) => (
      <Box key={idx} mt={5}>
        <Heading variant='tertiary' mb={1}>
          {infoSec.title}
        </Heading>
        <p dangerouslySetInnerHTML={{ __html: infoSec.description }} />
      </Box>
    ))}
  </>
);

export default ProductInfo;
