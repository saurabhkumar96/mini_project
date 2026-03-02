import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

// https://www.codecademy.com/learn/paths/build-web-apps-with-react

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
    </Routes>
  )
}

export default App