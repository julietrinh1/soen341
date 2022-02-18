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
import axios from 'axios';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';


const apiURL = "http://localhost:4000/";


export default function SignUp({ setToken, setUserInfo }) {

  async function registerUser(user) {
    return await axios.post(apiURL + "users/usersignup", user).catch(() => { return null });
  }

  const classes = useStyles();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleAdminToggle = () => {
    setIsAdmin(!isAdmin);
  }

  const [isAdmin, setIsAdmin] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

  const validate = () => {
    let emailError = "";
    let passwordError = "";

    setEmailError("");
    setPasswordError("");

    if (!email.includes('@')) {
      emailError = "Invalid Email";
    }
    if (!password) {
      passwordError = "Invalid Password";
    }
    if (emailError) {
      setEmailError(emailError);
      return false
    }
    if (passwordError) {
      setPasswordError(passwordError);
      return false
    }
    return true
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValid = validate();
    if (isValid) {
      const res = await registerUser({
        email: email,
        password: password,
        isAdmin: isAdmin
      })
        if (res == null) {
          setEmailError("Email already in use");
        }
        else {
          setToken(res.data.token);
          setUserInfo(res.data);
        }
    }
  };

  return (
    <main className={classes.content}>
      <div className={classes.toolbar}>
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
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <div style={{ fontSize: 15, color: "red" }}>{emailError}</div>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    autoComplete="email"
                  />
                </Grid>
                <div style={{ fontSize: 15, color: "red" }}>{passwordError}</div>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>

              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="space-between" alignItems="center">
                <Grid item>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox checked={isAdmin}/>} onChange={handleAdminToggle} label="Administrator" />
                  </FormGroup>
                </Grid>
                <Grid item>
                  <Link href="/signin" variant="body2">
                    Already have an account? Sign in
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