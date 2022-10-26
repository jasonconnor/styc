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
import Navbar from "./Navbar/Navbar";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/Login" 
            element={<Login />} />
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