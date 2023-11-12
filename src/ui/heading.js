import React from 'react';
import { Typography } from '@mui/material';

const Heading = ({ variant = 'secondary', children, ...rest }) => {
  switch (variant) {
    case 'secondary':
      return (
        <Typography variant='h4' {...rest}>
          {children}
        </Typography>
      );

    case 'tertiary':
    default:
      return (
        <Typography variant='h5' {...rest}>
          {children}
        </Typography>
      );
  }
};

export default Heading;
