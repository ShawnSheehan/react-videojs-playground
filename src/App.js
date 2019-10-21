import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import MBTheme from './theme/mbtheme';
import { CssBaseline, createMuiTheme } from '@material-ui/core';
import Routes from './routes';

const appTheme = createMuiTheme(MBTheme[0]);

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={appTheme}>
        <div className='app-wrapper'>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
