import { Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { NavBar } from './components';
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
      <NavBar />
      <Container maxWidth="xl" component="main">
        <Router />
      </Container>
    </ThemeProvider>
  );
}

export default App;
