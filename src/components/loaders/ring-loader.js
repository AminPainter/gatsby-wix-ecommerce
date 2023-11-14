import React from 'react';
import { CircularProgress, Stack } from '@mui/material';

const RingLoader = ({ height = '65vh' }) => (
  <Stack minHeight={height} alignItems='center' justifyContent='center'>
    <CircularProgress />
  </Stack>
);

export default RingLoader;
