import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function JoinMeeting() {
  const navigate = useNavigate();
  const [meetingId, setMeetingId] = useState('');

  const handleInputChange = (event) => {
    setMeetingId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Redirect the user to the meeting room with the specified meeting ID
    navigate(`/meeting/${meetingId}`);
  };

  return (
    <div>
      <h1>Join Meeting</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="meetingId">Meeting ID:</label>
        <input
          type="text"
          id="meetingId"
          value={meetingId}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Join Meeting</button>
      </form>
    </div>
  );
}

export default JoinMeeting;
