import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutCard from './components/AboutCard/AboutCard'
import HomeCard from './components/HomeCard/HomeCard'
import HomePage from './components/Layout/Layout'
import { OrderPlacement } from './components/OrderPlacement/OrderPlacement'
import ProgramCard from './components/ProgramCard/ProgramCard'

// Example data
import { performances } from './data/performances'
import { tickets } from './data/tickets';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}>
          <Route path="/home" element={<HomeCard values={performances}/>} />
          <Route path="/about" element={<AboutCard/>} />
          <Route path="/program" element={<ProgramCard values={performances}/>} />
          <Route path="/cart" element={<OrderPlacement tickets={tickets}/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
