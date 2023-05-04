import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContadorDois from './ContadorDois';

describe('<ContadorDois />', () => {
  test('it should mount', () => {
    render(<ContadorDois />);
    
    const contadorDois = screen.getByTestId('ContadorDois');

    expect(contadorDois).toBeInTheDocument();
  });
});