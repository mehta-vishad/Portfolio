import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import timelineData from './timelineData.json';
import './Timeline.css'; // Import your CSS file for styles

interface TimelineProps {
  darkMode: boolean;
}

const Timeline: React.FC<TimelineProps> = ({ darkMode }) => {
  return (
    <div className={darkMode ? 'timeline dark-mode' : 'timeline light-mode'}>
      <h2 className='about-title'>About Me</h2>
      <div className="about-me">
        
        <p>I'm Vishad Mehta, currently pursuing an MS in Software Engineering Systems at Northeastern University with a GPA of 4.0. I hold a B.Tech in Computer Science and Engineering from SRM University, specializing in cloud computing. My experience includes roles such as a Research Intern and a Data Engineer Intern, where I contributed to projects in computer vision and data solutions. I'm skilled in various programming languages and machine learning tools and have shared my research at international conferences. Interact with the chatbot above to know more about me...</p>
        <img src="newme.jpeg" alt="Vishad" />
      </div>
      <h2 className='exp-title'>Experience</h2>
      <VerticalTimeline lineColor={darkMode ? '#333' : '#ccc'}>
        {timelineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            date={item.date}
            iconStyle={{
              background: 'blueviolet',
              color: '#fff',
              border: '2px solid grey'
            }}
            contentStyle={darkMode ? { background: '#333', color: '#fff' } : { background: '#333', color: '#fff' }} // Adjusted for light mode
            contentArrowStyle={{ borderRight: darkMode ? '7px solid #333' : '7px solid #333' }}
            dateClassName="date-class"
          >
            <h3 className="vertical-timeline-element-title">{item.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{item.company}</h4>
            <p>{item.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
