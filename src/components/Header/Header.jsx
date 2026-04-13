import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div>
      <header>
      <div className="logo">
       <h1 style={{fontSize: '25px'}}>GYM <span style={{ color: '#FAFF00' }}>24</span></h1> 
       <nav>
        <ul>
          <li>Advantages</li>
          <li>Membership</li>
          <li>About</li>
          <li>Trainers</li>
        </ul>
       </nav>
      </div>
      </header>
    </div>
    
  )
}

export default Header
