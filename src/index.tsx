import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import {DefaultDarkTheme,DefaultLightTheme} from '../components/styles'
import RongTheme from '../components/styles/themeProvider';


ReactDOM.render(
  <React.StrictMode>
    <RongTheme theme={DefaultLightTheme} mode="light">
      <App />
    </RongTheme>
  </React.StrictMode>,
  document.getElementById('root')
);

