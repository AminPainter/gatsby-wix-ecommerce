import React from 'react';
import { Chip, Container, Stack, Typography, styled } from '@mui/material';

import { Button, Grid } from 'ui';
import heroImg from 'images/hero.png';

const Hero = () => (
  <header>
    <HeroGrid>
      <Container maxWidth='sm'>
        <Stack gap={1} alignItems='flex-start' justifyContent='center' height='100%'>
          <Chip label='Category Chip' variant='outlined' />
          <HeroHeading variant='h1'>
            Slick. Modern. <br /> Awesome.
          </HeroHeading>

          <Button>Shop now</Button>
        </Stack>
      </Container>

      <HeroImage src={heroImg} alt='HERO' />
    </HeroGrid>
  </header>
);

export default Hero;

const HeroGrid = styled(Grid)(({ theme }) => ({
  minHeight: '90vh',
  backgroundColor: theme.palette.primary.light,
}));

const HeroHeading = styled(Typography)(({ theme }) => ({
  fontSize: '4rem',
  fontWeight: 600,
}));

const HeroImage = styled('img')(({ theme }) => ({
  height: '85vh',
  alignSelf: 'end',
}));
