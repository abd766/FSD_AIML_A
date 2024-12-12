import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../App.css'
import { Link, Outlet } from 'react-router-dom'
const Dashboard = (regDash) => {
  return (
    <div>
      <Header/>
      <nav>
        <ul>
            <li>
                {regDash.email}
            </li>
            <li>
                <Link to="/logout">Logout</Link>
            </li>
        </ul>
      </nav>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Dashboard
