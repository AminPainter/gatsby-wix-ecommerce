import React from 'react';
import { Chip, Stack, Typography, styled } from '@mui/material';

import { Button, Grid, Section } from 'ui';
import featuredCollectionImage from 'images/test-featured-collection.jpg';

const FeaturedCollection = () => (
  <Section maxWidth='xl'>
    <Grid columns={[1.5, 1]} gap={0} mt={10}>
      <ImageFrame>
        <img src={featuredCollectionImage} alt='FEATURED COLLECTION' />
      </ImageFrame>

      <Stack
        gap={1}
        alignItems='flex-start'
        justifyContent='center'
        height='100%'
        sx={{ transform: 'translateX(-12%)' }}>
        <Chip label='Category Chip' variant='outlined' />
        <Typography variant='h2'>
          Slick. Modern. <br /> Awesome.
        </Typography>
        <Button>Explore whole collection</Button>
      </Stack>
    </Grid>
  </Section>
);

export default FeaturedCollection;

const ImageFrame = styled('figure')(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  height: '80vh',
  display: 'flex',
  justifyContent: 'center',
  borderRadius: theme.borderRadius.tiny,

  '& > img': {
    transform: 'translateY(-5rem)',
    borderRadius: theme.borderRadius.tiny,
  },
}));
