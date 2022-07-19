import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Link, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  

  return (
   <div className='App'>
      <Navbar/>
      <Outlet/>
   </div>
  )
}

export default App
