import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Employees from './components/Employees';
import Services from './components/Services';
import Contact from './components/Contact';
import Candidate from './components/Candidate';
import './App.css';

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
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Employees />
              <Services />
            </>
          } />
          <Route path="/candidate/:hash_value" element={<Candidate />} />
        </Routes>
        <Contact />
      </Router>
    </ThemeProvider>
  );
}

export default App;
