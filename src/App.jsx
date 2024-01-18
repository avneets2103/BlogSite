import {Outlet} from "react-router-dom";
import { useState } from 'react'
import { useSelector } from "react-redux";
import './App.css'
import {Header, Footer} from './Components/ComponentIndex.js'

function App() {
  return (
    <div className='page'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
