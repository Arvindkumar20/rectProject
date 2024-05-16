// import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import Cources from './components/Cources'
import Refund from './components/Refund'
import TopCompanys from './components/TopCompanys'
import Internship from './components/Internship'
import Courcecard from './components/Corcecard'

function App() {
  return (
   <>
   <Nav/>
   <div className="m-auto ">
   <Home/>
   <Cources/>
   <Refund/>
   </div>

   <TopCompanys/>
   <div className="m-auto">
    <Internship/>
    <Courcecard/>
    <Courcecard/>

   </div>
   </>
  )
}

export default App
