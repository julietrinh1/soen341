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
import axios from 'axios';

jest.mock('axios', () => {
    return {
        getItem: async (...args) => args,
        setItem: async (...args) => args,
        removeItem: async (...args) => args,
    }
})

jest.mock('axios', () => ({ get: jest.fn(),post: jest.fn(), create: jest.fn() }));

it('renders home page', () => {
    axios.get.mockResolvedValue('{"test": "test"}');
    const { getByText } = render(<Home />);
    expect(getByText(/Welcome/i)).toBeInTheDocument();
})

it('render checkout page', () => {
    axios.get.mockResolvedValue('{"test": "test"}');
    const { getByTestId } = render(<Checkout />);
    expect(getByTestId("formForCheckout")).toBeInTheDocument();
})

it('render cart page', () => {
    axios.get.mockResolvedValue('{"test": "test"}');
    const { getByText } = render(<Cart />);
    expect(getByText(/You have no items in your shopping cart!/i)).toBeInTheDocument();
})

it('render dashboard page', () => {
    axios.get.mockResolvedValue('{"test": "test"}');
    const { getByText } = render(<Dashboard />);
    expect(getByText(/This is your dashboard./i)).toBeInTheDocument();
})

it('render sign in page', () => {
    axios.get.mockResolvedValue('{"test": "test"}');
    const { getAllByText } = render(<SignIn />);
    expect(getAllByText(/Sign In/i)[0]).toBeInTheDocument();
})


it('render sign up page', () => {
    axios.get.mockResolvedValue('{"test": "test"}');
    const { getByText } = render(<SignUp />);
    expect(getByText(/Already have an account\? Sign in/i)).toBeInTheDocument();
})

it('render products page', () => {
    axios.get.mockResolvedValue('{"test": "test"}');
    const { getByTestId } = render(<Products />);
    expect(getByTestId("productPageTestId")).toBeInTheDocument();
})

it('render product card contents', () => {
    axios.get.mockResolvedValue('{"test": "test"}');
    const { getByTestId } = render(<Product />);
    expect(getByTestId("productCardContentsTest")).toBeInTheDocument();
})

it('render orders page', () => {
    axios.get.mockResolvedValue('{"test": "test"}');
    const { getByTestId } = render(<Orders />);
    expect(getByTestId("orderPageTestId")).toBeInTheDocument();
})


