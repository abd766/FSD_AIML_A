import React from 'react'
import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dasboard'
const App = () => {
  const [regData, setRegData] = useState();
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}>
        <Route path="/login" element={<Login regData={regData}/>}/>
        <Route path="/register" element={<Register regData={setRegData}/>}/>
        </Route>
        <Route path="/dashboard" element={<Dashboard regDash = {regData}/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="*" element={<h1>No page vailable</h1>}/>

      </Routes>
    </div>
  )
}

export default App
