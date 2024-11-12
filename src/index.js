import React from 'react';
import ReactDOM from 'react-dom';

// A simple React component
const App = () => (
  <div style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 9999, backgroundColor: 'white', padding: '10px', border: '1px solid #ccc' }}>
    <h2>My Tampermonkey React UI</h2>
    <p>This UI is injected using React and Tampermonkey!</p>
    <button onClick={() => alert('Hello from React in Tampermonkey!')}>Click Me</button>
  </div>
);

// Render the React component into the DOM
const rootElement = document.createElement('div');
document.body.appendChild(rootElement); // Append it to the body or anywhere you'd like
ReactDOM.render(<App />, rootElement);
