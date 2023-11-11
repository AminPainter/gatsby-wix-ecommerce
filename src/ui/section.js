import React from 'react';
import { Chip, Container, Stack, Typography, styled } from '@mui/material';

const Section = ({ children, chip, title, maxWidth = 'lg', style, ...rest }) => (
  <SectionWrapper style={style}>
    <Container maxWidth={maxWidth} {...rest}>
      <Stack alignItems='center' textTransform='capitalize'>
        {chip && <Chip variant='outlined' label={chip} />}
        {title && (
          <Typography variant='h2' mb={5}>
            {title}
          </Typography>
        )}
      </Stack>

      {children}
    </Container>
  </SectionWrapper>
);

export default Section;

const SectionWrapper = styled('section')(({ theme }) => ({
  padding: theme.spacing(8, 5),
}));
