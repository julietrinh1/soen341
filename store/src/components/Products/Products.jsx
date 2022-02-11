import React from 'react';
import Grid from '@material-ui/core'

const products = [
    {id:1, name: "Shoes", description: 'Running shoes.', price:'$100' },
    {id:1, name: "Laptop", description: 'Apple macbook.', price:'$2000'}

]

const Products = () => {
    <main>
        <Grid container justify="center" spacing ={4}>
            {products.map((product) => (
                <Grid item key = {products.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product = {product}/>
                </Grid>
            ))}
        </Grid>
    </main>
}

export default Products;