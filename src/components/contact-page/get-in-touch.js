import { Box, Container, Stack, TextField, Typography, styled } from '@mui/material';
import React from 'react';

import { Button, Grid, Heading, Section } from 'ui';

const GetInTouch = () => (
  <Section chip='Contact' title='contact us' maxWidth='xl'>
    <Grid columns={[1.5, 1]} gap={0}>
      <ColoredBox>
        <Container maxWidth='sm' sx={{ height: '100%' }}>
          <Stack justifyContent='center' gap={1} height='100%'>
            <Heading variant='tertiary'>get in touch</Heading>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo tempor, congue
              justo at, lobortis orci.
            </Typography>
          </Stack>
        </Container>
      </ColoredBox>

      <Box p={10}>
        <ContactForm>
          <Grid gap={2} mb={2}>
            <TextField label='First name' />
            <TextField label='Last name' />
            <TextField label='Email address' sx={{ gridColumn: '1 / -1' }} />
            <TextField label='Message' sx={{ gridColumn: '1 / -1' }} multiline minRows={4} />
          </Grid>
          <Button>Send</Button>
        </ContactForm>
      </Box>
    </Grid>
  </Section>
);

export default GetInTouch;

const ColoredBox = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  borderRadius: theme.borderRadius.tiny,
}));

const ContactForm = styled('form')(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  width: '150%',
  transform: 'translateX(-25%)',
  padding: theme.spacing(6),
  borderRadius: theme.borderRadius.tiny,
}));
