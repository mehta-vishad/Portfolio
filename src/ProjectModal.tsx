import React from 'react';
import './ProjectModal.css';

interface ProjectModalProps {
  project: {
    title: string;
    overview: string;
    image: string;
    link: string;
    techStack: string[];
    technologiesUsed?: {
      frontend?: string;
      backend?: string;
      database?: string;
      apis?: string[];
      hosting?: string[];
    };
    keyFeatures: string[];
    challengesAndSolutions: string[];
    conclusion: string;
  };
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div className="modal-title-container">
          <h2 className="modal-title">{project.title}</h2>
          <div className="tech-stack">
            {project.techStack.map((tech, index) => (
              <img key={index} className="tech-icon" src={tech} alt={`Tech ${index}`} />
            ))}
          </div>
        </div>
        <div className="modal-main">
          <div className="modal-image-container">
            <img className="modal-image" src={project.image} alt={project.title} />
          </div>
          <div className="modal-text">
            <h3>Overview:</h3>
            <p>{project.overview}</p>
            {project.technologiesUsed && (
              <div>
                <h3>Technologies Used:</h3>
                <ul>
                  {Object.entries(project.technologiesUsed).map(([key, value]) => (
                    <li key={key}>
                      <strong>{key}:</strong> {Array.isArray(value) ? value.join(', ') : value}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="key-features">
          <h3>Key Features:</h3>
          <ul>
            {project.keyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="challenges-and-solutions">
          <h3>Challenges and Solutions:</h3>
          <ul>
            {project.challengesAndSolutions.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </div>
        <div className="conclusion">
          <h3>Conclusion:</h3>
          <p>{project.conclusion}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
