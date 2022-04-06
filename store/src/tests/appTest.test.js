import React from 'react';
import App from '../App';
import { render } from '@testing-library/react';


it('navbar rendered', () => {
  const div = document.createElement('div');
  const { getByTestId } = render(<App />, div);
    expect(getByTestId("navigationUserMenu")).toBeInTheDocument();
})
