import { ThemeProvider } from "@mui/material";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { 
  Landing, 
  Leaderboard, 
  Login, 
  Play 
} from "../pages";
import Register from "../pages/Login/Register";
import { startup } from "../services/app/app.svc";
import { appTheme } from "../styles/theme";
import Navbar from "./Navbar/Navbar";
import { useDispatch } from "react-redux"
import { getUserProfile } from "../store/reducers/profile";
import './app.scss'
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    startup()
  
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