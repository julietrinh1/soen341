import React from 'react';
import { CssBaseline, Paper, Typography } from '@material-ui/core';

import CheckoutForm from './CheckoutForm.js';
import useStyles from './styles';

const Checkout = ({ cart, emptyCart }) => {

  const classes = useStyles();

  const Form = () => (<CheckoutForm cart={cart} emptyCart={emptyCart}/>);

  return (
    <>
      <CssBaseline />
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">Checkout</Typography>
          <Form data-testid="formForCheckout"/>
        </Paper>
      </main>
    </>
  );
};

export default Checkout;