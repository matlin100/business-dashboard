import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import UserSettings from '../Settings//UserSettings'; // Adjust the path as necessary
import Graphs from '../Graphs/Graphs';   // Adjust the path as necessary
import UserData from '../Data/Data';       // Adjust the path as necessary
import UserCards from '../Data/UserCards'
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import { useUserData } from '../../context/UserDataContext'
function Dashboard({ userLoggedIn }) {
const { userData, isLoading } = useUserData();



  return (
    <Container maxWidth="lg">
      <Header />
      <Sidebar />
      <Typography variant="h3" gutterBottom>
        Dashboard
      </Typography>
        
      {/* Settings Component */}
      <section>
        <Typography variant="h4" gutterBottom>Settings</Typography>
        <UserSettings user={userData?.user} isLoading={isLoading} />
      </section>

      {/* Graphs Component */}
      <section>
        <Typography variant="h4" gutterBottom>Graphs</Typography>
        <Graphs customerDetails={userData?.customerDetails} isLoading={isLoading} />
      </section>

      <section>
        <Typography variant="h4" gutterBottom>User Details</Typography>
        <UserCards customerDetails={userData?.customerDetails} isLoading={isLoading}/>
      </section>

      {/* Data Component */}
      <section>
        <Typography variant="h4" gutterBottom>Data</Typography>
        <UserData user={userData?.user} isLoading={isLoading} />
      </section>

      <Footer />
    </Container>
  );
}

export default Dashboard;
