// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// Get a reference to the div with ID root
const el = document.getElementById('root');

// Tell React to take control of root
const root = ReactDOM.createRoot(el);

// Create a component
function App() {
    return <h1>Hi there!</h1>
}

// Render component on the screen
root.render(<App />);