import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Field } from 'redux-form';
import { renderTextField } from '../../utils/wrappers';
import { Grid, Button } from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';
import { getFormValues } from 'redux-form';

// import Notification from './RegisterForm.snackbar';

const LoginForm = ({ pristine, submitting, classes, handleSubmit }) => {
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const formValues = getFormValues('login')(state);
  const email = formValues && formValues['email'];
  const password = formValues && formValues['password'];

  const submitForm = () => {
    const user = { email, password };
    try {
      setOpen(true);
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Field
            variant="outlined"
            name="email"
            component={renderTextField}
            label="Email"
            fullWidth
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            variant="outlined"
            name="password"
            component={renderTextField}
            label="Password"
            type="password"
            fullWidth
            autoComplete="no"
          />
        </Grid>
      </Grid>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.submit}
        disabled={pristine || submitting}
        fullWidth
      >
        Login
      </Button>

      <Grid container justify="flex-end">
        <Grid item>
          <Link to="/register" variant="body2">
            Don't have an account? Sign up
          </Link>
        </Grid>
      </Grid>

      {/* <Notification handleClose={handleClose} open={open} /> */}
    </form>
  );
};

export default LoginForm;
