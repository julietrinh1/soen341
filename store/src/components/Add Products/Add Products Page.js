import React from 'react';
import useStyles from './styles';
import { CssBaseline, Paper, Typography, Grid, CircularProgress, Divider, Button } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';
import FormInput from './productsform.js'

const AddPPage = () => {
    const classes = useStyles();

    return(
    <main className={classes.content}>
        <div className={classes.toolbar}/>
        <h1>Add Products</h1>
        <>
      <CssBaseline />
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">Checkout</Typography>
          <>
      <Typography variant="h6" gutterBottom>Shipping address</Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => test({ ...data}))}>
          <Grid container spacing={3}>
            <FormInput required name="Category" label="Category" />
            <FormInput required name="Description" label="Description" />
            <FormInput required name="Name" label="Name" />
            <FormInput required name="Price" label="Price" />\
            <FormInput required name="Image" label="Image" />
          </Grid>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button component={Link} variant="outlined" to="/cart">Back to Cart</Button>
            <Button type="submit" variant="contained" color="primary">Submit</Button>
          </div>
        </form>
      </FormProvider>
    </>
        </Paper>
      </main>
    </>
    </main>
    );
}

export default AddPPage;