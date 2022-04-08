import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';
import { CardTravelOutlined } from '@material-ui/icons';

const Review = ({ cart }) => (
  <>
    <Typography variant="h6" gutterBottom>Order summary</Typography>
    <List disablePadding>
      {cart ? cart.products.map((product) => (
        <ListItem style={{ padding: '10px 0' }} key={product.Name}>
          <ListItemText primary={product.Name} secondary={`Quantity: ${product.Qty}`} />
          <Typography variant="body2">${product.Price*product.Qty}</Typography>
        </ListItem>
      )) : "Nothing"}
      <ListItem style={{ padding: '10px 0' }}>
        <ListItemText primary="Total" />
        <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
          ${cart ? cart.total : '0'}
        </Typography>
      </ListItem>
    </List>
  </>
);

export default Review;