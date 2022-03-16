import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import CartItem from './Cart Item/Cart Item';
import useStyles from './styles';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, emptyCart }) => {

  const classes = useStyles();


  const renderEmptyCart = () => (
    <Typography variant="subtitle1">You have no items in your shopping cart!
    </Typography>
  );

  const renderCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.products.map((item, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <CartItem item={item} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">Subtotal: ${cart.total}</Typography>
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={emptyCart}>Empty cart</Button>
          <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
      { cart && cart.products.length ? renderCart() : renderEmptyCart() }
    </Container>
  );
}



export default Cart;