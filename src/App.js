import React from 'react';
import Router from './routes/Router';
import theme from './Constants/theme'
import { ThemeProvider } from '@material-ui/core/styles'



function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
    </>
  );
}

export default App;
