import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function JoinMeeting({ theme }) {
  const navigate = useNavigate();
  const [meetingId, setMeetingId] = useState('');

  const handleMeetingIdChange = (event) => {
    setMeetingId(event.target.value);
  };

  const handleJoinMeeting = () => {
    // Code to join the meeting
    // Implement WebRTC connection logic here
    // Retrieve meeting details from Firestore using the meetingId
    // Exchange signaling data and establish WebRTC connection
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Join Meeting</h1>
      <input type="text" placeholder="Enter Meeting ID" value={meetingId} onChange={handleMeetingIdChange} />
      <button onClick={handleJoinMeeting}>Join Meeting</button>
      <button onClick={handleBack}>Back</button>
    </div>
  );
}

export default JoinMeeting;
