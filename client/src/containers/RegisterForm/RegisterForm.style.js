import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(5, 0, 2),
    backgroundColor: theme.palette.secondary.main,
  },
  signUp: {
    margin: theme.spacing(0, 0, 2),
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
