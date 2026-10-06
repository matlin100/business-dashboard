import React, { useState } from 'react';
import {
  Grid,
  TextField,
  IconButton,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Card,
  CardContent,
  Button,
  Slider, // Import Slider component
} from '@mui/material';
import {
  Chat as ChatIcon,
  ExpandMore as ExpandMoreIcon,
  AddCircle as AddCircleIcon,
} from '@mui/icons-material';

const CommunicationForm = ({ userData, setAllFields }) => {
  const [expanded, setExpanded] = useState(false); // State to track if the section is expanded
  const [newCommunication, setNewCommunication] = useState({
    date: new Date(),
    customerName: [],
    email: [],
    urgency: 0,
    importance: 0,
    customerSatisfaction: 0,
    customerStrength: 0,
    hour: '',
    content: '',
  });
  const [communications, setCommunications] = useState(userData.sendEmaile);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewCommunication((prevCommunication) => ({
      ...prevCommunication,
      [name]: value,
    }));
  };

  const handleSliderChange = (field, newValue) => {
    setNewCommunication((prevCommunication) => ({
      ...prevCommunication,
      [field]: newValue,
    }));
  };

  const handleAddCommunication = () => {
    setCommunications([...communications, newCommunication]);
    setNewCommunication({
      date: new Date(),
      customerName: [],
      email: [],
      urgency: 0,
      importance: 0,
      customerSatisfaction: 0,
      customerStrength: 0,
      hour: '',
      content: '',
    });
  };

  return (
    <Grid item xs={12}>
      <Card sx={expanded ? { backgroundColor: '#f5f5f5' } : undefined}>
        <CardContent>
          <Typography variant="h6" gutterBottom  onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more">
            Communication
    
        
          </Typography>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <List>
              {communications.map((comm, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <ChatIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={`${comm.customerName.join(', ')} - ${new Date(
                      comm.date
                    ).toLocaleDateString()}`}
                    secondary={comm.content}
                  />
                </ListItem>
              ))}
            </List>
            <TextField
              fullWidth
              label="Customer Name"
              name="customerName"
              value={newCommunication.customerName.join(', ')}
              onChange={handleInputChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={newCommunication.email.join(', ')}
              onChange={handleInputChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Date"
              name="date"
              type="date"
              value={newCommunication.date.toISOString().split('T')[0]}
              onChange={handleInputChange}
              margin="normal"
            />
            <Typography variant="body1" gutterBottom>
              Urgency
            </Typography>
            <Slider
              xs={6}
              value={newCommunication.urgency}
              min={0}
              max={100}
              onChange={(e, newValue) => handleSliderChange('urgency', newValue)}
              valueLabelDisplay="auto"
              valueLabelFormat={(value) => `${value}%`}
            />
            <Typography variant="body1" gutterBottom>
              Importance
            </Typography>
            <Slider
              xs={6}
              value={newCommunication.importance}
              min={0}
              max={10}
              onChange={(e, newValue) =>
                handleSliderChange('importance', newValue)
              }
              valueLabelDisplay="auto"
              valueLabelFormat={(value) => `${value}%`}
            />
            <Typography variant="body1" gutterBottom>
              Customer Satisfaction
            </Typography>
            <Slider
              xs={6}
              value={newCommunication.customerSatisfaction}
              min={0}
              max={10}
              onChange={(e, newValue) =>
                handleSliderChange('customerSatisfaction', newValue)
              }
              valueLabelDisplay="auto"
              valueLabelFormat={(value) => `${value}%`}
            />
            <Typography variant="body1" gutterBottom>
              Customer Strength
            </Typography>
            <Slider
              xs={6}
              value={newCommunication.customerStrength}
              min={0}
              max={10}
              onChange={(e, newValue) =>
                handleSliderChange('customerStrength', newValue)
              }
              valueLabelDisplay="auto"
              valueLabelFormat={(value) => `${value}%`}
            />
            <TextField
              fullWidth
              label="Hour"
              name="hour"
              value={newCommunication.hour}
              onChange={handleInputChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Content"
              name="content"
              value={newCommunication.content}
              onChange={handleInputChange}
              margin="normal"
              multiline
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddCommunication}
              startIcon={<AddCircleIcon />}
            >
              Add Communication
            </Button>
          </Collapse>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CommunicationForm;
