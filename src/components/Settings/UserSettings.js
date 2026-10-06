import React, { useState, useEffect } from 'react';
import {
  Container, Grid, Typography, TextField, Button, Accordion, 
  AccordionSummary, AccordionDetails, ExpandMoreIcon // Import these components
} from '@mui/material';

import UserDataForm from './UserDataForm';
import AddressForm from './AddressForm';
import CommunicationForm from './CommunicationForm';
import userAPI from '../../api/userAPI';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap-icons/font/bootstrap-icons.css';
const UserSettings = ({ user, isLoading }) => {
  const [updateFailed, setUpdateFailed] = useState(false); // State to track update failure
  const [userData, setUserData] = useState({
    name: '',
    password: '',
    email: '',
    url: '',
    description: '',
    logo: '',
    phone: '',
    website: '',
    tags: [],
    address: {
      street: '',
      city: '',
      state: '',
      zip: '',
    },
    summary: {
      satisfaction: 0,
      importance: 0, // Initialize importance with a default value
      subject: '',
      category: '',
      content: '',
    },
    sendEmaile: [{
      date: Date,
      customerName: [String],
      email: [String],
      urgency: Number,
      importance: Number,
      customerSatisfaction: Number,
      customerStrength: Number,
      hour: String
  }],
  });

  const [changedData, setChangedData] = useState({});
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    if (user) {
      setUserData(() => ({
        name: user.name || '',
        password: user.password|| '',
        email: user.email || '',
        url: user.url || '',
        description: user.descriptionv || '',
        logo: user.logo || '',
        phone: user.phone || '',
        website: user.website || '',
        tags: user.tags || [],
        sendEmaile: user.sendEmaile || [{
          date: new Date(),
          customerName: [],
          email: [],
          urgency: 0,
          importance: 0,
          customerSatisfaction: 0,
          customerStrength: 0,
          hour: '',
        }],
        address: user.address || {
          street: '',
          city: '',
          state: '',
          zip: '',
        },
        summary: user.summary || {
          satisfaction: 0,
          importance: 0,
          subject: '',
          category: '',
          content: '',
        }, 
        sendEmaile: user.sendEmaile || [{
          date: Date,
          customerName: [''],
          email: [''],
          urgency: 0,
          importance: 0,
          customerSatisfaction: 0,
          customerStrength: 0,
          hour: 0
      }],
      }));
    }
  }, [user]);

  const handleAccordionChange = (event, isExpanded) => {
    setExpanded(isExpanded);
  };

  const setAllFields = (field, value) => {
    // Update the userData state
    setUserData((prevUserData) => ({
      ...prevUserData,
      [field]: value,
    }));

    // Update the changedData state
    setChangedData((prevChangedData) => ({
      ...prevChangedData,
      [field]: value,
    }));
  };

  
  
  const handleSubmit = async (e) => {
    setUpdateFailed(true);
    e.preventDefault();
    try {
      setUpdateFailed(true);
      const token = localStorage.getItem('token');
      if (!token) {
        console.log('Token does not exist');
        return;
      }
      console.log('Changed data:', changedData);
      const data = await userAPI.updateUser(token, changedData); // Send only changed data
      
    } catch (error) {
      console.error('Error updating user data:', error);
      setUpdateFailed(false);
    }
    setUpdateFailed(false);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>No user data available</div>;
  }

  return (
    <Container>
      <Dropdown>
        
        <Accordion expanded={expanded} onChange={handleAccordionChange}>

          <AccordionSummary
          
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h4" style={{margin:'auto'}}>User Settings <i class="bi bi-menu-up"></i></Typography>
            <div data-testid="ExpandIcon" color="primary" > </div>
          </AccordionSummary>
          <AccordionDetails>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <UserDataForm userData={userData} setAllFields={setAllFields} />
                <AddressForm userData={userData} setAllFields={setAllFields} />
                <CommunicationForm userData={userData} setAllFields={setAllFields} />
                <Grid item xs={12}>
                  <Button
                    id="save-button"
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={updateFailed}
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </form>
          </AccordionDetails>
        </Accordion>
      </Dropdown>
    </Container>
  );
};

export default UserSettings;
