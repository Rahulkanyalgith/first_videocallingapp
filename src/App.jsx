import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


import Room from "./pages/room/Room";
import Home from "./pages/home/Home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room/:roomId" element={<Room />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App