import React, { useState, useEffect } from 'react';
import Header from './Header';
import EntryPage from './EntryPage';
import Loader from './Loader';
import Hero from './Hero';
import Carousel from './Carousel';
import Projects from './Projects';
import Timeline from './Timeline';
import Chatbot from './Chatbot';
import Resume from './Resume';
import Footer from './Footer';
import './App.css';
import './Timeline.css';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [entryConfirmed, setEntryConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProjects] = useState([]);

  const toggleMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const onEntryConfirmed = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setEntryConfirmed(true);
    }, 2000);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 500) {
        setEntryConfirmed(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    fetch('./projects.json')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error loading project data:', error));
  }, []);

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      {isLoading ? (
        <Loader />
      ) : !entryConfirmed ? (
        <EntryPage onEntryConfirmed={onEntryConfirmed} />
      ) : (
        <>
          <Header darkMode={darkMode} toggleMode={toggleMode} />
          <Hero darkMode={darkMode} />
          <Carousel />
          <section id="AMA">
            <Chatbot />
          </section>
          <section id="aboutme">
            <Timeline darkMode={darkMode} />
          </section>
          <section id="projects">
            <Projects projects={projects} darkMode={darkMode} />
          </section>
          <section id="resume">
            <Resume />
          </section>
          
          <section id="contact">
            <Footer darkMode={darkMode} />
          </section>
        </>
      )}
    </div>
  );
};

export default App;
