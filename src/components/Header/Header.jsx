import React, { useState } from 'react'
import './Header.css'

const Header = ({title}) => {

  return (
    <header data-testid="id-title" className="header">
      <h1>{title}</h1>
    </header>
  )

}

export default Header