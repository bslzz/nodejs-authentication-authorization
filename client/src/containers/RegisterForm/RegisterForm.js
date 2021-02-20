import React from 'react';
import { Field } from 'redux-form';
import { renderTextField } from '../../utils/wrappers';
import { Grid, Link, Button } from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';
import { getFormValues } from 'redux-form';
import { registerUser } from '../../redux/actions/authAction';

const RegisterForm = ({ pristine, submitting, classes, handleSubmit }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const formValues = getFormValues('register')(state);
  const email = formValues && formValues['email'];
  const password = formValues && formValues['password'];

  const user = {
    email,
    password,
  };

  const submitForm = async () => await dispatch(registerUser(user));

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Field
            variant="outlined"
            name="firstName"
            fullWidth
            label="First Name"
            component={renderTextField}
            autoComplete="no"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            variant="outlined"
            name="lastName"
            component={renderTextField}
            label="Last Name"
            fullWidth
            autoComplete="no"
          />
        </Grid>

        <Grid item xs={12}>
          <Field
            variant="outlined"
            name="email"
            component={renderTextField}
            label="Email"
            fullWidth
            autoComplete="no"
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            variant="outlined"
            name="password"
            component={renderTextField}
            label="Password"
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
        Sign Up
      </Button>

      <Grid container justify="flex-end">
        <Grid item>
          <Link href="#" variant="body2">
            Already have an account? Sign in
          </Link>
        </Grid>
      </Grid>
    </form>
  );
};

export default RegisterForm;
