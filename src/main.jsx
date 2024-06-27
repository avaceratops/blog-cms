import React from 'react';
import ReactDOM from 'react-dom/client';
import AuthProvider from './providers/AuthProvider';
import Routes from './routes/Routes';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </React.StrictMode>
);
