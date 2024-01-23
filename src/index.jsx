import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import './index.css';
import 'normalize.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div id="scroller" style={{ width: '100%', height: '100vh' }}>
      <App />
    </div>
  </React.StrictMode>
);
