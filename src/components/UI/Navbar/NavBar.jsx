import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MyButton from '../button/MyButton'
import { AuthContext } from '../../../context'

const NavBar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }

  return (
    <header className='navbar'>
      <MyButton onClick={logout}>
        Выйти
      </MyButton>
      <div className='navbar__links'>
        <Link to='/about'>О нас</Link>
        <Link to='/posts'>Посты</Link>
      </div>
    </header>
  )
}

export default NavBar