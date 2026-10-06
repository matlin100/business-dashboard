import React, { useState,  useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import {validateToken} from './services/authService'
import Login from './components/connect/Login';
import Register from './components/connect/Register';
import Dashboard from './components/Dashboard/Dashboard';
import ProtectedRoute from './ProtectedRoute'; // Ensure this is the correct path
import { UserDataProvider } from './context/UserDataContext';

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false); // Replace with actual auth logic
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      validateToken(token).then(isValid => {
        if (isValid) {
          setUserLoggedIn(true);
        }
      });
    }
  }, []);


  const handleLoginSuccess = (token) => {
    if(token){
      localStorage.setItem('token', token); // Assuming the token is passed here
      setUserLoggedIn(true);
    }
    
  };

  return (
    <UserDataProvider>
    <Router>
      <div>
        <Routes>
        <Route path="/login" element={userLoggedIn ? <Navigate to="/dashboard" /> : <Login onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/register" element={userLoggedIn ? <Navigate to="/dashboard" /> : <Register onLoginSuccess={handleLoginSuccess}/>} />

          <Route path="/dashboard" element={
            <ProtectedRoute userLoggedIn={userLoggedIn}>
              <Dashboard  userLoggedIn={userLoggedIn}/>
            </ProtectedRoute>
          } />
          <Route path="*" element={userLoggedIn ? <Navigate to="/dashboard" /> : <Login onLoginSuccess={handleLoginSuccess} />} />
        </Routes>
      </div>
    </Router>
    </UserDataProvider>
  );
}

export default App;
