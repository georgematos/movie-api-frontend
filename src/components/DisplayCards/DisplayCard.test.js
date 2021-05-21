import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DisplayCards from './DisplayCards'
import MovieCard from '../MovieCard/MovieCard'

import { getMovies } from '../../../__mocks__/fakeAPI'

describe('DisplayCard test', () => {

  test('should render at least movie card', async () => {

    const movies = await getMovies()

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

  test('should render more than one movie card', async () => {

    const movies = await getMovies()

    render(
      <DisplayCards movies={movies.data} />
    )

    const card1 = screen.queryByTestId("tt0076759")
    const card2 = screen.queryByTestId("tt0086190")

    expect(card1).toBeInTheDocument()
    expect(card2).toBeInTheDocument()

    const title1 = screen.queryByText("Star Wars: Episode IV - A New Hope")
    const title2 = screen.queryByText("Star Wars: Episode VI - Return of the Jedi")
    const year1 = screen.queryByText("1977")
    const year2 = screen.queryByText("1983")

    expect(title1).toBeInTheDocument()
    expect(title2).toBeInTheDocument()
    expect(year1).toBeInTheDocument()
    expect(year2).toBeInTheDocument()

  })

})