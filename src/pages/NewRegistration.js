import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const NewRegistration = () => {
  return (
    <div>
      <h2>New Registration</h2>
      <form>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Age"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Mobile"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Location"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Language"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Availability"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Address"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default NewRegistration;
