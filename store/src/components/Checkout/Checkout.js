import React from 'react';
import { CssBaseline, Paper, Typography, Divider, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import CheckoutForm from './CheckoutForm.js';
import useStyles from './styles';

const Checkout = ({ cart, emptyCart, userInfo }) => {

  const classes = useStyles();

  let Confirmation = () => (
    <>
      <div>
        <Typography variant="h5">Thank you for your purchase!</Typography>
        <Divider className={classes.divider} />
        <Typography variant="subtitle2">Order ref</Typography>
      </div>
      <br />
      <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
    </>
  );

  const Form = () => (<CheckoutForm cart={cart} emptyCart={emptyCart} userInfo={userInfo}/>);

  return (
    <>
      <CssBaseline />
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">Checkout</Typography>
          <Form />
        </Paper>
      </main>
    </>
  );
};

export default Checkout;