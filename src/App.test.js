import { render, screen } from '@testing-library/react'
import App from './App'
import Icon from './components/Icon/Icon'

describe("App component", () => {
  test('renders title page', () => {
    render(<App />)
    const titleElement = screen.getByTestId("id-title")
    expect(titleElement).toHaveTextContent(/movie search api/i)
  });

  test('renders footer component', () => {
    render(<App />);
    const footer = screen.getByTestId("id-footer")
    expect(footer).toBeInTheDocument
    expect(footer).toHaveClass("footer", "sticky-footer")
    expect(footer).toHaveTextContent(/Movie Search API is a small application that was made for a job interview at Instituto Atlântico/i)
  });
})

