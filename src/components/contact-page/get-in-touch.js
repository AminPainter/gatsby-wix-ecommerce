import React from 'react';
import { Box, Container, Stack, TextField, Typography, styled } from '@mui/material';
import { Formik } from 'formik';

import { Button, Grid, Heading, Section } from 'ui';

const initialValues = {
  firstName: '',
  lastName: '',
  emailAddress: '',
  message: '',
};

const GetInTouch = () => {
  const handleSubmit = async values => {
    console.log(values);
  };

  return (
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
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {formik => (
              <ContactForm onSubmit={formik.handleSubmit}>
                <Grid gap={2} mb={2}>
                  <TextField
                    label='First name'
                    name='firstName'
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                  />

                  <TextField
                    label='Last name'
                    name='lastName'
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                  />

                  <TextField
                    label='Email address'
                    type='email'
                    name='emailAddress'
                    value={formik.values.emailAddress}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    sx={{ gridColumn: '1 / -1' }}
                    required
                  />

                  <TextField
                    label='Message'
                    name='message'
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    sx={{ gridColumn: '1 / -1' }}
                    multiline
                    minRows={4}
                  />
                </Grid>
                <Button type='submit'>Send</Button>
              </ContactForm>
            )}
          </Formik>
        </Box>
      </Grid>
    </Section>
  );
};

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
