import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { Slide, Zoom } from '@mui/material';
import CardCom from "./Card.jsx"
function HomePage({ theme }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // localStorage.removeItem('token'); // Remove token from local storage
    navigate('/'); // Redirect to login page
  };

  // Define click handlers for each type of card
  const handleCreateMeetingClick = () => {
    // Navigate to the create meeting component
    navigate('/create-meeting');
  };

  const handleJoinMeetingClick = () => {
    // Navigate to the join meeting component
    navigate('/join-meeting');
  };

  const handleDisplayConferenceLogClick = () => {
    // Navigate to the display conference log component
    navigate('/display-conference-log');
  };
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid
        item
        xs={12}
        sm={4}
        md={7}
        sx={{
          backgroundColor: theme === 'light' ? 'gray.300' : 'black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h3" sx={{ color: theme === 'light' ? 'black' : '#ca8a04', mt: 4 }}>
          <span>Welcome to Home Page</span>
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        sx={{
          backgroundColor: theme === 'light' ? 'white' : 'gray',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 4,
        }}
      >

        <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '100%' , gap: '20px' }}>
{/* Pass appropriate click handlers to each CardCom component */}
<CardCom type="cm" operation="Create Meeting" description=" Create your own meeting and invite your friends!" onClick={handleCreateMeetingClick} />
          <CardCom type="jm" operation="Join Meeting" description="All you need to do is to enter the meeting ID!" onClick={handleJoinMeetingClick} />
          <CardCom type="dc" operation="Display Conference history logs" description="Here you can see the transcriptions of all of your conferences!" onClick={handleDisplayConferenceLogClick} />
          
        </Box>
        <Box sx={{ my: 8 }}>
          
          <Button
            onClick={handleLogout}
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              bgcolor: theme === 'light' ? 'primary.main' : '#ca8a04',
              '&:hover': {
                bgcolor: theme === 'light' ? 'primary.dark' : '#ca8a04',
              },
            }}
          >
            Logout
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default HomePage;
