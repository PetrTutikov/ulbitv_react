import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header className='navbar'>
      <div className='navbar__links'>
        <Link to='/about'>О нас</Link>
        <Link to='/posts'>Посты</Link>
      </div>
    </header>
  )
}

export default NavBar