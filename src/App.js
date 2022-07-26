import React, { useState } from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import './App.css'

const App = () => {

  const [isAuth, setIsAuth] = useState(false)

  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/createpost'>Create post</Link>
        {!isAuth && <Link to='/login'>Login</Link>}
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