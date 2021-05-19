import { render, screen } from '@testing-library/react'
import Footer from '../../components/Footer/Footer'

describe('footer component test', () => {
  test('renders footer component', () => {
    render(<Footer />);
    const footer = screen.getByTestId("id-footer")
    
    expect(footer).toBeInTheDocument
    expect(footer).toHaveTextContent(/Movie Search API is a small application that was made for a job interview at Instituto Atlântico/i)
  })
  test('footer have classes footer and sticky-footer', () => {
    render(<Footer />);
    const footer = screen.getByTestId("id-footer")

    expect(footer).toHaveClass("footer", "sticky-footer")
  })
})