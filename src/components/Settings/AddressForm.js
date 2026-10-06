import React from 'react';
import { Grid, TextField, Slider, Typography } from '@mui/material';
import {LocationOn,LocationCity,LocationOnOutlined, LocationCityOutlined, LocationSearching, MarkunreadMailbox,
} from '@mui/icons-material'; // Import icons
import './forom.css'
const AddressForm = ({ userData, setAllFields }) => {
  return (
    <>
      <Grid item xs={12} sm={6}>
        <div className="user-field">
          <LocationOn className="user-icon" /> {/* Icon */}
          <TextField
            fullWidth
            label="Street"
            name="street"
            value={userData.address.street}
            onChange={(e) =>
              setAllFields('address', {
                ...userData.address,
                street: e.target.value,
              })
            }
          />
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className="user-field">
          <LocationCity className="user-icon" /> {/* Icon */}
          <TextField
            fullWidth
            label="City"
            name="city"
            value={userData.address.city}
            onChange={(e) =>
              setAllFields('address', {
                ...userData.address,
                city: e.target.value,
              })
            }
          />
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className="user-field">
          <LocationSearching className="user-icon" /> {/* Icon */}
          <TextField
            fullWidth
            label="State"
            name="state"
            value={userData.address.state}
            onChange={(e) =>
              setAllFields('address', {
                ...userData.address,
                state: e.target.value,
              })
            }
          />
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className="user-field">
          <MarkunreadMailbox className="user-icon" /> {/* Icon */}
          <TextField
            fullWidth
            label="ZIP"
            name="zip"
            value={userData.address.zip}
            onChange={(e) =>
              setAllFields('address', {
                ...userData.address,
                zip: e.target.value,
              })
            }
          />
        </div>
      </Grid>
      
  
    </>
  );
};

export default AddressForm;
