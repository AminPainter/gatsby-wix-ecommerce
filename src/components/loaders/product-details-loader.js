import React from 'react';
import { Box, Skeleton, Stack, useMediaQuery, useTheme } from '@mui/material';

import { Grid, Section } from 'ui';

const ProductDetailsLoader = () => {
  const theme = useTheme();
  const isMobileDevice = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Section maxWidth='lg'>
      {isMobileDevice ? (
        <Stack gap={2} alignItems='center'>
          <Skeleton variant='rounded' height='40vh' width='80vw' />

          <Stack direction='row' gap={1.5} mb={7}>
            <Skeleton variant='circular' height='1rem' width='1rem' />
            <Skeleton variant='circular' height='1rem' width='1rem' />
            <Skeleton variant='circular' height='1rem' width='1rem' />
            <Skeleton variant='circular' height='1rem' width='1rem' />
            <Skeleton variant='circular' height='1rem' width='1rem' />
          </Stack>

          <Stack width='100%' gap={2}>
            <Skeleton variant='rounded' height='3rem' width='100%' />
            <Skeleton variant='rounded' height='2rem' width='80%' />
            <Skeleton variant='rounded' height='2rem' width='60%' />
          </Stack>
        </Stack>
      ) : (
        <Grid columns={['8rem', 1, 1]} gap={2} sx={{ gridAutoRows: '78vh' }}>
          <Stack gap={2}>
            {new Array(4).fill('#').map((_, idx) => (
              <Skeleton key={idx} variant='rounded' height='7rem' />
            ))}
          </Stack>

          <Skeleton variant='rounded' height='100%' />

          <Stack gap={3} paddingLeft='1rem' paddingRight='1rem'>
            <Skeleton variant='rounded' height='4rem' />
            <Skeleton variant='rounded' height='2.5rem' />
            <Skeleton variant='rounded' />

            <Box mt='auto'>
              <Skeleton height='3rem' />
              <Skeleton height='3rem' />
            </Box>
          </Stack>
        </Grid>
      )}
    </Section>
  );
};

export default ProductDetailsLoader;
