import React from 'react';
import { TextField } from '@mui/material';

import { Button, Grid, Heading, Icon } from 'ui';

const CheckoutForm = () => (
  <form>
    <Grid gap={3}>
      <Heading variant='tertiary' sx={{ gridColumn: '1 / -1' }}>
        Customer information
      </Heading>
      <TextField label='Email Address' name='emailAddress' />
      <TextField label='Phone Number' name='' />
      <TextField label='First Name' name='' />
      <TextField label='Last Name' name='' />

      <Heading variant='tertiary' sx={{ gridColumn: '1 / -1' }}>
        Shipping information
      </Heading>
      <TextField label='Pin Code' name='' />
      <TextField label='Country' name='' />
      <TextField label='City' name='' />
      <TextField label='State' name='' />
      <TextField label='Delivery Address' name='' sx={{ gridColumn: '1 / -1' }} />

      <Heading variant='tertiary' sx={{ gridColumn: '1 / -1' }}>
        Additional information
      </Heading>
      <TextField label='Message' sx={{ gridColumn: '1 / -1' }} multiline minRows={4} />

      <Button startIcon={<Icon name='Lock' />} sx={{ gridColumn: '1 / -1' }}>
        Place order
      </Button>
    </Grid>
  </form>
);

export default CheckoutForm;
