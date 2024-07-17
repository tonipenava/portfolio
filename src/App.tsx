import React, { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer';
import { textContent, imageSrc } from './constants/constants';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Home textContent={textContent} imageSrc={imageSrc} />
      <About />
      <Portfolio />
      <Footer />
    </>
  );
};

export default App;
