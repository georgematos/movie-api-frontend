import React, { createContext, useContext, useState } from 'react'

const MainAppContext = createContext()

export default function MainAppProvider({ children }) {
  const [movies, setMovies] = useState([])

  return (
    <MainAppContext.Provider value={{ movies, setMovies }}>
      {children}
    </MainAppContext.Provider >
  )
}

export function useMainContext() {
  const context = useContext(MainAppContext)
  if (!context) throw new Error("useMainContext must be used within a MainAppProvider")
  const {movies, setMovies} = context
  return {movies, setMovies}
}
