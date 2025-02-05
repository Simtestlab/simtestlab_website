import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Employees from './components/Employees';
import Services from './components/Services';
import Contact from './components/Contact';
import Career from './components/Career';
import BlogHome from './components/BlogHome';
import BlogPost from './components/BlogPost';
import Login from './components/Login';
import EditorPage from './components/Editor';
import EditDocument from './components/EditDocument';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./config/firebaseConfig";
import './App.css';
import BlogList from './components/BlogList';
import { HelmetProvider, Helmet } from 'react-helmet-async';

const theme = createTheme({
  palette: {
    primary: { main: '#1497B9' },
    secondary: { main: '#1BB88D' },
    background: { default: '#EBF2FA' },
    text: { primary: '#033F63' },
  },
});

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Simtestlab</title>
          <meta name="description" content="A company focused on Battery Management Systems, Simulation, Battery Energy Systems, and Automotive solutions with Artificial Intelligence and Efficient Software solutions"/>
          <meta property='og:title' content="Simtestlab" />
          <meta property='og:description' content='A company focused on Battery Management Systems, Simulation, Battery Energy Systems, and Automotive solutions with Artificial Intelligence and Efficient Software solutions'/>
        </Helmet>
      </HelmetProvider>
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
              <Route path="/blogs" element={<BlogHome />} />
              <Route path="/:slug" element={<BlogPost />} />

              <Route path="/login" element={user ? <Navigate to="/blogs" replace /> : <Login />} />

              <Route path="/edit/:docId" element={<EditDocument />} />
              <Route path="/bloglist" element={<BlogList />} />
              <Route
                path="/editor"
                element={
                  user ? <EditorPage /> : <Login />
                }
              />

            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;