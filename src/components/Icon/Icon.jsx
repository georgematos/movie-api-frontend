import React from 'react'
import './Icon.css'

const Icon = (props) => {
  return (
    <a className="btn btn-outline-light btn-floating m-1" href={props.link} role="button">
      <i className={props.class}></i>
    </a>
  )
}

export default Icon