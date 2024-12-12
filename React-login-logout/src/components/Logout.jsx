import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const naviagte = useNavigate()
  useEffect(()=>{
    Navigate('/login')
  },[])
    return (
    <div>
      
    </div>
  )
}

export default Logout
