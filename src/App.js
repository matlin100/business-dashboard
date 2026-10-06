import React, { useState ,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import Login from './components/connect/Login';
import Register from './components/connect/Register';
import Dashboard from './components/Dashboard/Dashboard';
import ProtectedRoute from './ProtectedRoute'; // Ensure this is the correct path
import './App.css'

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false); // Replace with actual auth logic
  
  useEffect(() => {
    setUserLoggedIn(localStorage.getItem('UserLoggedIn'));  
  }, []);


  const handleLoginSuccess = () => {
    localStorage.setItem('UserLoggedIn', true)
    setUserLoggedIn(localStorage.getItem('UserLoggedIn')); 
  };

  const handleLogout = () => {
    localStorage.removeItem('UserLoggedIn')
    setUserLoggedIn(false); 
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={userLoggedIn ? <Navigate to="/dashboard" /> : <Login onLoginSuccess={handleLoginSuccess} />} />
          <Route path="/register" element={userLoggedIn ? <Navigate to="/dashboard" /> : <Register onLoginSuccess={handleLoginSuccess}/>} />

          <Route path="/dashboard" element={
            <ProtectedRoute userLoggedIn={userLoggedIn}>
              <Dashboard userLoggedIn={userLoggedIn} handleLogout={handleLogout}/>
            </ProtectedRoute>
          } />
          {/* Redirect to Dashboard if no other routes match */}
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
