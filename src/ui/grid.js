import React from 'react';
import { Box, styled } from '@mui/material';

const Grid = ({ children, columns = 2, gap = 5.5, responsive = true, ...rest }) => (
  <StyledGrid columns={columns} responsive={responsive ? 1 : 0} {...rest} gap={gap}>
    {children}
  </StyledGrid>
);

const StyledGrid = styled(Box)(({ theme, gap, columns, responsive }) => {
  let styles = {
    display: 'grid',
    gridTemplateColumns:
      typeof columns === 'object'
        ? columns.map(el => (typeof el === 'number' ? `${el}fr` : el)).join(' ')
        : `repeat(${columns}, 1fr)`,
    gap: theme.spacing(gap),
  };

  if (responsive) {
    styles = Object.assign(styles, {
      [theme.breakpoints.down('md')]: {
        gridTemplateColumns: 'none',
        // justifyContent: 'center',
      },
    });
  }

  return styles;
});

export default Grid;
