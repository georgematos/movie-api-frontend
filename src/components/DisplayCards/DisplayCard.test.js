import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DisplayCards from './DisplayCards'
import MovieCard from '../MovieCard/MovieCard'

import { getMovies } from '../../../__mocks__/fakeAPI'

describe('DisplayCard test', () => {

  test('should show at least one movie after search for a valid title', async () => {

    const movies = await getMovies("star wars")

    render(
      <DisplayCards movies={movies.data} />
    )

    const card = screen.queryByTestId("tt0076759")

    expect(card).toBeInTheDocument()

    const title = screen.queryByText("Star Wars: Episode IV - A New Hope")
    const year = screen.queryByText("1977")

    expect(title).toBeInTheDocument()
    expect(year).toBeInTheDocument()

  })

  // TODO
  // test('should show No movies found if an invalid title is passed', async () => {

  // })
})