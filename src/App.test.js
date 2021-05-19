import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe("App component", () => {
  test('should open without movies', () => {
    render(<App />)
    const movie = screen.queryByRole("card")
    expect(movie).toBeNull()
  });

  test('should show the search bar', () => {
    render(<App />)
    const searchBar = screen.queryByRole("search")
    expect(searchBar).toBeInTheDocument()
  })
})

