import React, { useState, useEffect } from 'react';
import Header from './Header';
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
  const [isLoading, setIsLoading] = useState(true); // Start with loading set to true
  const [projects, setProjects] = useState([]);

  const toggleMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    fetch('./projects.json')
      .then(response => response.json())
      .then(data => {
        setProjects(data);
        setIsLoading(false); // Set loading to false once data is fetched
      })
      .catch(error => {
        console.error('Error loading project data:', error);
        setIsLoading(false); // Set loading to false even if there's an error
      });
  }, []);

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      {isLoading ? (
        <Loader />
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
