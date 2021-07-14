import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import useTheme from './theme';
import Main from './app/components/main/Main';

const muiTheme = useTheme();

const App = () => (
  <div>
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Main />
    </ThemeProvider>
  </div>
);

export default App;
