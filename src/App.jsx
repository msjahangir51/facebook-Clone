import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './assets/Pages/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/video' element={<Home/>}></Route>
          <Route path='/markketplace' element={<Home/>}></Route>
          <Route path='/groups' element={<Home/>}></Route>
          <Route path='/games' element={<Home/>}></Route>
          {/* mobile  */}
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Friend-m' element={<Home/>}></Route>
          <Route path='/Messenger-m' element={<Home/>}></Route>
          <Route path='/Notifications-m' element={<Home/>}></Route>
          <Route path='/Video-m' element={<Home/>}></Route>
          {/* mobile  */}
        </Routes>
      </BrowserRouter>   
    </>
  )
}

export default App