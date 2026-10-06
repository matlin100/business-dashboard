import React from 'react';
import { Grid, TextField, Typography } from '@mui/material';
import {
  Person, Lock,Email,Language,Description,Image,Phone,Public
} from '@mui/icons-material'; // Import icons
import './forom.css'

const UserDataForm = ({ userData, setAllFields }) => {
  return (
    <>
      <Grid item xs={12} sm={6}>
        <div className="user-field">
          <Person className="user-icon" /> {/* Icon */}
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={userData.name}
            onChange={(e) => setAllFields('name', e.target.value)}
          />
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className="user-field">
          <Lock className="user-icon" /> 
          <TextField
            fullWidth
            label="Password"
            name="password"
            value={userData.password}
            type="password"
            onChange={(e) => setAllFields('password', e.target.value)}
          />
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className="user-field">
          <Email className="user-icon" /> {/* Icon */}
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={userData.email}
            onChange={(e) => setAllFields('email', e.target.value)}
          />
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className="user-field">
          <Language className="user-icon" /> {/* Icon */}
          <TextField
            fullWidth
            label="URL"
            name="url"
            value={userData.url}
            onChange={(e) => setAllFields('url', e.target.value)}
          />
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className="user-field">
          <Description className="user-icon" /> {/* Icon */}
          <TextField
            fullWidth
            label="Description"
            name="description"
            value={userData.description}
            multiline
            rows={3}
            onChange={(e) => setAllFields('description', e.target.value)}
          />
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className="user-field">
          <Image className="user-icon" /> {/* Icon */}
          <TextField
            fullWidth
            label="Logo"
            name="logo"
            value={userData.logo}
            onChange={(e) => setAllFields('logo', e.target.value)}
          />
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className="user-field">
          <Phone className="user-icon" /> {/* Icon */}
          <TextField
            fullWidth
            label="Phone"
            name="phone"
            value={userData.phone}
            onChange={(e) => setAllFields('phone', e.target.value)}
          />
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className="user-field">
          <Public className="user-icon" /> {/* Icon */}
          <TextField
            fullWidth
            label="Website"
            name="website"
            value={userData.website}
            onChange={(e) => setAllFields('website', e.target.value)}
          />
        </div>
      </Grid>
    </>
  );
};

export default UserDataForm;
