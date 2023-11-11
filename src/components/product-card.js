import React from 'react';
import { Link } from 'gatsby';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  IconButton,
  Typography,
  styled,
} from '@mui/material';

import { Icon, Button } from 'ui';
import { handleProductShare } from 'utils/helpers';
import AddToCart from './cart/add-to-cart';
import Price from './price';

const Product = ({ product }) => (
  <ProductCard>
    <Link to={`/products/${product.slug}`}>
      <ProductImageWrapper>
        <ProductImage
          component='img'
          image={product.media.mainMedia?.image.url}
          title={product.media.mainMedia?.title}
        />

        {product.ribbon && <ProductRibbon label={product.ribbon} size='small' />}
      </ProductImageWrapper>

      <CardContent sx={{ pb: '0 !important' }}>
        <Typography gutterBottom variant='h5'>
          {product.name}
        </Typography>

        <Typography variant='body2' color='text.secondary'>
          <Price product={product} />
        </Typography>
      </CardContent>
    </Link>

    <CardActions
      sx={{
        justifyContent: 'space-between',
        marginTop: 'auto',
        flexWrap: 'wrap',
      }}>
      <Divider sx={{ width: '100%', my: 1 }} />
      {product.manageVariants || !product.stock.inStock ? (
        <Button component={Link} to={`/products/${product.slug}`}>
          View details
        </Button>
      ) : (
        <AddToCart productId={product._id} />
      )}

      <IconButton onClick={() => handleProductShare(product.slug)}>
        <Icon name='Share2' color='neutral.black' />
      </IconButton>
    </CardActions>
  </ProductCard>
);

export default Product;

const ProductCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  transition: 'all .3s',
  padding: theme.spacing(1, 1.5),
  alignSelf: 'start',
  boxShadow: theme.boxShadow.light,

  '&:hover': {
    transform: 'translateY(-0.8rem)',
  },

  '&:hover img': {
    transform: 'scale(1.2)',
  },
}));

const ProductImageWrapper = styled('figure')({
  height: '20rem',
  overflow: 'hidden',
  position: 'relative',

  '& img': {
    willChange: 'transform',
  },
});

const ProductImage = styled(CardMedia)(({ theme }) => ({
  height: '100%',
  backgroundColor: theme.palette.primary.light,
  objectFit: 'contain',
  transition: 'all .3s',
}));

const ProductRibbon = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  top: '.5rem',
  left: '-.3rem',
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
  borderRadius: '3px',
  fontSize: '.7rem',
  backgroundColor: theme.palette.grey[800],
  color: theme.palette.common.white,
}));
