import React, { useState } from 'react';
import { Stack, styled } from '@mui/material';

const ProductGallery = ({ mediaItems }) => {
  const [centerImage, setCenterImage] = useState(0);

  return (
    <>
      <ImageTilesContainer>
        {mediaItems?.map((mediaItem, idx) => (
          <ImageTile key={mediaItem._id} onClick={() => setCenterImage(idx)}>
            <img src={mediaItem.image.url} alt={mediaItem.title} />
          </ImageTile>
        ))}
      </ImageTilesContainer>

      <MainImageContainer>
        <MainImage src={mediaItems[centerImage]?.image.url} alt={mediaItems[centerImage]?.title} />
      </MainImageContainer>
    </>
  );
};

export default ProductGallery;

const MainImageContainer = styled('figure')(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  borderRadius: theme.borderRadius.tiny,
}));

const MainImage = styled('img')({
  height: '100%',
  width: '100%',
  objectFit: 'contain',
  borderRadius: 'inherit',
});

const ImageTilesContainer = styled(Stack)(({ theme }) => ({
  overflowY: 'auto',
  overflowX: 'hidden',
  paddingRight: theme.spacing(1),
  gap: theme.spacing(2),
}));

const ImageTile = styled('div')(({ theme }) => ({
  height: '8rem',
  borderRadius: theme.borderRadius.tiny,
  cursor: 'ne-resize',
  overflow: 'hidden',
  flexShrink: 0,

  '& > img': {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    transition: 'all .3s',
    willChange: 'transform',
    backgroundColor: theme.palette.primary.light,
  },

  '&:hover > img': {
    opacity: 0.8,
    transform: 'scale(1.1)',
  },
}));
