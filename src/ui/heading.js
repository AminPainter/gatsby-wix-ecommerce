import React from 'react';
import { Typography, styled } from '@mui/material';

const Heading = ({ variant = 'secondary', children, ...rest }) => {
  switch (variant) {
    case 'secondary':
      return (
        <BaseTypography variant='h4' {...rest}>
          {children}
        </BaseTypography>
      );

    case 'tertiary':
    default:
      return (
        <BaseTypography variant='h5' fontWeight={600} {...rest}>
          {children}
        </BaseTypography>
      );
  }
};

export default Heading;

const BaseTypography = styled(Typography)({
  textTransform: 'capitalize',
});
