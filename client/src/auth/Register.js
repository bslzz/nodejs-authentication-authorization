import React from 'react';
import { reduxForm } from 'redux-form';
import { Container, CssBaseline, Typography, Avatar } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { authValidate as validate } from '../utils/validation';

import RegisterForm from '../containers/RegisterForm/RegisterForm';
import { useStyles } from '../containers/RegisterForm/RegisterForm.style';

const Register = ({ handleSubmit, pristine, submitting }) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography className={classes.signUp} component="h1" variant="h5">
          Sign up
        </Typography>
        <RegisterForm
          handleSubmit={handleSubmit}
          pristine={pristine}
          submitting={submitting}
          classes={classes}
        />
      </div>
    </Container>
  );
};

export default reduxForm({
  form: 'register',
  validate,
})(Register);
