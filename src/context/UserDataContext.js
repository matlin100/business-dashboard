import React, { createContext, useContext, useState } from 'react';
import userAPI from '../../src/api/userAPI'; // Ensure you have the correct path

const UserDataContext = createContext();

export const useUserData = () => useContext(UserDataContext);

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Define loading state and its setter

  const fetchUserData = async (token) => {
    setIsLoading(true); // Set loading to true before fetching data
    try {
      const response = await userAPI.fetchUserData(token);
      setUserData(response); // Update user data with response
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setIsLoading(false); // Ensure loading is set to false after fetching
    }
  };

  // Provide userData, isLoading, and fetchUserData to the context
  return (
    <UserDataContext.Provider value={{ userData, isLoading, fetchUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};
