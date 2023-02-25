import { useEffect } from "react"
import {
  BrowserRouter as Router, useNavigate
} from "react-router-dom"
import { ThemeProvider } from "@mui/material"

import { CheckUserPreference } from "../services/UserPreference.svc"

import LeftPane from "./LeftPane/LeftPane"
import ContentPane from "./ContentPane/ContentPane"

import { appTheme }from "../styles/theme"
import './app.scss'

const App = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <Router>
        <div>
          <div id='page-main-container'>
            <LeftPane />
            <ContentPane />
          </div>
        </div>

        <GoToLastVisited />
      </Router>
    </ThemeProvider>
  )
}

const GoToLastVisited = _ => {
  const navigate = useNavigate()

  useEffect(() => {
    if (CheckUserPreference("DisableLoadLastVisited")) return

    // Get last visited page
    const lastVisited = localStorage.getItem('lastVisitPage')
    if (lastVisited && window.location.pathname !== lastVisited) {
      navigate(lastVisited)
      console.log(`Loaded last visited page: ${lastVisited}`)
    }
  }, [])
}

export default App