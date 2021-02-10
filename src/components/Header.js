import React from 'react';
import { Link } from 'react-router-dom'

import './Header.css';

import logo from '../assets/instagram-1.svg'
import camera from '../assets/camera.svg'

function Header() {
  return (
    <header id="main-header">
      <div className="header-content">
        <Link to="/">
          <img className="img-logo" src={logo} alt="insta"/>
        </Link>
        <Link to="/new">
          <img src={camera} alt="Enviar Publicação"/>
        </Link>
      </div>
    </header>
  )
}

export default Header;