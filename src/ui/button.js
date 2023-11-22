import React from 'react';
import { Button, CircularProgress, styled } from '@mui/material';

const ButtonWrapper = ({ children, loading = false, variant = 'primary', ...restOthers }) => {
  const rest = { ...restOthers };

  if (loading) rest.startIcon = rest.endIcon = null;

  switch (variant) {
    case 'primary':
      return (
        <ButtonPrimary loading={loading ? 1 : 0} variant='contained' {...rest}>
          {loading ? <CircularProgress color='inherit' size='1.55rem' /> : children}
        </ButtonPrimary>
      );

    case 'secondary':
      return (
        <ButtonSecondary variant='outlined' {...rest}>
          {children}
        </ButtonSecondary>
      );

    default:
      return <ButtonBase {...rest}>{children}</ButtonBase>;
  }
};

export default ButtonWrapper;

const ButtonBase = styled(Button)(({ loading, theme, size = 'normal' }) => ({
  width: loading ? '7rem' : 'auto',
  boxShadow: 'none',
  fontWeight: 400,
  textTransform: 'initial',
  padding: size === 'normal' ? theme.spacing(1.5, 4) : theme.spacing(0.8, 3),

  '&.Mui-disabled .MuiIcon-root svg': {
    stroke: theme.palette.grey[400],
  },
}));

const ButtonPrimary = styled(ButtonBase)(({ theme }) => ({
  color: theme.palette.common.white,
  backgroundColor: theme.palette.neutral.black,

  '&:hover': {
    backgroundColor: theme.palette.neutral.black,
  },
}));

const ButtonSecondary = styled(ButtonBase)(({ theme }) => ({
  color: theme.palette.neutral.black,
  border: `1px solid ${theme.palette.neutral.black}`,

  '&:hover': {
    backgroundColor: 'transparent',
    border: `1px solid ${theme.palette.neutral.black}`,
  },
}));
