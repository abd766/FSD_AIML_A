import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../App.css'
import { Link, Outlet } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <Header/>
      <nav>
        <ul>
            <li>
                <Link to="/login">Login</Link>
            </li>
            
            <li>
                <Link to="/register">Register Here</Link>
            </li>
        </ul>
      </nav>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Home
