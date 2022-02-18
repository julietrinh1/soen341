import React from 'react';
import useStyles from './styles';
const fs = require('fs');
const xml2js = require('xml2js');


const CartPage = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <h1>Your Cart</h1>

            <table border="border" id="cart">
                <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Item</th>
                    <th>Qt.</th>
                    <th>Price per unit</th>
                    <th>Price</th>
                </tr>
            var cartProductsArr = cartProductsToArray();
            cartProductsArr.forEach(product => {
                <tr>
                        <td>product.position</td>
                        <td>product.name</td>
                        <td>product.qty</td>
                        <td>product.ppu</td>
                        <td>product.price</td>
                </tr>
                }
            </table>
        </main>
    );
}

    function modifyCartProduct(position, quantity) {
        fs.readFile("cart.xml", "utf-8", (err, data) => {
            if (err) {
                throw err;
            }

            xml2js.parseString(data, (err, result) => {
                if (err) {
                    throw err;
                }

                result.cart.product[position].qty = quantity;
            });

            const builder = new xml2js.Builder();
            const xml = builder.buildObject(result);

            fs.writeFile('cart.xml', xml, (err) => {
                if (err) {
                    throw err;
                }
            });
        }
    }

    function deleteCartProduct(position) {
        fs.readFile("cart.xml", "utf-8", (err, data) => {
            if (err) {
                throw err;
            }

            xml2js.parseString(data, (err, result) => {
                if (err) {
                    throw err;
                }

                result.cart.product[position] = undefined;
            });

            const builder = new xml2js.Builder();
            const xml = builder.buildObject(result);

            fs.writeFile('cart.xml', xml, (err) => {
                if (err) {
                    throw err;
                }
            });
        }
    }


    function cartProductsToArray() {
        fs.readFile("cart.xml", "utf-8", (err, data) => {
            if (err) {
                throw err;
            }

            xml2js.parseString(data, (err, result) => {
                if (err) {
                    throw err;
                }
            });

            return result.cart.product;
        }
    }

export default CartPage;