// Loading.js
import React from 'react';
import { CircularProgress } from '@mui/material';

const Loading = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh' // Full screen height
    }}>
      <CircularProgress size={70} color="primary" />
    </div>
  );
};

export default Loading;
