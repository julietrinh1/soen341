import {useEffect, React, useState } from 'react';
import {Grid} from '@material-ui/core'
import Product from './Product/Product';
import useStyles from './styles';
import axios from "axios"

const Products = ({Category, onUpdateCartQty}) => {
const [products,setProducts] = useState([]);

    const GetAllProducts = async () => {
        if(Category === "Shoes"){
            return axios.get("http://localhost:4000/products/shoes").catch(()=> {return null});
        }
        if(Category === "Shirts"){
            return axios.get("http://localhost:4000/products/shirts").catch(()=> {return null});
        }
        if(Category === "Pants"){
            return axios.get("http://localhost:4000/products/pants").catch(()=> {return null});
        }
        else{
        return axios.get("http://localhost:4000/products/allproducts").catch(()=> {return null});
        }
    }

    const classes = useStyles();
    useEffect( async () => {
        const clothing = await GetAllProducts()
        setProducts(clothing.data)
     },[]);


    return(
    <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container justifyContent="center" spacing ={4}>
            {products.map((product, key) => (
                <Grid key = {key} item xs={12} sm={6} md={4} lg={3}>
                    <Product onUpdateCartQty={onUpdateCartQty} product = {product}/>
                </Grid>
            ))}
        </Grid>
    </main>
    );
}

export default Products;