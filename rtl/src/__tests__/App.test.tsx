import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import App from '../App'


test('should render heading with correct text', () => {
  render(<App />)

  screen.debug()

  const heading = screen.getByText('React Testing Library')

  expect(heading).toBeInTheDocument()
})
