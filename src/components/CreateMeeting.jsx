import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Import UUID library for generating unique IDs

function CreateMeeting({ theme }) {
  const [localStream, setLocalStream] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [meetingId, setMeetingId] = useState('');
  const videoRef = useRef(null);

  useEffect(() => {
    // Function to access user's camera and microphone
    const getMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        setLocalStream(stream);
      } catch (error) {
        console.error('Error accessing media devices:', error);
      }
    };

    getMedia(); // Call getMedia function when component mounts

    // Generate a unique meeting ID
    const newMeetingId = uuidv4();
    setMeetingId(newMeetingId);

    return () => {
      // Clean up function to stop the media stream when component unmounts
      if (localStream) {
        localStream.getTracks().forEach(track => track.stop());
      }
    };
  }, []); // Empty dependency array ensures the effect runs only once

  useEffect(() => {
    if (localStream && videoRef.current) {
      videoRef.current.srcObject = localStream;
    }
  }, [localStream]);

  const handleToggleMute = () => {
    // Function to toggle mute/unmute
    localStream.getAudioTracks().forEach(track => {
      track.enabled = !isMuted;
    });
    setIsMuted(!isMuted);
  };

  const handleToggleCamera = () => {
    // Function to toggle camera on/off
    localStream.getVideoTracks().forEach(track => {
      track.enabled = !isCameraOn;
    });
    setIsCameraOn(!isCameraOn);
  };

  const handleCloseMeeting = () => {
    // Function to handle closing the meeting
    // Add your logic to close the meeting (e.g., disconnect from server, navigate back)
  };

  return (
    <div>
      <h1>Create Meeting</h1>
      <p>Meeting ID: {meetingId}</p>
      <video className="rounded-lg" ref={videoRef} autoPlay muted={!isCameraOn} style={{ maxWidth: '100%', height: 'auto' }} />
      <div>
        <button onClick={handleToggleMute}>{isMuted ? 'Unmute' : 'Mute'}</button>
        <button onClick={handleToggleCamera}>{isCameraOn ? 'Turn off Camera' : 'Turn on Camera'}</button>
        <button onClick={handleCloseMeeting}>Close Meeting</button>
      </div>
    </div>
  );
}

export default CreateMeeting;
