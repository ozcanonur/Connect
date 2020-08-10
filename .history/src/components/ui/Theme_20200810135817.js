import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';
const arcGrey = '#868686';
const gray = '#807f80';

export default createMuiTheme({
  shadows: ['none'],
  palette: {
    common: {
      gray: `${gray}`,
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  // Typography is things related with font
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'None',
      fontWeight: 700,
      // rem is responsive em
      fontSize: '1rem',
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      // textTransform disables auto upper case etc.
      textTransform: 'none',
      color: 'white',
    },
    h2: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '2.5rem',
      color: `${arcBlue}`,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: 'Pacifico',
      fontSize: '2.5rem',
      color: `${arcBlue}`,
    },
    h4: {
      fontFamily: 'Raleway',
      fontSize: '1.75rem',
      color: `${arcBlue}`,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: '1.25rem',
      fontWeight: 300,
      color: `${arcGrey}`,
    },
    subtitle2: {
      color: 'white',
      fontSize: '1.25rem',
      fontWeight: 300,
    },
    body1: {
      fontSize: '1.25rem',
      color: arcGrey,
      fontWeight: 300,
    },
    learnButton: {
      borderColor: `${arcBlue}`,
      color: `${arcBlue}`,
      borderWidth: 2,
      textTransform: 'none',
      borderRadius: 50,
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      padding: 5,
    },
  },
});