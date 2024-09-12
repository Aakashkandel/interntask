import React from 'react'
import{Outlet} from 'react-router-dom'
import UserNavbar from './Components/Task4/Navbar'

export default function PageRouter() {
  return (
    <div>
      <UserNavbar/>
        <Outlet/>
    </div>
  )
}


