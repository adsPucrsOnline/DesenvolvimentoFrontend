import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contador from './Contador';

describe('<Contador />', () => {
  test('it should mount', () => {
    render(<Contador />);
    
    const contador = screen.getByTestId('Contador');

    expect(contador).toBeInTheDocument();
  });
});