// Import the React and ReactDOM libraries and App.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Get a reference to the div with ID root
const el = document.getElementById('root');

// Tell React to take control of root
const root = ReactDOM.createRoot(el);

// Render component on the screen
root.render(<App />);