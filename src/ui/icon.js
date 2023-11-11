import React from 'react';
import { Icon, styled, useTheme } from '@mui/material';
import * as featherIcons from 'react-feather';

const IconWrapper = ({ name, color = 'common.white', size = 20, ...rest }) => {
  const IconTag = featherIcons[name];
  const theme = useTheme();

  const colorString =
    theme.palette[color]?.main || theme.palette[color.split('.')[0]][color.split('.')[1]];

  return (
    <StyledIcon size={size} {...rest}>
      <IconTag height={size} width={size} color={colorString} />
    </StyledIcon>
  );
};

export default IconWrapper;

const StyledIcon = styled(Icon)(({ size }) => ({
  width: `${size}px`,
  height: `${size}px`,
  minWidth: '1.875rem',
  minHeight: '1.875rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));
