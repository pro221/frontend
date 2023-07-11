import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Courses from "./components/Courses";

import Login from "./components/Login";
import HomePage from "./components/HomePage";
import Register from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
