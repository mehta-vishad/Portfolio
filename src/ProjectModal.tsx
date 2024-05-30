import React from 'react';
import './ProjectModal.css';

interface ProjectModalProps {
  project: {
    title: string;
    overview: string;
    image: string;
    techStack: string[]; // Paths to images for the tech stack
    technologiesUsed: {
      frontend: string;
      backend: string;
      database: string;
      apis: string[];
      hosting: string[];
    };
    keyFeatures: string[];
    challengesAndSolutions: string[];
    conclusion: string;
  };
  onClose: () => void;
  darkMode: boolean;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, darkMode }) => {
  return (
    <div className="modal-overlay">
      <div className={`modal-content ${darkMode ? 'dark' : ''}`}>
        <button className="close-button" onClick={onClose}>×</button>
        <div className="modal-body">
          <div className="modal-title-container">
            <h1 className="modal-title">{project.title}</h1>
            <div className="tech-stack">
              {project.techStack.map((tech, index) => (
                <img key={index} src={tech} alt={`Tech ${index}`} className="tech-icon" />
              ))}
            </div>
          </div>
          <div className="modal-main">
            <div className="modal-image-container">
              <img src={project.image} alt={project.title} className="modal-image" />
            </div>
            <div className="modal-text">
              <h3>Overview</h3>
              <p>{project.overview}</p>
              <h3>Technologies Used</h3>
              <ul>
                <li>Frontend: {project.technologiesUsed.frontend}</li>
                <li>Backend: {project.technologiesUsed.backend}</li>
                <li>Database: {project.technologiesUsed.database}</li>
                <li>APIs: {project.technologiesUsed.apis.join(', ')}</li>
                <li>Hosting: {project.technologiesUsed.hosting.join(', ')}</li>
              </ul>
            </div>
          </div>
          <div className="key-features">
            <h3>Key Features</h3>
            <ul>
              {project.keyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="challenges-solutions">
            <h3>Challenges and Solutions</h3>
            <ul>
              {project.challengesAndSolutions.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
            <h3>Conclusion</h3>
            <p>{project.conclusion}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
