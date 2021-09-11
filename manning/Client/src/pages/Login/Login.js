import React, { useState, useRef } from 'react';
import Footer from '../../components/Footer/Footer';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Typography,
  Container,
  Grid,
  Snackbar,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useAuth } from '../../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '75vh'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3,0,0),
    },
    footer: {
        marginBottom: '-60px'
  }
}));

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



export default function SignIn(props) {
  const classes = useStyles();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { login, logout, currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  let history = useHistory();

  const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
          return;
      };

      setOpen(false);
  };
  const handleChange = (event) => {
    event.preventDefault();

    switch (event.target.id) {
      case 'email':
        setEmail(event.target.value)
        break;
      case 'password':
        setPassword(event.target.value)
        break;
      default:
        break;
    }
  }
  function signOut () {
    history.push('/')
    logout();
  };

  async function onSubmit(e) {
    e.preventDefault();
    
    try {
      setErrorText('');
      setLoading(true);
      await login(email, password);
      history.push('/user/adiministrator')
      setOpen(true)
    } catch {
      setError(true)
      setErrorText('Failed to log in');
    };

    setLoading(false);

  };

    return (
  <>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
            Admin Sign in
            </Typography>
          <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={handleChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            onChange={handleChange}
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="button"
            fullWidth
            onClick={onSubmit}
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          {currentUser ? (
          <Button
            type="button"
            fullWidth
            onClick={signOut}
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Log Out
          </Button>
          ): null}
          {open ? (
            <Button
            type="button"
            fullWidth
            href="/user/administrator"
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Admin Page
          </Button>
          ) : (
            null
          )}
            </form>
      </div>
        </Container>
     <Grid padding={3}>
      <Snackbar anchorOrigin={{horizontal: "center", vertical: 'top'}} open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
              Login Successful
        </Alert>
      </Snackbar>
      <Snackbar anchorOrigin={{horizontal: "center", vertical: 'top'}} open={error} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning">
              {errorText}
        </Alert>
      </Snackbar>
      </Grid>
    <Footer className={classes.footer} />
    </>
  );
};
