import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/header'
import Footer from './Components/Footer'
function App() {

  return (
    <div className='overflow-x-hidden'>
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default App
