import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/styles';

import Header from './ui/Header/Header';
import theme from './ui/Theme';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
