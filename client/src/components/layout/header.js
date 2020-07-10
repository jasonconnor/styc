import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className='wrapper'>

        <Link to='/'>Index</Link>
        <Link to='/login'>Log In</Link>
        <Link to='/register'>Register</Link>

      </div>
    </header>
  )
}

export default Header