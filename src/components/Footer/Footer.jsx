import React, { useState } from 'react'
import './Footer.css'
import Icon from '../../components/Icon/Icon';

const Footer = (props) => {

  return (
    <footer data-testid="id-footer" className="footer sticky-footer">
      <Icon link="https://github.com/georgematos" linkClass="fab fa-github"/>
      <Icon link="https://www.linkedin.com/in/george-matos-373a8919a/" linkClass="fab fa-linkedin"/>

      <div>Movie Search API is a small application that was made for a job interview at Instituto Atlântico</div>
      <div>© 2021 Copyright</div>
    </footer>
  )

}

export default Footer