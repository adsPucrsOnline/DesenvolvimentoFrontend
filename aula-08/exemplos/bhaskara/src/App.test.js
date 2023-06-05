import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import { calcularDelta, calcularRaizes } from './Bhaskara';

test('calculates delta correctly', () => {
  expect(calcularDelta(1, 2, 1)).toBe(0);
  expect(calcularDelta(1, -5, 6)).toBe(1);
  expect(calcularDelta(2, -7, 3)).toBe(25);
  expect(calcularDelta(1, 3, 4)).toBe(-7);
});

test('calculates roots correctly', () => {
  expect(calcularRaizes(1, 2, 1)).toEqual([-1]);
  expect(calcularRaizes(1, -5, 6)).toEqual([3, 2]);
  expect(calcularRaizes(2, -7, 3)).toEqual([3, 0.5]);
  expect(calcularRaizes(1, 3, 4)).toEqual([]);
});

test('renders form and calculates roots on submit', () => {
  const { getByLabelText, getByText, getByRole } = render(<App />);

  const aInput = getByLabelText('a:');
  const bInput = getByLabelText('b:');
  const cInput = getByLabelText('c:');
  const calculateButton = getByText('Calcular');

  fireEvent.change(aInput, { target: { value: '1' } });
  fireEvent.change(bInput, { target: { value: '-5' } });
  fireEvent.change(cInput, { target: { value: '6' } });
  fireEvent.click(calculateButton);

  const roots = getByRole('list').querySelectorAll('li');
  expect(roots.length).toBe(2);
  expect(roots[0].textContent).toBe('3');
  expect(roots[1].textContent).toBe('2');
});
