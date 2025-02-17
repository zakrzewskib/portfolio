import { Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { NavBar, Footer } from './components';
import { Router } from './router';
import { MAX_WIDTH } from './constants';

const darkTheme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline /> {/* enable dark mode for the background */}
      <NavBar maxWidth={MAX_WIDTH} />
      <Container maxWidth={MAX_WIDTH} component="main">
        <Router />
      </Container>
      <Footer maxWidth={MAX_WIDTH} />
    </ThemeProvider>
  );
}

export default App;
