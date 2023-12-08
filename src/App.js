import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Entrance from './pages/Entrance'
import Login from './pages/Login'
import Main from './pages/Main'
import Movie from './pages/Movie'
import Register from './pages/Register'
import TodoApp from './pages/TodoApp'
export class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Entrance/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/index' element={<Movie/>}/>
        <Route path='/main' element={<Main/>}/> 
        <Route path='/todo' element={<TodoApp/>}/>
      </Routes>
      </BrowserRouter>
    )
  }
}

export default App