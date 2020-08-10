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
          <Route
            exact
            path='/'
            render={(props) => (
              <LandingPage {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />
            )}
          />
          <Route
            exact
            path='/services'
            render={(props) => (
              <Services {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />
            )}
          />
          <Route
            exact
            path='/customsoftware'
            render={(props) => (
              <CustomSoftware {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />
            )}
          />
          <Route exact path='/mobileapps' component={() => <div>mobileapps</div>} />
          <Route exact path='/websites' component={() => <div>websites</div>} />
          <Route exact path='/revolution' component={() => <div>revolution</div>} />
          <Route exact path='/about' component={() => <div>about</div>} />
          <Route exact path='/contact' component={() => <div>contact</div>} />
          <Route exact path='/estimate' component={() => <div>estimate</div>} />
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
