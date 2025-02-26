import { Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { useLocation } from 'react-router';
import { Footer, NavBar } from './components';
import { MAX_WIDTH } from './constants';
import { Router } from './router';
import { store } from './store/store';

const darkTheme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

function App() {
  const { pathname } = useLocation();

  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline /> {/* enable dark mode for the background */}
        <NavBar maxWidth={MAX_WIDTH} />
        <Container maxWidth={MAX_WIDTH} component='main'>
          <Router />
        </Container>
        <Footer maxWidth={MAX_WIDTH} isPositionFixed={pathname !== '/skills'} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
