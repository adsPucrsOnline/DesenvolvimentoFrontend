import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TiposComentarios from './TiposComentarios';

describe('<TiposComentarios />', () => {
  test('it should mount', () => {
    render(<TiposComentarios />);
    
    const tiposComentarios = screen.getByTestId('TiposComentarios');

    expect(tiposComentarios).toBeInTheDocument();
  });
});