import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import App from '../App'


test('should render heading with correct text', () => {
  render(<App />)

  screen.debug()

  // Long hand
  // const heading = screen.getByText('React Testing Library')
  // expect(heading).toBeInTheDocument()

  // Short hand
  expect(screen.getByText('React Testing Library')).toBeInTheDocument()

})

test('This empty test will pass', () => {
  // Empty test - will pass
})

test('This empty test will pass too', () => {
  const sum = 4 + 8
  expect(sum).toBe(23)
})
