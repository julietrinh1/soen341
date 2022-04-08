import React from 'react';
import App from '../App';
import { render } from '@testing-library/react';

jest.mock('axios')
jest.mock('axios', () => ({ get: jest.fn(),post: jest.fn(), create: jest.fn() }));

it('navbar rendered', () => {
  const div = document.createElement('div');
  const { getByTestId } = render(<App />, div);
    expect(getByTestId("navigationUserMenu")).toBeInTheDocument();
})
