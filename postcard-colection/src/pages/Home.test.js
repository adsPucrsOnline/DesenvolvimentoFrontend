import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  it('should render welcome message', () => {
    render(<Home />);

    const titleElement = screen.getByText('Postcar');
    const subtitleElement = screen.getByText('Coleção de Cartões Postais');
    const messageElement = screen.getByText('Bem-vindo!');

    expect(titleElement).toBeInTheDocument();
    expect(messageElement).toBeInTheDocument();
  });
});
