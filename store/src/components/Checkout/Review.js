import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';

const Review = ({ cart }) => (
  <>
    <Typography variant="h6" gutterBottom>Order summary</Typography>
    <List disablePadding>
      {cart.products.map((product) => (
        <ListItem style={{ padding: '10px 0' }} key={product.Name}>
          <ListItemText primary={product.Name} secondary={`Quantity: ${product.Qty}`} />
          <Typography variant="body2">${product.Price*product.Qty}</Typography>
        </ListItem>
      ))}
      <ListItem style={{ padding: '10px 0' }}>
        <ListItemText primary="Total" />
        <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
          ${cart.total}
        </Typography>
      </ListItem>
    </List>
  </>
);

export default Review;