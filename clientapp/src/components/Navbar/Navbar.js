import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import './navbar.scss'

const Navbar = () => {
  const userProfile = useSelector(state => state.userProfile);

  const isLoggedIn = userProfile.complete && userProfile.data;

  return (
    <div id='navbar'>
      <Stack 
        className='remove-this-later'
        direction='row'
        spacing={2}
      >
        <Link to="/">Home</Link>
        <Link to="/Leaderboard">Leaderboard</Link>
        <Link to="/Play">Play</Link>
        
        {!isLoggedIn &&
        <Link to="/Login">Login</Link>
        }

        {isLoggedIn &&
        <span>Hello, {userProfile.data.username}</span>
        }
        
      </Stack>
    </div>
  )
}

export default Navbar