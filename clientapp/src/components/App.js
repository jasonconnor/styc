import { useEffect } from "react"
import { useDispatch } from "react-redux"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import { ThemeProvider } from "@mui/material"
import { getUserProfile } from "../store/reducers/profile"
import { appTheme } from "../styles/theme"
import Navbar from "./Navbar/Navbar"
import { 
  Landing, 
  Leaderboard, 
  Login, 
  Play,
  Profile,
  Register
} from "../pages"
import './app.scss'

const App = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {  
    dispatch(
      getUserProfile()
    )
  }, [])

  return (
    <ThemeProvider theme={appTheme}>
      <Router>
        <div>
          <Navbar />

          <div id='page-main-container'>
            <Routes>
              <Route path="/Login" 
                element={<Login />} />
              <Route path="/Register" 
                element={<Register />} />
              <Route path="/Play" 
                element={<Play />} />
              <Route path="/Leaderboard" 
                element={<Leaderboard />} />
              <Route path="/Profile" 
                element={<Profile />} />
              <Route path="/" 
                element={<Landing />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App