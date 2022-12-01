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
import Navbar from "./Navbar/Navbar";

let APIURL = ""

const App = () => {
  startup()

  return (
    <Router>
      <div>
        <Navbar />

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
    </Router>
  )
}

export default App