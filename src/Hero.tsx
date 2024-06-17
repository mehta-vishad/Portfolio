import React from 'react';
import './Hero.css';
import useTypewriter from './useTypewriter'; 

interface HeroProps {
  darkMode: boolean; 
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const heroClassName = `hero-container ${darkMode ? 'dark' : 'light'}`;
  
  const [typingText, cursorVisible] = useTypewriter({
    texts: ['A Software Engineer.','A Full-Stack Developer.','An AI Researcher.','A Passionate Problem Solver.'], 
    avgTypingDelay: 150,
    avgBackspacingDelay: 75, 
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
          Introducing TalkingCV, a Langchain/RAG based chatbot with the context of my academic and professional life, ready to answer any question you may have about me!
        </p>
        <button className="ama-button" onClick={() => window.location.href = '#AMA'}>
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
