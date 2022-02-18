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

    return {
        setCart: saveCart,
        cart
      }
}