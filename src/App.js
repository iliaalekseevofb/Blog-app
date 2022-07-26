import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import {auth} from './firebase-config';
import './App.css';

const App = () => {

  const [isAuth, setIsAuth] = useState(false)

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false);
      window.location.pathname = '/login';
    })
  }

  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>Home</Link>
        {!isAuth 
          ? <Link to='/login'>Login</Link> 
          : (
            <>
              <Link to='/createpost'>Create post</Link>
              <button onClick={signUserOut}>Log out</button>
            </>
          )
        }
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/createpost' element={<CreatePost />} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App