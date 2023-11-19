import React from 'react'
import './NavBarStyles.css'

const Navbar = () => {
  return (
    <div>
        <nav className='navbar'> 
        <div className="logoContainer">
           <img src="../assets/us.png" alt='logo' style={{width: '100px', height: '100px'}} />
           <h1>Ateneo De Davao University</h1>
           </div>

         
        </nav>
    </div>
  )
}

export default Navbar