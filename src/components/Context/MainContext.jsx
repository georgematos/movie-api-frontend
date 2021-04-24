import React, { createContext, useContext, useState } from 'react'

const MainContext = createContext()

export default function MainProvider({ children }) {
  const [movies, setMovies] = useState([])

  return (
    <MainContext.Provider value={{ movies, setMovies }}>
      {children}
    </MainContext.Provider >
  )
}

export function useMainContext() {
  const context = useContext(MainContext)
  const {movies, setMovies} = context
  return {movies, setMovies}
}
