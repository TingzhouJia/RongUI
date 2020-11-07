import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { ThemeStore } from '../components/styles';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={ThemeStore}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

