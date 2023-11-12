import { styled } from '@mui/material';
import React from 'react';

import { Section } from 'ui';

const Map = () => (
  <Section maxWidth='xl'>
    <StyledMap
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118106.71772249676!2d73.09068439469182!3d22.322081830866296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1699770608630!5m2!1sen!2sin'
      allowfullscreen=''
      loading='lazy'
      referrerpolicy='no-referrer-when-downgrade'
    />
  </Section>
);

export default Map;

const StyledMap = styled('iframe')(({ theme }) => ({
  border: 0,
  borderRadius: theme.borderRadius.tiny,
  width: '100%',
  height: '35rem',
}));
