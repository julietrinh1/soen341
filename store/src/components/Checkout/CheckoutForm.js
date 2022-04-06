import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { FormProvider } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TextField } from '@material-ui/core';
import { useState } from 'react';
import Review from './Review';
import { Divider } from '@material-ui/core';
import Box from '@mui/material/Box';

const apiURL = "http://localhost:4000/";

const CheckoutForm = ({ cart, emptyCart }) => {

    var navigate = useNavigate();

    const [pay, setPay] = useState(false);
    const [address, setAddress] = useState("");
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");
    const [error, setError] = useState("");

    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [CVV, setCVV] = useState("");

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleCityChange = (e) => {
        setCity(e.target.value);
    }

    const handleZipChange = (e) => {
        setZip(e.target.value);
    }

    const handleCardNumberChange = (e) => {
        setCardNumber(e.target.value);
    }

    const handleExpiryDateChange = (e) => {
        setExpiryDate(e.target.value);
    }

    const handleCVVChange = (e) => {
        setCVV(e.target.value);
    }

    const createOrder = async (sampleOrder) => {
        return await axios.post(apiURL + "orders/createorder", sampleOrder).catch(() => { return null });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await createOrder({
            address: address,
            name: name,
            city: city,
            zip: zip,
            cardNumber: cardNumber,
            expiryDate: expiryDate,
            CVV: CVV,
            products: cart.products,
            status: "Shipping"
        })
        if (res == null) {
            setError("Could not place order, please try again later");
        }
        else {
            emptyCart();
            navigate('/');
        }
    }

    const handleShippingValidation = (e) => {
        e.preventDefault();
        setPay(true);
        return false;
    }

    return (
        <>
            <Box sx={{ display: pay ? 'none' : 'block' }} data-testid="formForCheckout">
                <Typography variant="h6" gutterBottom>Shipping address</Typography>
                <FormProvider>
                    <form onSubmit={handleShippingValidation}>
                        <Grid container spacing={3}>
                            <div style={{ fontSize: 15, color: "red" }}>{error}</div>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    as={TextField}
                                    name="address"
                                    value={address}
                                    onChange={handleAddressChange}
                                    label="Address"
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    as={TextField}
                                    name="name"
                                    value={name}
                                    onChange={handleNameChange}
                                    label="Name"
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    as={TextField}
                                    name="city"
                                    value={city}
                                    onChange={handleCityChange}
                                    label="City"
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    as={TextField}
                                    name="zip"
                                    value={zip}
                                    onChange={handleZipChange}
                                    label="Zip / Postal Code"
                                    fullWidth
                                    required
                                />
                            </Grid>
                        </Grid>
                        <br />
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Button component={Link} variant="outlined" to="/cart">Back to Cart</Button>
                            <Button type="submit" variant="contained" color="primary">Next</Button>
                        </div>
                    </form>
                </FormProvider>
            </Box>
            <Box sx={{ display: pay ? 'block' : 'none' }}>
                <Review cart={cart} />
                <Divider />
                <br />
                <Typography variant="h6" gutterBottom>Payment</Typography>
                <FormProvider>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                                <TextField
                                    as={TextField}
                                    name="cardNumber"
                                    value={cardNumber}
                                    onChange={handleCardNumberChange}
                                    label="Card Number"
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    as={TextField}
                                    name="expiryDate"
                                    value={expiryDate}
                                    onChange={handleExpiryDateChange}
                                    label="Expiry Date"
                                    fullWidth
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    as={TextField}
                                    name="CVV"
                                    value={CVV}
                                    onChange={handleCVVChange}
                                    label="CVV"
                                    fullWidth
                                    required
                                />
                            </Grid>
                        </Grid>
                        <br />
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Button variant="outlined" onClick={() => setPay(false)}>Back to shipping info</Button>
                            <Button type="submit" variant="contained" color="primary">Submit</Button>
                        </div>
                    </form>
                </FormProvider>
            </Box>
        </>
    );
};

export default CheckoutForm;