import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';

// Create a context to hold authentication data
export const AuthContext = createContext();

export default function App() {
  const [userAuth, setUserAuth] = useState(null);

  return (
    <AuthContext.Provider value={{ userAuth, setUserAuth }}>
      <Router>
          <Routes>
              <Route path="/" element={<Login />}/>
              <Route path="/login" element={<Login />}/>
              <Route path='/home' element={<ProtectedRoute element={<Home/>}/>}/>
              <Route path="/about" element={<ProtectedRoute element={<About/>}/>}/>
              {/* <Route path="/logout" element={<ProtectedRoute element={<Login/>}/>}/> */}
          </Routes>
      </Router>
    </AuthContext.Provider>

  );
}

function Home() {

  return (
    <nav>xs
       <h2>Home</h2>;
       <h3>Hello </h3>
    <ul>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/login">Logout</Link></li>
    </ul>
  </nav>
 )
}

function About() {
  return (
    <nav>
        <h2>About</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Logout</Link></li>
        </ul>
    </nav>
  )
}
