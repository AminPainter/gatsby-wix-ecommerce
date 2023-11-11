import React from 'react';
import { styled } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

const ProductSlider = ({ mediaItems }) => (
  <Carousel animation='slide'>
    {mediaItems?.map?.(mediaItem => (
      <ProductImageMobile key={mediaItem._id} src={mediaItem.image.url} alt={mediaItem.title} />
    ))}
  </Carousel>
);

export default ProductSlider;

const ProductImageMobile = styled('img')(({ theme }) => ({
  display: 'block',
  height: '40vh',
  margin: '0 auto',
  backgroundColor: theme.palette.primary.light,
  borderRadius: theme.borderRadius.tiny,
}));
