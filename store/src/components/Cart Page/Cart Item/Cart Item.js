import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import useStyles from './styles';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();

  const handleUpdateCartQty = (item, newQuantity) => onUpdateCartQty(item, newQuantity);

  const handleRemoveFromCart = (item) => onRemoveFromCart(item);

  return (
    <Card className="cart-item">
      <CardMedia image={item.image} alt={item.Name} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{item.Name}</Typography>
        <Typography variant="h5">${item.Price}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(item, item.Qty - 1)} disabled={item.Qty == 1}>-</Button>
          <Typography>&nbsp;{item.Qty}&nbsp;</Typography>
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(item, item.Qty + 1)}>+</Button>
        </div>
        <Button variant="contained" type="button" color="secondary" onClick={() => handleRemoveFromCart(item)}>Remove</Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;