import React from 'react';
import { TextField, Grid } from '@material-ui/core';


function FormInput({ name, label, required, value }) {
  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
      <TextField
        as={TextField}
        name={name}
        label={label}
        value={value}
        fullWidth
        required={required}
        error={isError}
      />
    </Grid>
  );
}

export default FormInput;