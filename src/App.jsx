import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import { AppContext } from './contexts/authContext';
import Routes from './routes';

const theme = createTheme();

function App() {
  const [isAuthenticated, userHasAuthenticated] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Routes />
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;
