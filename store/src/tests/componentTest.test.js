import Home from '../components/Home/Home'
import React from 'react';
import { render } from '../testExports';
import Checkout from '../components/Checkout/Checkout';
import Cart from '../components/Cart Page/Cart';
import '@testing-library/jest-dom'
import Dashboard from '../components/Dashboard/Dashboard';
import SignIn from '../components/Login-Register Pages/loginPage';
import SignUp from '../components/Login-Register Pages/registerPage';
import Products from '../components/Products/Products';
import Product from '../components/Products/Product/Product';
import Orders from '../components/Orders';

jest.mock('axios')

it('renders home page', () => {
    const { getByText } = render(<Home />);
    expect(getByText(/Welcome/i)).toBeInTheDocument();
})

it('render checkout page', () => {
    const { getByTestId } = render(<Checkout />);
    expect(getByTestId("formForCheckout")).toBeInTheDocument();
})

it('render cart page', () => {
    const { getByText } = render(<Cart />);
    expect(getByText(/You have no items in your shopping cart!/i)).toBeInTheDocument();
})

it('render dashboard page', () => {
    const { getByText } = render(<Dashboard />);
    expect(getByText(/This is your dashboard./i)).toBeInTheDocument();
})

it('render sign in page', () => {
    const { getAllByText } = render(<SignIn />);
    expect(getAllByText(/Sign In/i)[0]).toBeInTheDocument();
})


it('render sign up page', () => {
    const { getByText } = render(<SignUp />);
    expect(getByText(/Already have an account\? Sign in/i)).toBeInTheDocument();
})

it('render products page', () => {
    const { getByTestId } = render(<Products />);
    expect(getByTestId("productPageTestId")).toBeInTheDocument();
})

it('render product card contents', () => {
    const { getByTestId } = render(<Product />);
    expect(getByTestId("productCardContentsTest")).toBeInTheDocument();
})

it('render orders page', () => {
    const { getByTestId } = render(<Orders />);
    expect(getByTestId("orderPageTestId")).toBeInTheDocument();
})


