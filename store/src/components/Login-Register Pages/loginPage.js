import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import useStyles from './styles';
import Auth from '../../services/Auth';
import {useNavigate} from 'react-router-dom';

const apiURL = "https://localhost:4000/";

export default function SignIn() {

  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  const validate = () => {
    let emailError = "";
    let passwordError = "";

    setEmailError("");
    setPasswordError("");

    if (!email.includes('@')){
      emailError = "Invalid Email";
    }
    if(!password){
      passwordError = "Invalid Password";
    }
    if(emailError){
      setEmailError(emailError);
      return false
    }
    if(passwordError){
      setPasswordError(passwordError);
      return false
    }
    return true
  };

  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validate();
    if(isValid){
      Auth.login({
        email: email,
        password: password
      }).then(res => {
        if (res){
          navigate('/');
        }
        else{
          setEmailError("Invalid combination of email and password");
        }
      })
    }
  };

  return (
    <main className={classes.content}>
    <div className = {classes.toolbar}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <div style = {{fontSize:15, color: "red"}}>{emailError}</div>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={handleEmailChange}
              value={email}
              autoComplete="email"
              autoFocus
            />
            <div style = {{fontSize:15, color: "red"}}>{passwordError}</div>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              value={password}
              onChange={handlePasswordChange}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
    </main>
  );
}