import { render, screen } from '@testing-library/react'
import Header from './Header';

describe("Header component", () => {
  test('renders title page', () => {
    const title="Movie Search API"

    render(<Header title={title}/>)
    const headerTitle = screen.getByTestId("id-title")
    expect(headerTitle).toHaveTextContent(title)
  });
})