import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import Landing from './pages/landing.js'
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

let theme = createTheme({
    palette: {
      primary: {
        main: '#34344a',
      },
      secondary: {
        main: '#f4f1de',
      },
      error:{
        main: '#e07a5f'
      },
      warning:{
        main: '#f2cc8f'
      },
      info:{
        main: '#8D5A97',
      },
      success:{
        main: "#81b29a"
      }
    },
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Landing />
            <App />
        </ThemeProvider>
    </React.StrictMode>
);


serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
