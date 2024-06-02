import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import timelineData from './timelineData.json';

interface TimelineProps {
  darkMode: boolean;
}

const Timeline: React.FC<TimelineProps> = ({ darkMode }) => {
  return (
    <div className={darkMode ? 'timeline dark-mode' : 'timeline light-mode'}>
      <h2>About Me</h2>
      <p>One paragraph about yourself.</p>
      <h3>Experience</h3>
      <VerticalTimeline>
        {timelineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            date={item.date}
            iconStyle={{ background: 'blueviolet', color: '#fff' }}
            contentStyle={darkMode ? { background: '#333', color: '#fff' } : { background: '#fff', color: '#000' }}
            contentArrowStyle={darkMode ? { borderRight: '7px solid #333' } : { borderRight: '7px solid #fff' }}
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
