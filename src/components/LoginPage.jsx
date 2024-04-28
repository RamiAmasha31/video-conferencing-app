import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import {login} from "../services/api";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        2gether
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function LoginPage({ theme, isLoggedIn, setIsLoggedIn }) { // Accept isLoggedIn and setIsLoggedIn as props
  const [isSignUp, setIsSignUp] = React.useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      if (isSignUp) {
        console.log({
          fullName: data.get('fullName'),
          email: data.get('email'),
          password: data.get('password'),
        });
        // Handle sign-up form submission
      } else {
        
          const email= data.get('email');
          const password= data.get('password');
        console.log("email+pass ",email,password);
        const response = await login(email, password); // Call login function with email instead of username
        // localStorage.setItem('token', response.token); // Store token in local storage
        console.log('signin successful!');
        setIsLoggedIn(true); // Update isLoggedIn state to true after successful login

        navigate("/home");

        // Handle sign-in form submission
      }
    } catch (error) {
      console.error('Error:', error.message);
      // Handle error gracefully, display error message to user, etc.
    }
  };

  const handleSignUpClick = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={12}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: theme === 'light' ? 'gray.300' : 'black', // Set background color based on theme
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: theme === 'light' ? 'white' : 'black', // Set background color based on theme
          color: theme === 'light' ? 'black' : 'green.500', // Set text color based on theme
        }}
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: theme === 'light' ? 'primary.main' : '#ca8a04', }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography className={theme === 'dark' ? 'text-white' : ''} component="h1" variant="h5">
            {isSignUp ? 'Sign Up' : 'Sign in'}
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            {isSignUp && (
              <TextField
                margin="normal"
                required
                fullWidth
                id="fullName"
                label="Full Name"
                name="fullName"
                autoComplete="name"
                autoFocus
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: theme === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'white', // Adjust border color for dark theme
                    },
                    '&:hover fieldset': {
                      borderColor: theme === 'light' ? 'rgba(0, 0, 0, 0.87)' : '#ca8a04', // Adjust hover border color for dark theme
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: theme === 'light' ? 'rgba(0, 0, 0, 0.87)' : '#ca8a04', // Adjust focused border color for dark theme
                    },
                  },
                  '& .MuiOutlinedInput-input': {
                    color: theme === 'light' ? 'black' : 'white', // Set text color for input fields based on theme
                  },
                  '& .MuiInputLabel-root': {
                    color: theme === 'light' ? 'rgba(0, 0, 0, 0.6)' : '#ca8a04', // Set label color based on theme
                  },
                  '& .MuiFormLabel-root.Mui-focused': {
                    color: theme === 'light' ? 'rgba(0, 0, 0, 0.87)' : 'white', // Set focused label color based on theme
                  },
                }}
              />
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus={!isSignUp}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: theme === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'white', // Adjust border color for dark theme
                  },
                  '&:hover fieldset': {
                    borderColor: theme === 'light' ? 'rgba(0, 0, 0, 0.87)' : '#ca8a04', // Adjust hover border color for dark theme
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: theme === 'light' ? 'rgba(0, 0, 0, 0.87)' : '#ca8a04', // Adjust focused border color for dark theme
                  },
                },
                '& .MuiOutlinedInput-input': {
                  color: theme === 'light' ? 'black' : 'white', // Set text color for input fields based on theme
                },
                '& .MuiInputLabel-root': {
                  color: theme === 'light' ? 'rgba(0, 0, 0, 0.6)' : '#ca8a04', // Set label color based on theme
                },
                '& .MuiFormLabel-root.Mui-focused': {
                  color: theme === 'light' ? 'rgba(0, 0, 0, 0.87)' : 'white', // Set focused label color based on theme
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: theme === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'white', // Adjust border color for dark theme
                  },
                  '&:hover fieldset': {
                    borderColor: theme === 'light' ? 'rgba(0, 0, 0, 0.87)' : '#ca8a04', // Adjust hover border color for dark theme
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: theme === 'light' ? 'rgba(0, 0, 0, 0.87)' : '#ca8a04', // Adjust focused border color for dark theme
                  },
                },
                '& .MuiOutlinedInput-input': {
                  color: theme === 'light' ? 'black' : 'white', // Set text color for input fields based on theme
                },
                '& .MuiInputLabel-root': {
                  color: theme === 'light' ? 'rgba(0, 0, 0, 0.6)' : '#ca8a04', // Set label color based on theme
                },
                '& .MuiFormLabel-root.Mui-focused': {
                  color: theme === 'light' ? 'rgba(0, 0, 0, 0.87)' : 'white', // Set focused label color based on theme
                },
              }}
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: theme === 'light' ? 'primary.main' : '#ca8a04', // Set button color based on theme
                '&:hover': {
                  bgcolor: theme === 'light' ? 'primary.dark' : 'white', // Set button hover color based on theme
                },
              }}
            >
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </Button>
            <Grid container>
              <Grid item > 
                <Link href="#" variant="body2" onClick={handleSignUpClick} sx={{ color: theme === 'dark' ? '#ca8a04' : '' }}>
                  {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default LoginPage;
