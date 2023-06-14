import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  it('should render welcome message', () => {
    render(<Home />);

    const titleElement = screen.getByText('Postcar');
    const messageElement = screen.getByText('Bem-vindo a nossa Coleção!');

    expect(titleElement).toBeInTheDocument();
    expect(messageElement).toBeInTheDocument();
  });
});
