import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react'
import Header from '../Header'

it('Header displays title', () => {
  render(<Header />)
  const headerEl = screen.getByTestId('header');
  expect(headerEl).toBeInTheDocument()
})

it('Correct header title showing', () => {
  render(<Header />)
  const { innerHTML } = screen.getByTestId('header');
  expect(innerHTML).toBe("New York Times")
})