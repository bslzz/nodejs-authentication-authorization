import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  Container,
  CssBaseline,
  Grid,
  makeStyles,
  Link,
  Button,
  Typography,
  Avatar,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import asyncValidate from '../utils/asyncValidate';
import { renderTextField } from '../utils/wrappers';
import { RegisterValidate as validate } from '../utils/validation';

const Register = ({ handleSubmit, pristine, reset, submitting }) => {
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Field
                variant="outlined"
                name="firstName"
                fullWidth
                label="First Name"
                component={renderTextField}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                variant="outlined"
                name="lastName"
                component={renderTextField}
                label="Last Name"
              />
            </Grid>

            <Grid item xs={12}>
              <Field
                variant="outlined"
                name="email"
                component={renderTextField}
                label="Email"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                variant="outlined"
                name="password"
                component={renderTextField}
                label="Password"
                fullWidth
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
      </div>
    </Container>
  );
};

export default reduxForm({
  form: 'register', // a unique identifier for this form
  validate,
  asyncValidate,
})(Register);
