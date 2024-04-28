import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import CardCom from "./Card.jsx";
import CssBaseline from '@mui/material/CssBaseline';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Backdrop from '@mui/material/Backdrop';

function HomePage({ theme }) {
  const navigate = useNavigate();
  const [backgroundColor, setBackgroundColor] = useState(theme === 'light' ? 'gray.300' : 'black');
  const [textColor, setTextColor] = useState('#ffffff');
  const [openDialog, setOpenDialog] = useState(false);
  const [meetingId, setMeetingId] = useState('');

  useEffect(() => {
    const backgroundImageUrl = 'https://source.unsplash.com/random?wallpapers';
    const img = new Image();
    img.src = backgroundImageUrl;
    img.crossOrigin = 'Anonymous';

    img.onload = () => {
      const averageColor = getAverageRGB(img);
      const brightness = (averageColor.r * 0.299 + averageColor.g * 0.587 + averageColor.b * 0.114);

      const textColor = brightness > 125 ? '#000000' : '#ffffff';
      setTextColor(textColor);
      setBackgroundColor(`rgb(${averageColor.r}, ${averageColor.g}, ${averageColor.b})`);
    };
  }, []);

  const handleLogout = () => {
    navigate('/');
  };

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleMeetingIdChange = (event) => {
    setMeetingId(event.target.value);
  };

  const handleJoinMeetingClick = () => {
    handleDialogOpen();
  };

  const handleCreateMeetingClick = () => {
    // Navigate to the create meeting component
    navigate('/create-meeting');
  };

  const handleDisplayConferenceLogClick = () => {
    // Navigate to the display conference log component
    navigate('/conference-log');
  };

  const handleJoinMeeting = () => {
    // Handle joining the meeting using the meetingId
    // For now, just log the meetingId
    console.log('Joining meeting with ID:', meetingId);
    // Close the dialog
    handleDialogClose();
  };

  // Function to calculate the average color of an image
  const getAverageRGB = (img) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);

    let red = 0;
    let green = 0;
    let blue = 0;
    const blockSize = 5; // only visit every 5 pixels
    const length = Math.floor(canvas.width / blockSize) * Math.floor(canvas.height / blockSize);
    let count = 0;

    for (let y = 0; y < canvas.height; y += blockSize) {
      for (let x = 0; x < canvas.width; x += blockSize) {
        const data = ctx.getImageData(x, y, 1, 1).data;
        red += data[0];
        green += data[1];
        blue += data[2];
        count++;
      }
    }

    // calculate average color
    red = Math.floor(red / count);
    green = Math.floor(green / count);
    blue = Math.floor(blue / count);

    return { r: red, g: green, b: blue };
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
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `url(https://source.unsplash.com/random?wallpapers)`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: backgroundColor, // Set background color based on theme
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Box sx={{ position: 'absolute', textAlign: 'center', color: textColor }}>
          <Typography variant="h3">Welcome to RM - VIDEO CONFERENCING</Typography>
          <Typography variant="h6">Where virtual meetings come to life</Typography>
        </Box>
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
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {/* Pass appropriate click handlers to each CardCom component */}
          <CardCom type="cm" operation="Create Meeting" onClick={handleCreateMeetingClick} />
          <CardCom type="jm" operation="Join Meeting" onClick={handleJoinMeetingClick} />
          <CardCom type="dc" operation="Meetings Logs" onClick={handleDisplayConferenceLogClick} />
        </Box>

      </Grid>

      {/* Dialog for Joining Meeting */}
      <Dialog open={openDialog} onClose={handleDialogClose} BackdropComponent={Backdrop} BackdropProps={{ style: { backgroundColor: 'rgba(0, 0, 0, 0.5)' } }}>
        <DialogTitle>Join Meeting</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="meetingId"
            label="Meeting ID"
            type="text"
            fullWidth
            value={meetingId}
            onChange={handleMeetingIdChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleJoinMeeting} variant="contained" color="primary">
            Join
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}

export default HomePage;
