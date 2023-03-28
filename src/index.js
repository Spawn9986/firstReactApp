//index.js is where you mount/render your main react component onto your “root” element(which you mark in your html).

// Import the React and ReactDOM libraries and App.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//locate client DOM root and set to a variable
const el = document.getElementById('root')

// Tell React to take control of root
const root = ReactDOM.createRoot(el);

// Render component on the screen
root.render(<App />);