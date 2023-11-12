import React from 'react';
import { Chip, Stack, Typography, styled } from '@mui/material';

import { Button, Heading, Section } from 'ui';
import latestCollectionBgImg from 'images/latest-collection.jpg';

const LatestCollection = () => (
  <Section maxWidth='xl'>
    <CollectionWrapper>
      <Chip variant='filled' label='Latest collection' sx={{ backgroundColor: 'common.white' }} />

      <div>
        <Heading color='common.white' textAlign='center'>
          Be different in your own way!
        </Heading>
        <Typography color='common.white' textAlign='center'>
          Find your unique style.
        </Typography>
      </div>

      <Button>Shop collection</Button>
    </CollectionWrapper>
  </Section>
);

export default LatestCollection;

const CollectionWrapper = styled(Stack)(({ theme }) => ({
  backgroundImage: `linear-gradient(to right bottom, rgba(0,0,0,.15), rgba(0,0,0,.3)), url(${latestCollectionBgImg})`,
  minHeight: '100vh',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: theme.borderRadius.tiny,
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  gap: theme.spacing(3),
}));
