import React from 'react';
import {
  Avatar,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import { useCart, useEstimate } from 'hooks';
import { Heading } from 'ui';
import { getImageFromWixMedia } from 'utils/helpers';

const CheckoutOrderSummary = () => {
  const { cart } = useCart();
  const { estimate } = useEstimate();

  return (
    <div>
      <Heading variant='tertiary'>Order summary</Heading>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align='right'>Subtotal</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart?.lineItems.map((item, idx) => (
            <TableRow key={item._id}>
              <TableCell>
                <Stack direction='row' alignItems='center' gap={1}>
                  <Avatar src={getImageFromWixMedia(item.image)} />
                  <Typography variant='subtitle2'>
                    {item.productName.original} x {item.quantity}
                  </Typography>
                </Stack>
              </TableCell>

              <TableCell align='right'>
                {
                  estimate?.calculatedLineItems[idx].pricesBreakdown.totalPriceBeforeTax
                    .formattedConvertedAmount
                }
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell>
              <Typography fontWeight={600}>Total</Typography>
            </TableCell>
            <TableCell align='right'>
              <Typography fontWeight={600}>
                {estimate?.priceSummary.total.formattedConvertedAmount}
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default CheckoutOrderSummary;
