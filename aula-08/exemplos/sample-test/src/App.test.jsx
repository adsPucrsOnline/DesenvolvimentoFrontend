import React from 'react';
import {render, screen } from '@testing-library/react'
import App from './App';

test('renderizando a mensagem Ola', () => {
  render(<App />);
  const helloElement = screen.getByText(/Ola/i);
  expect(helloElement).toBeInTheDocument();
});
