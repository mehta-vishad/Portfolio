import React from 'react';
import './Resume.css';

const Resume: React.FC = () => {
  return (
    <div className="resume-container">
      <h2>Resume</h2>
      <iframe
        src="./Vishad_Mehta - Resume.pdf"
        width="100%"
        height="600px"
        style={{ border: 'none' }}
        title="Resume"
      ></iframe>
    </div>
  );
};

export default Resume;
