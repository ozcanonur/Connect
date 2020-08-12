import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/styles';

import LandingPage from './ui/LandingPage/LandingPage';
import Footer from './ui/Footer/Footer';
import Header from './ui/Header/Header';
import Ulkeler from './ui/Tabs/Ulkeler/Ulkeler';
import Hakkimizda from './ui/Tabs/Hakkimizda/Hakkimizda';
import Referanslar from './ui/Tabs/Referanslar/Referanslar';
import Iletisim from './ui/Tabs/Iletisim/Iletisim';

import theme from './ui/Theme';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollIntoView from './ScrollIntoView';

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
        <ScrollIntoView>
          <Switch>
            <Route exact path='/' render={() => <LandingPage />} />
            <Route exact path='/programlar' render={(props) => <div>programlar</div>} />
            <Route exact path='/ulkeler' render={() => <Ulkeler />} />
            <Route exact path='/galeri' component={() => <div>galeri</div>} />
            <Route exact path='/referanslar' component={() => <Referanslar />} />
            <Route exact path='/hakkimizda' component={() => <Hakkimizda />} />
            <Route exact path='/iletisim' component={() => <Iletisim />} />
          </Switch>
        </ScrollIntoView>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
