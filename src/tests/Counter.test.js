// import necessary react testing library helpers here
// import the Counter component here
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Counter from '../components/Counter';


  // Render the Counter component here


test('renders counter message', () => {
  render(<Counter />);
  const counterMessage = screen.getByText(/counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  render(<Counter />);
  const countValue = screen.getByTestId('count');
  expect(countValue).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  render(<Counter />);
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);
  const countValue = screen.getByTestId('count');
  expect(countValue).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  render(<Counter />);
  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton);
  const countValue = screen.getByTestId('count');
  expect(countValue).toHaveTextContent('-1');
});
