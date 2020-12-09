import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux'
import { toggleSignup, handleLoginFormChange, sendSignup, sendLogin } from '../actions/actionCreators'

const Login = (props) => {
  const { signup, toggleSignup, form, handleLoginFormChange, sendSignup, sendLogin } = props
  const { email, username, password, passwordConfirmation } = form


  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
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
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const onSubmit = (e) => {
    e.preventDefault()
    if (signup){
      if (password == passwordConfirmation){
        sendSignup({username: username, email: email, password: password})
      } else {
        alert("Those passwords don't match!")
      }
    } else {
      sendLogin({email: email, password: password})
    }
  }

  const classes = useStyles();
  return(
    <>
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          {/* <LockOutlinedIcon /> */}
        </Avatar>
        <Typography component="h1" variant="h5">
        <h3>{signup ? "Sign up!" : "Login!"} </h3>
        </Typography>
      <form className={classes.form} noValidate onSubmit={ onSubmit }>
      <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={handleLoginFormChange} 
          /> 
        <br/>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password} 
            onChange={handleLoginFormChange}
          />
     <br/>
        {signup &&
          <>
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="username"
            label="username"
            type="text"
            id="username"
            autoComplete="username"
            value={username} 
            onChange={handleLoginFormChange}
          />
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="passwordConfirmation"
            label="passwordConfirmation"
            type="password"
            id="passwordConfirmation"
            autoComplete="passwordConfirmation"
            value={passwordConfirmation} 
            onChange={handleLoginFormChange}
          />
          </>
        }
        <br/>
        <input type="submit" 
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            value="Submit" />
      <br/>
      <br/>
         </form>
         <button
            fullWidth
            variant="contained"
            color="primary"
            onClick={toggleSignup}>Or... {signup ? "Login!" : "Sign up!"}</button>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
      </Container>
      </>
  )
}

const mapStateToProps = (state) => ({
  signup: state.user.signup,
  form: state.user.loginForm
})

export default connect(mapStateToProps, { toggleSignup, handleLoginFormChange, sendSignup, sendLogin })(Login)