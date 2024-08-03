import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Employees from './components/Employees';
import Services from './components/Services';
import Contact from './components/Contact';
import './App.css';

// Define your custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1497B9',  // Blue
    },
    secondary: {
      main: '#1BB88D',  // Green
    },
    background: {
      default: '#EBF2FA',  // Light Gray/Blue
    },
    text: {
      primary: '#033F63',  // Dark Blue
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Hero />
        <About />
        <Employees />
        <Services />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
