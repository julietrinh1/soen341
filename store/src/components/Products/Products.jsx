import {useEffect, React, useState } from 'react';
import {Grid} from '@material-ui/core'
import Product from './Product/Product';
import useStyles from './styles';
import axios from "axios"

const Products = ({Category}) => {
const [products,setProducts] = useState([]);

    const GetAllProducts = async () => {
        if(Category == "Shoes"){
            console.log([])
            return axios.get("http://localhost:4000/products/shoes").catch(()=> {return null});
        }
        if(Category == "Shirts"){
            return axios.get("http://localhost:4000/products/shirts").catch(()=> {return null});
        }
        if(Category == "Pants"){
            return axios.get("http://localhost:4000/products/pants").catch(()=> {return null});
        }
        else{
        return axios.get("http://localhost:4000/products/allproducts").catch(()=> {return null});
        }
    }

    const classes = useStyles();
    useEffect( async () => {
        console.log(Category)
        setProducts([]);
        const clothing = await GetAllProducts()
        console.log(clothing.data)
        setProducts(clothing.data)
     },[]);


    return(
    <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container justifyContent="center" spacing ={4}>
            {products.map((product, key) => (
                <Grid key = {key} item xs={12} sm={6} md={4} lg={3}>
                    <Product product = {product}/>
                </Grid>
            ))}
        </Grid>
    </main>
    );
}

export default Products;