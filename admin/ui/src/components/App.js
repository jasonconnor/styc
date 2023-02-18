import {
  BrowserRouter as Router
} from "react-router-dom"
import { ThemeProvider } from "@mui/material"
import { appTheme } from "../styles/theme"
import './app.scss'

const App = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <Router>
        <div>
          <div id='page-main-container'>
            <div>App component</div>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App