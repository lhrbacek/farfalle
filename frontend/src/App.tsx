import { Route, Routes, Navigate } from 'react-router-dom'
import PlayCard from './components/PlayCard/PlayCard'
import AboutCard from './components/AboutCard/AboutCard'
import HomeCard from './components/HomeCard/HomeCard'
import { OrderPlacement } from './components/OrderPlacement/OrderPlacement'
import ProgramCard from './components/ProgramCard/ProgramCard'
import BookingCard from './components/Booking/BookingCard'
import SignIn from './components/SignIn/SignIn'
import NewAccount from './components/NewAccount/NewAccount'
import Profile from './components/Profile/Profile'
import EditProfile from './components/Profile/EditProfile'
import DeleteAccount from './components/Profile/DeleteAccount'
import ReturnTickets from './components/ReturnTickets/ReturnTickets'
import Admin from './components/Profile/Admin'
import NoMatchRoute from './components/Error/NoMatchRoute'
import { useEffect } from 'react'
import Layout from './components/Layout/Layout'

function App() {

  useEffect(() => {
    document.title = "Farfalle"
  }, [])

  const user = false;
  const authenticatedUser = (authenticated: boolean) => {
    //TODO: there will be probably some token or smh
    if (!authenticated) {
      return (
        <>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/newcommer" element={<NewAccount />} />
        </>
      );
    }
    return (
      <>
        <Route path="/account" element={<Profile />} />
        <Route path="/account/edit" element={<EditProfile />} />
        <Route path="/account/delete" element={<DeleteAccount />} />
        <Route path="/account/tickets" element={<ReturnTickets />} />
        <Route path="/account/admin" element={<Admin />} />
      </>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Layout auth={user} />} >
        <Route index element={<HomeCard />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/about" element={<AboutCard />} />
        <Route path="/cart" element={<OrderPlacement />} />

        <Route path="/program" element={<ProgramCard />} />
        <Route path="/program/:id" element={<PlayCard />} />
        <Route path="/program/booking/:id" element={<BookingCard />} />

        {authenticatedUser(user)}

        <Route path="*" element={<NoMatchRoute />} />
      </Route>
    </Routes >
  )
}

export default App
