import { Link } from "react-router-dom";

import './navbar.scss'

const Navbar = () => {
  return (
    <nav>
      <ul className='remove-this-later'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Leaderboard">Leaderboard</Link>
        </li>
        <li>
          <Link to="/Play">Play</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar