import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css'; // Optional, depending on if you set up styles
import App from './components/App'; // Ensure this matches your App component path

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
