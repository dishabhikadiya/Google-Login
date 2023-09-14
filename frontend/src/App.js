import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"; // Import Routes

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>

        {/* Use the <Routes> component to wrap your routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wel" element={<Wel />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <a href="http://localhost:3000/auth/google">Login with Google</a>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <h2>Profile</h2>
      <a href="http://localhost:3001/logout">Logout</a>
    </div>
  );
}
function Wel() {
  return (
    <div>
      <h1>Wellcome</h1>
    </div>
  );
}

export default App;
