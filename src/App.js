// src/App.js
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import theme from './theme';
import Navbar from './components/Navbar'; // Only Navbar imported
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Programs from './components/Programs';
import Admissions from './components/Admissions';
import Contact from './components/Contact';
import Enrollment from "./components/Enrollment";
import AboutPage from "./components/AboutPage";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/programs" element={<Programs />} />
                        <Route path="/admissions" element={<Admissions />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/enroll" element={<Enrollment />} />
                        <Route path="/about-us" element={<AboutPage />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </ThemeProvider>
    );
};

export default App;
