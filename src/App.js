import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Employees from './components/Employees';
import Services from './components/Services';
import Contact from './components/Contact';
import Career from './components/Career';
import './App.css';
import Editor from './components/Editor';
import BlogHome from './components/BlogHome';
import BlogPost from './components/BlogPost';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1497B9',
    },
    secondary: {
      main: '#1BB88D',
    },
    background: {
      default: '#EBF2FA',
    },
    text: {
      primary: '#033F63',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">          
          <Routes>
            <Route path="/" element={
              <>
                <Header />
                <Hero />
                <About />
                <Employees />
                <Services />
                <Contact />
              </>
            } />
            <Route path="/career" element={<Career />} />
            <Route path="/editor" element={<Editor />} />
            <Route path='/blogs' element={<BlogHome />}/>
            <Route path='/:slug' element={<BlogPost />}/>
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
