import { Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { NavBar, Footer } from './components';
import { Router } from './router';

const darkTheme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline /> {/* enable dark mode for the background */}
      <NavBar maxWidth="lg" />
      <Container maxWidth="lg" component="main">
        <Router />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
