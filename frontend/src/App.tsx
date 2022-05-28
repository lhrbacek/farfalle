import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import PlayCard from './components/PlayCard/PlayCard'
import AboutCard from './components/AboutCard/AboutCard'
import HomeCard from './components/HomeCard/HomeCard'
import HomePage from './components/Layout/Layout'
import { OrderPlacement } from './components/OrderPlacement/OrderPlacement'
import ProgramCard from './components/ProgramCard/ProgramCard'
import BookingCard from './components/Booking/BookingCard'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}>
          <Route path="/home" element={<HomeCard />} />
          <Route path="/about" element={<AboutCard />} />
          <Route path="/cart" element={<OrderPlacement />} />

          <Route path="/program" element={<ProgramCard />} />
          <Route path="/program/:id" element={<PlayCard />} />
          <Route path="/program/booking/:id" element={<BookingCard />}>
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
