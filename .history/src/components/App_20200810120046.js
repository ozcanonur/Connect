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
        {/* Conditional showing of content depending on the current URL */}
        <Switch>
          <Route exact path='/' render={(props) => <div>'/'</div>} />
          <Route exact path='/programlar' render={(props) => <div>programlar</div>} />
          <Route exact path='/ulkeler' render={(props) => <div>ulkeler</div>} />
          <Route exact path='/galeri' component={() => <div>galeri</div>} />
          <Route exact path='/referanslar' component={() => <div>referanslar</div>} />
          <Route exact path='/hakkimizda' component={() => <div>hakkimizda</div>} />
          <Route exact path='/iletisim' component={() => <div>iletisim</div>} />
        </Switch>
        <Footer
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
