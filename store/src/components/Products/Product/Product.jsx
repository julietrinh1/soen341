import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons'

import useStyles from './styles';

const Product = ({product, onUpdateCartQty}) => {
const classes = useStyles();
  return (
    <Card className = {classes.root}>
        <CardMedia className={classes.media} image ={product.image} title={product.Name}/>
        <CardContent>
            <div className={classes.cardContent}>
                <Typography variant="h5" gutterBottom>
                    {product.Name}
                </Typography>
                <Typography variant="h5" gutterBottom>
                    ${product.Price}
                </Typography>
            </div>
            <Typography variant="body2" color="textSecondary">
                {product.Description}
                
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

export default Product
