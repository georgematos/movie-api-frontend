import React from 'react'
import './Icon.css'

const Icon = ({link, linkClass}) => {
  return (
    <a className="btn btn-outline-light btn-floating m-1" href={link} role="button">
      <i className={linkClass}></i>
    </a>
  )
}

export default Icon