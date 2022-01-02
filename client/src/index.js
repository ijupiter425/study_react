import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './Clock/Clock';
import Toggle from './Toggle/Toggle';
import reportWebVitals from './reportWebVitals';
import { MuiThemeProvider, createTheme } from '@material-ui/core';

const theme = createTheme({
  typography: '"Noto Sans KR", serif'
})
{/* <React.StrictMode>
<Toggle/>
<Clock/>
<App/>
</React.StrictMode>, */}
ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <div>
      <App/>
    </div>
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
