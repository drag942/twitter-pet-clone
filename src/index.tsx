import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from '@material-ui/core';
import theme from "./theme";
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
  </ThemeProvider>,
  document.getElementById('root')
);
