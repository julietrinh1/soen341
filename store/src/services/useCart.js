import { useState } from 'react';

export default function useCart(cartSample) {
    const getCart = () => {
        const cart = JSON.parse(sessionStorage.getItem('cart'));
        return cart;
    };

    const [cart, setCart] = useState(cartSample ? cartSample : getCart());

    const saveCart = cart => {
        sessionStorage.setItem('cart', JSON.stringify(cart));
        setCart(cart);
    };

    const onUpdateCartQty = (item, newQuantity) => {
        var cartCopy = getCart();
        if (cartCopy && cartCopy.products) {
            const index = cartCopy.products.findIndex(existingItem => existingItem.Name == item.Name);
            if (index == -1) {
                cartCopy.products.push({
                    Name: item.Name,
                    Price: item.Price,
                    image: item.image,
                    Description: item.Description,
                    Qty: newQuantity ? newQuantity : item.Qty + 1,
                })
            }
            else {
                cartCopy.products[index] = {
                    Name: cartCopy.products[index].Name,
                    Price: cartCopy.products[index].Price,
                    image: cartCopy.products[index].image,
                    Description: cartCopy.products[index].Description,
                    Qty: newQuantity ? newQuantity : cartCopy.products[index].Qty + 1,
                }
            }
        }
        else {
            cartCopy = {
                products: [
                    {
                        Name: item.Name,
                        Price: item.Price,
                        image: item.image,
                        Description: item.Description,
                        Qty: newQuantity ? newQuantity : 1,
                    }
                ],
                total: 0
            }
        }
        cartCopy.total = 0;
        cartCopy.products.map(product => cartCopy.total+=product.Qty*product.Price);
        saveCart(cartCopy);

    };

    const onRemoveFromCart = (item) => {
        var cartCopy = getCart();
        if (cartCopy && cartCopy.products) {
            const index = cartCopy.products.findIndex(existingItem => existingItem.Name == item.Name);
            if (index > -1) {
                cartCopy.products.splice(index, 1);
                cartCopy.total=0;
                cartCopy.products.map(product => cartCopy.total+=product.Qty*product.Price);
                saveCart(cartCopy);
            }
        }
    }

    const emptyCart = () => {
        var cartCopy = {
            products: [],
            total: 0,
        }
        saveCart(cartCopy);
    }

    return {
        emptyCart: emptyCart,
        onRemoveFromCart: onRemoveFromCart,
        onUpdateCartQty: onUpdateCartQty,
        setCart: saveCart,
        cart
    }
} 