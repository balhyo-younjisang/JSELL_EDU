import React from 'react';
import ReactDOM from 'react-dom/client';
import ParentComponent from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ParentComponent />
  </React.StrictMode>
);
