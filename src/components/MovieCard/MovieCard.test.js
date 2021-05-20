import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MovieCard from './MovieCard'

import { getMovie } from '../../../__mocks__/fakeAPI'

describe('MovieCard test', () => {

  test('should show a card with title and year of a movie', async () => {

    const movie = await getMovie()

    render(
      <MovieCard movie={movie.data} />
    )

    const card = screen.queryByTestId("tt0076759")

    expect(card).toBeInTheDocument()

    const title = screen.queryByText("Star Wars: Episode IV - A New Hope")
    const year = screen.queryByText("1977")

    expect(title).toBeInTheDocument()
    expect(year).toBeInTheDocument()

  })

})