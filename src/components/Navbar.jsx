import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const isLoggedIn = false;

  return (
    <div className='header'>
          <h2>Dalab Blog</h2>
          <div className="nav-bar">
              <Link to="/">Home</Link>
           {isLoggedIn && <Link to="/create">Create</Link>}
          </div>
    </div>
  )
}
