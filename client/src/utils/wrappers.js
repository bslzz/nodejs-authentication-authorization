import React from 'react';
import TextField from '@material-ui/core/TextField';

export const renderTextField = ({
  className,
  label,
  input,
  variant,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    InputProps={{
      classes: {
        input: className,
      },
    }}
    variant={variant}
    label={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);
