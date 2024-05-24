import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../componants/feature/Login'
import Logout from '../componants/feature/Logout'
import Profile from '../componants/feature/Profile'
import Home from '../componants/feature/Home'



let AllRoutes = () => {
  return (
    <>
    
    <Routes> 
      <Route path='' element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='logout' element={<Logout/>}/>
      



    </Routes>
    
    </>
  )
}

export default AllRoutes