import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { Field, reduxForm } from 'redux-form';

import { registerUser } from '../redux/actions/authAction';
import { useDispatch } from 'react-redux';

import { RegisterValidate as validate } from '../utils/validation';

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
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const Register = ({ handleSubmit, pristine, submitting }) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const registerChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    try {
      dispatch(registerUser(user));
    } catch (error) {
      console.warn(error);
    }
  };

  const renderTextField = ({
    input,
    label,
    variant,
    meta: { touched, invalid, error },
    ...custom
  }) => (
    <TextField
      variant={variant}
      label={label}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  );

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

        <form
          onSubmit={() => handleSubmit(submitForm)}
          className={classes.form}
          noValidate
        >
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
                component={renderTextField}
                variant="outlined"
                fullWidth
                label="Last Name"
                name="lastName"
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                variant="outlined"
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                component={renderTextField}
                value={email}
                onChange={registerChangeHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                variant="outlined"
                fullWidth
                name="password"
                label="Password"
                type="password"
                component={renderTextField}
                value={password}
                onChange={registerChangeHandler}
              />
            </Grid>
          </Grid>
          <Button
            disabled={pristine || submitting}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
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
  form: 'register',
  validate,
})(Register);
