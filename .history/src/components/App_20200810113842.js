import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/styles';

import Header from './ui/Header/Header';
import theme from './ui/Theme';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  // Track index of selected menu item
  const [selectedIndex, setSelectedIndex] = useState(0);
  // State for the index of active tab, good for showing what tab is selected currently
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
