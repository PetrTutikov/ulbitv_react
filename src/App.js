import React, { useEffect, useState } from 'react'
import './styles/App.css'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/UI/Navbar/NavBar'
import AppRouter from './components/AppRouter'
import { AuthContext } from './context'
function App () {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setLoading(false)
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>
      <BrowserRouter>
        <NavBar/>
        <AppRouter/>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
