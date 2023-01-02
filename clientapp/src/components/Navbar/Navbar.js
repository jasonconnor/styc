import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { 
  Divider, 
  Menu, 
  MenuItem, 
  Stack 
} from "@mui/material"
import { logout } from "../../services/auth/auth.svc"
import './navbar.scss'

import DebugMenu from "../../pages/Play/Test/DebugMenu"

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const userProfile = useSelector(state => state.userProfile)
  
  const open = Boolean(anchorEl)
  const isLoggedIn = userProfile.complete && userProfile.data && !userProfile.data?.error
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    logout()
  }

  return (<>
    <div id='navbar'>
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        className='title-container'
      >
        <div className='flurish-container'></div>
        <div className='page-title'>Slash Til You Crash</div>
        <div className='flurish-container'>
          
        </div>
      </Stack>

      <Stack 
        className='nav-links-container'
        direction='row'
        justifyContent='space-between'
      >
        <Stack
          direction='row'
          spacing={2}
        >
          <Link to="/">Home</Link>
          <Link to="/Leaderboard">Leaderboard</Link>
          {isLoggedIn &&
          <Link to="/Play">Play</Link>
          }
        </Stack>

        {/* Remove This after Game implemented */}
        <DebugMenu />
        
        {!isLoggedIn &&
        <Stack
          direction='row'
          spacing={2}
        >
          <Link to="/Login">Login</Link>
          <Link to="/Register">Register</Link>
        </Stack>
        }

        {isLoggedIn &&
        <span 
          onClick={handleClick}
          className='profile-menu-button'
        >
          {userProfile.data.username}
        </span>
        }
        
      </Stack>
    </div>
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      id='profile-dropdown-menu'
    >
      <Link to='/Profile'>
        <MenuItem
          className='link-text'
        >
          Profile
        </MenuItem>
      </Link>
      <Divider />
      <MenuItem
        onClick={handleLogout}
      >
        Logout
      </MenuItem>
    </Menu>
    </>
  )
}

export default Navbar