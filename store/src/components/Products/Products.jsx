import React from 'react';
import {Grid} from '@material-ui/core'

import Product from './Product/Product';

const products = [
    {id:1, name: "Shoes", description: 'Running shoes.', price:'$100' , image:'https://images.complex.com/complex/images/c_scale,f_auto,q_auto,w_1920/fl_lossy,pg_1/iot1dbjmzr7z6kfkoxrb/nike-air-force-1-lead-1?fimg-ssr-default'},
    {id:2, name: "Sandals", description: 'Sandals.', price:'$20', image:'https://target.scene7.com/is/image/Target/GUEST_17a889d3-e919-47d9-8a62-bc868ab745a5'}

]

const Products = () => {
    return(
    <main>
        <Grid container justify="center" spacing ={4}>
            {products.map((product) => (
                <Grid item key = {products.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product = {product}/>
                </Grid>
            ))}
        </Grid>
    </main>
    );
}

export default Products;