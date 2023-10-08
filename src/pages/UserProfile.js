import React from 'react';
import { Paper, Typography, Avatar, Button, TextField } from '@mui/material';

function UserProfile() {
  return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <Avatar style={{ width: '100px', height: '100px' }}>U</Avatar>
      </div>
      
      <Typography variant="h5" align="center" gutterBottom>
        User Profile
      </Typography>

      <TextField
        fullWidth
        margin="normal"
        label="Full Name"
        defaultValue="John Doe"
        variant="outlined"
      />

      <TextField
        fullWidth
        margin="normal"
        label="Email Address"
        defaultValue="johndoe@example.com"
        variant="outlined"
      />

      <TextField
        fullWidth
        margin="normal"
        label="Phone Number"
        defaultValue="+123456789"
        variant="outlined"
      />

      <TextField
        fullWidth
        margin="normal"
        label="Address"
        defaultValue="123 Main St, City, Country"
        variant="outlined"
        multiline
        rows={4}
      />

      <TextField
        fullWidth
        margin="normal"
        type="password"
        label="Change Password"
        variant="outlined"
        helperText="Leave blank to keep the same password."
      />

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Button variant="contained" color="primary">
          Save Changes
        </Button>
      </div>
    </Paper>
  );
}

export default UserProfile;
