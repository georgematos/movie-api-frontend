import { render, screen } from '@testing-library/react'
import MainAppProvider from '../Context/MainAppContext'
import Home from './Home'

describe("Home component", () => {

  test('should show the search bar and button Search!', () => {
    render(
      <MainAppProvider>
        <Home />
      </MainAppProvider>
    )
    
    const searchBar = screen.getByRole("search")
    const searchButton = screen.getByRole("button", { name: "Search!"})
    
    expect(searchBar).toBeInTheDocument()
    expect(searchButton).toBeInTheDocument()
  });

})
