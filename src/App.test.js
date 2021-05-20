import { render, screen } from '@testing-library/react'
import App from './App'

/**
 * Queries
 * 
 * getBy: retorna o elemento ou um erro descritivo se
 *        nada ou mais de um elementofor encontrado.
 * queryBy: retorna o elemento ou null se nada for
 *          encontrado. Útil para conferir se um elemento
 *          está ou não presente. Lança um erro se nenhum
 *          ou mais de um elemento forem encontrados.
 * findBy: retorna uma promisse que é resolvida quando
 *         um elemento for encontrado, a promisse é
 *         rejeitada se nenhum ou mais de um elemento 
 *         for encontrado após 1000ms.
 * 
 * Para encontrar mais de um elemento que dê match com o
 * que se deseja, pode-se usar getAllby, queryAllBy e
 * findAllBy.
 */

describe("App component", () => {
  test('should open without movies', () => {
    render(<App />)
    const movie = screen.queryByRole("card")
    expect(movie).toBeNull()
  });

  test('should show the search bar', () => {
    render(<App />)
    const searchBar = screen.getByRole("search")
    expect(searchBar).toBeInTheDocument()
  })

  test('should show the button Search!', () => {
    render(<App />)
    const searchButton = screen.getByRole("button", { name: "Search!"})
    expect(searchButton).toBeInTheDocument()
  })
})

