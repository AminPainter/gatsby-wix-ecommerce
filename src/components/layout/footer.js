import React from 'react';
import { Link } from 'gatsby';
import { Divider, Stack, Typography, styled } from '@mui/material';

import { Grid, Icon, Section } from 'ui';
import logoImg from 'images/icon.png';

const Footer = () => (
  <Section component='footer' maxWidth='xl' style={{ paddingBottom: 0 }}>
    <FooterPartition>
      <SocialMedaiContainer>
        <Stack gap={2} direction='row' alignItems='center'>
          <FooterLogo src={logoImg} alt='LOGO' />
          <Typography variant='h4' fontWeight={600}>
            Wix Ecommerce
          </Typography>
        </Stack>
        <Stack gap={1} alignItems={{ xs: 'center', md: 'flex-start' }} color='grey.600'>
          <Stack
            direction='row'
            alignItems='center'
            gap={1}
            component='a'
            // href='https://www.google.com/maps?q=-17.7746702,30.9647405&z=17&hl=en'
            target='_blank'>
            <Icon name='MapPin' color='grey.600' />
            <Typography>Location</Typography>
          </Stack>
          <Stack
            direction='row'
            alignItems='center'
            gap={1}
            component='a'
            href='tel:+91-888-8888-888'>
            <Icon name='Phone' color='grey.600' />
            <Typography>+91-888-8888-888</Typography>
          </Stack>
        </Stack>

        <Stack direction='row' gap={2}>
          <SocalIcon target='_blank'>
            <Icon color='grey.800' name='Instagram' />
          </SocalIcon>
          <SocalIcon target='_blank'>
            <Icon color='grey.800' name='Youtube' />
          </SocalIcon>
          <SocalIcon target='_blank'>
            <Icon color='grey.800' name='Twitter' />
          </SocalIcon>
          <SocalIcon target='_blank'>
            <Icon color='grey.800' name='Linkedin' />
          </SocalIcon>
        </Stack>
      </SocialMedaiContainer>

      <Grid
        columns={2}
        color='grey.600'
        justifyItems='center'
        textTransform='capitalize'
        gap={10}
        responsive={false}
        sx={{ textAlign: { xs: 'center', md: 'initial' } }}>
        <Stack gap={2}>
          <Typography variant='h6' color='grey.800' fontWeight={600}>
            Links
          </Typography>

          <Link to='/#section-categories'>categories</Link>
          <Link to='/shop/category/all-products'>products</Link>
          <Link to='/about'>about us</Link>
          <Link to='/'>references</Link>
        </Stack>

        <Stack gap={2}>
          <Typography variant='h6' color='grey.800' fontWeight={600}>
            help
          </Typography>

          <a href={`mailto:${process.env.GATSBY_EMAIL_ADDRESS}`}>support</a>
          <Link to='/about'>about us</Link>
          <Link to='/#section-faq'>FAQ</Link>
          <Link to='/privacy-policy'>privacy</Link>
        </Stack>
      </Grid>
    </FooterPartition>

    <Divider />

    <FootNote>
      <Typography width={{ xs: '100%', md: '50%' }}>
        &copy; {new Date().getFullYear()} Copyright by Wix Ecommerce.
      </Typography>

      <p>
        Developed by{' '}
        <Link target='_blank' color='inherit' href='https://aminpainter.netlify.app/'>
          Mohammed Amin Painter
        </Link>
        .
      </p>
    </FootNote>
  </Section>
);

export default Footer;

const FooterPartition = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingBottom: theme.spacing(4),
  gap: theme.spacing(7),

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

const SocialMedaiContainer = styled(Stack)(({ theme }) => ({
  justifyContent: 'space-between',
  gap: theme.spacing(3),

  [theme.breakpoints.down('md')]: {
    alignItems: 'center',
  },
}));

const FooterLogo = styled('img')({
  width: '4rem',
});

const SocalIcon = styled('a')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.neutral.grey,
  padding: '.5rem',
  borderRadius: '100%',
  transition: 'transform .3s',

  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

const FootNote = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: theme.spacing(3, 0),
  color: theme.palette.grey[500],
  gap: theme.spacing(1),

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
}));
