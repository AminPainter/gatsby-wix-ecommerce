import React from 'react';
import { Skeleton, Stack } from '@mui/material';

import { Grid } from 'ui';

const CatalogLoader = () => (
  <Grid columns={3}>
    {new Array(3).fill('$').map((_, idx) => (
      <Stack key={idx} gap={2}>
        <Skeleton variant='rounded' height='20rem' />
        <Skeleton variant='rounded' width='70%' />
        <Skeleton variant='rounded' width='20%' />
        <Skeleton variant='rounded' />
      </Stack>
    ))}
  </Grid>
);

export default CatalogLoader;
