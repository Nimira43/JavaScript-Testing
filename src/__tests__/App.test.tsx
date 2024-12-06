import { render, screen } from "@testing-library/react"
import { test, expect } from 'vitest'
import App from '../App'

test('Should render  headiing with correct text', () => {
  render(<App />)
  screen.debug()
  const heading = screen.getByText('React Testing')
  expect(heading).toBeInTheDocument()
})