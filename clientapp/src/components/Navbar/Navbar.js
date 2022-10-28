import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import './navbar.scss'

const Navbar = () => {
  return (
    <nav id='navbar'>
      <Stack 
        className='remove-this-later'
        direction='row'
        spacing={2}
      >
        <Link to="/">Home</Link>
        <Link to="/Leaderboard">Leaderboard</Link>
        <Link to="/Play">Play</Link>
        <Link to="/Login">Login</Link>
      </Stack>
    </nav>
  )
}

export default Navbar