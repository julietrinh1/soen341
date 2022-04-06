import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons'

import useStyles from './styles';

const Product = ({product, onUpdateCartQty}) => {

const classes = useStyles();
  return (
    <Card className = {classes.root}>
        <CardMedia className={classes.media} image ={product ? product.image : "No Image"} title={product ? product.Name : "No Name"}/>
        <CardContent data-testid="productCardContentsTest">
            <div className={classes.cardContent}>
                <Typography variant="h5" gutterBottom>
                    {product ? product.Name : "No Name"}
                </Typography>
                <Typography variant="h5" gutterBottom>
                    ${product ? product.Price : "No Price"}
                </Typography>
            </div>
            <Typography variant="body2" color="textSecondary">
                {product ? product.Description : "No Description"}
                
            </Typography>

        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
            <IconButton onClick={() => onUpdateCartQty(product)} aria-label = "Add to Cart">
                <AddShoppingCart/>
            </IconButton>
        </CardActions>

    </Card>
  )
}

function refreshPage(){ 
    window.location.reload(); 
}


export default Product
