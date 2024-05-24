import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-warning">
  <div class="container">
    <a class="navbar-brand" href="#"><h3> Login Task</h3> </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        
        
        <NavLink class="nav-link" to="/"><h5 className='btn btn-light btn-sm m-2'>Home</h5></NavLink>
        {
          localStorage.getItem("access-token")
          ?
          <>
          <NavLink class="nav-link" to="/profile"> <h5 className='btn btn-light btn-sm m-2'>Profile</h5></NavLink>
          <NavLink class="nav-link" to="/logout"><h5 className='btn btn-light btn-sm m-2'>Logout</h5></NavLink>
          
          </>
          :
          <NavLink class="nav-link" to="/login"><h5 className='btn btn-light btn-sm m-2'>Login</h5></NavLink>

        }




        
      </div>
    </div>
  </div>
</nav>

    
    
    
    </>
  )
}

export default Header