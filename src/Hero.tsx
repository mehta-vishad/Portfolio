import React from 'react';
import './Hero.css';
import useTypewriter from './useTypewriter'; // Ensure the path is correct

interface HeroProps {
  darkMode: boolean; // Indicates whether dark mode is enabled
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const heroClassName = `hero-container ${darkMode ? 'dark' : 'light'}`;
  // Correct usage of the useTypewriter hook
  const [typingText, cursorVisible] = useTypewriter({
    texts: ['A Software Engineer.','A Full-Stack Developer.','An AI Researcher.','A Passionate Problem Solver.'], // Use "texts" here
    avgTypingDelay: 150,
    avgBackspacingDelay: 75, // Corrected property name
  });

  return (
    <div className={heroClassName}>
      <div className="hero-text">
        <h1>
          Engineering<br />
          <span className="highlight">Solutions</span><br />
          for Every<br />
          Challenge.
        </h1>
        <p className="introduction">
          Introducing VishadGPT, a fine-tuned GPT model trained on data based on my life and experiences, ready to answer any question you may have about me!
        </p>
        <button className="ama-button" onClick={() => window.location.href = '#ama-section'}>
          Ask Me Anything
        </button>
      </div>
      <div className="hero-subtext">
        <p>
          Hi, I am <span className="name-highlight">Vishad Mehta</span>.
        </p>
        <p className="dynamic-text">
          {typingText}
          <span className={`curse ${cursorVisible ? 'curse-active' : ''}`}>|</span>
        </p>
        <p>
          Dedicated to crafting innovative and efficient solutions to complex problems. With a strong foundation in technology and a creative mindset, I strive to push the boundaries of what's possible, turning ideas into reality.
        </p>
      </div>
    </div>
  );
};

export default Hero;
